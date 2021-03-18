import { setParams } from '@navikt/nav-dekoratoren-moduler'

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

const DEFAULT_PARAMS: Params = {
  chatbot: false,
  simple: true,
  feedback: false,
  context: 'samarbeidspartner',
}

export const initDecorator = () => {

  setParams({
    ...DEFAULT_PARAMS,
  })

}

