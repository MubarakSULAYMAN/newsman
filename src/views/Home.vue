<template>
  <div>
    <div class="d-flex flex-row justify-space-between align-center pa-6">
      <!-- <v-app-bar-title> -->
      <h5
        class="headline indigo--text text--darken-1 font-weight-light"
      >
        Headlines
      </h5>
      <!-- </v-app-bar-title> -->
      <news-headlines-filter />
    </div>

    <news-headlines />
  </div>
</template>

<script>
import NewsHeadlinesFilter from '@/components/NewsHeadlinesFilter.vue';
import NewsHeadlines from '@/components/NewsHeadlines.vue';

export default {
  name: 'Home',

  metaInfo() {
    return {
      titleTemplate: 'Newsman - Home',
    };
  },

  components: {
    NewsHeadlinesFilter,
    NewsHeadlines,
  },
};
</script>

<style scoped>
/* .headline:hover {
  cursor: pointer !important;
} */
</style>
