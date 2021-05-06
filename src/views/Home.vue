<template>
  <div>
    <div class="d-flex flex-row justify-space-between align-center pa-6">
      <h5 class="headline indigo--text text--darken-1 font-weight-light">
        Headlines
      </h5>
      <news-headlines-filter />
    </div>

    <h5
      class="headline text-center indigo--text text--darken-1 font-weight-black"
      v-if="articles"
    >
      You may need a refresh. <br />
      If issue persist, kindly contact us.
    </h5>
    <news-headlines v-if="!articles" />
  </div>
</template>

<script>
import NewsHeadlinesFilter from '@/components/NewsHeadlinesFilter.vue';
import NewsHeadlines from '@/components/NewsHeadlines.vue';
import { mapGetters } from 'vuex';

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

  computed: {
    ...mapGetters(['articles']),
  },
};
</script>

<style scoped>
/* .headline:hover {
  cursor: pointer !important;
} */
</style>
