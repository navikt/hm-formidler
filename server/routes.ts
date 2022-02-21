import express, { Express, RequestHandler, Router } from 'express'
import { setupMetrics } from './setupMetrics'
import { authMiddleware } from './auth'
import { config } from './config'
import { reverseProxy } from './reverseProxy'
import { getDecorator } from './dekorator'
import { logger } from './logger'

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
  auth(destroySessionBySid: (sid: string) => void): Router {
    const router = Router()
    router.get('/login', authMiddleware.login())
    router.get('/logout', authMiddleware.logout(destroySessionBySid))
    router.get('/oauth2/callback', authMiddleware.callback())
    return router
  },
  session(): Router {
    const router = Router()
    router.get('/exp', (req, res) => {
      if (!req.session.tokens) {
        return res.sendStatus(401)
      }
      return res.json({ exp: req.session.tokens.expires_at })
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
  res.type('.js')
  res.send(`window.appSettings = {
  MILJO: '${process.env.NAIS_CLUSTER_NAME}',
  SOKNAD_URL: '${process.env.SOKNAD_URL}'
}`)
}
