import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import { registerVeeValidateRules } from './plugins/vee-validate.js';

import '@/assets/scss/base.scss';

Vue.config.productionTip = false;

registerVeeValidateRules();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
