import * as amplitude from '@amplitude/analytics-browser'

export enum amplitude_taxonomy {
  SKJEMA_START = 'skjema startet',
  SKJEMASTEG_FULLFØRT = 'skjemasteg fullført',
  SKJEMAINNSENDING_FEILET = 'skjemainnsending feilet',
  SKJEMA_FULLFØRT = 'skjema fullført',
  SKJEMAVALIDERING_FEILET = 'skjemavalidering feilet',
  NAVIGERE = 'navigere',
}

//Events som ikke er i Nav sin taxonomi
export enum digihot_customevents {
  KLIKK_NY_SAK = 'ny søknad',
  KLIKK_ÅPNE_SØKNAD = 'klikk åpne søknad',
  SØKNAD_ÅPNET = 'søknad åpnet',
  SØKNAD_VISNING_FEILET = 'søknad visning feilet',
  VARSEL_OM_SESJON_UTLOPER = 'varsel vist om sesjon utløper',
  VARSEL_OM_SESJON_UTLOPT = 'varsel vist om sesjon utløpt',
  SPRAAK_ENDRET = 'språk endret',
  KLIKK_SKRIV_UT = 'klikk på skriv ut',
}

const SKJEMANAVN = 'formidler'

export const initAmplitude = (): void => {
  if (amplitude) {
    amplitude.init('default', '', {
      useBatch: false,
      serverUrl: 'https://amplitude.nav.no/collect-auto',
      defaultTracking: false,
      ingestionMetadata: {
        sourceName: window.location.toString(),
      },
    })
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function logAmplitudeEvent(eventName: string, data?: any): void {
  setTimeout(() => {
    data = {
      app: 'formidler',
      team: 'teamdigihot',
      ...data,
    }
    try {
      if (amplitude) {
        amplitude.track(eventName, data)
      }
    } catch (error) {
      console.error(error)
    }
  })
}

export function logVistSesjonUtloperVarsel(data: { sekunderTilUtlop: number }) {
  logAmplitudeEvent(digihot_customevents.VARSEL_OM_SESJON_UTLOPER, {
    skjemanavn: SKJEMANAVN,
    ...data,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function logCustomEvent(event: digihot_customevents, data?: any) {
  logAmplitudeEvent(event, {
    skjemanavn: SKJEMANAVN,
    ...data,
  })
}

export function logNavigeringLenke(id: string, destinasjon: string): void {
  logAmplitudeEvent(amplitude_taxonomy.NAVIGERE, {
    skjemanavn: SKJEMANAVN,
    skjemaId: id,
    destinasjon: destinasjon,
  })
}

export function logKlikkPåSkrivUt(id: string): void {
  logAmplitudeEvent(digihot_customevents.KLIKK_SKRIV_UT, {
    skjemanavn: SKJEMANAVN,
    skjemaId: id,
  })
}
