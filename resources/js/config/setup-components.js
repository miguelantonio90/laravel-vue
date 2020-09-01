//Core components

import Navigation from '../components/core/Navigation'
import Menu from '../components/core/Menu'
import Footer from '../components/core/PageFooter'
import DatePicker from '../components/core/DatePicker'

function setupComponents(Vue) {
    Vue.component('page-navigation', Navigation)
    Vue.component('page-menu', Menu)
    Vue.component('page-footer', Footer);
    Vue.component('date-picker', DatePicker);
}
export {
    setupComponents
}
