import { createRouter, createWebHistory } from 'vue-router'
import UserProfile from '../views/UserProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user-profile',
      component: UserProfile
    },
  ]
})

export default router
