import { SoknadStatus } from '../statemanagement/SoknadStatus'

export interface SoknadInfo {
  soknadId: string
  status: SoknadStatus
  datoOpprettet: string
  datoOppdatert: string
  navnBruker?: string
  fnrBruker: string
}
