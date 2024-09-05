import { BehovsmeldingType, Bruksarena, Bytte, Personnavn, Veiadresse } from './CommonTypes'
import { Levering } from './Leveringinfo'

export interface Formidlerbehovsmelding {
  id: string
  type: BehovsmeldingType
  prioritet: Prioritet
  hjmBrukersFnr: string
  innsendersFnr: string
  innsendingsdato: string
  bruker: Bruker
  brukersituasjon: Brukersituasjon
  hjelpemidler: Hjelpemidler
  levering: Levering
}

export enum Prioritet {
  NORMAL = 'NORMAL',
  HAST = 'HAST',
}

export interface Bruker {
  fnr: string
  navn: Personnavn
  signaturtype: Signaturtype
  telefon: string
  veiadresse: Veiadresse | undefined
  kommunenummer: string | undefined
  brukernummer: string | undefined
  kilde: Brukerkilde | undefined
  legacyopplysninger: EnkelOpplysning[]
}

export enum Signaturtype {
  BRUKER_BEKREFTER = 'BRUKER_BEKREFTER',
  FULLMAKT = 'FULLMAKT',
  FRITAK_FRA_FULLMAKT = 'FRITAK_FRA_FULLMAKT',
  IKKE_INNHENTET_FORDI_BYTTE = 'IKKE_INNHENTET_FORDI_BYTTE',
  IKKE_INNHENTET_FORDI_BRUKERPASSBYTTE = 'IKKE_INNHENTET_FORDI_BRUKERPASSBYTTE',
}

export enum Brukerkilde {
  PDL = 'PDL',
  FORMIDLER = 'FORMIDLER',
}

export interface Brukersituasjon {
  bekreftedeVilkår: BrukersituasjonVilkår[]
  funksjonsnedsettelser: Funksjonsnedsettelse[]
}

enum Funksjonsnedsettelse {
  BEVEGELSE = 'BEVEGELSE',
  HØRSEL = 'HØRSEL',
  KOGNISJON = 'KOGNISJON',
}

export enum BrukersituasjonVilkår {
  NEDSATT_FUNKSJON = 'NEDSATT_FUNKSJON',
  STØRRE_BEHOV = 'STØRRE_BEHOV',
  PRAKTISKE_PROBLEM = 'PRAKTISKE_PROBLEM',
  PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1 = 'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
  VESENTLIG_OG_VARIG_NEDSATT_FUNKSJONSEVNE_V1 = 'VESENTLIG_OG_VARIG_NEDSATT_FUNKSJONSEVNE_V1',
  KAN_IKKE_LØSES_MED_ENKLERE_HJELPEMIDLER_V1 = 'KAN_IKKE_LØSES_MED_ENKLERE_HJELPEMIDLER_V1',
  I_STAND_TIL_Å_BRUKE_HJELPEMIDLENE_V1 = 'I_STAND_TIL_Å_BRUKE_HJELPEMIDLENE_V1',
}

export interface Hjelpemidler {
  hjelpemidler: Hjelpemiddel[]
  totaltAntall: number
}

export interface Hjelpemiddel {
  antall: number
  produkt: HjelpemiddelProdukt
  tilbehør: Tilbehør[]
  bytter: Bytte[]
  bruksarenaer: Bruksarena[]
  utlevertinfo: Utlevertinfo
  opplysninger: Opplysning[]
  varsler: Varsel[]
}

export interface HjelpemiddelProdukt {
  hmsArtNr: string
  artikkelnavn: string
  iso8: string
  iso8Tittel: String
  rangering: number | undefined
  delkontrakttittel: String
  sortimentkategori: String // fra digithot-sortiment
}

export interface Tilbehør {
  hmsArtNr: string
  navn: string
  antall: number
  begrunnelse: string | undefined
  fritakFraBegrunnelseÅrsak: FritakFraBegrunnelseÅrsak | undefined
}

export enum FritakFraBegrunnelseÅrsak {
  ER_PÅ_BESTILLINGSORDNING = 'ER_PÅ_BESTILLINGSORDNING',
  IKKE_I_PILOT = 'IKKE_I_PILOT',
}

export interface Utlevertinfo {
  alleredeUtlevertFraHjelpemiddelsentralen: boolean
  utleverttype: UtlevertType | undefined
  overførtFraBruker: string | undefined
  annenKommentar: string | undefined
}

export enum UtlevertType {
  FREMSKUTT_LAGER = 'FREMSKUTT_LAGER',
  KORTTIDSLÅN = 'KORTTIDSLÅN',
  OVERFØRT = 'OVERFØRT',
  ANNET = 'ANNET',
}

export interface Opplysning {
  ledetekst: LokalisertTekst
  innhold: Tekst[]
}

export interface EnkelOpplysning {
  ledetekst: LokalisertTekst
  innhold: LokalisertTekst
}

export interface Varsel {
  tekst: LokalisertTekst
  type: Varseltype
}

export enum Varseltype {
  INFO = 'INFO',
  WARNING = 'WARNING',
}

export interface LokalisertTekst {
  nb: string
  nn: string
}

export interface Tekst {
  fritekst?: string
  forhåndsdefinertTekst?: LokalisertTekst
  begrepsforklaring?: LokalisertTekst
}
