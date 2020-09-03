import api from '../../data/api'
import { getToken, removeToken, saveToken } from '../../data/localStorage'
import router from '../../router'

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILED = 'LOGIN_FAILED'
const LOGOUT = 'LOGOUT'
const SET_USERNAME = 'SET_USERNAME'
const SET_PASSWORD = 'SET_PASSWORD'

const state = {
  isLoggedIn: !!getToken(),
  pending: false,
  loading: false,
  result: '',
  auth: {
    username: '',
    password: ''
  }
}

// getters
const getters = {
  loggedIn: state => {
    return state.isLoggedIn
  }
}

// actions
const actions = {
  async login ({ commit }) {
    commit(LOGIN)
    await api
      .login(state.auth.username, state.auth.password)
      .then(response => {
        if (response.status === 200) {
          saveToken(response.headers.authorization)
          commit(LOGIN_SUCCESS, state.auth.username)
          router.push('/')
        }
      })
      .catch(() => commit(LOGIN_FAILED, 'Incorrect user or password'))
  },
  async logout ({ commit }) {
    commit(LOGOUT)
    await removeToken()
    router.push('/login')
  }
}

// mutations
const mutations = {
  [LOGIN] (state) {
    state.pending = true
  },
  [LOGIN_SUCCESS] (state, data) {
    state.isLoggedIn = true
    state.pending = false
    state.result = data
  },
  [LOGOUT] (state) {
    state.isLoggedIn = false
  },
  [SET_USERNAME] (state, username) {
    state.username = username
  },
  [SET_PASSWORD] (state, password) {
    state.password = password
  },
  [LOGIN_FAILED] (state, error) {
    this._vm.$Toast.fire({
      icon: 'error',
      title: error
    }).then(r => {})
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
