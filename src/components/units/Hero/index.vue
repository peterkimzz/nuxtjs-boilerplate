<template>
  <div class="hero">
    <vue-container>
      <h1 v-html="title"></h1>
      <slot/>
    </vue-container>
  </div>
</template>

<script>
import VueContainer from '~/components/containers'
export default {
	components: {
		VueContainer
	},
	props: {
		title: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="scss" scoped>
.hero {
	position: relative;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	height: 250px;

	@media (min-width: 1128px) {
		height: 300px;
	}

	// &::before {
	//   content: '';
	//   position: absolute;
	//   top: 0;
	//   left: 0;
	//   right: 0;
	//   bottom: 0;
	//   background-color: rgba(0, 0, 0, 0.2);
	// }
}

h1 {
	margin: 0;
	padding-top: 40px;
	font-size: 50px;
}
</style>
