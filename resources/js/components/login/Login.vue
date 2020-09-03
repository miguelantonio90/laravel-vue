<template>
  <div id="app">
    <v-app id="inspire">
      <v-main>
        <v-container fluid fill-heigth class="mt-15">
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4 class="elevation-6">
              <v-card>
                <v-toolbar color="">
                  <v-toolbar-title>
                    <h4>{{ $t('login.welcome') }}</h4>
                  </v-toolbar-title>
                </v-toolbar>
                <v-card-text class="pt-4">
                  <div class="layout column align-center">
                    <img src="assets/logo.png" alt="Vue Material Admin" width="180" height="180" />
                    <h1 class="flex my-4 primary--text">{{ $t('login.loginForm') }}</h1>
                  </div>
                  <v-form v-model="valid" ref="form">
                    <v-text-field
                      prepend-icon="mdi-account"
                      name="username"
                      :label="$t('login.labelUsername')"
                      type="text"
                      v-model="auth.username"
                      :rules="[rules.required]"
                    />
                    <v-text-field
                      prepend-icon="mdi-lock"
                      :type="hidePassword ? 'password' : 'text'"
                      :append-icon="hidePassword ? 'mdi-eye' : 'mdi-eye-off'"
                      name="password"
                      :label="$t('login.labelPassword')"
                      id="password"
                      :rules="[rules.required]"
                      v-model="auth.password"
                      @click:append="hidePassword = !hidePassword"
                    />
                    <v-layout justify-space-between>
                      <v-btn
                        @click="submit"
                        block
                        :class="{'blue darken-4 white--text' : valid, disabled:!valid}"
                      >{{ $t('login.btnLogin') }}</v-btn>
                    </v-layout>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      valid: false,
      hidePassword: true,
      rules: {
        required: (v) => !!v || this.$t('rules.required')
      }
    }
  },
  computed: {
    ...mapState('login', [
      'isLoggedIn',
      'auth',
      'loading',
      'result'
    ])
  },
  methods: {
    ...mapActions('login', ['login']),
    submit () {
      if (this.$refs.form.validate()) {
        this.login()
      }
    }
  }
}
</script>

<style scoped>
#app {
  background-image: url("/assets/vbanner.jpg");
  background-size: cover;
  overflow: hidden;
}
#inspire {
  background: none;
}
/* .loginOverlay {
  background: rgba(33, 150, 243, 0.3);
} */
</style>
