import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/pages/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        isAuth: true
      }
    }
  ]
})
