<template>
  <nav>
    <!-- Logo -->
    <div class="nav-section">
      <a href="/">
        <div id="nav-logo-container">
          <img id="nav-logo" src="~/assets/img/nuxt-logo.png" alt="logo">
        </div>
      </a>
    </div>

    <!-- Center -->
    <div class="nav-section" id="nav-center-container"></div>

    <!-- Buttons -->
    <div class="nav-section" id="nav-button-container">
      <ul>
        <li><nuxt-link to="/register">Sign Up</nuxt-link></li>
        <li><nuxt-link to="/login">Login</nuxt-link></li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "~assets/scss/index";
nav {
  display: table;
  position: relative;
  width: 100%;
}
.nav-section {
  display: table-cell;
  height: 100%;
}

#nav-logo-container {
  position: relative;
  padding: 14px;
}
#nav-logo {
  width: 60px;
  height: 60px;
}

#nav-center-container {
  width: 100%;
}

#nav-button-container {
  width: 100%;
  padding: 0 20px;
  vertical-align: middle;
  white-space: nowrap;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  margin-right: 24px;
}
</style>
