import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Listing from './views/Listing'
import Marketplace from './views/Marketplace'
import Notifications from './views/Notifications'
import Settings from './views/Settings'
import ManagerSettings from './views/ManagerSettings'
import Login from './views/Login'
import Forgot from './views/Forgot'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/marketplace',
      name: 'marketplace',
      component: Marketplace,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/listing',
      name: 'listing',
      component: Listing,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: Notifications,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/manager-settings',
      name: 'manager-settings',
      component: ManagerSettings,
      meta: {
        requiresAuth: true,
        isAdmin: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: Forgot,
      meta: {
        guest: true
      }
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

export default router;