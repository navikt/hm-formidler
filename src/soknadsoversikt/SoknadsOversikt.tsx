import React from 'react'
import './../stylesheet/styles.scss'
import Banner from '../components/Banner'
import { Normaltekst, Undertittel } from 'nav-frontend-typografi'
import useSWR from 'swr'
import { API_PATH, fetcher } from '../services/rest-service'
import Panel from 'nav-frontend-paneler'
import NavFrontendSpinner from 'nav-frontend-spinner'
import { useTranslation } from 'react-i18next'
import 'nav-frontend-tabell-style'
import { SoknadInfo } from '../interfaces/SoknadInfo'
import IngenSoknader from './IngenSoknader'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { beregnFrist, formaterDato } from '../Utils'
import Etikett, { EtikettBaseProps } from 'nav-frontend-etiketter'
import Veilederpanel from 'nav-frontend-veilederpanel'
import { ReactComponent as SpotIllustration } from '../assets/svg/illu_veileder_HMS.svg'
import { BASE_PATH } from '../App'
import { useHistory } from 'react-router-dom'

const SoknadsOversikt = () => {
  const { t } = useTranslation()
  const { data, error } = useSWR(`${API_PATH}/soknad/formidler`, fetcher)
  const history = useHistory()

  if (error) {
    history.push({ pathname: `${BASE_PATH}/feilside` })
  }
  if (!data)
    return (
      <div className="content centeredElement">
        <NavFrontendSpinner type="L" />
      </div>
    )

  const venterGodkjenning = data
    .filter((soknad: SoknadInfo) => {
      return soknad.status === SoknadStatus.VENTER_GODKJENNING
    })
    .sort(function (a: SoknadInfo, b: SoknadInfo) {
      return new Date(b.datoOpprettet).getTime() - new Date(a.datoOpprettet).getTime()
    })

  const ikkeVenterGodkjenning = data
    .filter((soknad: SoknadInfo) => {
      return soknad.status !== SoknadStatus.VENTER_GODKJENNING
    })
    .sort(function (a: SoknadInfo, b: SoknadInfo) {
      return new Date(b.datoOppdatert).getTime() - new Date(a.datoOppdatert).getTime()
    })

  const alleSoknader = venterGodkjenning.concat(ikkeVenterGodkjenning)

  return (
    <>
      <header>
        <Banner />
      </header>

      <main style={{ paddingTop: '2rem' }}>
        <div className="veilederWrapperPanel">
          <Veilederpanel fargetema="info" type="plakat" svg={<SpotIllustration />}>
            <Normaltekst>
              {t('hoved.veilederpanel')}
            </Normaltekst>
          </Veilederpanel>
        </div>
        {alleSoknader.length === 0 ? (
          <IngenSoknader />
        ) : (
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
                    <tr>
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
        )}
      </main>
    </>
  )
}

export default SoknadsOversikt
