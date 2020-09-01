<template>
  <div>
    <v-app-bar app color="gray draken-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{titleApp}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="logoutHandler">
        <span>Out</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      floating
      :permanent="drawer"
      :mini-variant.sync="mini"
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon @click.stop="drawer = !drawer">mdi-chevron-left</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list-item class="px-2" @click="toogleMini =!toogleMini">
        <v-list-item-avatar>
          <v-icon>mdi-account-outline</v-icon>
        </v-list-item-avatar>
        <v-list-item-content class="text-truncate">{{capitalize(username)}}</v-list-item-content>
        <v-btn icon small>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <page-menu />
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    titleApp: {
      type: String,
      default: "Aplication",
    },
    logoutHandler: {
      type: Function,
    },
    username: {
      type: String,
      default: "Karol G",
    },
  },
  data: () => ({
    drawer: true,
    toogleMini: false,
  }),
  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toogleMini;
    },
  },
  methods: {
    capitalize: ([first, ...rest]) => first.toUpperCase() + rest.join(""),
  },
};
</script>

<style>
</style>
