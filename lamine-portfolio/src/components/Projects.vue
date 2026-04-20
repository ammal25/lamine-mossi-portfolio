<!--
  Projects.vue — section projets (filtrables + lien vers détail)
  Chemin : src/components/Projects.vue
-->
<template>
  <section id="projects" class="section">
    <div class="section-head">
      <span class="section-num">02</span>
      <h2 class="section-title">Projets sélectionnés</h2>
      <p class="section-sub">Une sélection de travaux universitaires et personnels, avec un accent sur la profondeur technique.</p>
    </div>

    <div class="filters" role="tablist">
      <button
        v-for="f in filters"
        :key="f.id"
        class="filter-btn"
        :class="{ 'is-active': active === f.id }"
        @click="active = f.id"
      >{{ f.label }}</button>
    </div>

    <div class="projects-grid">
      <router-link
        v-for="p in visibleProjects"
        :key="p.slug"
        :to="{ name: 'project-detail', params: { slug: p.slug } }"
        class="project"
        :class="{ featured: p.featured }"
      >
        <header class="project-header">
          <div class="project-meta">
            <span class="project-course">{{ p.course }}</span>
            <span
              v-if="p.badge"
              class="project-badge"
              :class="{ accent: p.badgeAccent }"
            >{{ p.badge }}</span>
          </div>
          <h3 class="project-title">{{ p.title }}</h3>
        </header>
        <p class="project-desc">{{ p.desc }}</p>
        <ul class="project-tags">
          <li v-for="t in p.tags" :key="t">{{ t }}</li>
        </ul>
      </router-link>
    </div>
  </section>
</template>

<script>
import { projects } from '@/data/projects'

export default {
  name: 'ProjectsSection',
  data() {
    return {
      active: 'all',
      filters: [
        { id: 'all', label: 'Tous' },
        { id: 'systems', label: 'Systèmes & embarqué' },
        { id: 'software', label: 'Développement logiciel' },
        { id: 'ai', label: 'IA & recherche' },
        { id: 'scientific', label: 'Calcul scientifique' },
        { id: 'networks', label: 'Réseaux' }
      ],
      projects
    }
  },
  computed: {
    visibleProjects() {
      if (this.active === 'all') return this.projects
      return this.projects.filter(p => p.cat === this.active)
    }
  }
}
</script>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--line);
}
.filter-btn {
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.03em;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  color: var(--ink-3);
  background: transparent;
  border: 1px solid transparent;
  transition: all var(--trans);
}
.filter-btn:hover {
  color: var(--ink);
  background: var(--bg-inset);
}
.filter-btn.is-active {
  color: var(--accent);
  background: var(--accent-soft);
  border-color: rgba(31, 93, 90, 0.15);
  font-weight: 500;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.project {
  background: var(--bg-elev);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 1.75rem 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  transition: all var(--trans);
  position: relative;
  overflow: hidden;
  color: inherit;
}
.project::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--trans-slow);
}
.project:hover {
  border-color: var(--line-strong);
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}
.project:hover::before { transform: scaleX(1); }
.project.featured {
  grid-column: span 2;
  background: linear-gradient(to bottom, var(--bg-elev), var(--bg-inset) 200%);
}
.project.featured::before { background: linear-gradient(90deg, var(--accent), transparent); }

.project-header { margin-bottom: 1rem; }
.project-meta {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}
.project-course {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-4);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.project-badge {
  font-family: var(--mono);
  font-size: 0.65rem;
  padding: 0.2rem 0.55rem;
  background: var(--bg-inset);
  color: var(--ink-2);
  border-radius: 3px;
  letter-spacing: 0.04em;
  border: 1px solid var(--line);
}
.project-badge.accent {
  background: var(--accent-soft);
  color: var(--accent-ink);
  border-color: rgba(31, 93, 90, 0.15);
}
.project-title {
  font-family: var(--serif);
  font-size: 1.35rem;
  font-weight: 400;
  line-height: 1.25;
  color: var(--ink);
  letter-spacing: -0.005em;
}
.project.featured .project-title { font-size: 1.6rem; }

.project-desc {
  font-size: 0.93rem;
  color: var(--ink-2);
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex: 1;
}
.project-desc em {
  font-style: italic;
  color: var(--accent-ink);
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding-top: 1rem;
  border-top: 1px solid var(--line);
}
.project-tags li {
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--ink-3);
  padding: 0.15rem 0.45rem;
  background: var(--bg-inset);
  border-radius: 3px;
  letter-spacing: 0.01em;
}

@media (max-width: 1024px) {
  .projects-grid { grid-template-columns: 1fr; }
  .project.featured { grid-column: span 1; }
}
@media (max-width: 640px) {
  .filters { gap: 0.3rem; }
  .filter-btn { padding: 0.3rem 0.7rem; font-size: 0.7rem; }
}
@media print {
  .filters { display: none; }
  .project { break-inside: avoid; }
}
</style>