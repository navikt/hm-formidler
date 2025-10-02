import type { Breadcrumb, BrowserOptions } from '@sentry/browser'
import * as Sentry from '@sentry/browser'
import { v4 as uuid } from 'uuid'

const maskeringsregler = [
  {
    regex: /[0-9]{6}\s?[0-9]{5}/g,
    erstatning: '<fnr>',
  },
]

// Eksporteres kun for å kunne testes
export const fjernPersonopplysninger: BrowserOptions['beforeSend'] = (event) => {
  const url = event.request?.url ? maskerPersonopplysninger(event.request.url) : ''
  return {
    ...event,
    event_id: maskerPersonopplysninger(event.event_id),
    message: maskerPersonopplysninger(event.message),
    request: {
      ...event.request,
      url,
      headers: {
        Referer: maskerPersonopplysninger(event.request?.headers?.Referer) || '',
      },
      data: maskerPersonoppysningerIObjekt(event.request?.data),
    },
    breadcrumbs: (event.breadcrumbs || []).map((breadcrumb: Breadcrumb) => ({
      ...breadcrumb,
      event_id: maskerPersonopplysninger(event.event_id),
      message: maskerPersonopplysninger(breadcrumb.message),
      data: maskerPersonoppysningerIObjekt(breadcrumb.data),
    })),
  }
}

const maskerPersonoppysningerIObjekt = <T>(data: T): T | undefined => {
  if (data === undefined) return data

  const asText = JSON.stringify(data)
  const escaped = maskerPersonopplysninger(asText)

  return escaped ? JSON.parse(escaped) : undefined
}

const maskerPersonopplysninger = (tekst?: string | undefined) => {
  if (!tekst) return undefined

  let maskert = tekst
  maskeringsregler.forEach(({ regex, erstatning }) => {
    maskert = maskert.replace(regex, erstatning)
  })

  return maskert
}

const NAIS_CLUSTER_NAME = window.appSettings?.NAIS_CLUSTER_NAME
const USE_MSW = window.appSettings?.USE_MSW
const GIT_COMMIT = window.appSettings?.GIT_COMMIT

export const initSentry = () => {
  Sentry.init({
    dsn: 'https://a9360c4936d24578b8b06dab06d511fe@sentry.gc.nav.no/56',
    environment: NAIS_CLUSTER_NAME,
    denyUrls: [
      // Chrome extensions
      /extensions\//i,
      /^chrome:\/\//i,
      // Safari extensions
      /^safari-extension:/i,
      // external scripts
      /psplugin/,
      /dekoratoren\/client/,
    ],
    beforeSend: fjernPersonopplysninger,
    enabled: (NAIS_CLUSTER_NAME === 'dev-gcp' && USE_MSW === false) || NAIS_CLUSTER_NAME === 'prod-gcp',
    release: GIT_COMMIT,
  })
  Sentry.setUser({ id: uuid() })
}
