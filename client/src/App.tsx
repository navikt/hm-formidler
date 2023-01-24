import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { Loader } from '@navikt/ds-react'
import useSWRImmutable from 'swr/immutable'
import ScrollToTop from './components/ScrollToTop'
import { fetcher, ROLLER_PATH } from './services/rest-service'
export const BASE_PATH = '/hjelpemidler/formidler'
import { ApplicationContext } from './statemanagement/ApplicationContext'
import SessionCheck from './SessionCheck'
import * as Sentry from '@sentry/browser'
import Feilside from './containers/Feilside'
import { Roller } from './interfaces/Roller'

const App: React.FC = () => {
  const { data, error } = useSWRImmutable<Roller>(ROLLER_PATH, fetcher)

  if (error) {
    Sentry.addBreadcrumb({
      message: `Henting av tilgang fra hm-roller feilet: <${error}>`,
    })
    Sentry.captureException(new Error(error))
    return <Feilside />
  }
  if (!data) {
    return (
      <div className="content centeredElement">
        <Loader size="large" />
      </div>
    )
  }

  return (
    <>
      <BrowserRouter>
        <ApplicationContext.Provider value={{ roller: data }}>
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
