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

  getTopHeadlines() {
    return apiClient.get(`/top-headlines&pageSize=36&apiKey=${key}`);
    // ?country = us
  },

  simulateError() {
    return apiClient.get('/sources?apiKey');
  },
};
