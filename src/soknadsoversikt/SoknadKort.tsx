import './../stylesheet/styles.scss'
import { Normaltekst } from 'nav-frontend-typografi'
import { useTranslation } from 'react-i18next'
import 'nav-frontend-tabell-style'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { SoknadInfo } from '../interfaces/SoknadInfo'
import { beregnFrist, formaterDato } from '../Utils'
import Etikett, { EtikettBaseProps } from 'nav-frontend-etiketter'
import { LinkPanel, Panel } from '@navikt/ds-react'
import { BASE_PATH } from '../App'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'

type SoknadProps = {
  soknadInfo: SoknadInfo
}

const SoknadKort: React.FC<SoknadProps> = (props: SoknadProps) => {
  const { t } = useTranslation()

  const soknad = props.soknadInfo
  let soknadKanVises = true
  let etikettType: EtikettBaseProps['type']
  switch (soknad.status) {
    case SoknadStatus.SLETTET:
    case SoknadStatus.UTLØPT:
    case SoknadStatus.VEDTAKSRESULTAT_AVSLÅTT:
      etikettType = 'advarsel'
      soknadKanVises = false
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

  const panelInnhold = (
    <>
      <div style={{ display: 'flex' }} className="soknadKort">
        <div className="soknadKortLabel">
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
          <Etikett type={etikettType}>
            <Normaltekst>{t(soknad.status)}</Normaltekst>
          </Etikett>
        </div>
      </div>
    </>
  )

  if (soknadKanVises) {
    return (
      <div style={{ marginBottom: '0.5rem' }}>
        <LinkPanel
          href={`${BASE_PATH}/soknad/${soknad.søknadId}`}
          onClick={() => {
            logCustomEvent(digihot_customevents.SØKNAD_ÅPNET)
          }}
          border
        >
          {panelInnhold}
        </LinkPanel>
      </div>
    )
  } else {
    return (
      <div style={{ marginBottom: '0.5rem' }}>
        <Panel>{panelInnhold}</Panel>
      </div>
    )
  }
}

export default SoknadKort
