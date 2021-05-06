import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://newsapi.org/v2',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

const key = '099148be22804e849a0c6fe022b7cf5e';

export default {
  searchArticle(keyword) {
    return apiClient.get(`/everything?q=${keyword}&pageSize=72&apiKey=${key}`);
  },

  getSources() {
    return apiClient.get(`/sources?q=keyword&apiKey=${key}`);
  },

  getSourceTopHeadlines(source) {
    return apiClient.get(`/top-headlines?sources=${source}&pageSize=36&apiKey=${key}`);
  },

  getTopHeadlines() {
    return apiClient.get(`/top-headlines?country=ng&pageSize=36&apiKey=${key}`);
    // return apiClient.get(`/top-headlines?country=us&apiKey=${key}`);
  },

  simulateError() {
    return apiClient.get('/sources?apiKey');
  },
};
