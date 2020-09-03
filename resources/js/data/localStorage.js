import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

export function saveToken (token) {
  return Vue.localStorage.set('token', 'Bearer ' + token)
}

export function removeToken () {
  return Vue.localStorage.remove('token')
}

export function getToken () {
  return Vue.localStorage.get('token')
}

export function setLanguage (item) {
  return Vue.localStorage.set('language', item)
}

export function getLanguage (item) {
  return Vue.localStorage.get('language')
}

export function setTheme (item) {
  return Vue.localStorage.set('theme', item)
}

export function getTheme (item) {
  return Vue.localStorage.get('theme')
}
