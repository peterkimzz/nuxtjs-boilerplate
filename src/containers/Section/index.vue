<template>
  <div 
    :class="[
      { [type]: type }
    ]"
    class="section-container">
    <div class="max-width">
      <div class="lr-padding">
        <h2 
          v-if="title"
          :style="[
            { 'text-align': titleAlign }
          ]"
          class="title">{{ title }}</h2>

        <div 
          :style="[
            { 'text-align': align }
          ]">
          <slot name="sub-title"/>
          <div style="margin-top: 20px;">
            <slot/>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    titleAlign: {
      type: String,
      default: 'center'
    },
    align: {
      type: String,
      default: 'center'
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.section-container {
  padding-top: 100px;
  padding-bottom: 70px;

  @media (min-width: 744px) {
    padding-top: 130px;
    padding-bottom: 100px;
  }

  &.gray {
    background-color: $oc-gray-1;
  }

  &.shadow {
    background: linear-gradient(360deg, #fbfbfb 0, #fff 36px);
  }
}

.title {
  margin-top: 0;
  margin-bottom: 18px;
}
</style>