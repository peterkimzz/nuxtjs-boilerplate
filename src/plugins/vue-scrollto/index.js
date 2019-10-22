import Vue from 'vue'

import VueScrollTo from 'vue-scrollto'

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1000,
  offset: -100
})
