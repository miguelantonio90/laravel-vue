<template>
    <vue-perfect-scrollbar class="drawer-menu--scroll" :settings="scrollSettings">
        <v-list dense>
            <v-list-item link to="/">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <template v-for="item in menus">
                <v-list-group
                    v-if="item.group"
                    :key="item.title"
                    :prepend-icon="item.icon"
                    no-action
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="subItem in item.items"
                        :key="subItem.title"
                        link
                        :to="subItem.path"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-text="subItem.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item v-else :key="item.title" link :to="item.path">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                </v-list-item>
            </template>
        </v-list>
    </vue-perfect-scrollbar>
</template>

<script>
import menu from '../../config/menu'
export default {
  data: () => ({
    scrollSettings: {
      maxScrollbarLength: 160
    },
    menus: menu
  }),
  methods: {}
}
</script>

<style>
</style>
