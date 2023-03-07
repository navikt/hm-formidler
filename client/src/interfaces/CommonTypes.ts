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
  arsakForAntall?: AntallArsak
  arsakForAntallBegrunnelse?: string
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
  appInfo?: AppInfo
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
  kanBetjeneMotorisertStyring?: boolean
  ferdesSikkertITrafikk?: boolean
  nedsattGangfunksjon?: boolean
  oppbevaringOgLagring?: boolean
  oppbevaringInfo?: string
  kjentMedForsikring?: boolean
  harSpesialsykkel?: boolean
  plasseringAvHendel?: HendelPlassering
  kabin?: {
    brukerOppfyllerKrav?: boolean
    kanIkkeAvhjelpesMedEnklereArsak?: KanIkkeAvhjelpesMedEnklereArsak
    kanIkkeAvhjelpesMedEnklereBegrunnelse?: string
    arsakForBehovBegrunnelse?: string
  }
}

export enum KanIkkeAvhjelpesMedEnklereArsak {
  HAR_LUFTVEISPROBLEMER = 'HAR_LUFTVEISPROBLEMER',
  BEGRENSNING_VED_FUNKSJONSNEDSETTELSE = 'BEGRENSNING_VED_FUNKSJONSNEDSETTELSE',
  ANNET = 'ANNET',
}

export enum HendelPlassering {
  VENSTRE = 'Venstre',
  HØYRE = 'Høyre',
}

export type PersonlofterInfo = {
  harBehovForSeilEllerSele?: boolean
}

export enum AntallArsak {
  BEHOV_I_FLERE_ETASJER = 'BEHOV_I_FLERE_ETASJER',
  BEHOV_I_FLERE_ROM = 'BEHOV_I_FLERE_ROM',
  BEHOV_INNENDØRS_OG_UTENDØRS = 'BEHOV_INNENDØRS_OG_UTENDØRS',
  BEHOV_FOR_FLERE_PUTER_FOR_RULLESTOL = 'BEHOV_FOR_FLERE_PUTER_FOR_RULLESTOL',
  BEHOV_FOR_JEVNLIG_VASK_ELLER_VEDLIKEHOLD = 'BEHOV_FOR_JEVNLIG_VASK_ELLER_VEDLIKEHOLD',
  BRUKER_HAR_TO_HJEM = 'BRUKER_HAR_TO_HJEM',
  ANNET_BEHOV = 'ANNET_BEHOV',
}

export type AppInfo = {
  brukerHarProvdProvelisens: boolean
  stottepersonSkalAdministrere: boolean
  stottepersonHarProvdProvelisens?: boolean
}
