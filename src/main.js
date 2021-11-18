import Vue from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './routes';

Vue.config.productionTip = false

Vue.use(PrimeVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
