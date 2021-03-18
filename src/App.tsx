import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import ScrollToTop from './components/ScrollToTop'
export const BASE_PATH = '/hjelpemidler/formidler'

const App = () => {
  return (
    <>
      <BrowserRouter>
            <ScrollToTop />
            <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
