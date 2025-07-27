<template>
  <div id="app">
    <NavBar /> <main class="content-wrapper">
      <router-view/> </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'; // Importez le composant NavBar

export default {
  name: 'App',
  components: {
    NavBar // Déclarez-le ici
  }
}
</script>

<style>
/* Styles généraux (non scoped car ils s'appliquent à toute l'app) */
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: hsla(0, 0%, 0%, 0.025); /* Un léger fond global */
  color: #333;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; N'appliquez pas text-align: center ici, car il sera surchargé par les sections */
}

.content-wrapper {
  /* Padding top pour que le contenu ne soit pas caché sous la barre de navigation fixe */
  padding-top: 70px; /* Ajustez cette valeur si votre NavBar est plus haute */
}
</style>