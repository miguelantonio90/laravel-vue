import { getTheme, setTheme } from '../../data/localStorage'

const SET_THEME = 'SET_THEME'

const state = {
  theme: getTheme()
}

const actions = {
  async updateTheme ({ commit }, theme) {
    if (typeof theme === 'string') {
      await commit(SET_THEME, theme)
    }
  }
}

const mutations = {
  [SET_THEME] (state, theme) {
    setTheme(theme)
    state.theme = theme
  }
}
const getters = {
  // Shared getters
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
