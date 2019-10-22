<template>
  <div class="title-container">
    <h2 class="title">{{ title }}</h2>
    <div class="title__slot-container">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '제목을 입력해주세요'
    }
  }
}
</script>

<style lang="scss" scoped>
.title-container {
  margin-bottom: 100px;
}

.title {
  position: relative !important;
  display: inline-block !important;

  &::before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 5px;
    background-color: $--color-primary;
  }
}

.title__slot-container {
  padding-top: 30px;
}
</style>