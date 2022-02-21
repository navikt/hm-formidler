import session, { SessionOptions } from 'express-session'
import redis from 'redis'
import { config } from './config'
import redisStore, { RedisStore } from 'connect-redis'
import memoryStore from 'memorystore'
import type { SetRequired } from 'type-fest'
import type { TokenSetParameters } from 'openid-client'
import type { RequestHandler } from 'express'

const MemoryStore = memoryStore(session)

declare module 'express-session' {
  interface SessionData {
    id: string
    state?: string
    nonce?: string
    tokens?: TokenSetParameters
    idportenSid?: string
  }
}

function setupRedis(): RedisStore {
  const Store = redisStore(session)
  const client = redis.createClient({
    host: config.session.redisHost,
    port: Number(config.session.redisPort),
    password: config.session.redisPassword,
  })
  client.unref()
  client.on('debug', console.log)
  return new Store({
    client: client,
    disableTouch: true,
  })
}

export function setupSession() {
  const options: SetRequired<SessionOptions, 'cookie'> = {
    cookie: {
      maxAge: config.session.maxAgeMs,
      sameSite: 'lax',
      httpOnly: true,
    },
    secret: config.session.secret,
    name: 'hjelpemidlerdigitalsoknad',
    resave: false,
    saveUninitialized: false,
    unset: 'destroy',
  }

  if (process.env.NODE_ENV === 'production' && process.env.NAIS_CLUSTER_NAME !== 'labs-gcp') {
    options.cookie.secure = true
    options.store = setupRedis()
  } else {
    options.store = new MemoryStore({ checkPeriod: 86400000 })
  }

  return {
    session(): RequestHandler {
      return session(options)
    },
    destroySessionBySid(sid: string): Promise<void> {
      return new Promise((resolve, reject) => {
        if (!options.store || !options.store.all) {
          return resolve()
        }
        options.store.all((err: unknown, result) => {
          if (err) {
            return reject(err)
          }
          if (!Array.isArray(result)) {
            return resolve()
          }
          const sessionToDestroy = result.find((session) => {
            return session.idportenSid && session.idportenSid === sid
          })
          if (sessionToDestroy) {
            options.store?.destroy(sessionToDestroy.id)
          }
          return resolve()
        })
      })
    },
  }
}
