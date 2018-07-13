module.exports = {
  srcDir: 'app/',
  head: {
    title: 'Nuxt.js + Express.js Perfect Starter Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js + Express.js + Sass Starter Template by Factory Hunt Team'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'nuxtjs, nuxt, node, nodejs, express, expressjs, axios, scss, sass, google'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900'
      }
    ]
  },
  // variables in "env" are use client & server side. ex) const url = process.env.baseUrl
  env: {
    host: '127.0.0.1',
    port: '3000',
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  loading: { color: '#3B8070' },
  css: ['~assets/scss/index.scss'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'AB-12345-6' // Replace your api key
      }
    ]
  ],
  sentry: {
    public_key: '',
    private_key: '',
    project_id: '',
    config: {
      // Additional config
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://127.0.0.1.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false, // Enable me when using nuxt generate
    exclude: ['/admin/**']
  },
  plugins: ['~/plugins/axios'],
  build: {
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
