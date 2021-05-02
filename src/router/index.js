import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NewsByCategory from '../views/pages/NewsByCategory.vue';
import NewsDetails from '../views/pages/NewsDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // alias: '/home',
  },

  {
    path: '/home',
    redirect: '/',
  },

  {
    path: '/news/category/:newsCategory',
    name: 'NewsByCategory',
    component: NewsByCategory,
  },

  {
    path: '/news/:newsHeadline',
    name: 'NewsDetails',
    component: NewsDetails,
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import('../views/pages/PageNotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
