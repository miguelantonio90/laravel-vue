<template>
  <div>
    <template v-if="!$route.meta.allowAnonymous">
      <v-app id="inspire">
        <div class="app-container">
          <v-app-bar app clipped-left>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Application</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text @click="logout">
              <span>Sign Out</span>
              <v-icon right>mdi-logout</v-icon>
            </v-btn>
          </v-app-bar>
          <v-navigation-drawer v-model="drawer" app clipped>
            <v-toolbar flat class="toolbar">
              <router-link :to="{ name: 'Dashboard' }">
                <img src="assets/logo.png" width="36px" />
              </router-link>
              <router-link :to="{ name: 'Dashboard' }" class="text">HOME</router-link>
            </v-toolbar>
            <v-list dense>
              <v-list-item link @click="$router.push({ name: 'Dashboard' })">
                <v-list-item-action>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link @click="$router.push({ name: 'UserList' })">
                <v-list-item-action>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>User</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-main>
            <router-view />
            <page-footer />
          </v-main>
        </div>
      </v-app>
    </template>
    <template v-else>
      <v-app id="inspire">
        <v-main>
          <!-- Provides the application the proper gutter -->
          <v-container fluid>
            <!-- If using vue-router -->
            <router-view></router-view>
          </v-container>
        </v-main>
      </v-app>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    drawer: null,
  }),
  computed: {
    ...mapState("login", ["isLoggedIn"]),
  },
  methods: {
    ...mapActions("login", ["logout"]),
  },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
