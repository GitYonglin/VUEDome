import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  navMenu: null
}

const mutations = {
  navMenu (state, data) {
    state.navMenu = data
  }
}

export default new Vuex.Store({
  state,
  mutations
})
