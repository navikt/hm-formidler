import * as Sentry from '@sentry/browser'
import { v4 as uuid } from 'uuid'
import { Breadcrumb, Event, EventHint } from '@sentry/browser'

const maskeringsregler = [
  {
    regex: /[0-9]{6}\s?[0-9]{5}/g,
    erstatning: '<fnr>',
  },
]

// Exportes kun for å kunne testes
export const fjernPersonopplysninger = (event: Event): Event => {
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

const maskerPersonoppysningerIObjekt = <T>(data: T): T => {
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

const MILJO = window.appSettings?.MILJO
const GIT_COMMIT = window.appSettings?.GIT_COMMIT

export const initSentry = () => {
  Sentry.init({
    dsn: 'https://a9360c4936d24578b8b06dab06d511fe@sentry.gc.nav.no/56',
    environment: MILJO,
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
    enabled: MILJO === 'dev-gcp' || MILJO === 'prod-gcp',
    release: GIT_COMMIT,
  })
  Sentry.setUser({ id: uuid() })
}
