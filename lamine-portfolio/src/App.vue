<!--
  App.vue — racine de l'application
  Chemin : src/App.vue
-->
<template>
  <div id="app">
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <SiteFooter />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SiteFooter from '@/components/Footer.vue'

export default {
  name: 'App',
  components: { NavBar, SiteFooter }
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Transition douce entre routes */
.page-enter-active,
.page-leave-active {
  transition: opacity 220ms ease, transform 220ms ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active { transition: none; }
}
</style>