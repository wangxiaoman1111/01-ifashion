import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Cart from '@/components/Cart'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  mode:'history',//路由模式 hash/history
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
