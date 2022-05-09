import jsdom from 'jsdom'
import NodeCache from 'node-cache'
import fetch from 'node-fetch'

const { JSDOM } = jsdom

const SECONDS_PER_MINUTE = 60
const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * 60

// Refresh cache every hour
const cache = new NodeCache({
  stdTTL: SECONDS_PER_HOUR,
  checkperiod: SECONDS_PER_MINUTE,
})

export interface IDekoratorFragmenter {
  NAV_SKIPLINKS?: string
  NAV_SCRIPTS?: string
  NAV_STYLES?: string
  NAV_HEADING?: string
  NAV_FOOTER?: string
  MEGAMENU_RESOURCES?: string
}

export async function getDecorator(): Promise<Maybe<IDekoratorFragmenter>> {
  const cached = cache.get<IDekoratorFragmenter>('main-cache')
  if (cached) {
    return cached
  } else {
    try {
      const decoratorUrl = process.env.DECORATOR_URL
      if (!decoratorUrl) {
        return Promise.reject(new Error('DECORATOR_URL er ikke satt'))
      }
      const response = await fetch(decoratorUrl)
      if (response.status >= 200 && response.status < 400) {
        const html = await response.buffer()
        const { document } = new JSDOM(html).window
        const prop = 'innerHTML'
        const fragmenter: IDekoratorFragmenter = {
          NAV_SKIPLINKS: document.getElementById('skiplinks')?.[prop],
          NAV_SCRIPTS: document.getElementById('scripts')?.[prop],
          NAV_STYLES: document.getElementById('styles')?.[prop],
          NAV_HEADING: document.getElementById('header-withmenu')?.[prop],
          NAV_FOOTER: document.getElementById('footer-withmenu')?.[prop],
          MEGAMENU_RESOURCES: document.getElementById('megamenu-resources')?.[prop],
        }
        cache.set('main-cache', fragmenter)
        return fragmenter
      }
    } catch (err: unknown) {
      return Promise.reject(err)
    }
  }
}
