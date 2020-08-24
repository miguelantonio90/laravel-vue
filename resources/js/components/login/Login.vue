<template>
  <v-main class="login">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4 lg4>
          <v-card class="elevation-1 pa-3">
            <v-card-text>
              <div class="layout column align-center">
                <img src="assets/logo.png" alt="Vue Material Admin" width="180" height="180" />
                <h1 class="flex my-4 primary--text">Login Form</h1>
              </div>
              <v-form>
                <v-text-field
                  prepend-icon="mdi-account"
                  name="username"
                  label="Username"
                  type="text"
                  v-model="auth.username"
                  :error="error"
                  :rules="[rules.required]"
                />
                <v-text-field
                  prepend-icon="mdi-lock"
                  :type="hidePassword ? 'password' : 'text'"
                  :append-icon="hidePassword ? 'mdi-eye' : 'mdi-eye-off'"
                  name="password"
                  label="Password"
                  id="password"
                  :rules="[rules.required]"
                  v-model="auth.password"
                  :error="error"
                  @click:append="hidePassword = !hidePassword"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn block color="primary" @click="login" :loading="loading">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar v-model="showResult" :timeout="2000" top>{{ result }}</v-snackbar>
  </v-main>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      hidePassword: true,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  computed: {
    ...mapState("login", [
      "isLoggedIn",
      "auth",
      "loading",
      "error",
      "showResult",
      "result",
    ]),
  },
  methods: {
    ...mapActions("login", ["login", "showPassword"]),
  },
};
</script>

<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>