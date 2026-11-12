import { useContext, useState } from 'react'
import { CheckboxGroup, Checkbox, Heading, Button, Detail, Link } from '@navikt/ds-react'
import styled from 'styled-components'
import { BehovsmeldingType } from '../interfaces/CommonTypes'
import type { Rolletype } from '../interfaces/Roller'
import { ApplicationContext } from '../statemanagement/ApplicationContext'

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

const ROLLESWITCHER_SKJUL_LOCALSTORAGE_KEY = 'hm-soknad-rolleswitcher-skjul'

const ROLLETYPER: { rolle: Rolletype; label: string }[] = [
  { rolle: 'KOMMUNAL_FORMIDLER', label: 'Er kommunal formidler' },
  { rolle: 'IKKE_KOMMUNAL_FORMIDLER', label: 'Er ikke-kommunal formidler' },
  { rolle: 'BESTILLER', label: 'Er bestiller' },
]

const RolleSwitcher = () => {
  const { setRoller, roller } = useContext(ApplicationContext)
  const [erSkjult, setErSkjult] = useState(window.localStorage.getItem(ROLLESWITCHER_SKJUL_LOCALSTORAGE_KEY) === 'true')

  const handleChange = (values: Rolletype[]) => {
    setRoller((prev) => {
      if (!prev) return undefined
      return {
        ...prev,
        roller: values.map((rolle) => ({ rolle })),
        // Speiler hm-roller: formidlerroller kan sende alle typer, kun kommunal formidler kan bruke digital bekreftelse.
        tillatelser: {
          behovsmeldingstyper: values.some((rolle) => rolle !== 'BESTILLER')
            ? [BehovsmeldingType.SØKNAD, BehovsmeldingType.BESTILLING, BehovsmeldingType.BYTTE]
            : values.includes('BESTILLER')
              ? [BehovsmeldingType.BESTILLING]
              : [],
          digitalBekreftelse: values.includes('KOMMUNAL_FORMIDLER'),
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

  const checkedValues = roller?.roller.map(({ rolle }) => rolle) ?? []

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
      <CheckboxGroup size="small" legend="Tilganger" hideLegend value={checkedValues} onChange={handleChange}>
        {ROLLETYPER.map(({ rolle, label }) => (
          <Checkbox key={rolle} value={rolle} tabIndex={-1}>
            {label}
          </Checkbox>
        ))}
      </CheckboxGroup>

      {!!window.appSettings.GIT_COMMIT && (
        <Detail>
          Git-commit:{' '}
          <Link
            href={`https://github.com/navikt/hm-formidler/commit/${window.appSettings.GIT_COMMIT}`}
            target="_blank"
            rel="noreferrer"
          >
            {window.appSettings.GIT_COMMIT}
          </Link>
        </Detail>
      )}
    </Wrapper>
  )
}

export default RolleSwitcher
