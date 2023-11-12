import { createRouter, createWebHistory } from 'vue-router';

import LogIn from "@/auth/LogIn.vue";
import Register from "@/auth/Register.vue";
import HomeView from '@/components/HomeView.vue';
import Home from "@/views/Home.vue";
import Courses from "@/views/Courses.vue";
import Settings from '@/views/Settings.vue';
import Support from '@/views/Support.vue';
import ProfileView from '@/components/ProfileView.vue';
import Profile from '@/views/profile/Profile.vue';
import EditProfileView from '@/components/EditProfileView.vue'
import EditProfile from '@/views/profile/EditProfile.vue';
import EditRoles from '@/views/profile/EditRoles.vue';
import EditNiches from '@/views/profile/EditNiches.vue';
import EditLinksToProjects from '@/views/profile/EditLinksToProjects.vue';
import EditContacts from '@/views/profile/EditContacts.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    children: [
      {path: '/', name: 'Home', component: Home},
      {path: 'courses', name: 'Courses', component: Courses},
      {path: 'settings', name: 'Settings', component: Settings},
      {path: 'support', name: 'Support', component: Support},
      {
        path: 'profile', 
        name: 'ProfileDefault', 
        component: ProfileView,
        children: [
          {path: '', name: "Profile", component: Profile},
          {
            path: 'edit',
            name: 'EditProfileView',
            component: EditProfileView,
            children: [
              {path: '', name: 'EditProfile', component: EditProfile},
              {path: 'roles', name: 'EditRoles', component: EditRoles},
              {path: 'niches', name: 'EditNiches', component: EditNiches},
              {path: 'links-to-projects', name: 'EditLinksToProjects', component: EditLinksToProjects},
              {path: 'contacts', name: 'EditContacts', component: EditContacts},
            ]
          }
        ]
      },
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
