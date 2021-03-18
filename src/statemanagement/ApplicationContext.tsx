import React, { useState } from 'react'
import { SoknadInfo } from '../interfaces/Soknadinfo'
import { SoknadStatus } from './SoknadStatus'

export const initialState = {
  id: '',
  status: SoknadStatus.VENTER_GODKJENNING,
}

// initialState in createContext is ONLY used when a component does not have a matching Provider above it in the tree
const ApplicationContext = React.createContext({
  state: initialState,
  setState: (state: SoknadInfo) => {},
})

const ApplicationProvider = (props: any) => {
  const [state, setState] = useState(initialState)

  return (
    <ApplicationContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  )
}

export { ApplicationContext, ApplicationProvider }
