import Vue from 'vue';
// 引入viewUI
import ViewUI from 'view-design';
import App from './App.vue';
import router from './router';
import store from './store';
import common from './utils/common';
import 'view-design/dist/styles/iview.css';
// 引入svg
import '@/icons';

Vue.use(ViewUI);
Vue.use(common);
Vue.config.productionTip = false;
window.ViewUI = ViewUI;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
