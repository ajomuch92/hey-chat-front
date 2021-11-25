import Vue from 'vue'
import App from './App.vue'
import router from './routes';
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
import store from './store';
import _ from 'lodash';
import VueGoogleCharts from 'vue-google-charts';
import VueSweetalert2 from 'vue-sweetalert2';

import 'a-flexbox/a-flexbox.css';
import './styles/style.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@vuikit/theme'

Vue.config.productionTip = false

Vue.use(Vuikit);
Vue.use(VuikitIcons);
Vue.use(VueGoogleCharts);
Vue.use(VueSweetalert2);

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
