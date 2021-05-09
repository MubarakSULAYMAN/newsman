import axios from 'axios';

const apiUrl = process.env.VUE_APP_API_URL;
const apiKey = process.env.VUE_APP_API_KEY;

const apiClient = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  searchArticle(keyword) {
    return apiClient.get(`/everything?q=${keyword}&pageSize=72&sortBy=popularity&apiKey=${apiKey}`);
  },

  getSources() {
    return apiClient.get(`/sources?apiKey=${apiKey}`);
  },

  getSourceTopHeadlines(source) {
    return apiClient.get(`/top-headlines?sources=${source}&pageSize=36&apiKey=${apiKey}`);
  },

  getTopHeadlines() {
    return apiClient.get(`/top-headlines?country=ng&pageSize=36&apiKey=${apiKey}`);
    // return apiClient.get(`/top-headlines?country=us&apiKey=${key}`);
  },

  simulateError() {
    return apiClient.get('/sources?apiKey');
  },
};
