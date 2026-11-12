import { Loader } from '@navikt/ds-react'
import { createContext, type Dispatch, type SetStateAction, useContext, useEffect, useState } from 'react'
import useSWRImmutable from 'swr/immutable'
import Feilside from '../containers/Feilside'
import { BehovsmeldingType } from '../interfaces/CommonTypes'
import type { Roller } from '../interfaces/Roller'
import { fetcher, ROLLER_PATH } from '../services/rest-service'

type ApplicationContextType = {
  roller: Roller | undefined
  setRoller: Dispatch<SetStateAction<Roller | undefined>>
}

export const ApplicationContext = createContext<ApplicationContextType>({
  roller: undefined,
  setRoller: () => {},
})

export const ApplicationProvider = ({ children }: { children: React.ReactNode }) => {
  const [roller, setRoller] = useState<Roller>()

  const { data, error } = useSWRImmutable<Roller>(ROLLER_PATH, fetcher)

  useEffect(() => {
    if (data) {
      setRoller(data)
    }
  }, [data])

  if (error) {
    return <Feilside />
  }
  if (!data) {
    return (
      <div className="content centeredElement">
        <Loader size="large" />
      </div>
    )
  }

  return <ApplicationContext.Provider value={{ roller, setRoller }}>{children}</ApplicationContext.Provider>
}

export const useRoller = () => {
  const { roller } = useContext(ApplicationContext)
  return {
    harGyldigRolle: (roller?.roller.length ?? 0) > 0,
    kanSøke: roller?.tillatelser.behovsmeldingstyper.includes(BehovsmeldingType.SØKNAD) === true,
    kanBrukeDigitalBekreftelse: roller?.tillatelser.digitalBekreftelse === true,
  }
}
