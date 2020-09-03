<template>
  <v-row>
    <v-col cols="12" class="py-0">
      <h1 class="font-weight-light mb-0">Page {{ $route.path }}...</h1>
      <span class="overline">Add other views</span>
      <new-user-modal v-if="showNewModal"></new-user-modal>
      <edit-user-modal v-if="showEditModal"></edit-user-modal>
      <v-card>
        <v-card-title>{{$route.name}}</v-card-title>
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
            <v-icon small class="mr-2">mdi-eye</v-icon>
            <v-icon small class="mr-2" @click="openEditModal(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteUser(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import NewUserModal from './New'
import EditUserModal from './Edit'

export default {
  data () {
    return {
      search: ''
    }
  },
  created () {
    this.getUsers()
  },
  components: {
    NewUserModal,
    EditUserModal
  },
  computed: {
    ...mapState('user', [
      'showNewModal',
      'showEditModal',
      'users',
      'userTableColumns',
      'isTableLoading'
    ])
  },
  methods: {
    ...mapActions('user', [
      'toogleNewModal',
      'openEditModal',
      'getUsers',
      'deleteUser'
    ]),
    deleteUser (userId) {
      this.$Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) this.$store.dispatch('user/deleteUser', userId)
      })
    }
  }
}
</script>

<style scoped>
</style>
