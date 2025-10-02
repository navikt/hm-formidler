import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Routes from './Routes'
import { ApplicationProvider } from './statemanagement/ApplicationContext'
import { Theme } from '@navikt/ds-react'

export const BASE_PATH = '/hjelpemidler/formidler'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter basename={BASE_PATH}>
        <ApplicationProvider>
          <ScrollToTop />
          <Theme theme="light">
            <Routes />
          </Theme>
        </ApplicationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
