import amplitude from 'amplitude-js'

export enum amplitude_taxonomy {
  SKJEMA_START = 'skjema startet',
  SKJEMASTEG_FULLFØRT = 'skjemasteg fullført',
  SKJEMAINNSENDING_FEILET = 'skjemainnsending feilet',
  SKJEMA_FULLFØRT = 'skjema fullført',
  SKJEMAVALIDERING_FEILET = 'skjemavalidering feilet',
  NAVIGERE = 'navigere'
}

//Events som ikke er i NAV sin taxonomi
export enum digihot_customevents {
    SØKNAD_BEKREFTET='søknad bekreftet',
    SØKNAD_SLETTET='søknad slettet'
  /*SKJEMA_FORTSATT = 'skjema fortsatt',*/
}

const SKJEMANAVN = 'formidler'

export const initAmplitude = () => {
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

export function logAmplitudeEvent(eventName: string, data?: any) {
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

export function logSkjemastegFullfoert(id: string, steg: number) {
  logAmplitudeEvent(amplitude_taxonomy.SKJEMASTEG_FULLFØRT, {
    skjemanavn: SKJEMANAVN,
    skjemaId: id,
    steg: steg,
  })
}

export function logSkjemaStartet(id: string) {
  logAmplitudeEvent(amplitude_taxonomy.SKJEMA_START, {
    skjemanavn: SKJEMANAVN,
    skjemaId: id,
  })
}

export function logSkjemavalideringFeilet(id: string, komponent: string, feilmeldinger: string[] | undefined) {
  logAmplitudeEvent(amplitude_taxonomy.SKJEMAVALIDERING_FEILET, {
    skjemanavn: SKJEMANAVN,
    skjemaId: id,
    skjemaside: komponent,
    feilmeldinger: feilmeldinger,
  })
}

export function logSkjemaFullfoert(id: string) {
  logAmplitudeEvent(amplitude_taxonomy.SKJEMA_FULLFØRT, {
    skjemanavn: SKJEMANAVN,
    skjemaId: id,
  })
}

export function logNavigeringLenke(id: string, destinasjon: string) {
  logAmplitudeEvent(amplitude_taxonomy.NAVIGERE, {
    skjemanavn: SKJEMANAVN,
    skjemaId: id,
    destinasjon: destinasjon,
  })
}


export function logSkjemaCustomEvent(event: digihot_customevents, id: string, data?: any) {
  logAmplitudeEvent(event, {
    skjemanavn: SKJEMANAVN,
    skjemaId: id,
    ...data,
  })
}


export function logSkjemainnsendingFeilet() {
  logAmplitudeEvent(amplitude_taxonomy.SKJEMAINNSENDING_FEILET, {
    skjemanavn: SKJEMANAVN,
  })
}
