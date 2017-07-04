import Vue from 'vue'
import Router from 'vue-router'
import UserStore from '../services/user'

import Auth from '@/components/Auth'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Tag from '@/components/Tag'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (!UserStore.getItem('token')) {
          next('/login')
        } else {
          next()
        }
      }
    },
    {
      path: '/tag/:tag',
      name: 'Tag',
      component: Tag,
      beforeEnter: (to, from, next) => {
        if (!UserStore.getItem('token')) {
          next('/login')
        } else {
          next()
        }
      }
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth,
      beforeEnter: (to, from, next) => {
        if (UserStore.getItem('token')) {
          next('/')
        } else if (!UserStore.getItem('token') && window.location.hash) {
          UserStore.setItem('token', window.location.hash.split('=')[1])
          next('/')
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (UserStore.getItem('token')) {
          next('/')
        } else {
          next()
        }
      }
    }
  ]
})
