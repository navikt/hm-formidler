export type Rolletype = 'BESTILLER' | 'KOMMUNAL_FORMIDLER' | 'IKKE_KOMMUNAL_FORMIDLER'

import type { BehovsmeldingType } from './CommonTypes'

export interface Rolle {
  rolle: Rolletype
}

export interface Tillatelser {
  behovsmeldingstyper: BehovsmeldingType[]
  digitalBekreftelse: boolean
}

export interface Roller {
  roller: Rolle[]
  tillatelser: Tillatelser
}
