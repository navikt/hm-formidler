export interface Roller {
  formidlerRolle: FormidlerRolle
  bestillerRolle: BestillerRolle | undefined
}

export interface FormidlerRolle {
  harFormidlerRolle: boolean
  erPilotkommune: boolean
  feil: ('ALLOWLIST' | 'ALTINN')[]
}

export interface BestillerRolle {
  harBestillerRolle: boolean
  erPilotkommune: boolean
  feil: ('GODKJENNINGSKURS' | 'ALLOWLIST' | 'AAREG')[]
}
