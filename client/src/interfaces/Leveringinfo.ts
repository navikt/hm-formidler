import type { Personnavn, Veiadresse } from './CommonTypes'
import type { Hast } from './Hast'

export interface Levering {
  hjelpemiddelformidler: Hjelpemiddelformidler
  oppfølgingsansvarlig: Oppfølgingsansvarlig
  annenOppfølgingsansvarlig: AnnenOppfølgingsansvarlig | undefined
  utleveringsmåte: Utleveringsmåte | undefined
  annenUtleveringsadresse: Veiadresse
  utleveringKontaktperson: Kontaktperson | undefined
  annenKontaktperson: AnnenKontaktperson | undefined
  utleveringMerknad: string | undefined
  hast: Hast | undefined
  automatiskUtledetTilleggsinfo: LeveringTilleggsinfo[]
}

export interface Hjelpemiddelformidler {
  navn: Personnavn
  arbeidssted: string
  stilling: string
  telefon: string
  adresse: Veiadresse
  epost: string
  treffesEnklest: string
}

export enum Oppfølgingsansvarlig {
  HJELPEMIDDELFORMIDLER = 'HJELPEMIDDELFORMIDLER',
  ANNEN_OPPFØLGINGSANSVARLIG = 'ANNEN_OPPFØLGINGSANSVARLIG',
}

export interface AnnenOppfølgingsansvarlig {
  navn: Personnavn
  arbeidssted: string
  stilling: string
  telefon: string
  ansvarFor: string
}

export enum Utleveringsmåte {
  FOLKEREGISTRERT_ADRESSE = 'FOLKEREGISTRERT_ADRESSE',
  ANNEN_BRUKSADRESSE = 'ANNEN_BRUKSADRESSE',
  HJELPEMIDDELSENTRALEN = 'HJELPEMIDDELSENTRALEN',
  ALLEREDE_UTLEVERT_AV_NAV = 'ALLEREDE_UTLEVERT_AV_NAV',
}

export enum Kontaktperson {
  HJELPEMIDDELBRUKER = 'HJELPEMIDDELBRUKER',
  HJELPEMIDDELFORMIDLER = 'HJELPEMIDDELFORMIDLER',
  ANNEN_KONTAKTPERSON = 'ANNEN_KONTAKTPERSON',
}

export interface AnnenKontaktperson {
  navn: Personnavn
  telefon: string
}

export enum LeveringTilleggsinfo {
  UTLEVERING_KALENDERAPP = 'UTLEVERING_KALENDERAPP',
  ALLE_HJELPEMIDLER_ER_UTLEVERT = 'ALLE_HJELPEMIDLER_ER_UTLEVERT',
}
