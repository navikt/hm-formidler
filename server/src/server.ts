import express from 'express'
import mustacheExpress from 'mustache-express'
import { authMiddleware } from './auth'
import { config } from './config'
import { routes } from './routes'
import { setupSession } from './session'

const app = express()
app.set('views', config.buildPath())
app.set('view engine', 'mustache')
app.engine('html', mustacheExpress())
app.set('trust proxy', 1)

const { session } = setupSession()

app.use(session())

const router = express.Router()
router.use('/internal/', routes.internal())
router.use('/api/', authMiddleware.requiresValidToken(), routes.soknadsbehnadlingDb())
router.use('/roller-api/', authMiddleware.requiresValidToken(), routes.roller())
router.use('/', routes.auth())
router.use('/', routes.public(app))

app.use(config.basePath, router)

const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.log('HTTP server closed')
  })
})
