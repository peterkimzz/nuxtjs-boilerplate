process.env.DEBUG = 'nuxt:*'
const app = require('express')()

// Modules
const nuxt = require('./middleware/nuxt')
const api = require('./api')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session')
const redis = require('./middleware/redis')(session)

// Properties
const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || 3000

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use(session(redis))

// Api
app.use('/api', api)
// Nuxt.js must be used end of your middlewares.
app.use(nuxt.render)

// Start Server
app.listen(PORT, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`)
})
