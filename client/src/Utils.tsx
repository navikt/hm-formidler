import { RefObject } from 'react'
import { ValidationError } from './interfaces/ErrorTypes'
import moment from 'moment'
import 'moment/locale/nb'
moment.locale('nb')

export const sumNumbersInArray = (array: number[]): number => {
  const add = (accumulator: number, a: number) => {
    return accumulator + a
  }

  return array.map((el) => el).reduce(add, 0)
}

export const beregnFrist = (opprettetDato: string): string => {
  return formaterMomentDato(moment(opprettetDato).add(14, 'days'))
}

export const formaterDato = (opprettetDato: string): string => {
  return formaterMomentDato(moment(opprettetDato))
}

export const formaterMomentDato = (opprettetDato: moment.Moment): string => {
  return opprettetDato.format('DD. MMMM YYYY')
}

export const checkForErrors = (potentialErrorMessages: ValidationError): boolean => {
  return Object.keys(potentialErrorMessages).find((key) => potentialErrorMessages[key]) !== undefined
}

export const capitalize = (tekstStreng: string, separator: string): string => {
  return tekstStreng
    .toLowerCase()
    .split(separator)
    .map((ord) => {
      return ord === 'og' ? ord : ord[0].toUpperCase() + ord.substring(1)
    })
    .join(separator)
}

export const capitalizeKommunenavn = (navn: string): string => {
  const separator = navn.includes('-') ? '-' : ' '
  return capitalize(navn, separator)
}

export const errorsAfterAttemptedSubmit = (
  submitAttempt: boolean,
  potentialErrorMessages: ValidationError
): boolean => {
  return submitAttempt && checkForErrors(potentialErrorMessages)
}

type FeilType = {
  skjemaelementId: string
  feilmelding: string
}

export const createFeilOppsummering = (errors: ValidationError): FeilType[] => {
  return Object.keys(errors)
    .filter((key) => errors[key] !== undefined)
    .map((key) => ({
      skjemaelementId: key,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      feilmelding: errors[key]!, // Filter makes sure it is not undefined
    }))
}

export const fokusOgScrollTilFeiloppsummering = (feiloppsummeringRef: RefObject<HTMLDivElement>): void => {
  if (feiloppsummeringRef.current) {
    feiloppsummeringRef.current.focus()
    feiloppsummeringRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
