import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // primary: '#3f51b5',
        // secondary: '#b0bec5',
        // accent: '#8c9eff',
        // error: '#b71c1c',
        anchor: 'red',

        //         .dark - primary - color    { background: #303F9F; }
        // .default - primary - color { background: #3F51B5; }
        //     .light - primary - color   { background: #C5CAE9; }
        //         .text - primary - color    { color: #FFFFFF; }
        //             .accent - color          { background: #536DFE; }
        //                 .primary - text - color    { color: #212121; }
        //                     .secondary - text - color  { color: #757575; }
        //                         .divider - color         { border- color: #BDBDBD; }
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
