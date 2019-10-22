<template>
  <ul 
    class="header-menu flex align-items-center">

    <div class="desktop-only">
      <span 
        class="link"
        v-scroll-to="'#about'">학원 소개</span>
      <span 
        class="link"
        v-scroll-to="'#feature'">특징</span>
      <span 
        class="link"
        v-scroll-to="'#contact'">문의하기</span>
    </div>

    <div class="mobile-only">
      <i 
        aria-hidden="true"
        class="fa fa-bars menu-icon" 
        @click="isOpen = !isOpen"/>
      <el-drawer
        title="메뉴"
        :visible.sync="isOpen"
        direction="rtl"
        size="80%">
        <ul class="menu-container">
          <li
            :arrow="false"
            href="/" 
            is="vue-header-menu-link">홈</li>

          <h5 class="menu__title">메뉴</h5>
          <li
            v-scroll-to="'#about'"
            :arrow="false"
            is="vue-header-menu-link"
            @click="isOpen = false">학원 소개</li>
          <li
            v-scroll-to="'#feature'"
            :arrow="false"
            is="vue-header-menu-link"
            @click="isOpen = false">학원 특징</li>
          <li
            v-scroll-to="'#contact'"
            :arrow="false"
            is="vue-header-menu-link"
            @click="isOpen = false">문의하기</li>
        </ul>
      </el-drawer>
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