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
      path: '/:pathMatch(.*)',
      redirect: '/',
    },
    {
      path: '/login',
      name: 'login',
      component: Pages.LoginPage,
    },
    {
      path: '/admin',
      children: [
        { path: 'roles', name: 'admin-roles', component: Pages.RolesPage },
        { path: 'users', name: 'admin-users', component: Pages.UsersPage },
      ],
    },
  ],
})

export default router
