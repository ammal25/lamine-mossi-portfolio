<!--
  Home.vue — page d'accueil (one-pager scrollable)
  Chemin : src/views/Home.vue

  Architecture hybride :
    - Cette vue empile toutes les sections (Hero, About, Projects, Skills, Experience, Contact)
    - Les projets cliquables ouvrent /projects/:slug (voir ProjectDetail.vue)
-->
<template>
  <main id="top" ref="root">
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'
import Experience from '@/components/Experience.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'HomeView',
  components: { Hero, About, Projects, Skills, Experience, Contact },
  data() {
    return { io: null }
  },
  mounted() {
    this.$nextTick(() => this.initReveal())
    // Si on arrive avec un hash (#projects, #contact...), on scrolle dessus
    if (this.$route.hash) {
      this.$nextTick(() => {
        const el = document.querySelector(this.$route.hash)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 72
          window.scrollTo({ top, behavior: 'smooth' })
        }
      })
    }
  },
  beforeUnmount() {
    if (this.io) this.io.disconnect()
  },
  methods: {
    initReveal() {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const selectors = [
        '.hero-content > *', '.hero-aside > *',
        '.section-head', '.about-grid > *',
        '.project', '.skill-group', '.timeline-item',
        '.contact-main', '.contact-links',
        '.awards li', '.filters'
      ]
      const root = this.$refs.root
      if (!root) return
      const revealables = root.querySelectorAll(selectors.join(','))

      if (prefersReduced || !('IntersectionObserver' in window)) {
        revealables.forEach(el => el.classList.add('reveal', 'is-visible'))
        return
      }

      revealables.forEach(el => el.classList.add('reveal'))

      this.io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = Array.from(entry.target.parentElement.children)
              .filter(c => c.classList.contains('reveal'))
            const idx = Math.max(0, siblings.indexOf(entry.target))
            setTimeout(() => {
              entry.target.classList.add('is-visible')
            }, Math.min(idx * 60, 400))
            this.io.unobserve(entry.target)
          }
        })
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })

      revealables.forEach(el => this.io.observe(el))
    }
  }
}
</script>

<style scoped>
/* La vue elle-même n'a pas de styles propres — tout est scoped
   dans les composants enfants. Les règles .reveal viennent de tokens.css. */
</style>