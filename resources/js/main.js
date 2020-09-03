/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import Notifications from './plugins/notifications'
import vuetify from './plugins/vuetify' // path to vuetify export
import { setupComponents } from './config/setup-components'
import { i18n } from './lang'

Vue.config.productionTip = false
// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
Vue.use(require('vue-chartist'))

// Import bootstrap
require('./bootstrap')

// Import progressbar
require('./progressbar')

Vue.prototype.$Toast = Notifications.Toast
Vue.prototype.$Swal = Notifications.Swal

sync(store, router)
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their 'basename'.
 *
 * Eg. ./components/index.vue -> <example-component></example-component>
 */
setupComponents(Vue)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
  i18n,
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
