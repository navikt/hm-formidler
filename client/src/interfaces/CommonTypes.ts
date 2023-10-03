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
  varmehjelpemiddelInfo?: VarmehjelpemiddelInfo
  sengeInfo?: SengeInfo
  elektriskVendesystemInfo?: ElektriskVendesystemInfo
  posisjoneringssystemInfo?: PosisjoneringssystemInfo
  posisjoneringsputeForBarnInfo?: PosisjoneringsputeForBarnInfo
  oppreisningsStolInfo?: OppreisningsStolValgInfo
  diverseInfo?: { [key: string]: string }
}

export type PosisjoneringsputeForBarnInfo = {
  bruksområde?: PosisjoneringsputeForBarnBruk
  brukerErOver26År?: boolean
  detErLagetEnMålrettetPlan?: boolean
  planenOppbevaresIKommunen?: boolean
}

export enum PosisjoneringsputeForBarnBruk {
  TILRETTELEGGE_UTGANGSSTILLING = 'TILRETTELEGGE_UTGANGSSTILLING',
  TRENING_AKTIVITET_STIMULERING = 'TRENING_AKTIVITET_STIMULERING',
}

export type PosisjoneringssystemInfo = {
  skalIkkeBrukesSomBehandlingshjelpemiddel?: boolean
  skalIkkeBrukesTilRenSmertelindring?: boolean
  behov?: PosisjoneringsputeBehov
  oppgaverIDagliglivet?: PosisjoneringsputeOppgaverIDagligliv[]
  oppgaverIDagliglivetAnnet?: string
}

export enum PosisjoneringsputeBehov {
  STORE_LAMMELSER = 'STORE_LAMMELSER',
  DIREKTE_AVHJELPE_I_DAGLIGLIVET = 'DIREKTE_AVHJELPE_I_DAGLIGLIVET',
}

export enum PosisjoneringsputeOppgaverIDagligliv {
  SPISE_DRIKKE_OL = 'SPISE_DRIKKE_OL',
  BRUKE_DATAUTSTYR = 'BRUKE_DATAUTSTYR',
  FØLGE_OPP_BARN = 'FØLGE_OPP_BARN',
  HOBBY_FRITID_U26 = 'HOBBY_FRITID_U26',
  ANNET = 'ANNET',
}

export type ElektriskVendesystemInfo = {
  sengForMontering?: SengForVendesystemMontering
  standardLakenByttesTilRiktigStørrelseAvNav?: boolean
}

export type SengForVendesystemMontering = {
  hmsnr?: string
  navn?: string
  madrassbredde?: number
}

export type SengeInfo = {
  påkrevdBehov?: BehovForSeng
  brukerOppfyllerPåkrevdBehov?: boolean
  behovForSeng?: BehovForSeng
  behovForSengBegrunnelse?: string
  madrassValg?: MadrassValg
  høyGrindValg?: HøyGrindValg
}

export interface HøyGrindValg {
  erKjentMedTvangsAspekt: boolean
  harForsøktOpptrening: boolean
  harIkkeForsøktOpptreningBegrunnelse?: string
  erLagetPlanForOppfølging: boolean
}

export enum BehovForSeng {
  DYSFUNKSJONELT_SØVNMØNSTER = 'DYSFUNKSJONELT_SØVNMØNSTER',
  RISIKO_FOR_FALL_UT_AV_SENG = 'RISIKO_FOR_FALL_UT_AV_SENG',
  STERKE_UFRIVILLIGE_BEVEGELSER = 'STERKE_UFRIVILLIGE_BEVEGELSER',
  ANNET_BEHOV = 'ANNET_BEHOV',
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

export enum MadrassValg {
  TrengerMadrass = 'TrengerMadrass',
  HarFraFor = 'HarFraFør',
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

export type VarmehjelpemiddelInfo = {
  harHelseopplysningerFraFør?: boolean
  legeBekrefterDiagnose?: boolean
  opplysningerFraLegeOppbevaresIKommune?: boolean
}

export type OppreisningsStolValgInfo = {
  kanBrukerReiseSegSelvFraVanligStol?: boolean
  behov?: OppreisningsStolBehov[]
  behovForStolBegrunnelse?: string
  bruksområde?: Bruksområde
  sideBetjeningsPanel?: OppreisningsStolSideBetjeningspanelvalg
  annetTrekkKanBenyttes: boolean
  løftType: OppreisningsStolLøftType
}

export enum OppreisningsStolLøftType {
  'SKRÅLØFT' = 'SKRÅLØFT',
  'RETTLØFT' = 'RETTLØFT',
}

export enum Bruksområde {
  EGEN_BOENHET = 'EGEN_BOENHET',
  FELLESAREAL = 'FELLESAREAL',
}

export enum OppreisningsStolBehov {
  OPPGAVER_I_DAGLIGLIVET = 'OPPGAVER_I_DAGLIGLIVET',
  PLEID_I_HJEMMET = 'PLEID_I_HJEMMET',
  FLYTTE_MELLOM_STOL_OG_RULLESTOL = 'FLYTTE_MELLOM_STOL_OG_RULLESTOL',
}

export enum OppreisningsStolSideBetjeningspanelvalg {
  HØYRE = 'HØYRE',
  VENSTRE = 'VENSTRE',
}
