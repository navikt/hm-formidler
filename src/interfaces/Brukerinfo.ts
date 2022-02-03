export interface Brukerinfo {
  signatur: SignaturType
  fnummer: string
  fornavn: string
  etternavn: string
  telefonNummer: string
  adresse?: string
  postnummer?: string
  poststed?: string
  boform: string
  bruksarena: string
  funksjonsnedsettelser: Funksjonsnedsettelse[]
  kroppsmaal?: Kroppsmaal
}

enum Funksjonsnedsettelse {
  BEVEGELSE = 'BEVEGELSE',
  HØRSEL = 'HØRSEL',
  KOGNISJON = 'KOGNISJON',
}

export enum SignaturType {
  BRUKER_BEKREFTER = 'BRUKER_BEKREFTER',
  FULLMAKT = 'FULLMAKT',
  FRITAK_FRA_FULLMAKT = 'FRITAK_FRA_FULLMAKT',
}

export interface Kroppsmaal {
  setebredde?: number
  laarlengde?: number
  legglengde?: number
  hoyde?: number
  kroppsvekt?: number
}
