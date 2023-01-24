import { createContext, useContext } from 'react'
import { Roller } from '../interfaces/Roller'

type ApplicationContextType = {
  roller: Roller
}

export const ApplicationContext = createContext<ApplicationContextType>({
  roller: {
    bestillerRolle: undefined,
    formidlerRolle: {
      harFormidlerRolle: false,
      erPilotkommune: false,
      feil: []
    }
  }
})

export const useRoller = () => {
  const { roller } = useContext(ApplicationContext)
  return {
    erFormidler: roller.formidlerRolle.harFormidlerRolle === true,
    erBestiller: roller.bestillerRolle?.harBestillerRolle === true,
    harGyldigRolle: roller.formidlerRolle.harFormidlerRolle === true || roller.bestillerRolle?.harBestillerRolle === true,
  }
}
