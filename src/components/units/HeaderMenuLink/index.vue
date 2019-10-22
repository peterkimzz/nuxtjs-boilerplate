<template>
  <a
    :href="href"
    class="header-menu-link flex justify-content-between"
    @click="$emit('click')">
    <slot/>
    <i 
      v-if="arrow"
      class="el-icon-arrow-right"/>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    },
    arrow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.header-menu-link {
  padding: 10px 20px;
  text-decoration: none;
}
</style>