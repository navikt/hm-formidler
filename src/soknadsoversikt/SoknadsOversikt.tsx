import './../stylesheet/styles.scss'
import Banner from '../components/Banner'
import useSWR from 'swr'
import { API_PATH, fetcher } from '../services/rest-service'
import NavFrontendSpinner from 'nav-frontend-spinner'
import 'nav-frontend-tabell-style'
import { SoknadInfo } from '../interfaces/SoknadInfo'
import IngenSoknader from './IngenSoknader'
import { ApplicationContext } from '../statemanagement/ApplicationContext'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { BASE_PATH } from '../App'
import { useHistory } from 'react-router-dom'
import SoknadsOversiktVeileder from './SoknadsOversiktVeileder'
import { useContext } from 'react'
import SoknadListeGammel from './SoknadListeGammel'
import SoknadListe from './SoknadListe'

const SoknadsOversikt: React.FC = () => {
  const { erPilotkommune } = useContext(ApplicationContext)
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
        <SoknadsOversiktVeileder />
        {alleSoknader.length === 0 ? (
          <IngenSoknader />
        ) : (
          <>
            {erPilotkommune && <SoknadListe alleSoknader={alleSoknader} />}
            {!erPilotkommune && <SoknadListeGammel alleSoknader={alleSoknader} />}
          </>
        )}
      </main>
    </>
  )
}

export default SoknadsOversikt
