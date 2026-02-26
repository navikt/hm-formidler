import '@navikt/ds-css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { initDecorator } from './decorator/decorator'
import './i18n'
import { initSentry } from './utils/sentry'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hj: any
    appSettings: {
      NAIS_CLUSTER_NAME?: 'dev-gcp' | 'prod-gcp' | 'local'
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
  initDecorator()

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}

init().catch(console.error)
