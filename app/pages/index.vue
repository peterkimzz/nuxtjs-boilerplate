<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-express-by-factoryhunt
      </h1>
      <h2 class="subtitle">
        Nuxt.js + Express.js Starter Template by Factory Hunt
      </h2>
      <div class="links">
        <a
          href="https://www.factoryhunt.com/"
          target="_blank"
          class="button--green">Go to Factory Hunt</a>
        <nuxt-link
          to="/about"
          class="button--grey">About Us</nuxt-link>
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

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
