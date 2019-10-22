<template>
  <div class="contact-us-container">
    <div>
      <div class="container">
        <div class="title">고객센터</div>
        <div>
          <div>parksecret@gmail.com</div>
          <div>
            <span>02-508-6306</span>
            <el-divider direction="vertical"/>
            <span>평일 오전 9시 - 오후 7시</span>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="title">문의하기</div>
        <el-link
          type="warning"
          href="https://pf.kakao.com/_QMjPT">카카오톡 채팅하기</el-link>
        <el-divider direction="vertical"/>
        <span>24시간 채팅가능</span>
      </div>
      <div class="container">
        <div class="title">찾아오시는 길</div>
        <div>
          서울특별시 강남구 도곡로 521, 502호
        </div>
        <el-link
          type="success"
          href="https://map.naver.com/?query=&searchCoord=&tab=1&lng=92c9d3094400aa496c36bd608426eb93&mapMode=0&pinTitle=7J207Iqk7Y6Y7IWc66as7Iqk7Yq47JiB7Ja07ZWZ7JuQ&mpx=f2f18a5a58c5d1411cd75db369bc25ba6541963021fbf7b22246057beff92a8aa4d5ad7554f67d12e05c0fe74fd21016&pinId=1742847443&lat=4ee686b26fa83ea701d6f97e7bc0b239&dlevel=10&enc=b64&__pinOnly=false&menu=location&__fromRestorer=true&pinType=site">네이버 지도에서 보기</el-link>
      </div>
    </div>
  </div>
</template>

<script>
import VueMap from '~/components/units/Map'
export default {
  components: {
    VueMap
  }
}
</script>


<style lang="scss" scoped>
.container {
  margin-bottom: 24px;
  color: $oc-gray-7;
  font-size: 0.9rem;
}

.title {
  font-weight: bold;
  margin-bottom: 2px;
  color: $oc-gray-9;
}

.btn {
  display: inline-block;
  margin-top: 6px;
  padding: 8px 12px;
  border-radius: 4px;
}
</style>
