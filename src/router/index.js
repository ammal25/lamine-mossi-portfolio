import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import AboutMe from '../views/AboutMe.vue'
import ExperiencesView from '../views/ExperiencesView.vue'
import ProjectsView from '../views/ProjectsView.vue' // <-- ASSUREZ-VOUS QUE CETTE LIGNE EXISTE ET EST CORRECTE

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects', // <-- ASSUREZ-VOUS QUE CETTE ROUTE EXISTE
    name: 'projects',
    component: ProjectsView // <-- ET QU'ELLE POINTE VERS LE BON COMPOSANT
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: ExperiencesView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutMe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router