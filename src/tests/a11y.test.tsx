import { render } from '@testing-library/react'
import Infoside from '../infoside/Infoside'
import { axe, toHaveNoViolations } from 'jest-axe'
import Bruker from '../bruker/Bruker'
import Brukersituasjon from '../containers/Brukersituasjon'
import Hjelpemidler from '../containers/Hjelpemidler'
import Levering from '../containers/Levering'
import Oppsummering from '../oppsummering/Oppsummering'
import Kvittering from '../containers/Kvittering'
import Feilside from '../containers/Feilside'
import React from 'react'
import App from '../App'

// To fix "Error: Not implemented: window.scrollTo"
it('renders without crashing', () => {
  window.scrollTo = jest.fn()
})

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(''),
  })
})
afterEach(() => {
  jest.restoreAllMocks()
})
expect.extend(toHaveNoViolations)

/*test('should have no a11y violations', async () => {
  render(<App />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})

test('Infoside should have no a11y violations', async () => {
  render(<Infoside />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})

test('Bruker should have no a11y violations', async () => {
  render(<Bruker />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})

test('Brukersituasjon should have no a11y violations', async () => {
  render(<Brukersituasjon />, document.body)
  const results = await axe(document.body, {
    rules: {
      'aria-valid-attr-value': { enabled: false }, //TODO: Undersøk feilmelding ,
    },
  })
  expect(results).toHaveNoViolations()
})

test('Hjelpemidler should have no a11y violations', async () => {
  render(<Hjelpemidler />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})

test('Levering should have no a11y violations', async () => {
  render(<Levering />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})

test('Oppsummering should have no a11y violations', async () => {
  render(<Oppsummering />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})

test('Kvittering should have no a11y violations', async () => {
  render(<Kvittering />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})

test('Feilside should have no a11y violations', async () => {
  render(<Feilside />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})*/
