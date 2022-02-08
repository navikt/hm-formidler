export enum HttpStatus {
  UNAUTHORIZED = 'Unauthorized',
}

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type HjelpemiddelItem = {
  antall: number
  beskrivelse: string
  hjelpemiddelkategori: string
  hmsNr: string
  tilleggsinformasjon: string
  rangering?: string
  utlevertFraHjelpemiddelsentralen: boolean
  utlevertInfo?: UtlevertInfo
  vilkarliste?: HjelpemiddelVilkar[]
  tilbehorListe?: Hjelpemiddeltilbehoer[]
  begrunnelse?: string
  kanIkkeTilsvarande: boolean
  rullestolInfo?: RullestolInfo
  elektriskRullestolInfo?: ElektriskRullestolInfo
  personlofterInfo?: PersonlofterInfo
}

export type Hjelpemiddeltilbehoer = {
  hmsnr: string
  navn: string
  antall: number
}

export type AppLenke = {
  lenketekst: string
  lenkeadresse: string
}

export type HjelpemiddelVilkar = {
  vilkaarTekst: string
  tilleggsinfo?: string
}

export enum Soknadsside {
  Oppsummering = 'oppsummering',
  Kvittering = 'kvittering',
  Info = 'info',
  Feilside = 'feil',
  Soknadsoversikt = 'soknadsoversikt',
}

export type UtlevertInfo = {
  utlevertType?: UtlevertType
  overførtFraBruker?: string
  annenKommentar?: string
}

export enum UtlevertType {
  FremskuttLager = 'FremskuttLager',
  Korttidslån = 'Korttidslån',
  Overført = 'Overført',
  Annet = 'Annet',
}

export type RullestolInfo = {
  skalBrukesIBil?: boolean
  sitteputeValg?: SitteputeValg
}

export enum SitteputeValg {
  TrengerSittepute = 'TrengerSittepute',
  HarFraFor = 'HarFraFor',
  StandardSittepute = 'StandardSittepute',
  LeggesTilSeparat = 'LeggesTilSeparat',
}

export type ElektriskRullestolInfo = {
  godkjenningskurs?: boolean
  kanBetjeneManuellStyring?: boolean
  ferdesSikkertITrafikk?: boolean
  nedsattGangfunksjon?: boolean
  oppbevaringOgLagring?: boolean
  oppbevaringInfo?: string
  kjentMedForsikring?: boolean
  harSpesialsykkel?: boolean
  plasseringAvHendel?: HendelPlassering
}

export enum HendelPlassering {
  VENSTRE = 'Venstre',
  HØYRE = 'Høyre',
}

export type PersonlofterInfo = {
  harBehovForSeilEllerSele?: boolean
}
