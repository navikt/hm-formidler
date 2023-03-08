export interface Leveringsinfo {
  leveringsmaate: Leveringsmaate
  adresse: string
  kontaktPerson: KontaktPerson
  merknad: string
  tilleggsinfo: LeveringTilleggsinfo[]
}

export interface KontaktPerson {
  navn: string
  telefon: string
  kontaktpersonType: KontaktPersonType
}

export enum Leveringsmaate {
  ANNEN_ADRESSE = 'ANNEN_ADRESSE',
  FOLKEREGISTRERT_ADRESSE = 'FOLKEREGISTRERT_ADRESSE',
  HJELPEMIDDELSENTRAL = 'HJELPEMIDDELSENTRAL',
  ALLEREDE_LEVERT = 'ALLEREDE_LEVERT',
}

export enum KontaktPersonType {
  HJELPEMIDDELBRUKER = 'HJELPEMIDDELBRUKER',
  HJELPEMIDDELFORMIDLER = 'HJELPEMIDDELFORMIDLER',
  ANNEN_KONTAKTPERSON = 'ANNEN_KONTAKTPERSON',
}

export enum LeveringTilleggsinfo {
  UTLEVERING_KALENDERAPP = 'UTLEVERING_KALENDERAPP',
  ALLE_HJELPEMIDLER_ER_UTLEVERT = 'ALLE_HJELPEMIDLER_ER_UTLEVERT',
}