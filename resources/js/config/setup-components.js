//Core components
import Menu from '../components/core/Menu.vue';
import Footer from '../components/core/PageFooter.vue'

function setupComponents(Vue) {

    Vue.component('menu-navigation', Menu);
    Vue.component('page-footer', Footer);
}
export {
    setupComponents
}