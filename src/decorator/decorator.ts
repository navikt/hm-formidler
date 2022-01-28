import { Locale, setParams } from '@navikt/nav-dekoratoren-moduler'

export interface Params {
  context?: 'privatperson' | 'arbeidsgiver' | 'samarbeidspartner'
  simple?: boolean
  enforceLogin?: boolean
  redirectToApp?: boolean
  redirectToUrl?: string
  level?: string
  language?: Locale
  utilsBackground?: 'white' | 'gray' | 'transparent'
  feedback?: boolean
  chatbot?: boolean
  taSurveys?: string
  urlLookupTable?: boolean
  shareScreen?: boolean
  utloggingsvarsel?: boolean
  logoutUrl?: string
}

const DEFAULT_PARAMS: Params = {
  chatbot: false,
  simple: false,
  feedback: false,
  context: 'samarbeidspartner',
}

export const initDecorator = (): void => {
  setParams({
    ...DEFAULT_PARAMS,
  })
}
