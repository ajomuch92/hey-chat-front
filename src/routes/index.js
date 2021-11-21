import Vue from 'vue'
import VueRouter from 'vue-router';

import Index from '../views/Index.vue';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import Organization from '../views/Organizations.vue';
import Settings from '../views/Settings.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/',
          component: Dashboard,
        },
        {
          path: '/organizations',
          component: Organization,
        },
        {
          path: '/settings',
          component: Settings,
        }
      ]
    }
  ]
})

Vue.use(VueRouter);

export default router;