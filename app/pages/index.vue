<template>
  <section id="container">
    <div>
      <app-logo/>
      <h1 class="title">Nuxt + Express</h1>
      <ul>
        <li><h2 class="subtitle">Nuxt.js</h2></li>
        <li><h2 class="subtitle">Express.js</h2></li>
        <li><h2 class="subtitle">Scss</h2></li>
        <li><h2 class="subtitle">Redis Session</h2></li>
      </ul>
      <div class="links">
        <nuxt-link
        to="/posts"
        class="button--grey">See Sample posts using axios.</nuxt-link>
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

  ul {
    list-style: none;
    padding: 0;
  }

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
