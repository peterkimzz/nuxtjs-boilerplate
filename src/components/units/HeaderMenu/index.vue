<template>
  <ul 
    class="header-menu flex align-items-center">

    <div class="desktop-only">
      <span 
        class="link"
        v-scroll-to="'#about'">포스트</span>
      <span 
        class="link"
        v-scroll-to="'#feature'">로그인</span>
    </div>

    <div class="mobile-only">
      <i 
        aria-hidden="true"
        class="fa fa-bars menu-icon" 
        @click="isOpen = !isOpen"/>
    </div>
  </ul>
</template>

<script>
import VueHeaderMenuLink from '~/components/units/HeaderMenuLink'
export default {
  components: {
    VueHeaderMenuLink
  },
  data: _ => ({
    isOpen: false
  })
}
</script>

<style lang="scss" scoped>
.menu-icon {
  font-size: 26px;
}

.desktop-only {
  .link {
    text-decoration: none;
    padding: 20px 0;
    display: inline-block;
    margin-left: 14px;
    font-weight: bold;
    font-size: 17px;

    &:hover {
      text-decoration: underline;
    }
  }
}

.menu-container {
  // padding: 20px;
}
.menu__title {
  padding: 10px 20px;
  background-color: $oc-gray-1;
  color: $oc-gray-8;
  margin-bottom: 14px;
}
</style>