// src/router/index.js
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

const HomePage = () => import('@/components/HomePage.vue')
const AboutPage = () => import('@/components/AboutPage.vue')
const CounterPage = () => import('@/components/CounterPage.vue')
const PostsPage = () => import('@/components/PostsPage.vue')
const PostDetailPage = () => import('@/components/PostDetailPage.vue')
const LoginPage = () => import('@/components/LoginPage.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/counter',
      name: 'CounterPage',
      component: CounterPage,
      beforeEnter: (to, from, next) => {
        if (store.getters['auth/isAuthenticated']) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/posts',
      name: 'PostsPage',
      component: PostsPage,
      children: [
        {
          path: ':id',
          name: 'PostDetailPage',
          component: PostDetailPage
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
})

export default router
