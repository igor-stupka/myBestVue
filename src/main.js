import Vue from 'vue';
import App from './js/App.vue';
import i18n from './js/multilang';
import VueEsc from 'vue-esc';
import VueI18n from 'vue-i18n';

import {store} from './js/store';
import {router} from './js/routes';

Vue.use(VueEsc);
Vue.use(VueI18n);

new Vue({
  el: '#app',
  i18n,
  store,  
  router,
  render: h => h(App)
});
 