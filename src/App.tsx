import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { Loader } from '@navikt/ds-react'
import useSWRImmutable from 'swr/immutable'
import ScrollToTop from './components/ScrollToTop'
import { SOKNAD_API_PATH, fetcher } from './services/rest-service'
import ManglerTilgang from './containers/ManglerTilgang'
export const BASE_PATH = '/hjelpemidler/formidler'
import { ApplicationContext } from './statemanagement/ApplicationContext'
import SessionCheck from './SessionCheck'
import * as Sentry from '@sentry/browser'

const App: React.FC = () => {
  const { data, error } = useSWRImmutable(`${SOKNAD_API_PATH}/altinn/rettigheter-til-tjeneste`, fetcher)

  /* TODO: Mekke feilside */
  if (error) {
    Sentry.captureException(new Error(error))
    return <div>Noe gikk feil: {error}</div>
  }
  if (!data)
    return (
      <div className="content centeredElement">
        <Loader size="large" />
      </div>
    )

  if (!data.altinnRettighet || !data.allowlistTilgang) {
    Sentry.addBreadcrumb({
      message: `Formidler mangler tilgang. altinnRettighet=<${data.altinnRettighet}>, allowlistTilgang=<${data.allowlistTilgang}>`,
    })
    return <ManglerTilgang />
  }

  return (
    <>
      <BrowserRouter>
        <ApplicationContext.Provider value={data}>
          <ScrollToTop />
          <SessionCheck>
            <Routes />
          </SessionCheck>
        </ApplicationContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
