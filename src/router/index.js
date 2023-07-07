import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.view.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.view.vue')
    }
    
  ]
})

export default router
