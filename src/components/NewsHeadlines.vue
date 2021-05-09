<template>
  <v-container fluid>
    <v-row class="mx-2">
      <v-col
        v-for="(article, index) in articles"
        :key="article.url"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-skeleton-loader
              :loading="isTopHeadlinesLoading"
              transition="scale-transition"
              height="300"
              type="card"
            >
              <v-card
                height="350"
                dark
                :elevation="hover ? 12 : 3"
                :style="backgroundImage(index, article.urlToImage)"
                :class="[
                  hasBgColor(index),
                  cardProp(index) ? 'card' : '',
                  'd-flex flex-column',
                  'headline-card',
                ]"
              >
                <v-card-title class="mb-auto">
                  <v-spacer></v-spacer>
                  <v-icon
                    :class="[
                      'arrow-button',
                      defaultProp(index) ? 'arrow-white' : 'arrow-indigo',
                    ]"
                    @click="openNews(article.title, article)"
                  >
                    mdi-arrow-right
                  </v-icon>
                </v-card-title>

                <v-card-text class="text-area">
                  <v-row align="center" class="misc mx-0">
                    <div :class="[defaultColor(index), 'font-weight-bold']">
                      <span v-if="article.publishedAt !== null">
                        {{ article.publishedAt | dateFormat }}
                      </span>
                      <span v-else>Unable to fetch Date</span>
                    </div>
                  </v-row>

                  <h3
                    :class="[
                      customColor(index),
                      'my-4 title font-weight-bold text-capitalize',
                    ]"
                  >
                    {{ article.title || 'Unable to fetch Title' }}
                  </h3>

                  <p :class="[defaultColor(index)]" v-if="!hasBgImage(index)">
                    <span
                      v-if="article.content !== null"
                      v-html="articleContent(article.title, article.content)"
                    >
                    </span>
                    <span v-else>Unable to fetch News Content</span>
                    <v-btn
                      text
                      :class="[customColor(index), 'text-capitalize']"
                      @click="openNews(article.title, article)"
                    >
                      Read More
                    </v-btn>
                  </p>
                </v-card-text>
              </v-card>
            </v-skeleton-loader>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NewsHeadlines',

  metaInfo() {
    return {
      titleTemplate: 'Newsman - Top Headlines',
    };
  },

  computed: {
    ...mapGetters([
      'isTopHeadlinesLoading',
      'articles',
      'withBgImage',
      'withBgIndigo',
      'withBgDefault',
    ]),
  },

  methods: {
    hasBgImage(val) {
      return this.withBgImage.includes(val);
    },

    hasBgIndigo(val) {
      return this.withBgIndigo.includes(val);
    },

    hasBgColor(val) {
      if (this.hasBgIndigo(val)) {
        return 'indigo';
      }
      return 'white';
    },

    backgroundImage(val, imageUrl) {
      if (this.hasBgImage(val)) {
        return {
          backgroundImage: `linear-gradient(rgba(75, 0, 130, 0.5), rgba(75, 0, 130, 0.5)), url(${imageUrl})`,
        };
      }
      return 'white';
    },

    defaultColor(val) {
      if (this.withBgDefault.includes(val)) {
        return 'grey--text';
      }
      return 'white--text';
    },

    customColor(val) {
      if (this.withBgDefault.includes(val)) {
        return 'indigo--text text--darken-1';
      }
      return 'white--text';
    },

    defaultProp(val) {
      return this.withBgDefault.includes(val);
    },

    cardProp(val) {
      return this.hasBgImage(val);
    },

    articleContent(title, content) {
      let newContent = '';

      if (title.length > 60 && title.length <= 80) {
        newContent = `${content.slice(0, 100)}...`;
      } else if (title.length > 80 && content.length <= 100) {
        newContent = '';
      } else if (title.length <= 80 && content.length > 80) {
        newContent = `${content.slice(0, 80)}...`;
      } else if (content === null) {
        newContent = 'Unable to fetch Content';
      }
      // TODO: Add a default response
      // else newContent = content;

      return newContent;
    },

    ...mapActions(['getTopHeadlines']),
  },

  created() {
    this.getTopHeadlines();
  },
};
</script>

<style scoped>
.card {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.headline-card {
  overflow: none;
  border: 1px solid none;
}

.headline-card:hover {
  border-top-color: #304ffe;
  border-right-color: #5c6bc0;
  border-bottom-color: #3f51b5;
  border-left-color: #1a237e;
}

.arrow-button {
  padding: 5px;
  border-radius: 50%;
}

.arrow-white {
  color: #3f51b5;
}

.arrow-white:hover {
  color: #ffffff;
  background-color: #3f51b5;
}

.arrow-indigo {
  color: #ffffff;
}

.arrow-indigo:hover {
  color: #3f51b5;
  background-color: #ffffff;
}
</style>
