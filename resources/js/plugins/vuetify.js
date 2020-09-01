import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        dark: true,
        themes:{
            primary:'#007bff',
            secondary:'#333',
            accent:'#37474F'
        }
    }
}

export default new Vuetify(opts)
