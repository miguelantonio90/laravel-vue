import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import login from './modules/loginStore'
import user from './modules/userStore'
import language from './modules/langStore'
import theme from './modules/themeStrone'

Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    theme,
    language,
    login,
    user
  },
  state: {
    windowHeight: 0,
    windowWidth: 0
  },
  actions: {

  },

  mutations: {
    'setWindowHeight' (state, { windowHeight }) {
      state.windowHeight = windowHeight
    },
    'setWindowWidth' (state, { windowWidth }) {
      state.windowWidth = windowWidth
    }
  },
  getters: {
    // Shared getters
  }
})
