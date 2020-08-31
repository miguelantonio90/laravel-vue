//Core components
import Footer from '../components/core/PageFooter.vue'
import DatePicker from '../components/core/DatePicker.vue'

function setupComponents(Vue) {

    Vue.component('page-footer', Footer);
    Vue.component('date-picker', DatePicker);
}
export {
    setupComponents
}