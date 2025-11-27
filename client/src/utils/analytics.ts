import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler'
import { isConsentingToAnalytics } from './nav-cookie-consent'

export enum NAV_TAXONOMY {
  SKJEMA_START = 'skjema startet',
  SKJEMASTEG_FULLFØRT = 'skjemasteg fullført',
  SKJEMAINNSENDING_FEILET = 'skjemainnsending feilet',
  SKJEMA_FULLFØRT = 'skjema fullført',
  SKJEMAVALIDERING_FEILET = 'skjemavalidering feilet',
  NAVIGERE = 'navigere',
}

//Events som ikke er i Nav sin taxonomi
export enum DIGIHOT_TAXONOMY {
  KLIKK_NY_SAK = 'ny søknad',
  KLIKK_ÅPNE_SØKNAD = 'klikk åpne søknad',
  SØKNAD_ÅPNET = 'søknad åpnet',
  SØKNAD_VISNING_FEILET = 'søknad visning feilet',
  KLIKK_SKRIV_UT = 'klikk på skriv ut',
}

const APP_NAVN = 'hm-formidler'

export function logEvent(eventName: NAV_TAXONOMY | DIGIHOT_TAXONOMY, data?: Record<string, unknown>): void {
  if (!isConsentingToAnalytics()) {
    return
  }

  const logger = getAnalyticsInstance(APP_NAVN)
  logger(eventName, data)
}
