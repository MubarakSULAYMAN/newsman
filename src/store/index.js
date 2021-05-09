import Vue from 'vue';
import Vuex from 'vuex';
import topHeadlines from '@/store/modules/topHeadlines';
import api from '@/utils/services/RequestService';

Vue.use(Vuex);

// TODO: Reduce into modules
export default new Vuex.Store({
  state: {
    withBgImage: [],
    withBgIndigo: [],
    withBgDefault: [],
    selectedNews: {},
    isSourcesLoading: true,
    isTopHeadlinesLoading: true,
    isNewsDetailsLoading: true,
    isTrendingLoading: true,
    isError: false,
    errorType: 'error',
    isErrorisLoading: false,
    errorMessage: 'Error message expected Here.',
    errorInfo: '',
    newsSources: [],
    SourceTopHeadlines: [],
    articles: [],
    relatedArticles: [],
    readNews: [],
    // readNews: JSON.parse(localStorage.getItem('readNews')),
    selectedHeadline: '',
  },

  getters: {
    withBgImage: (state) => state.withBgImage,
    withBgIndigo: (state) => state.withBgIndigo,
    withBgDefault: (state) => state.withBgDefault,
    selectedNews: (state) => state.selectedNews,
    isSourcesLoading: (state) => state.isSourcesLoading,
    isTopHeadlinesLoading: (state) => state.isTopHeadlinesLoading,
    isNewsDetailsLoading: (state) => state.isNewsDetailsLoading,
    isTrendingLoading: (state) => state.isTrendingLoading,
    isError: (state) => state.isError,
    errorType: (state) => state.errorType,
    isErrorLoading: (state) => state.isErrorLoading,
    errorMessage: (state) => state.errorMessage,
    errorInfo: (state) => state.errorInfo,
    newsSources: (state) => state.newsSources,
    articles: (state) => state.articles,
    relatedArticles: (state) => state.relatedArticles,
    readNews: (state) => state.readNews,
    selectedHeadline: (state) => state.selectedHeadline,
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
      // if (localStorage.getItem('readNews')) {
      //   try {
      //     state.readNews = JSON.parse(localStorage.getItem('readNews'));
      //   } catch (e) {
      //     localStorage.removeItem('readNews');
      //   }
      // }

      state.readNews.unshift(data);
    },

    DELETE_READ_NEWS(state) {
      state.readNews = [];
    },

    SET_NEWS_SOURCES_LOADING_STATE(state, bool) {
      state.isSourcesLoading = bool;
    },

    SET_TOP_HEADLINES_LOADING_STATE(state, bool) {
      state.isTopHeadlinesLoading = bool;
    },

    SET_NEWS_DETAILS_LOADING_STATE(state, bool) {
      state.isNewsDetailsLoading = bool;
    },

    SET_TRENDING_LOADING_STATE(state, bool) {
      state.isTrendingLoading = bool;
    },

    SET_ERROR_STATE(state, bool) {
      state.isError = bool;
    },

    SET_ERROR_TYPE(state, string) {
      state.errorType = string;
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

    SET_RELATED_ARTICLES(state, articles) {
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

    /* TODO: Reduce getSourceTopHealines, getTopHeadlines and getSearchArticles
    **********as one if readabilty will not be lost.
   */
    // makeRequest(requestType, param1, param2, param3) {
    //   switch (requestType)
    // case ''
    // },

    getRelatedArticles({ state, commit }) {
      const headlines = [...state.articles];

      const removeIndex = headlines.map((item) => item.url).indexOf(state.selectedNews.url);
      headlines.splice(removeIndex, 1);
      commit('SET_RELATED_ARTICLES', headlines.slice(0, 5));
    },

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

    updateSelectedNews({ commit, state, dispatch }, article) {
      commit('SET_SELECTED_NEWS', article);
      // commit('SET_SELECTED_NEWS_INDEX', index);
      // console.log(index);
      commit('SET_SELECTED_HEADLINE', state.selectedNews.title);
      dispatch('getRelatedArticles');
      // TODO: Local storage to retrieve history
      commit('SET_READ_NEWS', article);
      setTimeout(() => {
        commit('SET_NEWS_DETAILS_LOADING_STATE', false);
        commit('SET_TRENDING_LOADING_STATE', false);
      }, 2000);

      // Backup to local storage
      // const parsed = JSON.stringify(state.readNews);
      // localStorage.setItem('readNews', parsed);
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
          commit('SET_NEWS_SOURCES_LOADING_STATE', false);
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
          commit('SET_TOP_HEADLINES_ARTICLES', response.data.articles);
          dispatch('getRandomInt');
          await dispatch('getNewsSources');
          commit('SET_TOP_HEADLINES_LOADING_STATE', false);
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
          commit('SET_TOP_HEADLINES_LOADING_STATE', false);
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
        // Different api request
        const response = await api.searchArticle(keyword);

        // Common
        if ([200, 201].includes(response.status)) {
          commit('SET_TOP_HEADLINES_ARTICLES', response.data.articles);
          dispatch('getRandomInt');
          commit('SET_TOP_HEADLINES_LOADING_STATE', false);
        }
        // Common
      } catch (e) {
        // TODO: Check if precise message is better than general error state message
        commit('SET_ERROR_INFO', 'Unable to load top headlines.');
        dispatch('errorStatus', e.response.request.status);
        commit('SET_ERROR_STATE', true);
      }

      // Common
      setTimeout(() => {
        commit('SET_ERROR_STATE', false);
      }, 5000);
    },

    featureNotAvailable({ commit }) {
      commit('SET_ERROR_TYPE', 'warning');
      commit('SET_ERROR_STATE', true);
      commit('SET_ERROR_MESSAGE', 'Feature Presently not available');

      setTimeout(() => {
        commit('SET_ERROR_STATE', false);
      }, 5000);
    },

    emptyHistory({ commit }) {
      commit('DELETE_READ_NEWS');
    },
  },

  modules: {
    topHeadlines,
  },
});
