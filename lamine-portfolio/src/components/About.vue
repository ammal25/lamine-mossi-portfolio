<!--
  About.vue — section "À propos"
  Chemin : src/components/About.vue
-->
<template>
  <section id="about" class="section">
    <div class="section-head">
      <span class="section-num">01</span>
      <h2 class="section-title">À propos</h2>
    </div>
    <div class="about-grid">
      <p class="about-lead">
        Je suis un ingénieur en devenir formé à la rigueur des <strong>classes préparatoires
        Mathématiques-Physiques (systeme français)</strong> où j'ai terminé major de promotion. À l'Université Laval,
        je me spécialise à la frontière du <strong>développement logiciel</strong> et des
        <strong>systèmes embarqués</strong> — deux domaines que je considère inséparables quand il
        s'agit de construire des produits tangibles.
      </p>
      <p class="about-body">
        Les projets qui m'animent combinent généralement du code haut niveau, une couche système
        bas niveau, et une exigence de correction prouvable. J'ai récemment travaillé avec le Prof. Richard
        Khoury sur un système <em>RAG</em> en assurance (en révision à ACL), conçu un driver laser CMOS
        sous LTSpice, implémenté un système de fichiers FUSE en C/C++, et livré un outil VBA en
        production pour le ministère de l'Enseignement supérieur du Québec.
      </p>
      <p class="about-body">
        Je parle <strong>français</strong> (maternelle), <strong>anglais</strong> (avancé) et
        <strong>arabe</strong> (85%). Je cherche un stage d'été 2026 en développement logiciel,
        systèmes embarqués ou calcul scientifique.
      </p>
    </div>
  </section>
</template>

<script>
export default { name: 'AboutSection' }
</script>

<style scoped>
.about-grid {
  max-width: 720px;
}
.about-lead {
  font-family: var(--serif);
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--ink);
  margin-bottom: 1.75rem;
  font-style: italic;
  font-weight: 400;
}
.about-lead strong {
  font-family: var(--sans);
  font-weight: 600;
  font-style: normal;
  color: var(--accent-ink);
}
.about-body {
  font-size: 1rem;
  color: var(--ink-2);
  margin-bottom: 1.3rem;
  max-width: 65ch;
}
.about-body em {
  color: var(--accent-ink);
  font-style: italic;
}
.about-body strong {
  font-weight: 600;
  color: var(--ink);
}
</style>