import Vue from 'vue';
import VueMeta from 'vue-meta';
import dayjs from 'dayjs';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
// import './assets/styles/base.css';
// import './assets/fonts/Helvetica/Helvetica.css';

Vue.config.productionTip = false;

Vue.use(VueMeta);

Vue.filter('dateFormat', (date) => {
  if (!date) {
    return null;
  }

  // TODO: Add Time to now feature
  // const today = new Date().toLocaleDateString();

  // if (dayjs(date).format('DD/MM/YYYY') < today) {
  //   return dayjs(date).fromNow();
  // }

  return dayjs(date).format('DD.MM.YYYY');
});

Vue.mixin({
  methods: {
    openNews(headline, article) {
      let url = headline;
      const punctuations = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

      if (!url) {
        url = null;
      }

      if (url.length > 2083) {
        url = url
          .toLowerCase()
          .slice(0, 2083)
          .replace(punctuations, '+')
          .replace(/\s/g, '-');
      }

      url = url.toLowerCase().replace(punctuations, '+').replace(/\s/g, '-');

      this.$router.push(`/news/${url}`);
      this.$store.dispatch('updateSelectedNews', article);
      // this.$store.dispatch('getRelatedArticles');
    },
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
