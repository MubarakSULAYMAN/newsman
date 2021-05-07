<template>
  <v-container fluid class="pa-0" v-if="articles.length > 0">
    <v-card
      v-for="(article, index) in articles"
      :key="index"
      class="related-headline mb-6"
      dark
    >
      <div class="d-flex flex-column flex-no-wrap justify-space-between">
        <v-img
          :src="article.urlToImage"
          max-height="125"
          :max-width="avatarSize()"
          class="mt-2 mx-auto"
        ></v-img>

        <div>
          <v-card-subtitle class="headline subtitle-1">
            {{ article.title }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              class="button ml-2 mt-5"
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
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'RelatedHeadlines',

  methods: {
    avatarSize() {
      let newSize;

      if (this.$vuetify.breakpoint.name === 'xl') {
        newSize = 300;
      } else if (this.$vuetify.breakpoint.name === 'lg') {
        newSize = 250;
      } else if (this.$vuetify.breakpoint.name === 'lg') {
        newSize = 200;
      } else newSize = 180;

      return newSize;
    },
  },

  computed: {
    /* TODO: Improves related articles with lodash(cdn) shuffle
     *********splice out the selected news to return better results
     */
    articles() {
      return this.articles.slice(0, 7);
    },

    ...mapGetters(['articles']),
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
