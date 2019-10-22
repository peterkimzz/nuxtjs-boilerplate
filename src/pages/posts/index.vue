<template>
  <section>
    <h1>Posts</h1>
    <div class="posts-container">
      <div 
        v-for="(post,index) in posts"
        :key="index"
        class="post-container">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ app, error }) {
    try {
      const { data } = await app.$axios.get(
        'http://jsonplaceholder.typicode.com/posts'
      )

      return {
        posts: data
      }
    } catch (err) {
      error()
    }
  },
  data() {
    return {
      posts: []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/index';
.posts-container {
  padding: 2rem 0;

  .post-container {
    padding: 1rem;
    border-radius: 3px;
    transition: box-shadow 0.1s linear;

    &:hover {
      box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }
}
</style>
