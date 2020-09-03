<template>
  <div>
    <v-app-bar color="primary"  fixed dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" icon large text slot="activator" >
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                        key="logout-index"
                        ripple
                        link
                        @click="logout">
                            <v-icon>mdi-logout</v-icon>
                        <v-list-item-content>Logout</v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      floating
      :permanent="drawer"
      :mini-variant.sync="mini"
      :width="drawWidth"
    >
        <v-toolbar color="primary darken-2" dark>
            <img :src="computeLogo" height="30" alt="Vue Material Admin Template" />
            <v-toolbar-title class="ml-0 pl-3">
                <span class="hidden-sm-and-down">{{ titleApp }}</span>
            </v-toolbar-title>
        </v-toolbar>
      <v-list-item class="px-2" @click="mini =!mini">
        <v-list-item-avatar>
            <v-avatar size="30px">
                <img src="assets/avatar/a4.jpg" />
            </v-avatar>
        </v-list-item-avatar>
        <v-list-item-content class="text-truncate">{{capitalize(username)}}</v-list-item-content>
        <v-btn icon small>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider/>
        <page-menu />
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    titleApp: {
      type: String,
      default: 'INNELI'
    },
    logoutHandler: {
      type: Function
    },
    username: {
      type: String,
      default: 'Karol G'
    },
    drawWidth: {
      type: [Number, String],
      default: '260'
    }
  },
  computed: {
    computeLogo () {
      return '/assets/logo.png'
    }
  },
  methods: {
    ...mapActions('login', ['logout']),
    capitalize: ([first, ...rest]) => first.toUpperCase() + rest.join('')
  },
  data: () => ({
    drawer: true,
    mini: false,
    toogleMini: false
  })
}
</script>

<style>
</style>
