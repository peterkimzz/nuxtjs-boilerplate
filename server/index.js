const app = require('express')()

const nuxt = require('./config/nuxt')
const api = require('./api')

// Libraries
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || 3000 

// Middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

// Api
app.use('/api', api)
// Nuxt.js must be used end of your middlewares.
app.use(nuxt.render)

// Start Server
app.listen(PORT, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`)
})
