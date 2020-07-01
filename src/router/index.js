import Vue from 'vue'
import VueRouter from 'vue-router'
import ComingSoon from '@/components/ComingSoon.vue'
import About from '@/components/About.vue'
import Home from '@/components/Home.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/soon',
    name: 'ComingSoon',
    component: ComingSoon
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  routes
})

export default router
