import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../pages/HomeVue.vue';

const routes = [
  {
    path: '/',
    redirect : '/home'
  },
  {
    path: '/home',
    component: HomeVue
  },
  {
    path: '/Project',
    name: 'projeck',
    component: () => import( '../pages/ProjeckVue.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
