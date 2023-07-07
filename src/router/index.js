import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.view.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        auth: true
      },
      children: [
        {
          path: ':id(\\d)',
          name: 'channels',
          component: () => import('@/views/Messages.view.vue'),
          props: true
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.view.vue')
    }
    
  ]
})

router.beforeEach((to, from) => {
  const user = JSON.parse(localStorage.getItem('user'))

  if(to.meta.auth && !user){
    return '/login'
  }else {
    return true
  }

})

export default router
