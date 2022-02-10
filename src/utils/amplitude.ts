/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import amplitude from 'amplitude-js'

export enum amplitude_taxonomy {
  SKJEMA_START = 'skjema startet',
  SKJEMASTEG_FULLFØRT = 'skjemasteg fullført',
  SKJEMAINNSENDING_FEILET = 'skjemainnsending feilet',
  SKJEMA_FULLFØRT = 'skjema fullført',
  SKJEMAVALIDERING_FEILET = 'skjemavalidering feilet',
  NAVIGERE = 'navigere',
}

//Events som ikke er i NAV sin taxonomi
export enum digihot_customevents {
  KLIKK_NY_SØKNAD = 'ny søknad',
  KLIKK_ÅPNE_SØKNAD = 'klikk åpne søknad',
  SØKNAD_ÅPNET = 'søknad åpnet',
  SØKNAD_VISNING_FEILET = 'søknad visning feilet',
  VARSEL_OM_SESJON_UTLOPER = 'varsel vist om sesjon utløper',
  VARSEL_OM_SESJON_UTLOPT = 'varsel vist om sesjon utløpt',
}

const SKJEMANAVN = 'formidler'

export const initAmplitude = (): void => {
  if (amplitude) {
    amplitude.getInstance().init('default', '', {
      apiEndpoint: 'amplitude.nav.no/collect-auto',
      saveEvents: false,
      includeUtm: true,
      includeReferrer: true,
      platform: window.location.toString(),
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
        amplitude.getInstance().logEvent(eventName, data)
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

export function logCustomEvent(event: digihot_customevents) {
  logAmplitudeEvent(event, {
    skjemanavn: SKJEMANAVN,
  })
}

export function logNavigeringLenke(id: string, destinasjon: string): void {
  logAmplitudeEvent(amplitude_taxonomy.NAVIGERE, {
    skjemanavn: SKJEMANAVN,
    skjemaId: id,
    destinasjon: destinasjon,
  })
}
