import { createRouter, createWebHistory } from 'vue-router'
import * as Pages from '../pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Pages.HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: Pages.LoginPage,
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/',
    },
  ],
})

export default router
