// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/css/base.css'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    // 对路由进行验证     
    if (window.localStorage.getItem('isLogin') == 1) { // 已经登陆       

      if (to.fullPath == '/login') {
        next({
          path: '/main',
          query: {
            // Rurl: to.fullPath
          }
        })
      } else {
        next() // 正常跳转到你设置好的页面   
      }
    } else {
      // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      if (to.fullPath == '/login') {
        next();
      } else {
        next({
          path: '/login',
          query: {
            // Rurl: to.fullPath
          }
        })
      }
    }
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
