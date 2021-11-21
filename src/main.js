import Vue from 'vue'
import App from './App.vue'
import router from './routes';
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
import 'a-flexbox/a-flexbox.css';
import './styles/style.css'

import '@vuikit/theme'

Vue.config.productionTip = false

Vue.use(Vuikit)
Vue.use(VuikitIcons)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
