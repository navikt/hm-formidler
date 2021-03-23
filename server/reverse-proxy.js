const jwt = require('jsonwebtoken')
const auth = require('./auth')
const proxy = require('express-http-proxy')
const config = require('./config')

const logger = require('./logger')

const options = (targetAudience) => ({
  parseReqBody: false,

  proxyReqOptDecorator: (options, req) => {
    if (process.env.NAIS_CLUSTER_NAME !== 'labs-gcp') {
      console.log(`Veksler inn token til aud ${targetAudience}`)
      return new Promise((resolve, reject) => {
        const selvbetjeningToken = req.session.tokens.access_token

        if (selvbetjeningToken !== '' && tokenIsValid(selvbetjeningToken)) {
          return auth.exchangeToken(selvbetjeningToken, targetAudience).then(
            (response) => {
              options.headers.Authorization = `Bearer ${response.access_token}`
              resolve(options)
            },
            (error) => {
              console.log('Error ved token ex', error)
              reject(error)
            }
          )
        } else {
          return resolve(options)
        }
      })
    } else {
      return options
    }
  },
  proxyReqPathResolver: (req) => {
    return pathRewriteBasedOnEnvironment(req)
  },
})

const tokenIsValid = (token) => {
  const { exp } = jwt.decode(token)
  return Date.now() < exp * 1000
}

const envProperties = {
  API_URL: process.env.API_URL || 'http://localhost:8082',
  SOKNAD_API_URL: process.env.SOKNAD_API_URL || 'http://localhost:9090',
}

const pathRewriteBasedOnEnvironment = (req) => {
  console.log('Req orig url', req.originalUrl)
  if (req.originalUrl.includes('soknad-api')) {
    return req.originalUrl.replace('/hjelpemidler/formidler/soknad-api', '/hm')
  }
  return req.originalUrl.replace('/hjelpemidler/formidler/', '/')
}

const setup = (server) => {
  let authEndpoint = null
  auth
    .setup(config.idporten, config.tokenx, config.app)
    .then((endpoint) => {
      authEndpoint = endpoint
    })
    .catch((err) => {
      console.log(`Error while setting up auth: ${err}`)
      process.exit(1)
    })

  server.use(`${config.basePath}/api/`, proxy(envProperties.API_URL, options(config.app.soknadsbehandlingAudience)))
  server.use(
    `${config.basePath}/soknad-api/`,
    proxy(envProperties.SOKNAD_API_URL, options(config.app.soknadApiAudience))
  )
}

// TODO validate cookie
const getCookie = (name, cookie) => {
  const re = new RegExp(`${name}=([^;]+)`)
  const match = re.exec(cookie)
  return match !== null ? match[1] : ''
}

module.exports = {
  setup,
}
