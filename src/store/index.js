import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // currentNewsHeadline: 'Missing Current News Headline',
    selectedNewsHeadline: 'Missing News Headline',
    selectedNewsCategory: 'Missing News Category',
  },

  mutations: {
    // CURRENT_NEWS_HEADLINE(state, data) {
    //   state.currentNewsHeadline = data;
    // },

    SET_SELECTED_NEWS_HEADLINE(state, data) {
      state.selectedNewsHeadline = data;
    },

    SET_SELECTED_NEWS_CATEGORY(state, data) {
      state.selectedNewsCategory = data;
    },
  },

  actions: {
    updateSelectedNewsHeadline({ commit }, headline) {
      commit('SET_SELECTED_NEWS_HEADLINE', headline);
    },

    updateSelectedNewsCategory({ commit }, category) {
      commit('SET_SELECTED_NEWS_CATEGORY', category);
    },
  },

  getters: {
    newsHeadline(state) {
      return state.selectedNewsHeadline;
    },

    newsCategory(state) {
      return state.selectedNewsCategory;
    },
  },

  modules: {
  },
});
