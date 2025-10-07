import React, { useContext, useState } from 'react'
import { CheckboxGroup, Checkbox, Heading, Button } from '@navikt/ds-react'
import styled from 'styled-components'
import { ApplicationContext, useRoller } from '../statemanagement/ApplicationContext'

const Wrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 999999;
  padding: 20px;
  background: #ececec;
  border: 2px dashed black;
  min-width: 220px;
`

const Rolle = styled.div<{ success: boolean; children?: React.ReactNode | undefined }>`
  vertical-align: middle;
  gap: 5px;
  padding: 5px;
  margin: 8px 0;
  background: #d1d1d1;
  background: ${(p) => (p.success ? '#06893A' : '#BA3A26')};
  color: #fff;
`

const ROLLESWITCHER_SKJUL_LOCALSTORAGE_KEY = 'hm-soknad-rolleswitcher-skjul'

const RolleSwitcher = () => {
  const { setRoller, roller } = useContext(ApplicationContext)
  const { erFormidler, erBestiller } = useRoller()
  const [erSkjult, setErSkjult] = useState(window.localStorage.getItem(ROLLESWITCHER_SKJUL_LOCALSTORAGE_KEY) === 'true')

  const handleChange = (values: string[]) => {
    const harFormidlerRolle = values.includes('harFormidlerRolle')
    const harBestillerRolle = values.includes('harBestillerRolle')
    const erPilotkommune = values.includes('erPilotkommune')

    setRoller((prev) => {
      if (!prev) return undefined
      return {
        formidlerRolle: {
          ...prev.formidlerRolle,
          harFormidlerRolle,
          erPilotkommune,
          feil: [],
        },
        bestillerRolle: {
          ...prev.bestillerRolle,
          harBestillerRolle,
          erPilotkommune,
          feil: [],
        },
      }
    })
  }

  const handleSkjul = (skjult: boolean) => {
    setErSkjult(skjult)
    window.localStorage.setItem(ROLLESWITCHER_SKJUL_LOCALSTORAGE_KEY, skjult.toString())
  }

  if (erSkjult) {
    return (
      <Wrapper>
        <Button
          size="small"
          variant="secondary"
          onClick={() => {
            handleSkjul(false)
          }}
          tabIndex={-1}
        >
          Vis Rolleswitcher
        </Button>
      </Wrapper>
    )
  }

  const checkedValues = Object.entries({ ...roller?.formidlerRolle, ...roller?.bestillerRolle }).map(([key, value]) => {
    if (!!value) return key
  })

  return (
    <Wrapper>
      <Button
        style={{ position: 'absolute', top: '7px', right: '7px' }}
        size="small"
        variant="secondary"
        onClick={() => {
          handleSkjul(true)
        }}
        tabIndex={-1}
      >
        -
      </Button>
      <Heading size="xsmall">[DEBUG]</Heading>
      <Rolle success={erFormidler || erBestiller}>
        Aktiv rolle: {erFormidler ? 'Formidler' : erBestiller ? 'Bestiller' : 'Ingen rolle'}
      </Rolle>
      <CheckboxGroup size="small" legend="Tilganger" hideLegend value={checkedValues} onChange={handleChange}>
        <Checkbox value="harFormidlerRolle" tabIndex={-1}>
          Er formidler
        </Checkbox>
        <Checkbox value="harBestillerRolle" tabIndex={-1}>
          Er bestiller
        </Checkbox>
        <Checkbox value="erPilotkommune" tabIndex={-1}>
          Er pilotkommune
        </Checkbox>
      </CheckboxGroup>
    </Wrapper>
  )
}

export default RolleSwitcher
