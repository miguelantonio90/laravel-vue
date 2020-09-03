// Core components

import Navigation from '../components/core/Navigation'
import Menu from '../components/core/Menu'
import Footer from '../components/core/PageFooter'
import DatePicker from '../components/core/DatePicker'
import Language from '../components/core/Language'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import ThemeSettings from '../components/core/ThemeSettings'

function setupComponents (Vue) {
  Vue.component('page-navigation', Navigation)
  Vue.component('page-menu', Menu)
  Vue.component('page-footer', Footer)
  Vue.component('date-picker', DatePicker)
  Vue.component('page-language', Language)
  Vue.component('vue-perfect-scrollbar', VuePerfectScrollbar)
  Vue.component('theme-settings', ThemeSettings)
}
export {
  setupComponents
}
