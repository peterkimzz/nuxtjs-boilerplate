<template>
  <footer>
    <div class="footer-section left-container">
      <span>
        Made by peterkimzz
      </span>
    </div>
    <div class="footer-section right-container">
      <ul>
        <li>
          <a 
            href="https://github.com/peterkimzz/nuxt-express-perfect-starter-template" 
            target="_blank">
            <img 
              src="~assets/icons/github-logo.svg" 
              alt="">
          </a>
        </li>
        <li>
          <a 
            href="//peterkimzz.com" 
            target="_blank">
            Blog
          </a>
        </li>
        <li>
          <a 
            href="//peterkimzz.com" 
            target="_blank">
            Blog
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '~assets/scss/index';
footer {
  border-top: 1px solid $color-border-gray;
  padding-top: 18px;
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: inline-block;
  margin-left: 12px;
  height: 100%;

  img {
    vertical-align: middle;
    height: 22px;
  }
}
</style>
