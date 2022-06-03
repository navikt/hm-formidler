import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { Brukerinfo } from './Brukerinfo'
import { HjelpemiddelItem } from './CommonTypes'
import { Formidlerinfo } from './Formidlerinfo'
import { Leveringsinfo } from './Leveringinfo'
import { Oppfolgingsansvarliginfo } from './Oppfolgingsansvarliginfo'

export interface SoknadInfo {
  søknadId: string
  behovsmeldingType: string
  status: SoknadStatus
  datoOpprettet: string
  datoOppdatert: string
  navnBruker?: string
  fnrBruker: string
  søknadsdata?: Soknadsdata
}

export interface Soknadsdata {
  bruker: Brukerinfo
  formidler: Formidlerinfo
  hjelpemidler: HjelpemiddelItem[]
  hjelpemiddelTotalAntall: number
  oppfolgingsansvarlig: Oppfolgingsansvarliginfo
  levering: Leveringsinfo
}

// TODO Elektrisk rullestolinfo
