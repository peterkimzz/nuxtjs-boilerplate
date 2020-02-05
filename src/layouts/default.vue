<template>
  <div id="default-layout">
    <vue-container>
      <vue-navigation/>
    </vue-container>

    <div class="default__main">
      <nuxt/>
    </div>

    <vue-container class="bottom-container">
      <vue-footer/>
      <vue-copyright class="copyright"/>
    </vue-container>
  </div>
</template>

<script>
import VueContainer from '~/components/containers'
import VueNavigation from '~/components/groups/Navigation'
import VueFooter from '~/components/groups/Footer'
import VueCopyright from '~/components/groups/Copyright'
export default {
	components: {
		VueContainer,
		VueNavigation,
		VueFooter,
		VueCopyright
	}
}
</script>

<style lang="scss" scoped>
.copyright {
	margin-top: 20px;
}

.default__main {
	margin-top: 66px;

	@media (min-width: 1128px) {
		margin-top: 70px;
	}
}

.bottom-container {
	border-top: 1px solid $oc-gray-2;
	background-color: $oc-gray-0;
	margin-top: 20px;
	padding-top: 20px;
	padding-bottom: 80px;
}
</style>