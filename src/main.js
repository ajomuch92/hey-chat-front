import Vue from 'vue'
import App from './App.vue'
import router from './routes';
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
import store from './store';
import 'a-flexbox/a-flexbox.css';
import './styles/style.css';
import _ from 'lodash';

import '@vuikit/theme'

Vue.config.productionTip = false

Vue.use(Vuikit)
Vue.use(VuikitIcons)

Vue.prototype._ = _;
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.commit('initialiseStore');
	},
}).$mount('#app')
