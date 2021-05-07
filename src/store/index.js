import Vue from 'vue';
import Vuex from 'vuex';
import topHeadlines from '@/store/modules/topHeadlines';
import api from '@/utils/services/RequestService';

Vue.use(Vuex);

// Reduce into modules
export default new Vuex.Store({
  state: {
    withBgImage: [],
    withBgIndigo: [],
    withBgDefault: [],
    selectedNews: {},
    isError: false,
    isErrorLoading: false,
    errorMessage: 'Error message expected Here.',
    errorInfo: '',
    newsSources: [],
    SourceTopHeadlines: [],
    articles: [],
    relatedArticles: [],
    readNews: [],
    selectedHeadline: '',
  },

  mutations: {
    SET_WITH_BG_IMAGE(state, arr) {
      state.withBgImage = arr;
    },

    SET_WITH_BG_INDIGO(state, arr) {
      state.withBgIndigo = arr;
    },

    SET_WITH_BG_DEFAULT(state, arr) {
      state.withBgDefault = arr;
    },

    SET_SELECTED_NEWS(state, data) {
      state.selectedNews = data;
    },

    SET_READ_NEWS(state, data) {
      state.readNews.unshift(data);
    },

    SET_ERROR_STATE(state, bool) {
      state.isError = bool;
    },

    SET_ERROR_LOADING(state, bool) {
      state.isErrorLoading = bool;
    },

    SET_ERROR_MESSAGE(state, message) {
      state.errorMessage = message;
    },

    SET_ERROR_INFO(state, info) {
      state.errorInfo = info;
    },

    SET_NEWS_SOURCES(state, sources) {
      state.newsSources = sources;
    },

    SET_SOURCE_TOP_HEADLINES(state, sources) {
      state.newsSources = sources;
    },

    SET_TOP_HEADLINES_ARTICLES(state, articles) {
      state.articles = articles;
    },

    SET_TOP_HEADLINES_RELATED_ARTICLES(state, articles) {
      state.relatedArticles = articles;
    },

    SET_SELECTED_HEADLINE(state, title) {
      state.selectedHeadline = title;
    },
  },

  actions: {
    getRandomInt({ state, commit }) {
      const cardArr = [];
      const arrLength = state.articles.length;

      while (cardArr.length < arrLength) {
        const randomNumber = Math.floor(Math.random() * arrLength);
        if (cardArr.indexOf(randomNumber) === -1) cardArr.push(randomNumber);
      }

      const a = Math.floor((6 / 12) * arrLength);
      commit('SET_WITH_BG_IMAGE', cardArr.slice(0, a));

      const b = Math.floor((8 / 12) * arrLength);
      commit('SET_WITH_BG_INDIGO', cardArr.slice(a, b));

      commit('SET_WITH_BG_DEFAULT', cardArr.slice(b));
    },

    // getRelatedArticles() {},

    errorStatus({ commit }, errorState) {
      let errorMessage = 'An error just occured!';
      switch (errorState) {
        case 400:
          errorMessage = 'We are having problem in processing your request.';
          break;
        case 401:
          errorMessage = 'Request not allowed, kindly register to proceed.';
          break;
        case 429:
          errorMessage = 'We suspect you are robot and temporarily barred for a day.';
          break;
        case 500:
          errorMessage = 'Apologies, we are working to resolve this issue.';
          break;
        default:
          errorMessage = 'An error just occured, kindly contact us for help.';
      }

      commit('SET_ERROR_MESSAGE', errorMessage);
    },

    updateSelectedNews({ commit, state }, article) {
      commit('SET_SELECTED_NEWS', article);
      commit('SET_SELECTED_HEADLINE', state.selectedNews.title);
      commit('SET_READ_NEWS', article);
    },

    updateSelectedHeadline({ commit }, newHeadline) {
      commit('SET_SELECTED_HEADLINE', newHeadline);
    },

    async simulateErrorState({ commit, dispatch }) {
      try {
        commit('SET_ERROR_LOADING', true);
        await api.simulateError();
      } catch (e) {
        commit('SET_ERROR_LOADING', false);
        dispatch('errorStatus', e.response.request.status);
        commit('SET_ERROR_STATE', true);
      }

      setTimeout(() => {
        commit('SET_ERROR_STATE', false);
      }, 5000);
    },

    async getNewsSources({ commit, dispatch }) {
      try {
        const response = await api.getSources();

        if ([200, 201].includes(response.status)) {
          commit('SET_NEWS_SOURCES', response.data.sources);
        }
      } catch (e) {
        // TODO: Check if precise message is better than general error state message
        commit('SET_ERROR_INFO', 'Unable to load news sources.');
        dispatch('errorStatus', e.response.request.status);
        commit('SET_ERROR_STATE', true);
      }

      setTimeout(() => {
        commit('SET_ERROR_STATE', false);
      }, 5000);
    },

    async getSourceTopHeadlines({ commit, dispatch }, source) {
      try {
        const response = await api.getSourceTopHeadlines(source);

        if ([200, 201].includes(response.status)) {
          // commit('SET_SOURCE_TOP_HEADLINES', response.data.sources);
          commit('SET_TOP_HEADLINES_ARTICLES', response.data.articles);
          dispatch('getRandomInt');
          await dispatch('getNewsSources');
        }
      } catch (e) {
        // TODO: Check if precise message is better than general error state message
        commit('SET_ERROR_INFO', 'Unable to load news sources.');
        dispatch('errorStatus', e.response.request.status);
        commit('SET_ERROR_STATE', true);
      }

      setTimeout(() => {
        commit('SET_ERROR_STATE', false);
      }, 5000);
    },

    async getTopHeadlines({ commit, dispatch }) {
      try {
        const response = await api.getTopHeadlines();

        if ([200, 201].includes(response.status)) {
          commit('SET_TOP_HEADLINES_ARTICLES', response.data.articles);
          dispatch('getRandomInt');
        }
      } catch (e) {
        // TODO: Check if precise message is better than general error state message
        commit('SET_ERROR_INFO', 'Unable to load top headlines.');
        dispatch('errorStatus', e.response.request.status);
        commit('SET_ERROR_STATE', true);
      }

      setTimeout(() => {
        commit('SET_ERROR_STATE', false);
      }, 5000);
    },

    async getSearchArticle({ commit, dispatch }, keyword) {
      try {
        const response = await api.searchArticle(keyword);
        // console.log(response);

        if ([200, 201].includes(response.status)) {
          commit('SET_TOP_HEADLINES_ARTICLES', response.data.articles);
          dispatch('getRandomInt');
        }
      } catch (e) {
        // TODO: Check if precise message is better than general error state message
        commit('SET_ERROR_INFO', 'Unable to load top headlines.');
        dispatch('errorStatus', e.response.request.status);
        commit('SET_ERROR_STATE', true);
      }

      setTimeout(() => {
        commit('SET_ERROR_STATE', false);
      }, 5000);
    },
  },

  getters: {
    withBgImage: (state) => state.withBgImage,
    withBgIndigo: (state) => state.withBgIndigo,
    withBgDefault: (state) => state.withBgDefault,
    selectedNews: (state) => state.selectedNews,
    newsCategory: (state) => state.newsCategory,
    isError: (state) => state.isError,
    isErrorLoading: (state) => state.isErrorLoading,
    errorMessage: (state) => state.errorMessage,
    errorInfo: (state) => state.errorInfo,
    newsSources: (state) => state.newsSources,
    articles: (state) => state.articles,
    relatedArticles: (state) => state.relatedArticles,
    readNews: (state) => state.readNews,
    selectedHeadline: (state) => state.selectedHeadline,
  },

  modules: {
    topHeadlines,
  },
});
