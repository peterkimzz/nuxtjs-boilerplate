<template>
  <div class="copyright">
    <div>
      <span class="item"><strong>Nuxtjs Boilerplate</strong></span>
      <el-divider 
        direction="vertical"
        class="desktop-only"/>
      <span class="item">사업자등록번호: 000-00-00000</span>
      <el-divider 
        direction="vertical"
        class="desktop-only"/>
      <span class="item">대표: 김동현</span>
    </div>
    <div>
      <span class="item">서울특별시 XX구 XX로 1</span>
      <span class="item">(지번) 서울특별시 XX구 XX동 1-1</span>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.copyright {
  color: $oc-gray-7;
  font-size: 13px;
}

.item {
  display: block;

  @media (min-width: 1128px) {
    display: inline-block;
  }
}
</style>