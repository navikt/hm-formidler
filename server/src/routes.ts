import express, { Express, RequestHandler, Router } from 'express'
import { auth, authMiddleware, authMiddlewareLocal } from './auth'
import { config } from './config'
import { getDecorator } from './dekorator'
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
  soknadApi(): Router {
    const router = Router()
    router.use(reverseProxy.handlers.soknadApi())
    return router
  },
  public(server: Express): Router {
    const router = Router()
    router.get('/settings.js', settingsHandler)
    router.get('*', express.static(config.buildPath(), { index: false }))
    server.get('/', authMiddleware.requiresLogin(), spaHandler)
    router.get('*', authMiddleware.requiresLogin(), spaHandler)
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
  session(): Router {
    const router = Router()
    router.get('/exp', (req, res) => {
      const idportenToken = req.headers['authorization']?.split(' ')[1]
      if (!idportenToken) {
        return res.sendStatus(401)
      }
      return res.json({ exp: auth.getExp(idportenToken) })
    })

    return router
  },
}

const spaHandler: RequestHandler = async (req, res) => {
  try {
    res.render('index.html', await getDecorator())
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
