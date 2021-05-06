<template>
<!-- TODO: Consider using errorInfo to have a more concise and precise notofocation. -->
  <v-alert
    :value="isError"
    border="left"
    dismissible
    elevation="24"
    prominent
    type="error"
    transition="fab-transition"
    class="error-notification"
  >
    {{ errorInfo }} <br />
    {{ errorMessage }}
  </v-alert>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ErrorNotification',

  computed: {
    ...mapGetters(['isError', 'errorMessage', 'errorInfo']),
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
