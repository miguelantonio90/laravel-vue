<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-if="showIcon"
        v-model="date"
        :label="label"
        prepend-icon="mdi-calendar-clock"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
      <v-text-field
        v-if="!showIcon"
        v-model="date"
        :label="label"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      ref="picker"
      v-model="date"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      @change="save"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    activePicker: {
      type: String,
      default: 'YEAR'
    },
    value: {
      type: [String],
      required: false
    },
    showIcon: {
      type: [Boolean],
      default: false,
      required: false
    }
  },
  data: () => ({
    date: null,
    menu: false
  }),
  watch: {
    menu (val) {
      val &&
        setTimeout(() => (this.$refs.picker.activePicker = this.activePicker))
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
      this.$emit('save', date)
    }
  }
}
</script>

<style>
</style>
