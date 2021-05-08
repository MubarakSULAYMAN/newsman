import Vue from 'vue';
import Vuetify from 'vuetify';
import { createLocalVue } from '@vue/test-utils';

Vue.use(Vuetify);
Vue.config.productionTip = false;

const localVue = createLocalVue();
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        anchor: 'red',
      },

      dark: true,
    },

    options: {
      themeCache: {
        get: (key) => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value),
      },
    },
  },
});

localVue.use(vuetify);

export default {
  localVue,
  vuetify,
};
