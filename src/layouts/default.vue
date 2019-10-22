<template>
  <div id="default-layout">
    <vue-navigation/>
    <div class="body-container">
      <div class="body-contents">
        <nuxt/>
      </div>
      <vue-footer/>
    </div>
  </div>
</template>

<script>
import VueNavigation from '~/components/groups/Navigation'
import VueFooter from '~/components/groups/Footer'
export default {
  components: {
    VueNavigation,
    VueFooter
  }
}
</script>