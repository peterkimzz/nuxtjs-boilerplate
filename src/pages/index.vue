<template>
  <div id="container">
    <div>
      <h1 class="title">Nuxt + Express</h1>
      <ul>
        <li>
          <h2 class="subtitle">Nuxt.js</h2>
        </li>
        <li>
          <h2 class="subtitle">Scss</h2>
        </li>
      </ul>
      <div class="links">
        <el-button>Button</el-button>
        <nuxt-link 
          to="/posts" 
          class="button--grey">See Sample posts using axios.</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;

  ul {
    list-style: none;
    padding: 0;
  }

  .title {
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    display: flex;
    justify-content: space-around;
    padding-top: 15px;
  }
}
</style>
