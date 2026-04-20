<!--
  NavBar.vue — barre de navigation sticky
  Chemin : src/components/NavBar.vue

  Remplace le contenu actuel de ton NavBar.vue par ce fichier.
  Si tu veux conserver des éléments spécifiques de l'ancien NavBar (logo SVG,
  menu burger, etc.), colle-moi son contenu et je fusionne.
-->
<template>
  <header class="nav" :class="{ 'has-shadow': scrolled }">
    <div class="nav-inner">
      <router-link to="/" class="nav-logo" @click="scrollTop">
        <span class="logo-mark">M<span class="dot">.</span>L</span>
        <span class="logo-name">Mossi</span>
      </router-link>

      <nav class="nav-links" aria-label="Navigation principale">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`/#${link.id}`"
          :class="{ active: activeId === link.id && isHome }"
          @click.prevent="go(link.id)"
        >{{ link.label }}</a>
      </nav>

      <a href="/#contact" class="nav-cta" @click.prevent="go('contact')">
        Disponible pour stage
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      scrolled: false,
      activeId: '',
      ticking: false,
      links: [
        { id: 'about', label: 'À propos' },
        { id: 'projects', label: 'Projets' },
        { id: 'skills', label: 'Compétences' },
        { id: 'experience', label: 'Parcours' },
        { id: 'contact', label: 'Contact' }
      ]
    }
  },
  computed: {
    isHome() {
      return this.$route.name === 'home'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
    this.onScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (this.ticking) return
      this.ticking = true
      requestAnimationFrame(() => {
        this.scrolled = window.scrollY > 8
        this.updateActive()
        this.ticking = false
      })
    },
    updateActive() {
      if (!this.isHome) { this.activeId = ''; return }
      const sections = document.querySelectorAll('main section[id], section[id]')
      const scrollPos = window.scrollY + 120
      let current = ''
      sections.forEach((s) => {
        if (scrollPos >= s.offsetTop) current = s.id
      })
      this.activeId = current
    },
    async go(id) {
      if (this.$route.name !== 'home') {
        await this.$router.push({ name: 'home', hash: `#${id}` })
      } else {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 72
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }
    },
    scrollTop() {
      if (this.$route.name === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(251, 250, 246, 0.85);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid var(--line);
  transition: box-shadow var(--trans);
}
.nav.has-shadow {
  box-shadow: 0 1px 0 rgba(17,21,28,0.04), 0 4px 12px rgba(17,21,28,0.04);
}

.nav-inner {
  max-width: var(--container);
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.nav-logo {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  font-family: var(--serif);
  font-size: 1.25rem;
  letter-spacing: -0.01em;
}
.logo-mark {
  font-weight: 400;
  color: var(--ink);
  font-size: 1.4rem;
}
.logo-mark .dot { color: var(--accent); }
.logo-name {
  font-family: var(--sans);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ink-3);
  font-weight: 500;
}

.nav-links {
  display: flex;
  gap: 2rem;
}
.nav-links a {
  font-size: 0.875rem;
  color: var(--ink-3);
  font-weight: 450;
  position: relative;
  cursor: pointer;
}
.nav-links a:hover { color: var(--ink); }
.nav-links a.active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 1px;
  background: var(--accent);
}

.nav-cta {
  font-size: 0.75rem;
  font-family: var(--mono);
  color: var(--accent);
  padding: 0.5rem 1rem;
  border: 1px solid var(--accent);
  border-radius: 20px;
  transition: all var(--trans);
  white-space: nowrap;
  cursor: pointer;
}
.nav-cta:hover {
  background: var(--accent);
  color: var(--bg-elev);
}

@media (max-width: 1024px) {
  .nav-links { display: none; }
}
@media (max-width: 640px) {
  .nav-cta { display: none; }
  .nav-inner { padding: 0.9rem 1.25rem; }
}
@media print {
  .nav { display: none; }
}
</style>