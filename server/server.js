const { setupSession } = require('./session')
const { setupMetrics } = require('./setupMetrics')
const { validateOidcCallback, authUrl } = require('./auth')

const express = require('express')
const path = require('path')
const mustacheExpress = require('mustache-express')
const getDecorator = require('./dekorator')
const buildPath = path.resolve(__dirname, '../build')
const { basePath } = require('./config')
const logger = require('./logger')
const server = express()
const createEnvSettingsFile = require('./envSettings.js')
const reverseProxy = require('./reverse-proxy')
const { generators, TokenSet } = require('openid-client')
const config = require('./config')

server.set('views', buildPath)
server.set('view engine', 'mustache')
server.engine('html', mustacheExpress())

server.set('trust proxy', 1)
createEnvSettingsFile(path.resolve(`${buildPath}/static/js/settings.js`))

server.use(setupSession())

// Static files
server.use(basePath, express.static(buildPath, { index: false }))

server.get([basePath + '/internal/isAlive', basePath + '/internal/isReady'], (req, res) => {
  res.send('OK')
})

const prometheus = setupMetrics()
server.get(basePath + '/internal/metrics', (req, res) => {
  res.set('Content-Type', prometheus.contentType)
  res.end(prometheus.metrics())
})

server.get(`${basePath}/login`, async (req, res) => {
  // lgtm [js/missing-rate-limiting]
  const session = req.session
  session.nonce = generators.nonce()
  session.state = generators.state()
  res.redirect(authUrl(session))
})

server.get(`${basePath}/oauth2/callback`, async (req, res) => {
  const session = req.session
  validateOidcCallback(req)
    .then((tokens) => {
      session.tokens = tokens
      session.state = null
      session.nonce = null
      res.cookie('soknad-idtoken', `${tokens.id_token}`, {
        secure: config.app.useSecureCookies,
        sameSite: 'lax',
        domain: config.idporten.domain,
        maxAge: config.session.maxAgeMs,
      })
      if (process.env.NODE_ENV !== 'production') {
        res.redirect(303, basePath)
      } else {
        res.redirect(301, config.loginservice.loginServiceUrl)
      }
    })
    .catch((err) => {
      logger.error(err)
      session.destroy(() => {})
      res.sendStatus(403)
    })
})

// check auth
if (process.env.NAIS_CLUSTER_NAME !== 'labs-gcp') {
  server.use(async (req, res, next) => {
    let currentTokens = req.session.tokens

    if (!currentTokens) {
      res.redirect(`${basePath}/login`)
    } else {
      let tokenSet = new TokenSet(currentTokens)
      if (tokenSet.expired()) {
        console.log('Token is expired, redirecting to /login for now until we have fixed issue with invalid grant')
        res.redirect(`${basePath}/login`)

        /*tokenSet = new TokenSet(await refresh(currentTokens))
        console.log('Got a new tokenset after refresh')
        req.session.tokens = tokenSet
        console.log('New tokenset saved to session')

        res.redirect(301, config.loginservice.loginServiceUrl)*/
      } else {
        return next()
      }
    }
  })
}

// Authenticated calls
reverseProxy.setup(server)

// Match everything except internal og static
server.use(/^(?!.*\/(internal|static)\/).*$/, (req, res) =>
  getDecorator()
    .then((fragments) => {
      res.render('index.html', fragments)
    })
    .catch((e) => {
      const error = `Failed to get decorator: ${e}`
      logger.error(error)
      res.status(500).send(error)
    })
)

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Listening on port ${PORT}`))
