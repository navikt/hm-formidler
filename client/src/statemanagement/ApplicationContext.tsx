import { createContext } from 'react'

const ApplicationContext = createContext({
  erPilotkommune: false,
  altinnRettighet: false,
  allowlistTilgang: false,
  erPilotkommuneForBestillingsordning: false,
})

export { ApplicationContext }
