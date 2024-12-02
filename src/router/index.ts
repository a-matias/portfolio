import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FirebaseView from '@/views/FirebaseView.vue'
import LoginView from '@/views/LoginView.vue'
import SocialView from '@/views/SocialView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/firebase',
    name: 'firebase',
    component: FirebaseView
  },
  {
    path: '/social',
    name: 'social',
    component: SocialView
  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
