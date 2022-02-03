import './../stylesheet/styles.scss'
import { Normaltekst } from 'nav-frontend-typografi'
import { useTranslation } from 'react-i18next'
import 'nav-frontend-tabell-style'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { SoknadInfo } from '../interfaces/SoknadInfo'
import { beregnFrist, formaterDato } from '../Utils'
import Etikett, { EtikettBaseProps } from 'nav-frontend-etiketter'
import { LinkPanel } from '@navikt/ds-react'
import { BASE_PATH } from '../App'
import { useHistory } from 'react-router-dom'

type SoknadProps = {
  soknadInfo: SoknadInfo
}

const SoknadKort: React.FC<SoknadProps> = (props: SoknadProps) => {
  const { t } = useTranslation()
  const history = useHistory()

  const soknad = props.soknadInfo
  let etikettType: EtikettBaseProps['type']
  switch (soknad.status) {
    case SoknadStatus.SLETTET:
    case SoknadStatus.UTLØPT:
    case SoknadStatus.VEDTAKSRESULTAT_AVSLÅTT:
      etikettType = 'advarsel'
      break
    case SoknadStatus.VENTER_GODKJENNING:
    case SoknadStatus.VEDTAKSRESULTAT_DELVIS_INNVILGET:
      etikettType = 'fokus'
      break
    case SoknadStatus.VEDTAKSRESULTAT_INNVILGET:
    case SoknadStatus.VEDTAKSRESULTAT_MUNTLIG_INNVILGET:
      etikettType = 'suksess'
      break
    case SoknadStatus.GODKJENT:
    case SoknadStatus.GODKJENT_MED_FULLMAKT:
    case SoknadStatus.ENDELIG_JOURNALFØRT:
    case SoknadStatus.VEDTAKSRESULTAT_ANNET:
    case SoknadStatus.UTSENDING_STARTET:
    default:
      etikettType = 'info'
  }

  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <LinkPanel
        onClick={() => {
          history.push({
            pathname: `${BASE_PATH}/soknad/${soknad.søknadId}`,
          })
        }}
        border
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div className="fontBold">
              <Normaltekst>{soknad.navnBruker ? soknad.navnBruker : soknad.fnrBruker}</Normaltekst>
            </div>
            <Normaltekst>
              {soknad.status === SoknadStatus.VENTER_GODKJENNING
                ? `Frist:  ${beregnFrist(soknad.datoOpprettet)}`
                : formaterDato(soknad.datoOppdatert)}
            </Normaltekst>
          </div>
          <div>
            <Etikett type={etikettType} style={{ float: 'right' }}>
              <Normaltekst>{t(soknad.status)}</Normaltekst>
            </Etikett>
          </div>
        </div>
      </LinkPanel>
    </div>
  )
}

export default SoknadKort
