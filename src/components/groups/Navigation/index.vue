<template>
  <header 
    class="header"
    @scroll.native="scroll">
    <vue-container>
      <div class="flex justify-content-between align-items-center">
        <vue-brand-logo 
          src="/nuxt_logo.png"
          class="logo"/>

        <vue-header-menu class="header-menu"/>
      </div>
    </vue-container>
  </header>
</template>

<script>
import VueContainer from '~/components/containers'
import VueBrandLogo from '~/components/units/BrandLogo'
import VueHeaderMenu from '~/components/units/HeaderMenu'
export default {
	components: {
		VueContainer,
		VueBrandLogo,
		VueHeaderMenu
	},
	data: _ => ({
		scrolled: false
	}),
	methods: {
		handleScroll() {
			this.scrolled = window.scrollY > 0
		}
	},
	beforeMount() {
		window.addEventListener('scroll', this.handleScroll)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>

<style lang="scss">
.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	transition: all 0.3s;
	background-color: $oc-white;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

	a,
	i {
		color: $oc-gray-9;
	}
}

.logo {
	width: 30px;
	padding: 18px 0;
}
</style>