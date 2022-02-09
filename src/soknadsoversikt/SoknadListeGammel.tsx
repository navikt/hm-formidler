import './../stylesheet/styles.scss'
import { Normaltekst, Undertittel } from 'nav-frontend-typografi'
import 'nav-frontend-tabell-style'
import { SoknadInfo } from '../interfaces/SoknadInfo'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import Etikett, { EtikettBaseProps } from 'nav-frontend-etiketter'
import { beregnFrist, formaterDato } from '../Utils'
import { useTranslation } from 'react-i18next'
import Panel from 'nav-frontend-paneler'

type SoknadListeGammelProps = {
  alleSoknader: SoknadInfo[]
}

const SoknadListeGammel: React.FC<SoknadListeGammelProps> = (props: SoknadListeGammelProps) => {
  const { t } = useTranslation()
  const { alleSoknader } = props

  return (
    <>
      <Panel border className="customPanel liste">
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            width: '100%',
            paddingBottom: '2rem',
          }}
        >
          <div>
            <Undertittel>Utfylte digitale søknader</Undertittel>
          </div>
        </div>
        <table className="tabell">
          <tbody>
            {alleSoknader.map((soknad: SoknadInfo) => {
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
                <tr key={soknad.søknadId}>
                  <td className="fontBold">
                    <Normaltekst>{soknad.navnBruker ? soknad.navnBruker : soknad.fnrBruker}</Normaltekst>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <Normaltekst>
                      {soknad.status === SoknadStatus.VENTER_GODKJENNING
                        ? `Frist:  ${beregnFrist(soknad.datoOpprettet)}`
                        : formaterDato(soknad.datoOppdatert)}
                    </Normaltekst>
                  </td>
                  <td>
                    <Etikett type={etikettType} style={{ float: 'right' }}>
                      <Normaltekst>{t(soknad.status)}</Normaltekst>
                    </Etikett>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Panel>
    </>
  )
}

export default SoknadListeGammel
