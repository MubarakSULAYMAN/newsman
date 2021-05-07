<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title class="app-name font-weight-black" @click="goHome">
        <span v-if="isLargeScreen">Newsman</span>
        <img
          width="30"
          height="30"
          class="rounded-circle"
          src="./../public/newsman_logo.png"
          alt="Newsman Logo"
          v-else
        />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- TODO: Add search on keyup functionality with rebounce function -->
      <!-- @input="isTyping = true" -->
      <v-text-field
        class="mx-4"
        flat
        hide-details
        label="Search a news or article by keyword(s)"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
        clearable
        clear-icon="mdi-close-circle"
        v-model="searchQuery"
        placeholder="Type your keyword"
        @keyup="getArticle(searchQuery)"
      ></v-text-field>
    </v-app-bar>

    <v-main>
      <router-view class="pb-10" />

      <div
        class="button-grp d-flex flex-column align-start justify-center ml-1"
      >
        <error-simulator class="mb-2" />
        <news-headlines-history class="mt-2" />
      </div>

      <jump-to-top />

      <error-notification />
      <error-loader />
      <the-footer />
    </v-main>
  </v-app>
</template>

<script>
import TheFooter from '@/views/layouts/TheFooter.vue';
import NewsHeadlinesHistory from '@/views/layouts/NewsHeadlinesHistory.vue';
import ErrorSimulator from '@/views/layouts/ErrorSimulator.vue';
import ErrorNotification from '@/views/layouts/ErrorNotification.vue';
import ErrorLoader from '@/views/layouts/ErrorLoader.vue';
import JumpToTop from './views/layouts/JumpToTop.vue';

export default {
  name: 'App',

  components: {
    TheFooter,
    NewsHeadlinesHistory,
    ErrorSimulator,
    ErrorNotification,
    ErrorLoader,
    JumpToTop,
  },

  data() {
    return {
      searchQuery: '',
      isTyping: false,
      // vuex
      isLoading: false,
      debounce: null,
    };
  },

  computed: {
    isLargeScreen() {
      return ['md', 'lg', 'xl'].includes(this.$vuetify.breakpoint.name);
    },
  },

  watch: {
    // searchQuery: _.debounce(() => {
    //   this.isTyping = false;
    // }, 1000),

    isTyping(value) {
      if (!value) {
        this.searchUser(this.searchQuery);
      }
    },
  },

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

    // TODO: Conditionally render history and error button
    onScroll(e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      const windowSize = window.innerHeight + Math.ceil(window.pageYOffset);
      let tolerance;

      if (['xs', 'sm'].includes(this.$vuetify.breakpoint.name)) {
        tolerance = 120;
      } else tolerance = 100;

      const bottom = windowSize + tolerance >= document.body.offsetHeight;

      this.fab = top > 20 && !bottom;
    },

    // searchUser(searchQuery) {
    // this.isLoading = true;
    //   // axios.get(`https://api.github.com/search/users?q=${searchQuery}`)
    //   //   .then((response) => {
    //   //   this.isLoading = false;
    //   //     this.searchResult = response.data.items;
    //   //   });
    // },

    getArticle(keyword) {
      if (keyword) {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          this.$store.dispatch('getSearchArticle', keyword);
        }, 600);
      }
    },
  },
};
</script>

<style scoped>
.app-name:hover {
  cursor: pointer;
}

.button-grp {
  position: fixed;
  top: 70vh !important;
  z-index: 5;
}
</style>
