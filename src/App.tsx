import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import useSWR from 'swr'
import ScrollToTop from './components/ScrollToTop'
export const BASE_PATH = '/hjelpemidler/formidler'




const App = () => {
    const { data, error } = useSWR(`${SOKNAD_API_PATH}/altinn/rettighet-til-tjeneste`, fetcher)

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
