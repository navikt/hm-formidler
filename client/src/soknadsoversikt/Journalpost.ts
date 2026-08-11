type Nullable<T> = T | null

type RelevanteDato = {
  datotype: string
  dato: string
}

type Dokumentvariant = {
  [key: string]: unknown
}

export interface DokumentInfo {
  tittel: Nullable<string>
  dokumentInfoId: string
  brevkode: Nullable<string>
  dokumentvarianter: Dokumentvariant[]
}

export interface Sak {
  fagsaksystem: Nullable<string>
  fagsakId: Nullable<string>
}

export interface Journalpost {
  journalpostId: string
  tittel: Nullable<string>
  journalposttype: string
  journalstatus?: string
  sak: Nullable<Sak>
  kanal: Nullable<string>
  relevanteDatoer: RelevanteDato[]
  dokumenter: DokumentInfo[]
  dato: Nullable<string>
}