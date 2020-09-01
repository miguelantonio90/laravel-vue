<template>
  <div>
    <template v-if="!$route.meta.allowAnonymous">
      <v-app id="inspire">
        <page-navigation :logoutHandler="logoutHandler"></page-navigation>
        <v-main>
          <v-container class="px-4 py-0 fill-heigth">
            <v-row class="fill-heigth">
              <v-col>
                <router-view />
              </v-col>
            </v-row>
          </v-container>
          <page-footer />
        </v-main>
      </v-app>
    </template>
    <template v-else>
      <!-- routes allowAnonymous -->
      <router-view />
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    drawer: true,
    toogleMini: false,
  }),
  computed: {
    ...mapState("login", ["isLoggedIn"]),
  },
  methods: {
    ...mapActions("login", ["logout"]),
    logoutHandler() {
      this.logout();
    },
  },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
<style scoped>
</style>
