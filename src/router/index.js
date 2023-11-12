import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import LogIn from "@/auth/LogIn.vue"
import Register from "@/auth/Register.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
