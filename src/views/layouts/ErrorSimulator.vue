<template>
  <div class="">
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          elevation="2"
          fab
          raised
          rounded
          color="red accent-4"
          small
          fixed
          bottom
          right
          dark
          v-bind="attrs"
          v-on="on"
          @click="simulateError"
        >
          <v-icon>mdi-alert-decagram</v-icon>
        </v-btn>
      </template>
      <span>Simulate an error call here &#129324; &#128561;</span>
    </v-tooltip>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ErrorSimulator',

  data() {
    return {
      // alert: false,
    };
  },

  //   watch: {
  //     dialog(val) {
  //       if (!val) return;

  //       setTimeout(function () {
  //         this.dialog = false;
  //       }, 4000);
  //     },
  //   },

  methods: {
    simulateError() {
      return this.simulateErrorState();
      // alert('Hello');
    },

    ...mapActions(['simulateErrorState']),
  },
};
</script>

<style scoped>
</style>
