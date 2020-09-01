<template>
  <v-list>
    <v-list-item
      v-for="item in items"
      :key="item.title"
      link
      @click="$router.push({ name: item.route })"
    >
      <v-list-item-icon>
        <v-icon color="primary">{{item.icon}}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="primary--text">{{item.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Home", route: "Dashboard", icon: "mdi-home-outline" },
      { title: "Customers", route: "Customers", icon: "mdi-account-search-outline" },
    ],
  }),
};
</script>

<style>
</style>
