module.exports = {
  mode: 'universal',
  server: {
    port: 3000
  },
  srcDir: 'src/',
  generate: {
    dir: 'public'
  },
  head: {
    htmlAttrs: {
      lang: 'ko'
    },
    title: 'Nuxt.js Bolierplate :: peterkimzz',
    meta: [
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'robots', content: 'index, follow' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      },
      {
        name: 'google-site-verification',
        content: 'xxxx'
      }
    ],
    link: [{ rel: 'icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://use.fontawesome.com/releases/v5.11.2/js/all.js'
      }
    ]
  },
  loading: { color: '#42b883', height: '3px' },
  pageTransition: 'fade',
  router: {
    // middleware: ['me'],
    // scrollBehavior: (to, from, savedPosition) => ({ x: 0, y: 0 })
  },
  env: {},
  plugins: [
    { src: '~plugins/axios' },
    // { src: '~plugins/firebase' },
    { src: '~plugins/element-ui' },
    { src: '~plugins/vue-moment' },
    { src: '~plugins/vue-scroll-reveal', mode: 'client' },
    { src: '~plugins/vue-scrollto', mode: 'client' },
    { src: '~plugins/vue-burger-menu', mode: 'client' }
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap'
  ],
  googleAnalytics: {
    id: 'GA-YOUR-KEY'
  },
  styleResources: {
    scss: ['node_modules/open-color/open-color.scss', '~assets/scss/index.scss']
  },
  sitemap: {
    hostname: 'http://www.YOUR_DOMAIN.com',
    path: '/sitemap.xml',
    gzip: true,
    exclude: ['/users'],
    routes: ['/', '/login']
    /*
      Generate Dynamic Routes
    */
    // routes: async () => {

    //    const axios = require('axios')
    //   const { BASE_URL } = process.env;
    //   const api = `${BASE_URL}/api/sitemap`;
    //   const { data } = await axios.get(api);
    //   return data;
    //   return ''
    // }
  },
  build: {
    extend(config, ctx) {}
  }
}
