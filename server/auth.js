const { Issuer, TokenSet } = require('openid-client')
const jwt = require('jsonwebtoken')
const ULID = require('ulid')
const jose = require('node-jose')
const logger = require('./logger')

let tokenxConfig = null
let tokenxClient = null
let tokenxMetadata = null
let idportenConfig = null
let idportenClient = null
let idportenMetadata = null
let appConfig = null

const setup = async (idpConfig, txConfig, appConf) => {
  if (process.env.NAIS_CLUSTER_NAME === 'labs-gcp') return
  else {
    idportenConfig = idpConfig
    tokenxConfig = txConfig
    appConfig = appConf
    return init().then((clients) => {
      idportenClient = clients.idporten
      tokenxClient = clients.tokenx
    })
  }
}

const init = async () => {
  try {
    const idporten = await Issuer.discover(idportenConfig.discoveryUrl)
    const tokenx = await Issuer.discover(tokenxConfig.discoveryUrl)
    tokenxMetadata = tokenx
    idportenMetadata = idporten

    const idportenJwk = JSON.parse(idportenConfig.clientJwk)
    idportenClient = new idporten.Client(
      {
        client_id: idportenConfig.clientID,
        token_endpoint_auth_method: 'private_key_jwt',
        token_endpoint_auth_signing_alg: 'RS256',
        redirect_uris: [idportenConfig.redirectUri],
        response_types: ['code'],
      },
      {
        keys: [idportenJwk],
      }
    )

    tokenxClient = new tokenx.Client({
      client_id: tokenxConfig.clientID,
      redirect_uris: [tokenxConfig.redirectUri, 'http://localhost:3000/callback'],
      token_endpoint_auth_method: 'none',
    })

    return Promise.resolve({ idporten: idportenClient, tokenx: tokenxClient })
  } catch (err) {
    return Promise.reject(err)
  }
}

const refresh = (oldTokenSet) => {
  const additionalClaims = {
    clientAssertionPayload: {
      aud: idportenMetadata.issuer,
    },
  }

  return idportenClient
    .refresh(new TokenSet(oldTokenSet), additionalClaims)
    .then((newTokenSet) => {
      console.log('Got new TokenSet from idporten')

      return Promise.resolve(newTokenSet)
    })
    .catch((err) => {
      logger.error('Error when refreshing tokens', err)
      return Promise.reject(err)
    })
}

const authUrl = (session) => {
  return idportenClient.authorizationUrl({
    scope: idportenConfig.scope,
    redirect_uri: idportenConfig.redirectUri,
    response_type: idportenConfig.responseType[0],
    response_mode: 'query',
    nonce: session.nonce,
    state: session.state,
    resource: 'https://nav.no',
    acr_values: 'Level4',
  })
}

const validateOidcCallback = async (req) => {
  const params = idportenClient.callbackParams(req)
  const nonce = req.session.nonce
  const state = req.session.state
  const additionalClaims = {
    clientAssertionPayload: {
      aud: idportenMetadata.issuer,
    },
  }

  return idportenClient
    .callback(idportenConfig.redirectUri, params, { nonce, state }, additionalClaims)
    .catch((err) => {
      logger.info(`error in oidc callback: ${err}`)
      Promise.reject(`error in oidc callback: ${err}`)
    })
    .then(async (tokenSet) => {
      return tokenSet
    })
}

const exchangeToken = async (selvbetjeningsToken, targetAudience) => {
  const clientAssertion = await createClientAssertion()
  return tokenxClient
    .grant({
      grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
      client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
      token_endpoint_auth_method: 'private_key_jwt',
      subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
      client_assertion: clientAssertion,
      audience: targetAudience,
      subject_token: selvbetjeningsToken,
    })
    .then((tokenSet) => {
      return Promise.resolve(tokenSet)
    })
    .catch((err) => {
      console.log(`Error while exchanging token: ${err}`)
      return Promise.reject(err)
    })
}

const createClientAssertion = async () => {
  const now = Math.floor(Date.now() / 1000)
  return jwt.sign(
    {
      sub: tokenxConfig.clientID,
      aud: tokenxMetadata.token_endpoint,
      iss: tokenxConfig.clientID,
      exp: now + 60, // max 120
      iat: now,
      jti: ULID.ulid(),
      nbf: now,
    },
    await privateKeyToPem(tokenxConfig.privateJwk),
    { algorithm: 'RS256' }
  )
}

const privateKeyToPem = async (jwk) => {
  return jose.JWK.asKey(jwk).then((key) => {
    return Promise.resolve(key.toPEM(true))
  })
}

module.exports = {
  setup,
  exchangeToken,
  authUrl,
  validateOidcCallback,
  refresh,
}
