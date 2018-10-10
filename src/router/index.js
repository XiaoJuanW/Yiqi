import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainView from '@/view/MainView'
import AppListView from '@/view/AppListView'
import UserListView from '@/view/UserListView'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/mainView'
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/mainView',
    name: 'MainView',
    component: MainView,
    meta:{ auth: true } 
  }, {
    path: '/appListView',
    name: 'AppListView',
    component: AppListView
  }, {
    path: '/userListView',
    name: 'UserListView',
    component: UserListView
  }]
})
