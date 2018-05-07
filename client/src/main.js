// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import 'bootstrap/dist/css/bootstrap.css'
import jQuery from 'jquery'
import bootstrap from 'bootstrap'
import store from '@/store/store'

global.jQuery = jQuery

global.$ = jQuery
Vue.config.productionTip = false

sync(store, router)

router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (store.state.isUserLoggedIn) {
        next({
          path: '/dashboard'
        })
      } else {
        next()
      }
    } else if (to.matched.some(record => record.meta.isAuth)) {
      if (!store.state.isUserLoggedIn) {
        next({
          path: '/'
        })
      } else {
        next()
      }
    } else {
      next()
    }
  }
)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  bootstrap,
  store,
  components: { App },
  template: '<App/>'
})
