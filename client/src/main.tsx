import '@navikt/ds-css'
import { Modal } from '@navikt/ds-react'
import React from 'react'
import ReactDOM from 'react-dom'
import 'vite/modulepreload-polyfill'
import App from './App'
import { initDecorator } from './decorator/decorator'
import './i18n'
import { worker } from './mocks/browser'
import { initAmplitude } from './utils/amplitude'
import { initSentry } from './utils/sentry'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hj: any
    appSettings: {
      MILJO?: 'labs-gcp' | 'dev-gcp' | 'prod-gcp' | 'local'
      SOKNAD_URL?: string
      GIT_COMMIT?: string
      USE_MSW?: boolean
    }
  }
}

async function initMsw(): Promise<void> {
  if (window.appSettings.USE_MSW === true) {
    const { worker } = await import('./mocks/browser')
    await worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url: '/hjelpemidler/formidler/mockServiceWorker.js',
      },
    })
  }
}

const init = async () => {
  await initMsw()
  initSentry()
  initAmplitude()
  initDecorator()

  const rootElement = document.getElementById('root')

  if (Modal.setAppElement) {
    Modal.setAppElement(rootElement)
  }

  ReactDOM.render(<App />, rootElement)
}

// noinspection JSIgnoredPromiseFromCall
init()
