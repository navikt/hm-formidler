import { setParams } from '@navikt/nav-dekoratoren-moduler'
import { Params } from '@navikt/nav-dekoratoren-moduler/dist/functions/params'

const DEFAULT_PARAMS: Params = {
  chatbot: false,
  simple: false,
  feedback: false,
  context: 'samarbeidspartner',
}

export const initDecorator = () => {

  setParams({
    ...DEFAULT_PARAMS,
  })

}

