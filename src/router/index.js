import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/work',
    name: 'WorkDetail',
    component: WorkView,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
