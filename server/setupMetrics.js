const prom_client = require('prom-client')

const setupMetrics = () => {
  const collectDefaultMetrics = prom_client.collectDefaultMetrics
  const Registry = prom_client.Registry
  const register = new Registry()

  collectDefaultMetrics({ register })
  return register
}

module.exports = {
  setupMetrics,
}
