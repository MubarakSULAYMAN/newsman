import Vue from 'vue';
import Vuex from 'vuex';
import api from '../utils/services/RequestService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // currentNewsHeadline: 'Missing Current News Headline',
    selectedNewsHeadline: 'Missing News Headline',
    selectedNewsCategory: 'Missing News Category',
    isError: false,
    isErrorLoading: false,
    isErrorMessage: 'Error message expected Here.',
    currentNewsSources: [],
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

    SET_ERROR_STATE(state, bool) {
      state.isError = bool;
    },

    SET_ERROR_LOADING(state, bool) {
      state.isErrorLoading = bool;
    },

    SET_ERROR_MESSAGE(state, message) {
      state.isErrorMessage = message;
    },

    SET_NEWS_SOURCES(state, sources) {
      state.currentNewsSources = sources;
    },
  },

  actions: {
    updateSelectedNewsHeadline({ commit }, headline) {
      commit('SET_SELECTED_NEWS_HEADLINE', headline);
    },

    updateSelectedNewsCategory({ commit }, category) {
      commit('SET_SELECTED_NEWS_CATEGORY', category);
    },

    async simulateErrorState({ commit }) {
      try {
        commit('SET_ERROR_LOADING', true);
        await api.simulateError();
      } catch (e) {
        console.log(e);
        commit('SET_ERROR_LOADING', false);
        commit('SET_ERROR_MESSAGE', 'Request not allowed, register to continue.');
        commit('SET_ERROR_STATE', true);
      }

      setTimeout(() => {
        commit('SET_ERROR_STATE', false);
      }, 2500);
    },

    async getNewsSources({ commit }) {
      try {
        // commit('SET_ERROR_LOADING', true);
        const response = await api.getSources();
        console.log(response);
      } catch (e) {
        console.log(e);
        // commit('SET_ERROR_LOADING', false);
        // commit('SET_ERROR_MESSAGE', 'Request not allowed, register to continue.');
        // commit('SET_ERROR_STATE', true);
      }

      setTimeout(() => {
        commit('SET_ERROR_STATE', false);
      }, 2500);
    },
  },

  getters: {
    newsHeadline(state) {
      return state.selectedNewsHeadline;
    },

    newsCategory(state) {
      return state.selectedNewsCategory;
    },

    alert(state) {
      return state.isError;
    },

    errorLoading(state) {
      return state.isErrorLoading;
    },

    errorMessage(state) {
      return state.isErrorMessage;
    },

    newsSources(state) {
      return state.currentNewsSources;
    },
  },

  modules: {
  },
});
