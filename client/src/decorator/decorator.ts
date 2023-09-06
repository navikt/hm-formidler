import i18next from 'i18next'
import { Locale, onLanguageSelect, setParams } from '@navikt/nav-dekoratoren-moduler'
import { BASE_PATH } from '../App'
import Cookies from 'universal-cookie'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'

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
  logoutWarning?: boolean
}

const DECORATOR_LANGUAGE_COOKIE = 'decorator-language'
const DEFAULT_PARAMS: Params = {
  chatbot: false,
  simple: false,
  feedback: false,
  context: 'samarbeidspartner',
  logoutWarning: true,
}
const SPRAAK = ['nb', 'nn']

export const initDecorator = () => {
  const cookies = new Cookies()
  const language = cookies.get(DECORATOR_LANGUAGE_COOKIE)

  if (SPRAAK.includes(language)) {
    console.log('hentet språk fra cookies: ' + language)
    changeLanguage(language)
  }

  setParams({
    ...DEFAULT_PARAMS,
    availableLanguages: [
      { locale: 'nb', url: BASE_PATH, handleInApp: true },
      { locale: 'nn', url: BASE_PATH, handleInApp: true },
    ],
  })

  onLanguageSelect((language) => {
    changeLanguage(language.locale)
  })
}

const changeLanguage = (language: string) => {
  i18next.changeLanguage(language)
  logCustomEvent(digihot_customevents.SPRAAK_ENDRET, { språk: language })
}

export const setLanguage = (language: 'nb' | 'nn' | 'en' | 'se') => {
  setParams({
    ...DEFAULT_PARAMS,
    language: language,
  })
}
