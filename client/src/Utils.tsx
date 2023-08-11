import { RefObject } from 'react'
import { ValidationError } from './interfaces/ErrorTypes'
import moment from 'moment'
import 'moment/dist/locale/nb'
import { SoknadStatus } from './statemanagement/SoknadStatus'
import { TagProps } from '@navikt/ds-react'
import { SoknadInfo, ValgtÅrsak } from './interfaces/SoknadInfo'

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
  return opprettetDato.format('D. MMMM YYYY')
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

export const hentTagVariant = (
  status: SoknadStatus | undefined,
  valgteÅrsaker: string[] | undefined
): TagProps['variant'] => {
  let etikettType: TagProps['variant']
  switch (status) {
    case SoknadStatus.SLETTET:
    case SoknadStatus.UTLØPT:
      etikettType = 'error'
      break
    case SoknadStatus.VEDTAKSRESULTAT_AVSLÅTT:
      etikettType = 'error'
      break
    case SoknadStatus.VENTER_GODKJENNING:
    case SoknadStatus.VEDTAKSRESULTAT_DELVIS_INNVILGET:
      etikettType = 'warning'
      break
    case SoknadStatus.VEDTAKSRESULTAT_INNVILGET:
    case SoknadStatus.VEDTAKSRESULTAT_MUNTLIG_INNVILGET:
    case SoknadStatus.BESTILLING_FERDIGSTILT:
    case SoknadStatus.UTSENDING_STARTET:
      etikettType = 'success'
      break
    case SoknadStatus.BESTILLING_AVVIST:
      if (valgteÅrsaker?.includes(ValgtÅrsak.DUPLIKAT)) {
        etikettType = 'info'
      } else {
        etikettType = 'warning'
      }
      break
    case SoknadStatus.GODKJENT:
    case SoknadStatus.GODKJENT_MED_FULLMAKT:
    case SoknadStatus.ENDELIG_JOURNALFØRT:
    case SoknadStatus.VEDTAKSRESULTAT_HENLAGTBORTFALT:
    case SoknadStatus.VEDTAKSRESULTAT_ANNET:
    default:
      etikettType = 'info'
  }

  return etikettType
}
