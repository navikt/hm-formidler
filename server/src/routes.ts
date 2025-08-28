import { fetchDecoratorHtml } from '@navikt/nav-dekoratoren-moduler/ssr'
import express, { Express, RequestHandler, Router } from 'express'
import { auth, authMiddleware, authMiddlewareLocal } from './auth'
import { config } from './config'
import { logger } from './logger'
import { reverseProxy } from './reverseProxy'
import { setupMetrics } from './setupMetrics'

export const routes = {
  internal(): Router {
    const router = Router()
    router.get(['/isAlive', '/isReady'], (req, res) => {
      res.send('OK')
    })
    const prometheus = setupMetrics()
    router.get('/metrics', async (req, res) => {
      res.set('Content-Type', prometheus.contentType)
      res.end(await prometheus.metrics())
    })
    return router
  },
  soknadsbehnadlingDb(): Router {
    reverseProxy.setup()
    const router = Router()
    router.use(reverseProxy.handlers.soknadsbehandlingDb())
    return router
  },
  roller(): Router {
    const router = Router()
    router.use(reverseProxy.handlers.roller())
    return router
  },
  public(server: Express): Router {
    const router = Router()
    router.get('/settings.js', settingsHandler)
    router.get('/{*splat}', express.static(config.buildPath(), { index: false }))
    server.get('/', authMiddleware.requiresLogin(), spaHandler)
    router.get('/{*splat}', authMiddleware.requiresLogin(), spaHandler)
    return router
  },
  auth(): Router {
    const router = Router()

    if (!config.isProduction()) {
      router.get('/oauth2-local/callback', authMiddlewareLocal.localCallback())
      router.get('/login', authMiddlewareLocal.localLogin())
    } else {
      router.get('/login', authMiddleware.login())
      router.get('/logout', authMiddleware.logout())
    }
    return router
  },
}

const spaHandler: RequestHandler = async (req, res) => {
  try {
    const decorator = await fetchDecoratorHtml({
      env: config.isProduction() ? 'prod' : 'dev',
      params: {
        context: 'samarbeidspartner',
        logoutWarning: true,
      }
    })
    res.render('index.html', decorator)
  } catch (err: unknown) {
    const error = `Failed to get decorator: ${err}`
    logger.error(error)
    res.status(500).send(error)
  }
}

const settingsHandler: RequestHandler = (req, res) => {
  const appSettings = {
    GIT_COMMIT: process.env.GIT_COMMIT,
    MILJO: process.env.NAIS_CLUSTER_NAME,
    SOKNAD_URL: process.env.SOKNAD_URL,
    USE_MSW: process.env.USE_MSW === 'true',
  }
  res.type('.js')
  res.send(`window.appSettings = ${JSON.stringify(appSettings)}`)
}
