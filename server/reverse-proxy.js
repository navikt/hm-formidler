const jwt = require('jsonwebtoken')
const auth = require('./auth')
const proxy = require('express-http-proxy')
const config = require('./config')

const logger = require('./logger')

const options = () => ({
  parseReqBody: false,
  proxyReqOptDecorator: (options, req) => {
    if (process.env.NAIS_CLUSTER_NAME !== 'labs-gcp') {
      return new Promise((resolve, reject) => {
        const selvbetjeningToken = req.session.tokens.access_token

        if (selvbetjeningToken !== '' && tokenIsValid(selvbetjeningToken)) {
          return auth.exchangeToken(selvbetjeningToken).then(
            (response) => {
              options.headers.Authorization = `Bearer ${response.access_token}`
              resolve(options)
            },
            (error) => reject(error)
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
}

const pathRewriteBasedOnEnvironment = (req) => {
  /*if (process.env.NAIS_CLUSTER_NAME === 'prod-gcp' || process.env.NAIS_CLUSTER_NAME === 'dev-gcp') {
    const newUrl = req.originalUrl.replace('/hjelpemidler/formidler/api', '')
    return newUrl
  } else {*/
  // /hjelpemidler/formidler/api/bruker/soknad/62f68547-11ae-418c-8ab7-4d2af985bcd9
  return req.originalUrl.replace('/hjelpemidler/formidler/', '/')
  // }
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

  server.use(`${config.basePath}/api/`, proxy(envProperties.API_URL, options()))
  //server.use(`${config.basePath}/api/`, proxy(envProperties.API_URL))
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
