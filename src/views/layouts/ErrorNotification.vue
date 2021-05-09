<template>
  <v-alert
    :value="isError"
    border="left"
    dismissible
    elevation="24"
    prominent
    :type="errorType"
    transition="fab-transition"
    class="error-notification"
  >
    {{ errorInfo }} <br v-if="notEmpty" />
    {{ errorMessage }}
  </v-alert>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ErrorNotification',

  computed: {
    notEmpty() {
      return this.errorInfo !== '' && this.errorMessage !== '';
    },

    ...mapGetters(['isError', 'errorType', 'errorMessage', 'errorInfo']),
  },
};
</script>

<style scoped>
.error-notification {
  position: fixed;
  bottom: 20vh;
  right: 1vw;
  width: 50vw;
}
</style>
