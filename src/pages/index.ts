// route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const LoginPage = () => import('./LoginPage/LoginPage.vue')
const HomePage = () => import('./HomePage/HomePage.vue')
const RolesPage = () => import('./Administration/RolesPage.vue')
const UsersPage = () => import('./Administration/UsersPage.vue')

export { LoginPage, HomePage, RolesPage, UsersPage }
