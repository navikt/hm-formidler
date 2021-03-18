import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import ScrollToTop from './components/ScrollToTop'
import { ApplicationProvider } from './statemanagement/ApplicationContext'
export const BASE_PATH = '/hjelpemidler/formidler'

const App = () => {
  return (
    <>
    <ApplicationProvider>
      <BrowserRouter>
            <ScrollToTop />
            <Routes />
      </BrowserRouter>
      </ApplicationProvider>
    </>
  )
}

export default App
