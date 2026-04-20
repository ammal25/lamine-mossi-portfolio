<!--
  Hero.vue — section d'accueil
  Chemin : src/components/Hero.vue
-->
<template>
  <section class="hero">
    <div class="hero-grid">
      <div class="hero-content">
        <p class="eyebrow">
          <span class="dot-live"></span>
          Génie informatique · Université Laval · Québec
        </p>
        <h1 class="hero-title">
          Mahamadou Lamine<br>
          Abdou <span class="accent-word">Mossi</span>.
        </h1>
        <p class="hero-lead">
          Étudiant en 3<sup>e</sup> année de baccalauréat en génie informatique. Je construis
          des logiciels robustes, du <em>bas niveau embarqué</em> aux <em>systèmes pleinement stackés</em>
          — avec une formation rigoureuse en classes préparatoires MP (major de promotion).
        </p>

        <div class="hero-meta">
          <div class="meta-item">
            <span class="meta-label">Recherche</span>
            <span class="meta-val">Stage technique été 2026</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Domaines</span>
            <span class="meta-val">Dev logiciel · Embarqué · Systèmes</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Localisation</span>
            <span class="meta-val">Québec · Canada · Remote</span>
          </div>
        </div>

        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary" @click.prevent="scrollTo('projects')">Voir les projets</a>
          <a href="mailto:mossimahamadoulamine@gmail.com" class="btn btn-ghost">
            mossimahamadoulamine@gmail.com
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
          </a>
        </div>
      </div>

      <aside class="hero-aside">
        <div class="id-card">
          <div class="id-row">
            <span class="id-k">Formation</span>
            <span class="id-v">B.Sc. Génie informatique</span>
          </div>
          <div class="id-row">
            <span class="id-k">Université</span>
            <span class="id-v">Université Laval</span>
          </div>
          <div class="id-row">
            <span class="id-k">Année</span>
            <span class="id-v">3<sup>e</sup> · 2023 — 2027</span>
          </div>
          <div class="id-row">
            <span class="id-k">Prépa</span>
            <span class="id-v">MP — Major promo</span>
          </div>
          <div class="id-row">
            <span class="id-k">Langues</span>
            <span class="id-v">FR · EN · AR</span>
          </div>
          <div class="id-row id-links">
            <a href="https://github.com/ammal25" target="_blank" rel="noopener" aria-label="GitHub">GitHub</a>
            <a href="https://www.linkedin.com/in/lamine-mossi" target="_blank" rel="noopener" aria-label="LinkedIn">LinkedIn</a>
            <a href="tel:+14388661726" aria-label="Téléphone">438·866·1726</a>
          </div>
        </div>

        <div class="stat-band">
          <div class="stat">
            <span class="stat-num">15+</span>
            <span class="stat-lbl">Projets techniques</span>
          </div>
          <div class="stat">
            <span class="stat-num">3★</span>
            <span class="stat-lbl">Bourses d'excellence</span>
          </div>
          <div class="stat">
            <span class="stat-num">1</span>
            <span class="stat-lbl">Publication en révision (ACL)</span>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 72
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.hero {
  max-width: var(--container);
  margin: 0 auto;
  padding: 5rem 2rem 6rem;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 5rem;
  align-items: start;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  text-transform: uppercase;
  margin-bottom: 1.75rem;
}
.dot-live {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 3px rgba(31, 93, 90, 0.15);
  animation: pulse 2.5s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 3px rgba(31, 93, 90, 0.15); }
  50% { box-shadow: 0 0 0 6px rgba(31, 93, 90, 0.05); }
}

.hero-title {
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(2.75rem, 6vw, 5rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 2rem;
}
.accent-word {
  font-style: italic;
  color: var(--accent);
  position: relative;
}

.hero-lead {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--ink-2);
  max-width: 56ch;
  font-weight: 400;
  margin-bottom: 2.5rem;
}
.hero-lead em {
  font-style: normal;
  color: var(--accent-ink);
  border-bottom: 1px dashed var(--accent);
  padding-bottom: 1px;
}

.hero-meta {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  margin-bottom: 2rem;
}
.meta-item {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1.5rem;
  font-size: 0.9rem;
}
.meta-label {
  font-family: var(--mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-4);
  padding-top: 2px;
}
.meta-val {
  color: var(--ink-2);
  font-weight: 450;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: var(--radius);
  transition: all var(--trans);
  letter-spacing: 0.005em;
}
.btn-primary {
  background: var(--ink);
  color: var(--bg);
}
.btn-primary:hover {
  background: var(--accent-ink);
  transform: translateY(-1px);
  box-shadow: var(--shadow);
}
.btn-ghost {
  border: 1px solid var(--line-strong);
  color: var(--ink-2);
  background: var(--bg-elev);
}
.btn-ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-1px);
}

/* Aside */
.hero-aside {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3.5rem;
}
.id-card {
  background: var(--bg-elev);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow);
}
.id-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.55rem 0;
  border-bottom: 1px solid var(--line);
  font-size: 0.85rem;
}
.id-row:last-child { border-bottom: none; padding-bottom: 0; }
.id-row:first-child { padding-top: 0; }
.id-k {
  font-family: var(--mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-4);
}
.id-v {
  color: var(--ink);
  font-weight: 500;
  text-align: right;
}
.id-links {
  display: flex !important;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 0.8rem !important;
}
.id-links a {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--accent);
  border-bottom: 1px solid transparent;
  transition: border-color var(--trans);
}
.id-links a:hover { border-bottom-color: var(--accent); }

.stat-band {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.stat {
  background: var(--bg-elev);
  padding: 1.1rem 0.8rem;
  text-align: center;
}
.stat-num {
  display: block;
  font-family: var(--serif);
  font-size: 1.75rem;
  line-height: 1;
  color: var(--ink);
  margin-bottom: 0.3rem;
  font-style: italic;
}
.stat-lbl {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-4);
  line-height: 1.3;
  display: block;
}

@media (max-width: 1024px) {
  .hero-grid { grid-template-columns: 1fr; gap: 3rem; }
  .hero-aside { margin-top: 0; }
}
@media (max-width: 640px) {
  .hero { padding: 3rem 1.25rem 4rem; }
  .hero-title { font-size: 2.5rem; }
  .meta-item { grid-template-columns: 1fr; gap: 0.25rem; }
  .hero-actions { flex-direction: column; align-items: stretch; }
  .btn { justify-content: center; }
  .stat-band { grid-template-columns: 1fr; }
}
@media print {
  .hero-actions { display: none; }
}
</style>