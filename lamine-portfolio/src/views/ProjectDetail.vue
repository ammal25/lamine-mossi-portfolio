<!--
  ProjectDetail.vue — page de détail d'un projet
  Chemin : src/views/ProjectDetail.vue
  Route : /projects/:slug
-->
<template>
  <main class="project-detail">
    <div v-if="project" class="pd-inner">
      <router-link to="/#projects" class="pd-back">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Retour aux projets
      </router-link>

      <header class="pd-header">
        <div class="pd-meta">
          <span class="pd-course">{{ project.course }}</span>
          <span
            v-if="project.badge"
            class="pd-badge"
            :class="{ accent: project.badgeAccent }"
          >{{ project.badge }}</span>
        </div>
        <h1 class="pd-title">{{ project.title }}</h1>
        <p class="pd-desc">{{ project.desc }}</p>
      </header>

      <section class="pd-section">
        <h2 class="pd-section-title">Description détaillée</h2>
        <p class="pd-long">{{ project.long }}</p>
      </section>

      <section class="pd-section">
        <h2 class="pd-section-title">Technologies &amp; outils</h2>
        <ul class="pd-tags">
          <li v-for="t in project.tags" :key="t">{{ t }}</li>
        </ul>
      </section>

      <nav class="pd-nav">
        <router-link
          v-if="prev"
          :to="{ name: 'project-detail', params: { slug: prev.slug } }"
          class="pd-nav-link pd-prev"
        >
          <span class="pd-nav-label">← Projet précédent</span>
          <span class="pd-nav-title">{{ prev.title }}</span>
        </router-link>
        <router-link
          v-if="next"
          :to="{ name: 'project-detail', params: { slug: next.slug } }"
          class="pd-nav-link pd-next"
        >
          <span class="pd-nav-label">Projet suivant →</span>
          <span class="pd-nav-title">{{ next.title }}</span>
        </router-link>
      </nav>
    </div>

    <div v-else class="pd-missing">
      <h1>Projet introuvable</h1>
      <p>Le projet demandé n'existe pas ou a été déplacé.</p>
      <router-link to="/" class="pd-back">← Retour à l'accueil</router-link>
    </div>
  </main>
</template>

<script>
import { projects, findProject } from '@/data/projects'

export default {
  name: 'ProjectDetail',
  props: {
    slug: { type: String, required: true }
  },
  computed: {
    project() { return findProject(this.slug) },
    index() { return projects.findIndex(p => p.slug === this.slug) },
    prev() { return this.index > 0 ? projects[this.index - 1] : null },
    next() { return this.index >= 0 && this.index < projects.length - 1 ? projects[this.index + 1] : null }
  },
  watch: {
    slug() { window.scrollTo({ top: 0, behavior: 'instant' }) }
  }
}
</script>

<style scoped>
.project-detail {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem 6rem;
}

.pd-back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-bottom: 2.5rem;
  transition: color var(--trans);
}
.pd-back:hover { color: var(--accent); }

.pd-header {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--line);
}
.pd-meta {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.pd-course {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-4);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.pd-badge {
  font-family: var(--mono);
  font-size: 0.65rem;
  padding: 0.2rem 0.55rem;
  background: var(--bg-inset);
  color: var(--ink-2);
  border-radius: 3px;
  letter-spacing: 0.04em;
  border: 1px solid var(--line);
}
.pd-badge.accent {
  background: var(--accent-soft);
  color: var(--accent-ink);
  border-color: rgba(31, 93, 90, 0.15);
}
.pd-title {
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.1;
  letter-spacing: -0.015em;
  color: var(--ink);
  margin-bottom: 1.25rem;
}
.pd-desc {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--ink-2);
  max-width: 65ch;
}

.pd-section {
  margin-bottom: 3rem;
}
.pd-section-title {
  font-family: var(--mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent);
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--line);
}
.pd-long {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--ink-2);
  max-width: 68ch;
}

.pd-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.pd-tags li {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--ink-2);
  padding: 0.35rem 0.7rem;
  background: var(--bg-inset);
  border-radius: 4px;
  border: 1px solid var(--line);
}

.pd-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--line);
}
.pd-nav-link {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.25rem 1.5rem;
  background: var(--bg-elev);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  transition: all var(--trans);
}
.pd-nav-link:hover {
  border-color: var(--accent);
  transform: translateY(-1px);
  box-shadow: var(--shadow-hover);
}
.pd-next { text-align: right; grid-column: 2; }
.pd-prev { grid-column: 1; }
.pd-nav-label {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-4);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.pd-nav-title {
  font-family: var(--serif);
  font-size: 1rem;
  color: var(--ink);
  line-height: 1.3;
}

.pd-missing {
  text-align: center;
  padding: 4rem 0;
}
.pd-missing h1 {
  font-family: var(--serif);
  font-weight: 400;
  font-size: 2rem;
  color: var(--ink);
  margin-bottom: 1rem;
}
.pd-missing p {
  color: var(--ink-3);
  margin-bottom: 2rem;
}

@media (max-width: 640px) {
  .project-detail { padding: 2.5rem 1.25rem 4rem; }
  .pd-nav { grid-template-columns: 1fr; }
  .pd-prev, .pd-next { grid-column: 1; text-align: left; }
}
</style>