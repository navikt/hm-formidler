import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'nav-frontend-core'
import NavFrontendModal from 'nav-frontend-modal'
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
  NavFrontendModal.setAppElement(rootElement)

  ReactDOM.render(<App />, rootElement)
}

init()
