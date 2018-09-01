if (!process.env.NODE_ENV) process.env.DEBUG = 'nuxt:*'

// const http = require('http')
// const https = require('https')
const app = require('express')()

// Modules
require('dotenv').config()
require('./middleware/module_alias')

const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
// const glx = require('./middleware/greenlock')
// const session = require('express-session')
// const redis = require('./middleware/redis')(session)
const api = require('./api')
const nuxt = require('./middleware/nuxt')

// Properties
const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || 3000
// const SSL_PORT = process.env.SSL_PORT || 443

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
// app.use(session(redis))

// Api
app.use('/api', api)
require('./middleware/forcedomain')(app)
app.use(nuxt.render)

// Start Server
app.listen(PORT, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`)
})

// Listening
// http.createServer(app).listen(PORT, () => {
//   console.log('Listening for ACME http-01 challenges on ', PORT)
// })

// https.createServer(glx.httpsOptions, app).listen(SSL_PORT, () => {
//   console.info(`Server is listening on http://${HOST}:${SSL_PORT}`)
// })
