import i18next from 'i18next'
import { setParams, onLanguageSelect } from '@navikt/nav-dekoratoren-moduler'
// import { BASE_PATH } from '../App'
import Cookies from 'universal-cookie'
import restService from '../services/rest-service'

interface Params {
  context?: 'privatperson' | 'arbeidsgiver' | 'samarbeidspartner'
  simple?: boolean
  enforceLogin?: boolean
  redirectToApp?: boolean
  level?: string
  language?: 'nb' | 'nn' | 'en' | 'se'
  feedback?: boolean
  chatbot?: boolean
}

const DECORATOR_LANGUAGE_COOKIE = 'decorator-language'
const DEFAULT_PARAMS: Params = {
  chatbot: false,
  simple: true,
  feedback: false,
  context: 'privatperson',
}
const SPRAAK = ['nb', 'nn']

export const initDecorator = () => {
  const cookies = new Cookies()
  const language = cookies.get(DECORATOR_LANGUAGE_COOKIE)

  if (language === undefined || !SPRAAK.includes(language)) {
    restService
      .hentSpraak()
      .then((response) => {
        console.log('hentet språk fra dkif: ' + response.spraak)
        setLanguage(response.spraak)
        i18next.changeLanguage(response.spraak)
      })
      .catch((r) => {})
  } else {
    console.log('hentet språk fra cookies: ' + language)
    i18next.changeLanguage(language)
  }

  setParams({
    ...DEFAULT_PARAMS,
    availableLanguages: [
      // tom liste for å deaktivere språkvalg. Fjern kommentering for å aktivere språkvelger igjen
      // { locale: 'nb', url: BASE_PATH, handleInApp: true },
      // { locale: 'nn', url: BASE_PATH, handleInApp: true },
    ],
  })

  onLanguageSelect((language) => {
    i18next.changeLanguage(language.locale)
  })
}

export const setLanguage = (language: 'nb' | 'nn' | 'en' | 'se') => {
  setParams({
    ...DEFAULT_PARAMS,
    language: language,
  })
}
