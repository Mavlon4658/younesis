import { createRouter, createWebHistory } from 'vue-router';

import LogIn from "@/auth/LogIn.vue";
import Register from "@/auth/Register.vue";
import HomeView from '@/components/HomeView.vue';
import Home from "@/views/Home.vue";
import CoursesLayout from '@/views/courses/CoursesLayout.vue';
import Courses from "@/views/courses/Courses.vue";
import Lesson from '@/views/courses/_id.vue';
import Won from '@/views/courses/Won.vue';
import Marketplace from '@/views/courses/Marketplace.vue';
import Test from '@/views/courses/Test.vue';
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

// new version
import NewHomeLayout from '@/newVersion/layouts/HomeLayout.vue'
import NewHome from '@/newVersion/Home.vue';
import News from '@/newVersion/news/News.vue'
import NewsId from '@/newVersion/news/_id.vue';
import Development from '@/newVersion/Development.vue';
import Study from '@/newVersion/Study.vue';
import Fair from '@/newVersion/Fair.vue'
import Tinder from '@/newVersion/Tinder.vue'
import CardHolder from '@/newVersion/CardHolder.vue'
import NewProfile from '@/newVersion/Profile.vue'
// new version end

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    children: [
      {path: '/', name: 'Home', component: Home},
      {
        path: 'courses',
        name: 'CoursesLayout',
        component: CoursesLayout,
        children: [
          {path: '' , name: "Courses", component: Courses},
          {path: ':id', name: 'Lesson', component: Lesson, props: true},
          {path: 'won', name: "Won", component: Won},
          {path: 'marketplace', name: 'Marketplace', component: Marketplace},
          {path: 'test', name: 'Test', component: Test},
        ]
      },
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
  },

  // New version
  {
    path: '/new-version',
    name: 'NewHomeLayout',
    component: NewHomeLayout,
    children: [
      {path: '', name: 'NewHome', component: NewHome},
      {path: "news", name: 'News', component: News},
      {path: 'news/:id', name: 'NewsId', component: NewsId},
      {path: 'development', name: 'Development', component: Development},
      {path: 'study', name: 'Study', component: Study},
      {path: 'fair', name: 'Fair', component: Fair},
      {path: 'tinder', name: 'Tinder', component: Tinder},
      {path: 'card-holder', name: 'CardHolder', component: CardHolder},
      {path: 'profile', name: 'NewProfile', component: NewProfile},
    ]
  }
  // New version end
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
