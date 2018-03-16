const { Nuxt, Builder } = require('nuxt')
const config = require('../../../nuxt.config.js')

// Initialize Nuxt.js Instance
const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt(config)

// Not build in Production Env
if (!isProd) {
  const builder = new Builder(nuxt)
  builder.build()
}

module.exports = nuxt
