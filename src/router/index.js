import { createRouter, createWebHistory } from 'vue-router'
import LoginScreen from '@/views/guest/LoginScreen.vue'
import FeedScreen from '@/views/authenticated/FeedScreen.vue'
import CommunitiesScreen from '@/views/guest/CommunitiesScreen.vue'
import AssignmentScreen from '@/views/guest/AssignmentScreen.vue'
import ProfileScreen from '@/views/guest/ProfileScreen.vue'
import ChatScreen from '@/views/guest/ChatScreen.vue'
import StudentScreen from '@/views/guest/StudentScreen.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/guest/LoginScreen.vue'),
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import('@/views/authenticated/FeedScreen.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/communities',
    name: 'Communities',
    component: () => import('@/views/guest/CommunitiesScreen.vue'),
  },
  {
    path: '/assignments',
    name: 'AssignmentScreen',
    component: () => import('@/views/guest/AssignmentScreen.vue'),
  },
  {
    path: '/profile',
    name: 'ProfileScreen',
    component: () => import('@/views/guest/ProfileScreen.vue'),
  },
  {
    path: '/chat',
    name: 'ChatScreen',
    component: () => import('@/views/guest/ChatScreen.vue'),
  },
  {
    path: '/student',
    name: 'StudentScreen',
    component: () => import('@/views/guest/StudentScreen.vue'),
  },
  {
    path: '/createcourse',
    name: 'CreateCourse',
    component: () => import('@/views/guest/CreateCourse.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

function isAuthenticated() {
  return localStorage.getItem('loggedIn') === 'true'
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/')
  } else {
    next()
  }
})

export default router
