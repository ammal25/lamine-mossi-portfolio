<template>
  <div class="homepage">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Salut, je suis Lamine Mossi 👋</h1>
        <p class="hero-subtitle">Étudiant en génie informatique & Développeur Full-Stack</p>
        <p class="hero-description">
          Actuellement en troisième année de génie informatique à l'Université Laval,
          ma curiosité me pousse vers le développement web et logiciel, l'IA, l'électronique,
          les systèmes embarqués et les mathématiques. Passionné par les technologies de l'information
          et la résolution de problèmes complexes, je suis résolu à mettre mes compétences au service
          d'un avenir technologique toujours plus innovant.
        </p>
        <div class="hero-actions">
          <router-link to="/projects" class="btn btn-primary">Voir mes projets</router-link>
          <a href="/cv/CVMOSSILamine.pdf" download class="btn btn-secondary">Télécharger mon CV</a>
        </div>

        <div class="hero-social-icons"> <a href="https://github.com/ammal25" target="_blank" rel="noopener noreferrer" class="social-icon-link">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/lamine-mossi" target="_blank" rel="noopener noreferrer" class="social-icon-link">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="mailto:mossimahamadoulamine@gmail.com" class="social-icon-link">
                <i class="fas fa-envelope"></i>
            </a>
            <a href="tel:+14388661726" class="social-icon-link">
                <i class="fas fa-phone"></i>
            </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
/* Styles globaux pour la page HomePage */
.homepage {
  padding: 2rem 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333; /* Couleur de texte par défaut, pour fond clair */
  background-color: #ffffff; /* Fond blanc pour toute la page, comme sur image_fe5006.png */
}

/* Titres H1 et H2 */
h1 {
  color: #2c3e50; /* Couleur sombre pour le titre principal sur fond clair */
  font-size: 3.5em;
  margin-bottom: 10px;
  line-height: 1.2;
}

h2 {
  margin-top: 4rem; /* Plus d'espace au-dessus des titres de section */
  margin-bottom: 1.5rem;
  color: #2c3e50; /* Couleur foncée pour les titres de section sur fond clair */
  text-align: center; /* Important: Centre les titres des sections */
  font-size: 2.2em;
}

a {
  color: #42b983; /* Vert pour les liens */
  text-decoration: none;
}

/* Styles pour la HERO SECTION */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; /* Centre le texte dans la hero-section */
  padding: 60px 20px;
  background-color: #f8f8f8; /* Fond légèrement grisé */
  border-bottom: 1px solid #eee;
  margin-bottom: 3rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  max-width: 900px; /* Limite la largeur de la hero section */
  margin-left: auto;
  margin-right: auto;
}

.hero-content {
  max-width: 600px;
  margin-bottom: 30px;
  padding: 0 15px;
}

.hero-title {
  font-size: 2.8em;
  color: #2c3e50;
  margin-bottom: 10px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.4em;
  color: #555;
  margin-bottom: 20px;
  font-weight: 500;
}

.hero-description {
  font-size: 1.05em;
  line-height: 1.7;
  color: #666;
  margin-bottom: 30px;
  text-align: justify;
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.05em;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background-color: #42b983;
  color: white;
  border: 1px solid #42b983;
}

.btn-primary:hover {
  background-color: #369c70;
  border-color: #369c70;
}

.btn-secondary {
  background-color: transparent;
  color: #42b983;
  border: 1px solid #42b983;
}

.btn-secondary:hover {
  background-color: #42b983;
  color: white;
}

/* Styles pour la Section Mes Projets */
.projects-section {
  margin-top: 4rem;
  padding: 0 20px;
  text-align: center; /* Centre le contenu de cette section */
  max-width: 800px; /* Limite la largeur des projets */
  margin-left: auto;
  margin-right: auto;
}

.projects-list {
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 600px; /* Limite la largeur de la liste des projets */
  margin-left: auto;
  margin-right: auto;
}

