import Vue from 'vue'
import App from './App.vue'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import './assets/app.css'
import ingreso from './components/ingreso.vue'
import home from './components/home'
import homead from './components/homead'
import empleado from './components/empleado'

import VueRouter from 'vue-router';
Vue.use(VueRouter);



const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path:'/',
      component: ingreso
    },
    {
      path:'/home',
      component: home
    },
    {
      path:'/homead',
      component: homead
    },
    {
      path:'/empleado',
      component: empleado 
    }
  ]
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
