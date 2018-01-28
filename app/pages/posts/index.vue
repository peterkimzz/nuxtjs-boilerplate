<template>
  <section>
    <nuxt-link to="/">Go home</nuxt-link>

    <h1>Posts</h1>
    <div class="posts-container">
      <div class="post-container" v-for="(post,index) in posts" :key="index">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    async asyncData () {
      let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
      return {
        posts: data
      }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    max-width: 1040px;
    margin: 0 auto;

    .posts-container {
      padding: 2rem 0;

      .post-container {
        padding: 1rem;
        border-radius: 3px;

        &:hover {
          box-shadow: 1px 1px 10px #484848;
          cursor: pointer;
        }
      }
    }
  }
</style>
