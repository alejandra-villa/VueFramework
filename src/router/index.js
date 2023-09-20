import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/afiliados',
    name: 'Afiliados',
    component: () => import(/* webpackChunkName: "about" */ '../views/AfiliadoView.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductosView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
