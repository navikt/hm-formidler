import { auth } from './auth'
import proxy, { ProxyOptions } from 'express-http-proxy'
import { config } from './config'
import type { Request, RequestHandler } from 'express'

function options(targetAudience: string): ProxyOptions {
  return {
    parseReqBody: false,
    async proxyReqOptDecorator(options, req) {
      if (process.env.NAIS_CLUSTER_NAME !== 'labs-gcp') {
        const idportenToken = req.headers['authorization']?.split(' ')[1]
        if (auth.tokenIsValid(idportenToken)) {
          const { access_token } = await auth.exchangeToken(idportenToken, targetAudience)
          if (options.headers) {
            options.headers.Authorization = `Bearer ${access_token}`
          }
        }
      }
      return options
    },
    proxyReqPathResolver(req) {
      return pathRewriteBasedOnEnvironment(req)
    },
  }
}

const envProperties = {
  API_URL: process.env.API_URL || 'http://localhost:8082',
  SOKNAD_API_URL: process.env.SOKNAD_API_URL || 'http://localhost:9090',
}

function pathRewriteBasedOnEnvironment(req: Request): string {
  if (process.env.NAIS_CLUSTER_NAME === 'prod-gcp' || process.env.NAIS_CLUSTER_NAME === 'dev-gcp') {
    return req.originalUrl
      .replace('/hjelpemidler/formidler/soknad-api', '/hm')
      .replace('/hjelpemidler/formidler/api', '/api')
  } else {
    return req.originalUrl
      .replace('/hjelpemidler/formidler/soknad-api', '/hm')
      .replace('/hjelpemidler/formidler/api', '/api')
  }
}

function setup() {
  auth.setup(config.idporten, config.tokenx, config.app).catch((err: unknown) => {
    console.log(`Error while setting up auth: ${err}`)
    process.exit(1)
  })
}

const handlers = {
  soknadsbehandlingDb: (): RequestHandler =>
    proxy(envProperties.API_URL, options(config.app.soknadsbehandlingAudience)),
  soknadApi: (): RequestHandler => proxy(envProperties.SOKNAD_API_URL, options(config.app.soknadApiAudience)),
}

// TODO validate cookie
function getCookie(name: string, cookie: string): string {
  const re = new RegExp(`${name}=([^;]+)`)
  const match = re.exec(cookie)
  return match !== null ? match[1] : ''
}

export const reverseProxy = {
  setup,
  handlers,
}
