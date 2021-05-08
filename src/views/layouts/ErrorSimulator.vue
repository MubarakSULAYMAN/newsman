<template>
  <div class="">
    <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
          <!-- fixed
          bottom
          right -->
        <v-btn
          elevation="2"
          fab
          raised
          rounded
          color="red accent-4"
          small
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

  methods: {
    simulateError() {
      return this.simulateErrorState();
    },

    ...mapActions(['simulateErrorState']),
  },
};
</script>

<style scoped>
</style>
