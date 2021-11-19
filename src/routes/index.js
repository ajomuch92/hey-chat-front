import Vue from 'vue'
import VueRouter from 'vue-router';

import Index from '../views/Index.vue';
import Home from '../views/Home.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

Vue.use(VueRouter);

export default router;