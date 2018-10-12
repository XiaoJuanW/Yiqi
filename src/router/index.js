import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainView from '@/view/MainView'
import AppListView from '@/view/AppListView'
import UserListView from '@/view/UserListView'
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

  }, {
    path: '/main',
    component: MainView,
    meta: {
      auth: true
    },
    children: [{
      path: 'appList',
      name: 'appList',
      component: AppListView
    }, {
      path: 'userList',
      name: 'userList',
      component: UserListView
    }, {
      path: '',
      redirect: 'appList'
    }]
  }, {
    path: '/appDetail',
    name: 'appDetail',
    component: AppDetailView
  }]
})
