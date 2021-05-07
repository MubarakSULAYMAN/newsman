<template>
  <v-container fluid>
    <h5
      class="headline indigo--text text--darken-1 font-weight-light"
      v-if="isArticleEmpty(selectedNews)"
    >
      Feature Presently not available. <br />
      Kindly use the Trending News section or return home
      <v-icon size="24px" color="indigo darken-1" @click="$router.push('/')"
        >mdi-home</v-icon
      >
      to read news.
    </h5>
    <v-card
      fluid
      class="selected-news mx-auto"
      v-if="!isArticleEmpty(selectedNews)"
    >
      <v-img class="news-image" :src="selectedNews.urlToImage"></v-img>

      <v-card-title class="caption">{{ selectedHeadline }}</v-card-title>

      <v-card-actions class="d-flex">
        <v-card-title class="px-2 py-0">{{ selectedHeadline }}</v-card-title>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class=""
              outlined
              x-small
              fab
              color="indigo"
              v-bind="attrs"
              v-on="on"
              @click="overlay = !overlay"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </template>
          <span>Edit headline, your way &#128521; &#129299;</span>
        </v-tooltip>
      </v-card-actions>

      <v-overlay :value="overlay" opacity="0.7">
        <headline-editor
          @overlayStatus="overlay = !overlay"
          class="headline-editor"
        />
      </v-overlay>

      <v-card-text class="py-0">
        <div class="subtitle-2 font-weight-light">
          <span v-if="selectedNews.author === null">
            {{ selectedNews.source.name }}
          </span>
          <span else>
            {{ selectedNews.author }}
          </span>
          • {{ selectedNews.source.name }}
        </div>
        <div class="mb-4 subtitle-2 font-weight-light">
          {{ selectedNews.publishedAt | dateFormat }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text class="body-1 black--text">
        <div>
          <span v-html="selectedNews.content"></span>

          <v-btn
            class="mx-4"
            dark
            icon
            :href="selectedNews.url"
            target="_blank"
            rel="noopener noreferrer"
          >
          <v-icon
            size="24px"
            color="indigo darken-1"
            >mdi-open-in-new</v-icon
          >
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import HeadlineEditor from '@/components/HeadlineEditor.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'SelectedNews',

  components: { HeadlineEditor },

  data() {
    return {
      overlay: false,
    };
  },

  computed: {
    ...mapGetters(['selectedNews', 'selectedHeadline']),
  },

  methods: {
    isArticleEmpty(obj) {
      return !Object.keys(obj).length;
    },
  },
};
</script>

<style scoped>
.selected-news {
  width: 100%;
}

.headline-editor {
  width: 80vw;
}

.news-image {
  height: 450px;
}

@media only screen and (max-width: 768px) {
  .news-image {
    height: 250px;
  }
}
</style>
