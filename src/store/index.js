export const state = () => ({})

export const getters = () => {}

export const mutations = {}

export const actions = {
  async nuxtServerInit({ commit }, { app, req }) {
    try {
      console.log('nuxt server init.')
    } catch (err) {
      console.log(err)
      console.log('Error occured..\n')
    }
  }
}
