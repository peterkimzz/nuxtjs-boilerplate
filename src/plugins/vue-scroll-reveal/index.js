import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueScrollReveal, {
  // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  class: 'v-scroll-reveal',
  duration: 2000,
  distance: '20px',
  mobile: true
})
