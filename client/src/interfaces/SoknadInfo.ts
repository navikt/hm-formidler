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
