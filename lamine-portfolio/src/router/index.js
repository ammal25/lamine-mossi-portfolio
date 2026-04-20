/* ==========================================================================
   router/index.js — routage Vue Router 4 (Vue 3)
   Chemin : src/router/index.js
   ========================================================================== */

import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home.vue')
const ProjectDetail = () => import('@/views/ProjectDetail.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Mahamadou Lamine A. Mossi — Ingénieur informatique' }
  },
  {
    path: '/projects/:slug',
    name: 'project-detail',
    component: ProjectDetail,
    props: true,
    meta: { title: 'Projet — Mahamadou Lamine A. Mossi' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) document.title = to.meta.title
})

export default router