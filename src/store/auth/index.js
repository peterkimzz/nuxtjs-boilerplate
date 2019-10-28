export const state = () => {
  user: null
}

export const getters = {
  GET_USER: state => {
    return state.user
  }
}

export const mutations = {
  login(state, payload) {
    state.user = payload.user
  },
  clearAuthData(state) {
    state.user = null
  }
}

export const actions = {}
