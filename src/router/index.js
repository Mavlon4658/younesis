import { createRouter, createWebHistory } from 'vue-router';
import LogIn from "@/auth/LogIn.vue";
import Register from "@/auth/Register.vue";
import HomeDefault from '@/components/HomeDefault.vue';
import Home from "@/views/Home.vue";
import Courses from "@/views/Courses.vue";
import Settings from '@/views/Settings.vue';
import Support from '@/views/Support.vue';
import Profile from '@/views/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'HomeDefault',
    component: HomeDefault,
    children: [
      {path: '/', name: 'Home', component: Home},
      {path: 'courses', name: 'Courses', component: Courses},
      {path: 'settings', name: 'Settings', component: Settings},
      {path: 'support', name: 'Support', component: Support},
      {path: 'profile', name: 'Profile', component: Profile},
    ]
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
