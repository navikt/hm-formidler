import type { TagProps } from '@navikt/ds-react'
import { addDays, format, parseISO } from 'date-fns'
import { nb } from 'date-fns/locale'
import type { RefObject } from 'react'
import type { ValidationError } from './interfaces/ErrorTypes'
import { ValgtÅrsak } from './interfaces/SoknadInfo'
import { SoknadStatus } from './statemanagement/SoknadStatus'

export const sumNumbersInArray = (array: number[]): number => {
  const add = (accumulator: number, a: number) => {
    return accumulator + a
  }

  return array.map((el) => el).reduce(add, 0)
}

export const beregnFrist = (opprettetDato: string): string => {
  const parsedDate = parseISO(opprettetDato)
  return formaterDatoObjekt(addDays(parsedDate, 14))
}

export const formaterDato = (opprettetDato: string): string => {
  const parsedDate = parseISO(opprettetDato)
  return formaterDatoObjekt(parsedDate)
}

export const formaterDatoObjekt = (dato: Date): string => {
  return format(dato, 'd. MMMM yyyy', { locale: nb })
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
    case SoknadStatus.INNSENDT_FULLMAKT_IKKE_PÅKREVD:
    case SoknadStatus.ENDELIG_JOURNALFØRT:
    case SoknadStatus.VEDTAKSRESULTAT_HENLAGTBORTFALT:
    case SoknadStatus.VEDTAKSRESULTAT_ANNET:
    default:
      etikettType = 'info'
  }

  return etikettType
}

// Formateringsregler for tall, tid og dato: https://sprakradet.no/godt-og-korrekt-sprak/rettskriving-og-grammatikk/tall-tid-dato/
export const formaterFnr = (fnr: string): string => {
  return `${fnr.slice(0, 6)} ${fnr.slice(6)}`
}
export const formaterTlf = (tlf: string): string => {
  if (tlf.length !== 8) {
    return tlf
  }
  if (tlf.startsWith('8')) {
    const match = tlf.match(/^(\d{3})(\d{2})(\d{3})$/)
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]}`
    }
  } else {
    const match = tlf.match(/^(\d{2})(\d{2})(\d{2})(\d{2})$/)
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`
    }
  }
  return tlf
}
