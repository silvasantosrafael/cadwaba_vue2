import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Register',
    name: 'ResgisterNumber',
    component: () => import(/* webpackChunkName: "Register" */ '../views/RegisterNumber.vue')
  },
  {
    path: '/Consult',
    name: 'ConsultNumber',
    component: () => import(/* webpackChunkName: "Consult" */'../views/ConsultNumber.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
