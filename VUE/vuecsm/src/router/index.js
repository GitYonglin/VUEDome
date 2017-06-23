import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Hello from '@/components/Hello'

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  }
]
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log('----------------------')
  next()
})

export default router
