import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Routes from './Routes'
import SessionCheck from './SessionCheck'
import { ApplicationProvider } from './statemanagement/ApplicationContext'

export const BASE_PATH = '/hjelpemidler/formidler'

const App: React.FC = () => {

  return (
    <>
      <BrowserRouter>
        <ApplicationProvider>
          <ScrollToTop />
          <SessionCheck>
            <Routes />
          </SessionCheck>
        </ApplicationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
