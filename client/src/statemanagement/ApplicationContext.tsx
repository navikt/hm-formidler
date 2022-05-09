import { createContext } from 'react'

const ApplicationContext = createContext({
  erPilotkommune: false,
  altinnRettighet: false,
  allowlistTilgang: false,
})

export { ApplicationContext }
