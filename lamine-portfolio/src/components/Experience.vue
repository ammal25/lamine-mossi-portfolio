<!--
  Experience.vue — section parcours + bourses
  Chemin : src/components/Experience.vue
-->
<template>
  <section id="experience" class="section">
    <div class="section-head">
      <span class="section-num">04</span>
      <h2 class="section-title">Parcours</h2>
    </div>

    <div class="exp-split">
      <div>
        <h3 class="exp-category">Expériences professionnelles</h3>
        <ol class="timeline">
          <li class="timeline-item">
            <div class="timeline-period">2025 — présent</div>
            <h4 class="timeline-role">Développeur en automatisation &amp; analyste financier</h4>
            <div class="timeline-org">Ministère de l'Enseignement supérieur — DGBC · Québec</div>
            <ul class="timeline-bullets">
              <li>Conception de l'outil <em>OutilsDeContrat</em> (VBA) pour la génération automatique de contrats Word multi-annexes.</li>
              <li>Automatisation de flux documentaires complexes dans l'écosystème Microsoft 365 / SharePoint.</li>
              <li>Contrôle budgétaire EXP et analyse financière pour le bureau DGBC.</li>
            </ul>
          </li>

          <li class="timeline-item">
            <div class="timeline-period">Été 2025</div>
            <h4 class="timeline-role">Auxiliaire de recherche</h4>
            <div class="timeline-org">Université Laval · Laboratoire de recherche</div>
            <ul class="timeline-bullets">
              <li>Analyse, catégorisation et structuration d'informations à haute rigueur intellectuelle, applicable à l'interprétation de textes normatifs.</li>
              <li>Structuration et intégration de données numériques dans divers systèmes d'information.</li>
              <li>Exploitation et validation de données avec contrôle qualité et cohérence des ensembles de données.</li>
              <li>Utilisation d'outils de gestion documentaire et bureautiques pour le traitement et le stockage de données.</li>
            </ul>
          </li>

          <li class="timeline-item">
            <div class="timeline-period">Automne 2024</div>
            <h4 class="timeline-role">Annotateur de données</h4>
            <div class="timeline-org">Université Laval · Laboratoire de recherche</div>
            <ul class="timeline-bullets">
              <li>Annotation et structuration de données pour projets d'apprentissage automatique.</li>
              <li>Contrôle qualité et cohérence des ensembles de données.</li>
            </ul>
          </li>

          <li class="timeline-item">
            <div class="timeline-period">Juin — oct. 2024</div>
            <h4 class="timeline-role">Signaleur routier &amp; agent de stationnement</h4>
            <div class="timeline-org">McKinnon Services · Québec</div>
            <ul class="timeline-bullets">
              <li>Gestion de la sécurité sur chantiers et événements de grande envergure.</li>
              <li>Coordination avec opérateurs d'équipement ; respect de normes de sécurité strictes.</li>
            </ul>
          </li>
        </ol>
      </div>

      <div>
        <h3 class="exp-category">Formation &amp; distinctions</h3>
        <ol class="timeline">
          <li class="timeline-item">
            <div class="timeline-period">2023 — 2027</div>
            <h4 class="timeline-role">B.Sc. Génie informatique</h4>
            <div class="timeline-org">Université Laval · Québec, Canada</div>
          </li>

          <li class="timeline-item">
            <div class="timeline-period">2021 — 2023</div>
            <h4 class="timeline-role">CPGE — filière MP (Mathématiques-Physique)</h4>
            <div class="timeline-org">UPS · Sousse, Tunisie</div>
            <ul class="timeline-bullets">
              <li><strong>Major de promotion</strong> · tableaux d'honneur.</li>
            </ul>
          </li>

          <li class="timeline-item">
            <div class="timeline-period">2014 — 2021</div>
            <h4 class="timeline-role">Diplôme d'études secondaires</h4>
            <div class="timeline-org">CSP Manou Diatta · Niamey, Niger</div>
            <ul class="timeline-bullets">
              <li><strong>Major de promotion.</strong></li>
            </ul>
          </li>
        </ol>

        <h3 class="exp-category" style="margin-top:3rem">Bourses &amp; distinctions</h3>
        <ul class="awards">
          <li><span class="award-year">2023</span> Bourse d'excellence — Gouvernement du Québec (exemption frais de scolarité majorés)</li>
          <li><span class="award-year">2023</span> Bourse d'admission Université de Sherbrooke · 2 000 CAD</li>
          <li><span class="award-year">2021</span> Bourse d'excellence complète — Gouvernement du Niger</li>
          <li><span class="award-year">2021-23</span> Tableaux d'honneur · Prépa MP</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'ExperienceSection' }
</script>

<style scoped>
.exp-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}
.exp-category {
  font-family: var(--mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent);
  margin-bottom: 2rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--line);
}
.timeline {
  position: relative;
  padding-left: 1.5rem;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 1px;
  background: var(--line-strong);
}
.timeline-item {
  position: relative;
  padding-left: 1.5rem;
  padding-bottom: 2rem;
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: -1.87rem;
  top: 0.45rem;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--accent);
}
.timeline-item:last-child { padding-bottom: 0; }
.timeline-period {
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--ink-3);
  margin-bottom: 0.4rem;
}
.timeline-role {
  font-family: var(--serif);
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--ink);
  margin-bottom: 0.2rem;
  letter-spacing: -0.005em;
}
.timeline-org {
  font-size: 0.85rem;
  color: var(--ink-3);
  margin-bottom: 0.7rem;
}
.timeline-bullets {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.timeline-bullets li {
  font-size: 0.88rem;
  color: var(--ink-2);
  line-height: 1.55;
  padding-left: 1rem;
  position: relative;
}
.timeline-bullets li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--accent);
}
.timeline-bullets em {
  font-style: italic;
  color: var(--accent-ink);
}

.awards {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.awards li {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 1rem;
  font-size: 0.88rem;
  color: var(--ink-2);
  padding-bottom: 0.7rem;
  border-bottom: 1px solid var(--line);
  line-height: 1.5;
}
.awards li:last-child { border-bottom: none; }
.award-year {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--ink-4);
  letter-spacing: 0.05em;
}

@media (max-width: 1024px) {
  .exp-split { grid-template-columns: 1fr; gap: 3rem; }
}
@media (max-width: 640px) {
  .awards li { grid-template-columns: 1fr; gap: 0.15rem; }
}
</style>