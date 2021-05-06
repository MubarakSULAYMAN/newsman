<template>
  <v-container fluid class="pa-0" v-if="articles.length > 0">
    <v-card
      v-for="(article, index) in articles"
      :key="index"
      class="related-headline mb-6"
      dark
    >
      <div class="d-flex flex-no-wrap justify-space-between">
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

        <v-avatar class="ma-3" :size="avatarSize()" tile>
          <v-img :src="article.urlToImage" max-height="125"></v-img>
        </v-avatar>
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
      if (this.$vuetify.breakpoint.name === 'xl') {
        return 125;
      }

      if (this.$vuetify.breakpoint.name === 'lg') {
        return 110;
      }

      return 95;
    },

    // openNews(headline, article) {
    //   // TODO: Introduce a mixin here and news headline
    //   let url = headline;
    //   const punctuations = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    //   if (!url) {
    //     url = null;
    //   }

    //   if (url.length > 2083) {
    //     url = url
    //       .toLowerCase()
    //       .slice(0, 2083)
    //       .replace(punctuations, '+')
    //       .replace(/\s/g, '-');
    //   }

    //   url = url.toLowerCase().replace(punctuations, '+').replace(/\s/g, '-');

    //   this.$router.push(`/news/${url}`);
    //   this.$store.dispatch('updateSelectedNews', article);
    // },
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
