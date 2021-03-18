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
    vilkarliste?: HjelpemiddelVilkar[]
    tilbehorListe?: Hjelpemiddeltilbehoer[]
    begrunnelse?: string
    kanIkkeTilsvarande: boolean
    //navn?: string
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
  Soknadsoversikt = 'soknadsoversikt'
}
