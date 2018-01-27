const { Nuxt, Builder } = require('nuxt')
const app = require('express')()

const nuxtConfig = require('../nuxt.config')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || 3000 

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

// Initialize Nuxt.js Instance
const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt(nuxtConfig)
// Not build in Production Env
if (!isProd) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)

// Start Server
app.listen(PORT)
console.log(`Server is listening on http://${HOST}:${PORT}`)