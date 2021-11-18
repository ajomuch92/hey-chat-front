import Vue from 'vue'
import VueRouter from 'vue-router';

import Index from '../views/Index.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index
    }
  ]
})

Vue.use(VueRouter);

export default router;