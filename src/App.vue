<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title class="app-name" @click="goHome">
        Newsman
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- TODO: Add search on keyup functionality with rebounce function -->
      <v-text-field
        class="mx-4"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
        clearable
        clear-icon="mdi-close-circle"
        v-model="searchText"
      ></v-text-field>
    </v-app-bar>

    <v-main>
      <router-view />

      <news-headlines-history class="fab-item" />

      <error-simulator class="fab-item" />

      <error-notification />

      <error-loader />
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
import TheFooter from '@/views/layouts/TheFooter.vue';
import NewsHeadlinesHistory from '@/views/layouts/NewsHeadlinesHistory.vue';
import ErrorSimulator from '@/views/layouts/ErrorSimulator.vue';
import ErrorNotification from '@/views/layouts/ErrorNotification.vue';
import ErrorLoader from '@/views/layouts/ErrorLoader.vue';
// import api from '@/utils/services/RequestService';

export default {
  name: 'App',

  components: {
    TheFooter,
    NewsHeadlinesHistory,
    ErrorSimulator,
    ErrorNotification,
    ErrorLoader,
  },

  data() {
    return {
      searchText: '',
      // buttonState: {},
    };
  },

  // computed: {

  // },

  methods: {
    goHome() {
      if (this.$router.currentRoute.path !== '') {
        return this.$router.push('/').catch((err) => {
          if (err.name !== 'NavigationDuplicated') {
            console.log(err);
          }
        });
      }
      return {};
    },
  },

  created() {
    // return alert(this.$router.currentRoute.path);
    // return api.simulateError();
  },
};
</script>

<style scoped>
.app-name:hover {
  cursor: pointer;
}

/* .fab-item {
  position: fixed;
  top: 30vh !important;
} */
</style>
