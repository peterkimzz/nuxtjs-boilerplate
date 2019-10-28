<template>
  <div>
    Login Page
    <el-button @click="add">Google </el-button>
  </div>
</template>

<script>
export default {
  methods: {
    async add() {
      try {
        const { id } = await this.$store.dispatch('firestore/posts/STORE', {
          title: 'TEST TITLE',
          body: '<h1>Hello, world!</h1>'
        })

        const post = await this.$store.dispatch('firestore/posts/SET_BY_ID', {
          id,
          title: 'test'
        })

        console.log('success!')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>