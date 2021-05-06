<template>
  <v-container fluid>
    <v-row class="mx-2">
      <v-col
        v-for="(article, index) in articles"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
              height="300"
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
                    {{ article.publishedAt | dateFormat }}
                  </div>
                </v-row>

                <h3
                  :class="[
                    customColor(index),
                    'headline my-4 title font-weight-bold text-capitalize',
                  ]"
                >
                  {{ article.title }} • {{ article.source.name }}
                </h3>

                <p :class="[defaultColor(index)]" v-if="!hasBgImage(index)"
                v-html="articleContent(article.title, article.content)">
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
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import dayjs from 'dayjs';
// import { relativeTime, LocalizedFormat } from 'dayjs/plugin/relativeTime';

export default {
  name: 'NewsHeadlines',

  metaInfo() {
    return {
      titleTemplate: 'Newsman - Top Headlines',
    };
  },

  computed: {
    ...mapGetters(['articles', 'withBgImage', 'withBgIndigo', 'withBgDefault']),
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

    // openNews(headline, article) {
    //   // TODO: Introduce a mixin here and related headlines
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

    articleContent(title, content) {
      if (title.length > 60 && title.length <= 90) {
        return `${content.slice(0, 100)}...`;
      }

      if (title.length > 90 && title.length <= 120) {
        return `${content.slice(0, 60)}...`;
      }

      if (title.length > 120 && content.length <= 120) {
        return '';
      }

      if (title.length <= 120 && content.length > 120) {
        return `${content.slice(0, 120)}...`;
      }

      return content;
    },

    ...mapActions(['getTopHeadlines', 'updateSelectedNews']),
  },

  created() {
    this.$store.dispatch('getTopHeadlines');
  },

  // filters: {
  //   diffForHumans(date) {
  //     if (!date) {
  //       return null;
  //     }

  //     // TODO: Add Time to now feature
  //     // const today = new Date().toLocaleDateString();

  //     // if (dayjs(date).format('DD/MM/YYYY') < today) {
  //     //   return dayjs(date).fromNow();
  //     // }

  //     return dayjs(date).format('DD.MM.YYYY');
  //   },
  // },
};
</script>

<style scoped>
.card {
  /* background: center no-repeat cover; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.headline-card {
  overflow: none;
  border: 1px solid none;
}

/* TODO: Replace with border image with radius */
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
