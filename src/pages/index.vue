<template>
  <div id="container">
    <vue-hero
      title="Nuxtjs<br>Boilerplate">
      <nuxt-link 
        to="/posts" 
        class="button--grey">See Sample posts using axios.</nuxt-link>
    </vue-hero>
    <vue-container>
      <div>
        <div class="links">
          
        </div>
      </div>
    </vue-container>
  </div>
</template>

<script>
import VueContainer from '~/components/containers'
import VueHero from '~/components/units/Hero'
export default {
	components: {
		VueContainer,
		VueHero
	}
}
</script>