<template>
    <div>
        <v-btn
            v-for="lang in languages"
            :key="lang.locale"
            :class="getClass(lang.locale)"
            @click="changeLanguage(lang.locale)">
            <flag :iso="lang.iso" v-bind:squared=false :title="lang.title"/>
        </v-btn>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { i18n } from '../../lang'

export default {
  props: {
    updateLang: {
      type: Function
    }
  },
  computed: {
    ...mapState('language', ['language']),
    languages () {
      return [
        { locale: 'es', iso: 'es', title: this.$t('spanish') },
        { locale: 'en', iso: 'us', title: this.$t('english') }
      ]
    }
  },
  methods: {
    ...mapActions('language', ['updateLanguage']),
    changeLanguage (locale) {
      i18n.locale = locale
      this.updateLanguage(locale)
    },
    getClass (locale) {
      // eslint-disable-next-line quotes
      return `${locale === i18n.locale ? 'blue darken-4 white--text' : ''}`
    }
  }
}
</script>
