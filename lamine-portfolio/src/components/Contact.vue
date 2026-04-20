<!--
  Contact.vue — section contact
  Chemin : src/components/Contact.vue
-->
<template>
  <section id="contact" class="section contact">
    <div class="section-head">
      <span class="section-num">05</span>
      <h2 class="section-title">Contact</h2>
    </div>

    <div class="contact-grid">
      <div class="contact-main">
        <p class="contact-lead">
          Disponible pour un <strong>stage technique à l'été 2026</strong> (développement logiciel,
          systèmes embarqués ou calcul scientifique). Ouvert aux discussions sur d'autres opportunités
          alignées avec mon profil.
        </p>
        <a href="mailto:mossimahamadoulamine@gmail.com" class="contact-email">
          mossimahamadoulamine@gmail.com
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
        </a>
      </div>

      <div class="contact-links">
        <a href="https://github.com/ammal25" target="_blank" rel="noopener" class="contact-link">
          <span class="cl-label">GitHub</span>
          <span class="cl-handle">@ammal25</span>
        </a>
        <a href="https://www.linkedin.com/in/lamine-mossi" target="_blank" rel="noopener" class="contact-link">
          <span class="cl-label">LinkedIn</span>
          <span class="cl-handle">lamine-mossi</span>
        </a>
        <a href="tel:+14388661726" class="contact-link">
          <span class="cl-label">Téléphone</span>
          <span class="cl-handle">+1 438 866-1726</span>
        </a>
        <a href="/cv-mossi.pdf" class="contact-link" download="Mossi-CV.pdf" target="_blank" rel="noopener">
          <span class="cl-label">Curriculum vitæ</span>
          <span class="cl-handle">Télécharger (PDF)</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'ContactSection' }
</script>

<style scoped>
.contact { padding-bottom: 6rem; }
.contact-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 4rem;
  align-items: start;
}
.contact-lead {
  font-family: var(--serif);
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--ink);
  margin-bottom: 2rem;
  font-style: italic;
  max-width: 32ch;
}
.contact-lead strong {
  font-family: var(--sans);
  font-weight: 600;
  font-style: normal;
  color: var(--accent-ink);
}
.contact-email {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--mono);
  font-size: 1.05rem;
  color: var(--accent);
  padding: 1rem 1.5rem;
  background: var(--accent-soft);
  border-radius: var(--radius);
  transition: all var(--trans);
  border: 1px solid transparent;
}
.contact-email:hover {
  background: var(--accent);
  color: var(--bg-elev);
  border-color: var(--accent-ink);
  transform: translateY(-1px);
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0;
  background: var(--bg-elev);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.contact-link {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1.1rem 1.5rem;
  border-bottom: 1px solid var(--line);
  transition: all var(--trans);
  position: relative;
}
.contact-link:last-child { border-bottom: none; }
.contact-link:hover {
  background: var(--bg-inset);
  padding-left: 1.75rem;
}
.cl-label {
  font-family: var(--mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-4);
}
.cl-handle {
  font-size: 0.9rem;
  color: var(--ink);
  font-weight: 500;
}

@media (max-width: 1024px) {
  .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
}
@media (max-width: 640px) {
  .contact-link {
    padding: 1rem 1.25rem;
    flex-direction: column;
    gap: 0.2rem;
    align-items: flex-start;
  }
  .contact-link:hover { padding-left: 1.5rem; }
}
</style>