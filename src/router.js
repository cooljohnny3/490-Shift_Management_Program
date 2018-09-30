import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Marketplace from './views/Marketplace.vue'
import Settings from './views/Settings.vue'

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
    }
  ]
})
