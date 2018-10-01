import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Marketplace from './views/Marketplace'
import Settings from './views/Settings'
import ManagerSettings from './views/ManagerSettings'
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/marketplace',
      name: 'marketplace',
      component: Marketplace
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/manager-settings',
      name: 'manager-settings',
      component: ManagerSettings
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
