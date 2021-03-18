import { SoknadStatus } from "../statemanagement/SoknadStatus";

export interface SoknadKortInfo {
  soknadId: string
  status: SoknadStatus
  datoOpprettet: string
  datoOppdatert: string
  formidlerNavn: string
}