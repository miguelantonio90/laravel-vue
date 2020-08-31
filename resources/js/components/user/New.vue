<template>
  <v-dialog v-model="toogleNewModal" max-width="700px">
    <v-card>
      <v-card-title>
        <span class="headline">New User</span>
      </v-card-title>

      <v-card-text>
        <v-form v-model="valid">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="newUser.firstName"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="newUser.lastName"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="newUser.email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="newUser.username"
                :rules="usernameRules"
                :counter="25"
                label="Username"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="newUser.password"
                :rules="passwordRules"
                type="password"
                label="Password"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="newUser.nid" label="No. Id"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-select
                v-model="newUser.sexo"
                item-text="text"
                item-value="value"
                :items="sexoItems"
                label="Sexo"
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <date-picker v-model="newUser.birthday" label="Birthday"></date-picker>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="newUser.age" type="number" min="0" label="Age"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="3">
              <v-select
                v-model="newUser.race"
                item-text="text"
                item-value="value"
                :items="raceItems"
                label="Race"
              ></v-select>
            </v-col>

            <v-col cols="12" md="3">
              <v-text-field v-model="newUser.sons" type="number" min="0" label="Sons"></v-text-field>
            </v-col>

            <v-col cols="12" md="3">
              <v-text-field v-model="newUser.salary" type="number" min="0" label="Salary"></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field v-model="newUser.position" label="Position"></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="toogleNewModal(false)">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="createUser">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex";
import rules from "../../config/rules";

export default {
  data: () => ({
    valid: false,
    nameRules: rules.nameRules,
    emailRules: rules.emailRules,
    passwordRules: rules.passwordRules,
    usernameRules: rules.usernameRules,
  }),
  methods: {
    ...mapActions("user", ["createUser", "toogleNewModal"]),
  },
  computed: {
    ...mapState("user", [
      "newUser",
      "userRoles",
      "isActionInProgress",
      "sexoItems",
      "raceItems",
    ]),
  },
};
</script>

<style>
</style>
