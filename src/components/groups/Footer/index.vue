<template>
  <footer class="footer">
    <div class="footer-flex-container">
      <div class="left-container">
        <vue-brand-logo class="logo"/>
        
        <div class="section">
          <span class="bold">Nuxtjs Boilerplate</span><br>
          <span>사업자등록번호 000-00-00000</span><br>
          <span>Founder peterkimzz</span>
        </div>

        <div class="section">
          <span>서울특별시 XX구 XX로 1</span><br>
          <span>(지번) 서울특별시 XX구 XX동 1-1</span>
        </div>

        <div class="section">
          <span>peterkimzz69@email.com</span><br>
          <span>+2-1234-5678</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import VueBrandLogo from '~/components/units/BrandLogo'
export default {
  components: {
    VueBrandLogo
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 180px;
  padding: 0;
}
.footer {
  color: $oc-gray-7;
  padding-top: 80px;
  font-size: 14px;

  @media (min-width: 744px) {
    font-size: 15px;
  }
  @media (min-width: 1128px) {
  }
}

.footer-flex-container {
  @media (min-width: 744px) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1128px) {
  }
}

.section {
  margin-top: 20px;
}

.bold {
  font-weight: bold;
}
</style>