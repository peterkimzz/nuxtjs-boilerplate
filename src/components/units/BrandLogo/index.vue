<template>
  <component
    :is="readonly ? 'span' : 'router-link'"
    :to="href"
    :href="href"
    class="brand-logo-container">
    <img
      :src="src"
      class="brand-logo">
  </component>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '/nuxt_logo.png'
    },
    href: {
      type: String,
      default: '/'
    },
    readonly: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.brand-logo-container {
  display: inline-block;
}
.brand-logo {
  display: inline-block;
  vertical-align: middle;
  width: 100%;
}
</style>
