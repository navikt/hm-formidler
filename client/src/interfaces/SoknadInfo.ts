import { I18nFormatModule } from 'i18next'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { Brukerinfo } from './Brukerinfo'
import { HjelpemiddelItem } from './CommonTypes'
import { Formidlerinfo } from './Formidlerinfo'
import { Hast } from './Hast'
import { Leveringsinfo } from './Leveringinfo'
import { Oppfolgingsansvarliginfo } from './Oppfolgingsansvarliginfo'

export interface SoknadInfo {
  søknadId: string
  behovsmeldingType: BehovsmeldingType
  status: SoknadStatus
  datoOpprettet: string
  datoOppdatert: string
  navnBruker?: string
  fnrBruker: string
  søknadsdata?: Soknadsdata
  valgteÅrsaker?: string[]
  behovsmeldingV2?: Formidlerbehovsmelding
}

export interface Formidlerbehovsmelding {
  id: string
  type: BehovsmeldingType
  prioritet: Prioritet
  hjmBrukersFnr: string
  innsendersFnr: string
  //innsendingsdato: string
  //bruker: Bruker
  //brukersituasjon: Brukersituasjon
  hjelpemidler?: Hjelpemidler
}

export enum Prioritet {
  NORMAL = 'NORMAL',
  HAST = 'HAST',
}

export interface Hjelpemidler {
  hjelpemidler: HjelpemiddelV2[]
  totaltAntall: number
}

export interface HjelpemiddelV2 {
  antall: number
  //produkt
  //tilbehør
  //bytter
  //bruksarena
  opplysninger: Opplysning[]
}

export interface Opplysning {
  label: I18n
  tekster: Tekst[]
}

export interface I18n {
  nb: string
  nn: string
}

export interface Tekst {
  i18n: I18n | null
  fritekst: string | null
}

export interface Soknadsdata {
  bruker: Brukerinfo
  formidler: Formidlerinfo
  hjelpemidler: HjelpemiddelItem[]
  hjelpemiddelTotalAntall: number
  oppfolgingsansvarlig: Oppfolgingsansvarliginfo
  levering: Leveringsinfo
  hast: Hast | null
}

export enum ValgtÅrsak {
  ANNET = 'Annet',
  DUPLIKAT = 'Duplikat av en annen bestilling',
}

export enum BehovsmeldingType {
  SØKNAD = 'SØKNAD',
  BESTILLING = 'BESTILLING',
  BYTTE = 'BYTTE',
}
