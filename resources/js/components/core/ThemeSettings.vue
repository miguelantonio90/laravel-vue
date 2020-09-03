<template>
  <div>
      <!-- theme setting -->
      <v-btn small fab dark falt fixed top="top" right="right" class="setting-fab" color="red" @click="openThemeSettings">
          <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
      <!-- setting drawer -->
      <v-navigation-drawer
          class="deep-purple accent-4"
          dark
          temporary
          right
          v-model="rightDrawer"
          hide-overlay fixed
      >
    <v-toolbar color="primary darken-4" dark>
      <v-toolbar-title>
        Theme Settings
      </v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout column>
        <v-flex>
          <v-subheader class="px-1 my-2">
            Color Option
          </v-subheader>
            <v-btn @click="toggleTheme" color="primary" class="mr-2">{{buttonText}}</v-btn>
            <v-divider></v-divider>
            <div class="my-3">
                <v-subheader class="px-1 my-2">
                    Language
                </v-subheader>
                <page-language/>
            </div>
        </v-flex>
      </v-layout>
    </v-container>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data: () => ({
    rightDrawer: false
  }),
  methods: {
    ...mapActions('theme', ['updateTheme']),
    toggleTheme () {
      const theme = !this.$vuetify.theme.dark ? 'dark' : 'light'
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.updateTheme(theme)
    },
    openThemeSettings () {
      this.$vuetify.goTo(0)
      this.rightDrawer = !this.rightDrawer
    }
  },
  computed: {
    ...mapState('theme', []),
    buttonText () {
      return !this.$vuetify.theme.dark ? 'Go Dark' : 'Go Light'
    }
  }
}
</script>
<style scoped>
    .setting-fab {
        top: 50% !important;
        right: 0;
        border-radius: 0;
    }
</style>
