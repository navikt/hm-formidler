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
import environment from './environment'
import * as Sentry from '@sentry/browser'
import { initDecorator } from './decorator/decorator'
import { v4 as uuid } from 'uuid'

const init = async () => {
  initAmplitude()
  initDecorator()

  if (environment.MILJO === 'prod-gcp') {
    console.log('Activate Sentry in prod-gcp')
    Sentry.init({ dsn: 'https://a9360c4936d24578b8b06dab06d511fe@sentry.gc.nav.no/56' })
    Sentry.setUser({ id: uuid() })
  } else if (environment.MILJO === 'dev-gcp') {
    console.log('Activate Sentry in dev-gcp')
    Sentry.init({ dsn: 'https://1b9a6aaee2644e20a1b00e7affde3dea@sentry.gc.nav.no/57' })
    Sentry.setUser({ id: uuid() })
  }

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
