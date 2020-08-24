<template>
  <v-footer app>
    <span>Copyright &copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram",
      ],
    };
  },
};
</script>

<style>
</style>