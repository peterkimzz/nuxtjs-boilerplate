const axios = require('axios')
const { OG_SITELINK, GOOGLE_ANALYTICS, SENTRY_DSN, GITHUB_CLIENT_ID } = process.env

const META_TITLE = 'Nuxt.js + Express.js Perfect Starter Template'
const META_DESCRIPTION = 'Nuxt.js Expressjs Bolierplate.'

module.exports = {
  srcDir: 'app/',
  head: {
    title: META_TITLE || 'Nuxt App',
    meta: [
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: META_DESCRIPTION
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'peterkimzz'
      },
      { hid: 'canonical', rel: 'canonical', href: OG_SITELINK },
      { hid: 'og-site_name', property: 'og:site_name', content: 'nuxt + express bolierplate' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-title', property: 'og:title', content: 'nuxt + express bolierplate' },
      {
        hid: 'og-description',
        property: 'og:description',
        content: META_DESCRIPTION
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: 'https://google.com'
      },
      { hid: 'og-url', property: 'og:url', content: OG_SITELINK },

      { hid: 'twitter-site', property: 'twitter:site', content: '@peterkimzz' },
      { hid: 'twitter-card', property: 'twitter:card', content: 'summary' },
      { hid: 'twitter-title', property: 'twitter:title', content: META_TITLE },
      {
        hid: 'twitter-description',
        property: 'twitter:description',
        content: META_DESCRIPTION
      },
      {
        hid: 'twitter-image',
        property: 'twitter:image',
        content: 'https://google.com'
      },
      { hid: 'twitter-domain', property: 'twitter:domain', content: OG_SITELINK }
    ],
    link: [{ rel: 'icon', href: '/favicon.png' }]
  },
  loading: { color: '#B73333' },
  css: [
    {
      src: '~assets/scss/base.scss'
    }
  ],
  env: {
    PUBLIC_LINK: process.env.PUBLIC_LINK || 'yourdomain.com',
    BASE_URL: process.env.BASE_URL || 'http://127.0.0.1:3000',
    GITHUB_CLIENT_ID: GITHUB_CLIENT_ID || 'YOUR_GITHUB_CLIENT_ID'
  },
  modules: [
    '@nuxtjs/sentry',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-analytics',
      {
        id: GOOGLE_ANALYTICS || 'YOUR_ANALYTICS_KEY'
      }
    ]
  ],
  sentry: {
    config: {
      dsn: SENTRY_DSN || 'YOUR_SENTRY_DSN'
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: OG_SITELINK || 'localhost',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false, // Enable me when using nuxt generate
    exclude: ['/admin', '/admin/**'],
    routes: async () => {
      const { BASE_URL } = process.env
      const api = `${BASE_URL}/api/sitemap`

      const { data } = await axios.get(api)
      return data
    }
  },
  build: {
    vendor: ['axios'],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
