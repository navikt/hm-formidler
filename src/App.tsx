import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import NavFrontendSpinner from 'nav-frontend-spinner'
import useSWR from 'swr'
import ScrollToTop from './components/ScrollToTop'
import { SOKNAD_API_PATH, fetcher } from './services/rest-service'
import ManglerTilgang from './containers/ManglerTilgang'
export const BASE_PATH = '/hjelpemidler/formidler'
import '@navikt/ds-css'
import { ApplicationContext } from './statemanagement/ApplicationContext'

const App: React.FC = () => {
  const { data, error } = useSWR(`${SOKNAD_API_PATH}/altinn/rettigheter-til-tjeneste`, fetcher)

  /* TODO: Mekke feilside */
  if (error) return <div>Noe gikk feil: {error}</div>
  if (!data)
    return (
      <div className="content centeredElement">
        <NavFrontendSpinner type="L" />
      </div>
    )

  if (!data.altinnRettighet || !data.allowlistTilgang) {
    return <ManglerTilgang />
  }

  return (
    <>
      <BrowserRouter>
        <ApplicationContext.Provider value={data}>
          <ScrollToTop />
          <Routes />
        </ApplicationContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
