import type { Innsenderbehovsmelding } from '../interfaces/Innsenderbehovsmelding'

type Nullable<T> = T | null

export interface SøknadForBrukerOrdrelinje {
  [key: string]: unknown
}

export interface Brukerpassbytte {
  [key: string]: unknown
}

export interface SøknadForBruker {
  søknadId: string
  behovsmeldingType: string
  journalpostId: Nullable<string>
  datoOpprettet: string
  datoOppdatert: Nullable<string>
  status: string
  fullmakt: boolean
  fnrBruker: string
  brukerpassbyttedataV2: Nullable<Brukerpassbytte>
  er_digital: boolean
  soknadGjelder: Nullable<string>
  ordrelinjer: SøknadForBrukerOrdrelinje[]
  fagsakId: Nullable<string>
  søknadType: Nullable<string>
  valgteÅrsaker: string[]
  innsenderbehovsmelding: Nullable<Innsenderbehovsmelding>
}
