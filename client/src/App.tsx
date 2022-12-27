import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { Loader } from '@navikt/ds-react'
import useSWRImmutable from 'swr/immutable'
import ScrollToTop from './components/ScrollToTop'
import { fetcher, ROLLER_PATH } from './services/rest-service'
import ManglerTilgang from './containers/ManglerTilgang'
export const BASE_PATH = '/hjelpemidler/formidler'
import { ApplicationContext, Roller } from './statemanagement/ApplicationContext'
import SessionCheck from './SessionCheck'
import * as Sentry from '@sentry/browser'
import Feilside from './containers/Feilside'

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

  if (data.formidlerRolle.feil.length > 0) {
    Sentry.addBreadcrumb({
      message: `Feil fra hm-roller: <${data}>`,
    })
    return <Feilside />
  }
  if (!data.formidlerRolle.harFormidlerRolle) {
    Sentry.addBreadcrumb({
      message: `Formidler mangler tilgang. Respons fra hm-roller<${data}>`,
    })
    return <ManglerTilgang />
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
