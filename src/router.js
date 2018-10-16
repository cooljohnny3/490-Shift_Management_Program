import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Marketplace from './views/Marketplace'
import Notifications from './views/Notifications'
import Settings from './views/Settings'
import ManagerSettings from './views/ManagerSettings'
import Login from './views/Login'
import Forgot from './views/Forgot'
import Listing from './views/Listing'

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
      path: '/notifications',
      name: 'notifications',
      component: Notifications
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
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: Forgot
    },
    {
      path: '/marketplace/listing',
      name: 'listing',
      component: Listing
    }
  ]
})
