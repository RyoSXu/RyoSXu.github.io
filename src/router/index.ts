import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tools from '../views/Tools.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
