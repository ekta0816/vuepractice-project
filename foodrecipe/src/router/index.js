import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../view/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/category',
      name: 'category',     
      component: () => import('../view/CategoryPage.vue')
    },
    {
      path: '/about',
      name: 'about',     
      component: () => import('../view/About.vue')
    }
  ]
})

export default router