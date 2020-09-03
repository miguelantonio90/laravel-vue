import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './i18n/en'
import es from './i18n/es'
import FlagIcon from 'vue-flag-icon'

Vue.use(FlagIcon)
Vue.use(VueI18n)

// Default language
const DEFAULT_LANG = window.navigator.language.split('-')[0]

const messages = {
  es: es.lang,
  en: en.lang
}

export const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  fallbackLocale: 'en',
  messages
})
