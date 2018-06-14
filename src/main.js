import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'


Vue.use(ElementUI);
Vue.prototype.$http= axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
