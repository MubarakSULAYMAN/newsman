<template>
  <v-container class="error-loader rounded-lg elevation-24" v-if="isErrorLoading">
    <v-row class="fill-height" align-content="center" justify="center">
      <v-col class="subtitle-1 text-center" cols="12">
        Getting your request done
      </v-col>
      <v-col cols="6">
        <v-progress-linear
          color="indigo accent-4"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ErrorLoader',

  computed: {
    ...mapGetters(['isErrorLoading']),
  },
};
</script>

<style scoped>
.error-loader {
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  /* z-index: 1111; */
  /* background-image: linear-gradient(rgba(75, 0, 130, 0.5), rgba(75, 0, 130, 0.5)); */
}
</style>
