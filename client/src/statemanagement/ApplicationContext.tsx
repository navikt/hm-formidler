import { Loader } from '@navikt/ds-react'
import * as Sentry from '@sentry/browser'
import { useEffect } from 'react'
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import useSWRImmutable from 'swr/immutable'
import Feilside from '../containers/Feilside'
import { Roller } from '../interfaces/Roller'
import { fetcher, ROLLER_PATH } from '../services/rest-service'

type ApplicationContextType = {
  roller: Roller | undefined
  setRoller: Dispatch<SetStateAction<Roller | undefined>>
}

export const ApplicationContext = createContext<ApplicationContextType>({
  roller: undefined,
  setRoller: () => { }
})

export const ApplicationProvider = ({ children }: { children: React.ReactNode }) => {
  const [roller, setRoller] = useState<Roller>()

  const { data, error } = useSWRImmutable<Roller>(ROLLER_PATH, fetcher)

  useEffect(()=>{
    if (data) {
      setRoller(data)
    }
  }, [data])

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
    <ApplicationContext.Provider
      value={{ roller, setRoller }}>
      {children}
    </ApplicationContext.Provider>
  )
}

export const useRoller = () => {
  const { roller } = useContext(ApplicationContext)
  return {
    erFormidler: roller?.formidlerRolle.harFormidlerRolle === true,
    erBestiller: roller?.bestillerRolle?.harBestillerRolle === true,
    harGyldigRolle: roller?.formidlerRolle.harFormidlerRolle === true || roller?.bestillerRolle?.harBestillerRolle === true,
    erFormidlerPilotkommune: roller?.formidlerRolle.harFormidlerRolle === true && roller.formidlerRolle.erPilotkommune === true,
  }
}
