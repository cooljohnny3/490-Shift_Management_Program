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
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') == null) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          });
      } else {
          let user = JSON.parse(localStorage.getItem('user'))
          if(to.matched.some(record => record.meta.is_admin)) {
              if(user.is_admin == 1){
                  next();
              }
              else{
                  next({ name: 'home'});
              }
          }else {
              next();
          }
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if(localStorage.getItem('jwt') == null){
          next();
      }
      else{
          next({ name: 'home'})
      }
  }else {
      next() 
  }
})
