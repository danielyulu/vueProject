import Vue from 'vue'
import App from './App.vue'
import ElementUI from '../node_modules/element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import router from './router'


Vue.use(VueRouter);
Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
