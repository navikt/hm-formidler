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
  brukernummer?: string | undefined | null
  bekreftedeVilkår: BrukersituasjonVilkår[]
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

export enum BrukersituasjonVilkår {
  NEDSATT_FUNKSJON = 'NEDSATT_FUNKSJON',
  STORRE_BEHOV = 'STORRE_BEHOV',
  PRAKTISKE_PROBLEM = 'PRAKTISKE_PROBLEM',
  PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1 = 'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
  VESENTLIG_OG_VARIG_NEDSATT_FUNKSJONSEVNE_V1 = 'VESENTLIG_OG_VARIG_NEDSATT_FUNKSJONSEVNE_V1',
  KAN_IKKE_LOESES_MED_ENKLERE_HJELPEMIDLER_V1 = 'KAN_IKKE_LOESES_MED_ENKLERE_HJELPEMIDLER_V1',
  I_STAND_TIL_AA_BRUKE_HJELEPMIDLENE_V1 = 'I_STAND_TIL_AA_BRUKE_HJELEPMIDLENE_V1',
}
