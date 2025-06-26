import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/pages/Landing.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import Home from '@/pages/Home.vue'

const routes = [
  { path: '/', name: 'Landing', component: Landing },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/home', name: 'Home', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
