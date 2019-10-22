<template>
  <div id="default-layout">
    <vue-container>
      <vue-navigation/>
    </vue-container>

    <div>
      <nuxt/>
    </div>

    <vue-container>
      <vue-footer/>
    </vue-container>
  </div>
</template>

<script>
import VueContainer from '~/containers'
import VueNavigation from '~/components/groups/Navigation'
import VueFooter from '~/components/groups/Footer'
export default {
  components: {
    VueContainer,
    VueNavigation,
    VueFooter
  }
}
</script>