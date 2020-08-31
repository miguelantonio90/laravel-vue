<template>
  <v-container>
    <new-user-modal v-if="showNewModal"></new-user-modal>
    <edit-user-modal v-if="showEditModal"></edit-user-modal>
    <v-card>
      <v-card-title>Users</v-card-title>
      <v-data-table
        :headers="userTableColumns"
        :items="users"
        :loading="isTableLoading"
        sort-by="firstName"
        class="elevation-1"
        :search="search"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn color="primary" class="mb-2" @click="toogleNewModal(true)">New User</v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="openEditModal(item.id)">mdi-pencil</v-icon>
          <v-icon small @click="deleteUser(item.id)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import NewUserModal from "./New";
import EditUserModal from "./Edit";

export default {
  data() {
    return {
      search: "",
    };
  },
  created() {
    this.getUsers();
  },
  components: {
    NewUserModal,
    EditUserModal,
  },
  computed: {
    ...mapState("user", [
      "showNewModal",
      "showEditModal",
      "users",
      "userTableColumns",
      "isTableLoading",
    ]),
  },
  methods: {
    ...mapActions("user", [
      "toogleNewModal",
      "openEditModal",
      "getUsers",
      "deleteUser",
    ]),
    deleteUser(userId) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) this.$store.dispatch("user/deleteUser", userId);
      });
    },
  },
};
</script>

<style scoped>
</style>
