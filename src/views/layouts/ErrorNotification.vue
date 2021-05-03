<template>
  <v-alert
    :value="alert"
    border="left"
    dismissible
    elevation="24"
    prominent
    type="error"
    transition="fab-transition"
    class="error-notification"
  >
    {{ errorMessage }}
  </v-alert>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ErrorNotification',

  data() {
    return {
      // errorMessage: "I'm an Alert Usage Example",
      // alert: false,
    };
  },

  computed: {
    ...mapGetters(['alert', 'errorMessage']),
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
