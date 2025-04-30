import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { BehovsmeldingType } from './CommonTypes'
import { Innsenderbehovsmelding } from './Innsenderbehovsmelding'

export interface SoknadInfo {
  søknadId: string
  behovsmeldingType: BehovsmeldingType
  status: SoknadStatus
  datoOpprettet: string
  datoOppdatert: string
  navnBruker?: string
  fnrBruker: string
  valgteÅrsaker?: string[]
  behovsmelding?: Innsenderbehovsmelding
  soknadGjelder?: string
}

export enum ValgtÅrsak {
  ANNET = 'Annet',
  DUPLIKAT = 'Duplikat av en annen bestilling',
}
