import './../stylesheet/styles.scss'
import Banner from '../components/Banner'
import { Normaltekst, Systemtittel, Undertittel } from 'nav-frontend-typografi'
import useSWR from 'swr'
import { API_PATH, fetcher } from '../services/rest-service'
import NavFrontendSpinner from 'nav-frontend-spinner'
import { useTranslation } from 'react-i18next'
import 'nav-frontend-tabell-style'
import { SoknadInfo } from '../interfaces/SoknadInfo'
import IngenSoknader from './IngenSoknader'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import Veilederpanel from 'nav-frontend-veilederpanel'
import { ReactComponent as SpotIllustration } from '../assets/svg/illu_veileder_HMS.svg'
import { BASE_PATH } from '../App'
import { useHistory } from 'react-router-dom'
import Lesmerpanel from 'nav-frontend-lesmerpanel'
import StatusBeskrivelse from '../components/StatusBeskrivelse'
import SoknadKort from './SoknadKort'

const SoknadsOversikt: React.FC = () => {
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
            <Normaltekst>{t('hoved.veilederpanel.p0')}</Normaltekst>
            <Normaltekst style={{ marginTop: '0.5rem' }}>{t('hoved.veilederpanel.p1')}</Normaltekst>
            <Normaltekst style={{ marginTop: '0.5rem' }}>{t('hoved.veilederpanel.p2')}</Normaltekst>

            <Lesmerpanel
              apneTekst={t('hoved.veilederpanel.statuser.apne')}
              lukkTekst={t('hoved.veilederpanel.statuser.lukk')}
            >
              <Systemtittel style={{ marginTop: '1.5rem' }}>Beskrivelse av statuser</Systemtittel>

              <ul style={{ listStyleType: 'none', padding: '0' }}>
                <li>
                  <StatusBeskrivelse
                    tittel={t('statuser.venter.tittel')}
                    beskrivelse={t('statuser.venter.beskrivelse')}
                  />
                </li>
                <li>
                  <StatusBeskrivelse
                    tittel={t('statuser.innsendtAvBruker.tittel')}
                    beskrivelse={t('statuser.innsendtAvBruker.beskrivelse')}
                  />
                </li>
                <li>
                  <StatusBeskrivelse
                    tittel={t('statuser.innsendtAvDeg.tittel')}
                    beskrivelse={t('statuser.innsendtAvDeg.beskrivelse')}
                  />
                </li>
                <li>
                  <StatusBeskrivelse
                    tittel={t('statuser.underBehandling.tittel')}
                    beskrivelse={t('statuser.underBehandling.beskrivelse')}
                  />
                </li>
                <li>
                  <StatusBeskrivelse
                    tittel={t('statuser.innvilget.tittel')}
                    beskrivelse={t('statuser.innvilget.beskrivelse')}
                  />
                </li>
                <li>
                  <StatusBeskrivelse
                    tittel={t('statuser.slettet.tittel')}
                    beskrivelse={t('statuser.slettet.beskrivelse')}
                  />
                </li>
                <li>
                  <StatusBeskrivelse
                    tittel={t('statuser.slettetFrist.tittel')}
                    beskrivelse={t('statuser.slettetFrist.beskrivelse')}
                  />
                </li>
                <li>
                  <StatusBeskrivelse
                    tittel={t('statuser.avslatt.tittel')}
                    beskrivelse={t('statuser.avslatt.beskrivelse')}
                  />
                </li>
                <li>
                  <StatusBeskrivelse
                    tittel={t('statuser.lukket.tittel')}
                    beskrivelse={t('statuser.lukket.beskrivelse')}
                  />
                </li>
                <li>
                  <StatusBeskrivelse
                    tittel={t('statuser.ferdig.tittel')}
                    beskrivelse={t('statuser.ferdig.beskrivelse')}
                  />
                </li>
              </ul>
            </Lesmerpanel>
          </Veilederpanel>
        </div>
        {alleSoknader.length === 0 ? (
          <IngenSoknader />
        ) : (
          <div className="customPanel">
            <div style={{ marginBottom: '1rem' }}>
              <Undertittel>Utfylte digitale søknader</Undertittel>
            </div>
            {alleSoknader.map((soknad: SoknadInfo) => {
              return (
                <div key={soknad.søknadId}>
                  <SoknadKort soknadInfo={soknad} />
                </div>
              )
            })}
          </div>
        )}
      </main>
    </>
  )
}

export default SoknadsOversikt
