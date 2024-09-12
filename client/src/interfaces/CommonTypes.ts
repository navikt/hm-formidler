import { Levering } from './Leveringinfo'

export enum HttpStatus {
  UNAUTHORIZED = 'Unauthorized',
}

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type Bytte = {
  hmsnr: string
  serienr: string | null
  hjmNavn: string
  hjmKategori: string
  årsak: BytteÅrsak | undefined
  erTilsvarende: boolean
}

export enum BytteÅrsak {
  'UTSLITT' = 'UTSLITT',
  'VOKST_FRA' = 'VOKST_FRA',
  'ENDRINGER_I_INNBYGGERS_FUNKSJON' = 'ENDRINGER_I_INNBYGGERS_FUNKSJON',
  'FEIL_STØRRELSE' = 'FEIL_STØRRELSE',
  'VURDERT_SOM_ØDELAGT_AV_LOKAL_TEKNIKER' = 'VURDERT_SOM_ØDELAGT_AV_LOKAL_TEKNIKER',
}

export enum Bruksarena {
  EGET_HJEM = 'EGET_HJEM',
  EGET_HJEM_IKKE_AVLASTNING = 'EGET_HJEM_IKKE_AVLASTNING',
  OMSORGSBOLIG_BOFELLESKAP_SERVICEBOLIG = 'OMSORGSBOLIG_BOFELLESKAP_SERVICEBOLIG',
  BARNEHAGE = 'BARNEHAGE',
  GRUNN_ELLER_VIDEREGÅENDESKOLE = 'GRUNN_ELLER_VIDEREGÅENDESKOLE',
  SKOLEFRITIDSORDNING = 'SKOLEFRITIDSORDNING',
  INSTITUSJON = 'INSTITUSJON',
  INSTITUSJON_BARNEBOLIG = 'INSTITUSJON_BARNEBOLIG',
  INSTITUSJON_BARNEBOLIG_KUN_PERSONLIG_BRUK = 'INSTITUSJON_BARNEBOLIG_KUN_PERSONLIG_BRUK',
}

export type AppLenke = {
  lenketekst: string
  lenkeadresse: string
}

export enum Soknadsside {
  Oppsummering = 'oppsummering',
  Kvittering = 'kvittering',
  Info = 'info',
  Feilside = 'feil',
  Soknadsoversikt = 'soknadsoversikt',
}

export enum BehovsmeldingType {
  SØKNAD = 'SØKNAD',
  BESTILLING = 'BESTILLING',
  BYTTE = 'BYTTE',
}

export interface Personnavn {
  fornavn: string
  etternavn: string
}

export const formaterPersonnavn = (navn: Personnavn): string => {
  return `${navn.fornavn} ${navn.etternavn}`
}

export interface Veiadresse {
  adresse: string
  postnummer: string
  poststed: string
}

export const formaterVeiadresse = (adresse: Veiadresse): string => {
  return `${adresse.adresse}, ${adresse.postnummer} ${adresse.poststed}`
}
