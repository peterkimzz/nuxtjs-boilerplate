<template>
  <div class="index-container">
    <div class="lr-padding">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lr-padding {
  padding: 0 20px;
  margin: 0 auto;
  max-width: 800px;
}
</style>