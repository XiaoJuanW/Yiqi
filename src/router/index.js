import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainView from '@/view/MainView'
import AppDetailView from '@/view/AppDetailView'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/main'
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      auth: true
    }

  }, {
    path: '/main',
    component: MainView,
    meta: {
      auth: true
    }
  }, {
    path: '/appDetail',
    name: 'appDetail',
    component: AppDetailView
  }]
})
