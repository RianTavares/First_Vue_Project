import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes.js'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history'
});//quando o valor tem o mesmo nome da proprieda pode emitir o a propriedade: 

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
