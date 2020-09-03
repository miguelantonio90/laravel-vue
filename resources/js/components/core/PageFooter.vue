<template>
  <v-footer app color="gray draken-4">
    <span class="ml-auto overline">Copyright &copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    }
  }
}
</script>

<style>
</style>
