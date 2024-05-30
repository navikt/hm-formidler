export interface Hast {
  hasteårsaker: Hasteårsak[]
  hastBegrunnelse: string | null
}

export enum Hasteårsak {
  'UTVIKLING_AV_TRYKKSÅR' = 'UTVIKLING_AV_TRYKKSÅR',
  'TERMINALPLEIE' = 'TERMINALPLEIE',
  'UTSKRIVING_FRA_SYKEHUS_SOM_IKKE_KAN_PLANLEGGES' = 'UTSKRIVING_FRA_SYKEHUS_SOM_IKKE_KAN_PLANLEGGES',
  'ANNET' = 'ANNET',
}
