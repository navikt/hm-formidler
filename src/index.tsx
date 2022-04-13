import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import withMenu from './decorator/decorator-header-withmenu'
import footer from './decorator/decorator-footer'
import styles from './decorator/decorator-styles'
import scripts from './decorator/decorator-scripts'
import skiplinks from './decorator/decorator-skiplinks'
import megamenu from './decorator/decorator-megamenu'
import './i18n'
import { initAmplitude } from './utils/amplitude'
import { initDecorator } from './decorator/decorator'
import { initSentry } from './utils/sentry'
import { Modal } from '@navikt/ds-react'
import '@navikt/ds-css'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hj: any
    appSettings: {
      MILJO: 'labs-gcp' | 'dev-gcp' | 'prod-gcp' | 'undefined'
      SOKNAD_URL: string
      GIT_COMMIT: string
    }
  }
}

const init = async () => {
  initSentry()
  initAmplitude()
  initDecorator()

  if (process.env.NODE_ENV === 'development') {
    document.body.innerHTML = document.body.innerHTML.replace('{{{NAV_HEADING}}}', withMenu)
    document.body.innerHTML = document.body.innerHTML.replace('{{{NAV_FOOTER}}}', footer)
    document.body.innerHTML = document.body.innerHTML.replace('{{{NAV_STYLES}}}', styles)
    document.body.innerHTML = document.body.innerHTML.replace('{{{NAV_SCRIPTS}}}', scripts)
    document.body.innerHTML = document.body.innerHTML.replace('{{{NAV_SKIPLINKS}}}', skiplinks)
    document.body.innerHTML = document.body.innerHTML.replace('{{{MEGAMENU_RESOURCES}}}', megamenu)

    // Execute client.js
    const script = document.createElement('script')
    script.src = 'https://www.nav.no/dekoratoren/client.js'
    document.body.appendChild(script)
  }

  //Renders app component
  const rootElement = document.getElementById('root')

  if (Modal.setAppElement) {
    Modal.setAppElement(rootElement)
  }

  ReactDOM.render(<App />, rootElement)
}

init()
