<template>
  <div>
    <navigation-bar/>
    <div class="body-container">
      <div class="body-contents">
        <nuxt/>
      </div>
      <footer-bar/>
    </div>
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar'
import FooterBar from '~/components/FooterBar'
export default {
  components: {
    NavigationBar,
    FooterBar
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/index';
</style>
