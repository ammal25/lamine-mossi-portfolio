<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/">Lamine Mossi</router-link>
    </div>
    <div class="navbar-links">
      <router-link to="/">Accueil</router-link>
      <router-link to="/projects">Projets</router-link>        <router-link to="/experiences">Expériences</router-link>
      <router-link to="/about">À Propos</router-link>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  // Vos scripts NavBar existants ici
}
</script>

<style scoped>
/* Vos styles NavBar existants ici */
.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 30px;
  background-color: #2c3e50; /* Couleur de fond de votre navbar */
  color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: fixed; /* Si votre navbar est fixe */
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar-brand a {
  color: white;
  text-decoration: none;
  font-size: 1.8em;
  font-weight: bold;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  margin-left: 25px;
  font-size: 1.1em;
  transition: color 0.3s ease;
}

.navbar-links a:hover,
.navbar-links a.router-link-exact-active {
  color: #42b983; /* Couleur verte au survol ou si active */
}

/* Media queries pour la responsivité si vous en avez dans NavBar.vue */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 15px 20px;
  }
  .navbar-links {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .navbar-links a {
    margin: 5px 10px;
  }
}
</style>