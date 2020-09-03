import Languages from '../../lang/i18n'
import { getLanguage, setLanguage } from '../../data/localStorage'

const supportedLanguages = Object.getOwnPropertyNames(Languages)

const SET_LANGUAGE = 'SET_LANGUAGE'

const state = {
  language: getLanguage()
}

const actions = {
  async updateLanguage ({ commit }, languages) {
    if (typeof languages === 'string') {
      await commit(SET_LANGUAGE, languages)
    } else {
      const language = await supportedLanguages.find(sl =>
        languages.find(l => (l.split(new RegExp(sl, 'gi')).length - 1 > 0 ? sl : null)))
      commit(SET_LANGUAGE, language)
    }
  }
}

const mutations = {
  [SET_LANGUAGE] (state, lang) {
    setLanguage(lang)
    state.language = lang
  }
}
const getters = {
  // Shared getters
  language: state => {
    return state.language
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
