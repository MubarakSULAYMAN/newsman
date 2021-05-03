<template>
  <v-container fluid>
    <v-row class="mx-2">
      <v-col v-for="x in 36" :key="x" cols="12" sm="6" md="4" lg="3" xl="2">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
              height="300"
              dark
              :elevation="hover ? 12 : 3"
              :loading="hover"
              :style="backgroundImage(x, 'https://picsum.photos/200/300')"
              :class="[
                hasBgColor(x),
                cardProp(x) ? 'card' : '',
                'd-flex flex-column',
              ]"
            >
              <!-- FIXME: helli -->
              <!-- TODO: helli -->
              <v-card-title class="mb-auto">
                <v-spacer></v-spacer>
                <v-icon
                  :class="[
                    'arrow-button',
                    defaultProp(x) ? 'arrow-white' : 'arrow-indigo',
                  ]"
                  @click="openNews(x)"
                >
                  mdi-arrow-right
                </v-icon>
              </v-card-title>

              <v-card-text class="text-area">
                <v-row align="center" class="misc mx-0">
                  <div :class="[defaultColor(x)]">Date</div>
                </v-row>

                <h3
                  :class="[
                    customColor(x),
                    'headline my-4 title font-weight-bold text-capitalize',
                  ]"
                >
                  Headline -•- Source
                </h3>

                <p :class="[defaultColor(x)]" v-if="!hasBgImage(x)">
                  Small plates, salads & sandwiches - an intimate setting with
                  12 indoor seats plus patio seating.
                  <v-btn
                    text
                    :class="[customColor(x), 'text-capitalize']"
                    @click="openNews(x)"
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
// import { mapActions } from 'vuex';

export default {
  name: 'NewsHeadlines',

  metaInfo() {
    return {
      titleTemplate: 'Newsman - Top Headlines',
    };
  },

  // inject: {
  //   theme: {
  //     default: { isDark: false },
  //   },
  // },

  data() {
    return {
      // withBgImage: [2, 4, 5, 7, 10, 12],
      withBgImage: [],
      // withBgIndigo: [6, 8],
      withBgIndigo: [],
      // withDefault: [1, 3, 9, 11],
      withDefault: [],
    };
  },

  computed: {
    newsCategory() {
      return 'News Category';
    },
  },

  methods: {
    getRandomInt() {
      const cardArr = [];
      // const length = 12;
      const length = 36;

      while (cardArr.length < length) {
        const randomNumber = Math.floor(Math.random() * length) + 1;
        if (cardArr.indexOf(randomNumber) === -1) cardArr.push(randomNumber);
      }
      // console.log(cardArr);

      // this.withBgImage = cardArr.slice(0, 6);
      this.withBgImage = cardArr.slice(0, 18);
      // this.withBgIndigo = cardArr.slice(6, 8);
      this.withBgIndigo = cardArr.slice(18, 24);
      // this.withDefault = cardArr.slice(8);
      this.withDefault = cardArr.slice(24);
    },

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

    // backgroundProps() {},

    backgroundImage(val, imageUrl) {
      if (this.hasBgImage(val)) {
        return {
          backgroundImage: `linear-gradient(rgba(75, 0, 130, 0.5), rgba(75, 0, 130, 0.5)), url(${imageUrl})`,
        };
      }
      return 'white';
    },

    defaultColor(val) {
      if (this.withDefault.includes(val)) {
        return 'grey--text';
      }
      return 'white--text';
    },

    customColor(val) {
      if (this.withDefault.includes(val)) {
        return 'indigo--text text--darken-1';
      }
      return 'white--text';
    },

    defaultProp(val) {
      return this.withDefault.includes(val);
    },

    cardProp(val) {
      return this.hasBgImage(val);
    },

    openNews(headline) {
      this.$router.push(`/news/${headline}`);
      // this.updateSelectedNewsHeadline(headline);
    },

    // ...mapActions(['updateSelectedNewsHeadline']),
  },

  created() {
    return this.getRandomInt();
  },
};
</script>

<style scoped>
.card {
  /* background: center no-repeat cover; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
