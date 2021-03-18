export interface Leveringsinfo {
  leveringsmaate: Leveringsmaate
  adresse: String
  kontaktPerson: KontaktPerson
  merknad: String

}

export interface KontaktPerson {
  navn: String
  telefon: String
  kontaktpersonType: KontaktPersonType
}

export enum Leveringsmaate {
  ANNEN_ADRESSE = "ANNEN_ADRESSE",
  FOLKEREGISTRERT_ADRESSE = "FOLKEREGISTRERT_ADRESSE",
  HJELPEMIDDELSENTRAL = "HJELPEMIDDELSENTRAL",
  ALLEREDE_LEVERT = "ALLEREDE_LEVERT"
}

export enum KontaktPersonType {
  HJELPEMIDDELBRUKER = "HJELPEMIDDELBRUKER",
  HJELPEMIDDELFORMIDLER = "HJELPEMIDDELFORMIDLER",
  ANNEN_KONTAKTPERSON = "ANNEN_KONTAKTPERSON"
}