.projects-list li {
  font-size: 1.1em;
  color: #555; /* Couleur de texte pour les items de projet */
  margin-bottom: 0.8rem;
  line-height: 1.5;
  text-align: left; /* Aligne le texte des items de liste à gauche */
  position: relative;
  padding-left: 20px;
}

.projects-list li::before {
  content: '•'; /* Utilise un simple point comme bullet */
  color: #42b983; /* Couleur du bullet point */
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
  position: absolute;
  left: 0;
  top: 0;
}

/* Styles pour la Section Me contacter (EMAIL) */
.contact-email-section {
  margin-top: 4rem;
  padding: 0 20px;
  text-align: center; /* TRÈS IMPORTANT: Centre le titre et le paragraphe de cette section */
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.contact-email-section .contact-title {
  font-size: 2.8em;
  color: #2c3e50; /* Couleur sombre pour le titre, comme dans image_eb19cb.png */
  margin-bottom: 20px;
}

.contact-email-section p.contact-email {
  color: #555; /* Couleur de texte pour le paragraphe email, comme dans image_eb19cb.png */
  font-size: 1.15em;
  margin-bottom: 30px; /* Espace sous le paragraphe email */
  line-height: 1.6;
}
.contact-email-section p.contact-email a {
  color: #42b983;
  font-weight: bold;
}

/* Styles pour la Section des Icônes de Contact en bas de page */
.footer-contact-icons {
  margin-top: 6rem; /* Plus d'espace au-dessus pour la séparer */
  margin-bottom: 80px; /* Espace en dessous (avant un éventuel footer global) */
  padding: 20px;
  text-align: center;
  max-width: 800px; /* Limite la largeur de ce bloc d'icônes */
  margin-left: auto;
  margin-right: auto;
}
/* NOUVEAUX STYLES POUR LES ICÔNES À L'INTÉRIEUR DE LA HERO SECTION */
.hero-social-icons {
  display: flex; /* Ceci est la clé pour l'alignement horizontal */
  justify-content: center; /* Ceci est la clé pour centrer horizontalement */
  gap: 25px; /* Espace entre chaque icône */
  margin-top: 20px; /* Espace au-dessus des icônes pour les séparer des boutons */
  /* Ajoutez un padding ou une largeur max si nécessaire pour contrôler la zone du flexbox */
  width: 100%; /* S'assure qu'il prend toute la largeur disponible pour centrer */
  max-width: 600px; /* Limite la largeur du conteneur des icônes pour qu'elles restent groupées */
}

.social-icon-link {
  display: flex; /* Permet de centrer l'icône Font Awesome à l'intérieur du cercle */
  justify-content: center; /* Centre horizontalement l'icône */
  align-items: center; /* Centre verticalement l'icône */
  width: 50px; /* Taille du cercle */
  height: 50px; /* Taille du cercle */
  border-radius: 50%; /* Rend l'élément parfaitement circulaire */
  background-color: #333; /* Fond sombre pour les icônes */
  color: #e0e0e0; /* Couleur des icônes (claire) */
  font-size: 1.8em; /* Taille de l'icône */
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Ombre légère pour un effet de profondeur */
}

.social-icon-link:hover {
  background-color: #42b983; /* Fond vert au survol */
  color: white; /* Icône blanche au survol */
  transform: translateY(-3px); /* Léger effet de soulèvement au survol */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Ombre plus prononcée au survol */
}

/* Media Queries pour les écrans plus petits (ajustement des icônes) */
@media (max-width: 768px) {
  .hero-social-icons {
    flex-wrap: wrap; /* Les icônes peuvent passer à la ligne si l'écran est trop petit */
    gap: 15px; /* Moins d'espace entre les icônes sur mobile */
  }
  .social-icon-link {
    width: 45px; /* Légèrement plus petites sur mobile */
    height: 45px;
    font-size: 1.6em;
  }
}
</style>