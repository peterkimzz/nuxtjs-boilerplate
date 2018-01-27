<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        About Us
      </h1>
      <div class="links">
        <a
          href="https://factoryhunt.com"
          target="_blank"
          class="button--green">Go to Factory Hunt</a>
        <nuxt-link class="button--grey" to="/">Go back</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>