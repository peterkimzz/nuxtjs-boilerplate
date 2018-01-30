<template>
  <section id="container">
    <div>
      <app-logo/>
      <h1 class="title">Nuxt + Express</h1>
      <h2 class="subtitle">Nuxt.js + Express.js Starter Template by Factory Hunt</h2>
      <div class="links">
        <a
          href="https://www.factoryhunt.com/"
          target="_blank"
          class="button--green">Go to Factory Hunt</a>
        <nuxt-link
          to="/about"
          class="button--grey">About Us</nuxt-link>
        <nuxt-link
        to="/posts"
        class="button--grey">See posts</nuxt-link>
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

<style lang="scss" scoped>
@import '~assets/scss/index';

#container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;

  .title {
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
    display: flex;
    justify-content: space-around;
    padding-top: 15px;
  }
}
</style>
