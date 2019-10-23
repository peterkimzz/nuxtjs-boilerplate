<template>
  <section class="list">
    <h2 class="list__title">{{ title }}</h2>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="item.href + index">
        <span v-if="!item.href">{{ item.title }}</span>
        <component
          v-else
          :is="item.target ? 'a' : 'nuxt-link'"
          :href="item.href"
          :to="item.href"
          :target="item.target"
          class="list__link">{{ item.title }}</component>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin-bottom: 20px;
}
.list__title {
  font-size: 15px;
}
.list__link {
  font-size: 15px;
}
</style>