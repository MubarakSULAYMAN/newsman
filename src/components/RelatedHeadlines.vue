<template>
  <v-container fluid class="pa-0">
    <template v-if="relatedArticles.length === 0">
      <h5 class="headline indigo--text text--darken-1 font-weight-light">
        Currently unable to get other Trending News.
      </h5>
    </template>

    <template v-else>
      <h5 class="mb-2 body-1 indigo--text text--darken-1 font-weight-black">
        Also read...
      </h5>

      <v-card
        v-for="article in relatedArticles"
        :key="article.url"
        class="related-headline mb-6"
        dark
      >
        <v-skeleton-loader
          :loading="isTrendingLoading"
          transition-group="fade-transition"
          height="94"
          type="card-avatar"
        >
          <div
            class="d-flex flex-column flex-sm-row flex-md-column flex-no-wrap justify-space-between"
          >
            <v-img
              :src="article.urlToImage"
              :alt="article.title"
              max-height="125"
              :max-width="avatarSize"
              class="ml-2 ml-md-0 mb-2 mb-md-0 mt-2 mx-auto"
            ></v-img>

            <div>
              <v-card-subtitle class="headline subtitle-1">
                {{ article.title }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  class="button ml-2"
                  outlined
                  rounded
                  small
                  @click="openNews(article.title, article)"
                >
                  Read Now
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-skeleton-loader>
      </v-card>
    </template>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'RelatedHeadlines',

  computed: {
    avatarSize() {
      let newSize;

      if (this.$vuetify.breakpoint.name === 'xl') {
        newSize = 300;
      } else if (this.$vuetify.breakpoint.name === 'lg') {
        newSize = 250;
      } else if (this.$vuetify.breakpoint.name === 'md') {
        newSize = 200;
      } else newSize = 180;

      return newSize;
    },

    ...mapGetters(['isTrendingLoading', 'relatedArticles']),
  },
};
</script>

<style scoped>
.related-headline,
.headline,
.button {
  color: #3f51b5;
  background-color: #ffffff;
  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
}

.headline {
  color: #3f51b5 !important;
}

.related-headline:hover {
  background-color: #3f51b5;
}

.related-headline:hover .headline {
  color: #ffffff !important;
  background-color: #3f51b5 !important;
}

.related-headline:hover .button {
  border: 1px solid #ffffff;
}
</style>
