<!--
  Footer.vue — pied de page
  Chemin : src/components/Footer.vue
  (importé dans App.vue sous le nom <SiteFooter />)
-->
<template>
  <footer class="footer">
    <div class="footer-inner">
      <span>© {{ year }} Mahamadou Lamine Abdou Mossi</span>
      <span class="footer-sep">·</span>
      <span>Québec, Canada</span>
      <span class="footer-sep">·</span>
      <span>Conçu par Lamine Mossi</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding: 2rem;
  margin-top: 4rem;
}
.footer-inner {
  max-width: var(--container);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--ink-4);
  letter-spacing: 0.02em;
}
.footer-sep { color: var(--ink-4); }

@media print {
  .footer { display: none; }
}
</style>