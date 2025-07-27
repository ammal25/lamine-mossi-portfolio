<template>
  <div class="about-me-page">
    <section class="about-me-hero">
      <h1> À Propos</h1>
      <p class="intro">
        Ayant déjà eu un aperçu de qui je suis sur la page d'accueil,
          plongeons ici dans mon cursus, mes compétences et mes expériences.
      </p>
    </section>

    <section class="my-journey">
      <h2>Formations</h2>
      <div class="journey-item">
        <h3>Baccalauréat en Génie Informatique</h3>
        <p>Université Laval, Québec, QC, Ca</p>
        <p>Depuis 2023 </p>
      </div>
      <div class="journey-item">
        <h3>CPGE, Spécialité Maths-Physique</h3>
        <p>UPS, Sousse, Tunisie</p>
        <p>Septembre 2021 - Juin 2023</p>
      </div>
      <div class="journey-item">
        <h3>Diplôme d'études du secondaire</h3>
        <p>CSP Manou Diatta, Niamey, Niger</p>
        <p>Septembre 2018 - Juin 2021</p>
      </div>
    </section>

    <section class="my-skills">
      <h2>Mes Compétences</h2>
      <div class="skills-grid"> <div class="skills-category">
          <h3>Langages de Programmation</h3>
          <p class="skill-tags-container">
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">Java</span>
            <span class="skill-tag">C++/C</span>
            <span class="skill-tag">C#</span>
            <span class="skill-tag">SQL</span>
          </p>
        </div>
        <div class="skills-category">
          <h3>Frameworks & Bibliothèques</h3>
          <p class="skill-tags-container">
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">React</span>
            <span class="skill-tag">Node.js (Express)</span>
            <span class="skill-tag">Django</span>
            <span class="skill-tag">Flask</span>
            <span class="skill-tag">Tailwind CSS</span>
          </p>
        </div>
        <div class="skills-category">
          <h3>Bases de Données</h3>
          <p class="skill-tags-container">
            <span class="skill-tag">MongoDB</span>
            <span class="skill-tag">PostgreSQL</span>
            <span class="skill-tag">MySQL</span>
            <span class="skill-tag">SQLite</span>
          </p>
        </div>
        <div class="skills-category">
          <h3>Outils & Plateformes</h3>
          <p class="skill-tags-container">
            <span class="skill-tag">Git</span>
            <span class="skill-tag">GitHub</span>
            <span class="skill-tag">Matlab</span>
            <span class="skill-tag">VS Code</span>
            <span class="skill-tag">Linux</span>
            <span class="skill-tag">Suite Office</span>
          </p>
        </div>
      </div> </section>

    <section class="distinctions-section">
      <h2>🏆 Distinctions & Réussites</h2>
      <div class="distinctions-grid"> <div class="distinction-category">
          <h3>Bourses & Récompenses</h3>
          <ul class="distinction-list">
            <li>
              <div class="distinction-item">
                <h4>Bourse d'Admission de l'Université de Sherbrooke</h4>
                <p class="distinction-meta">Septembre 2023 - Montant 2000 CAD</p>
              </div>
            </li>
            <li>
              <div class="distinction-item">
                <h4>Bourse d'Excellence du Gouvernement du Québec</h4>
                <p class="distinction-meta">Année 2023 - Exemption des frais de scolarité des frais majorés</p>
              </div>
            </li>
            <li>
              <div class="distinction-item">
                <h4>Bourse d'études d'Excellence du Gouvernement du Niger</h4>
                <p class="distinction-meta">Année 2021 - Bourse Complète</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="distinction-category">
          <h3>Tableaux d'Honneur</h3>
          <ul class="distinction-list">
              <li>
              <div class="distinction-item">
                <h4>Tableaux d'Honneur - Prépa Scientifique</h4>
                <p class="distinction-meta">Années 2021-2023</p>
                <p class="distinction-description">Distinction pour l'excellence continue durant les classes préparatoires scientifiques.</p>
              </div>
            </li>
            <li>
              <div class="distinction-item">
                <h4>Tableaux d'Honneur - Lycée</h4>
                <p class="distinction-meta"> Années 2014 - 2021</p>
                <p class="distinction-description"> Plusieurs tableaux d'honneur pour des performances académiques exceptionnelles pendant le collège et le lycée.</p>
              </div>
            </li>
          </ul>
        </div>
      </div> </section>

    <section class="languages-section">
      <h2>Langues</h2>
      <div class="languages-grid"> <div class="language-item">
          <h3>Français</h3>
          <p class="language-level">Maternel (100%)</p>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: 100%;"></div>
          </div>
        </div>
        <div class="language-item">
          <h3>Anglais</h3>
          <p class="language-level">Avancé (90%)</p>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: 90%;"></div>
          </div>
        </div>
        <div class="language-item">
          <h3>Arabe</h3>
          <p class="language-level">Intermédiaire-Avancé (85%)</p>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: 85%;"></div>
          </div>
        </div>
      </div> </section>

  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      // Ex: skills: ['Vue.js', 'Python', 'Docker'],
    };
  },
  methods: {
    // Ex: goToContactPage() { this.$router.push('/contact'); }
  },
  computed: {
    // Ex: formattedSkills() { return this.skills.join(', '); }
  }
}
</script>

<style scoped>
/* Styles spécifiques à la page AboutMe */
.about-me-page {
  padding: 80px 20px 40px;
  max-width: 900px;
  margin: 0 auto;
  color: #333;
  background-color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
}

.about-me-hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 30px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.about-me-hero h1 {
  font-size: 3em;
  color: #2c3e50;
  margin-bottom: 20px;
}

.about-me-hero .intro {
  font-size: 1.2em;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
}

h2 {
  font-size: 2.5em;
  color: #42b983;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.8em;
  color: #2c3e50;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

section p {
  font-size: 1.1em;
  color: #666;
  text-align: justify;
  margin-bottom: 1em;
}

.my-journey .journey-item {
  background-color: #f9f9f9;
  padding: 25px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
  text-align: left;
}

.my-journey .journey-item h3 {
  margin-top: 0;
  color: #42b983;
}

/* Styles pour la Section Mes Compétences */
.my-skills {
  margin-top: 4rem;
  padding: 0 20px;
  text-align: center;
  max-width: 1000px; /* Augmenté pour mieux accueillir les colonnes */
  margin-left: auto;
  margin-right: auto;
}

.my-skills h2 {
  font-size: 2.5em;
  color: #42b983;
  margin-bottom: 2rem;
}

/* NOUVEAU: Conteneur Grid pour les compétences */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* 2 ou 3 colonnes flexibles */
  gap: 20px; /* Espace entre les colonnes et les lignes */
  justify-items: center; /* Centre les éléments dans les cellules de la grille */
}

.my-skills .skills-category {
  margin-bottom: 0; /* Supprimé car le gap gère l'espace */
  text-align: left;
  background-color: #fefefe;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  width: 100%; /* Assure que l'élément prend la largeur de sa cellule de grille */
  box-sizing: border-box; /* Inclut le padding et la bordure dans la largeur */
}

.my-skills .skills-category h3 {
  color: #2c3e50;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 15px;
  font-size: 1.8em;
  text-align: left;
}

/* NOUVEAUX STYLES POUR LES BULLES DE COMPÉTENCES */
.skill-tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
  justify-content: flex-start;
}

.skill-tag {
  display: inline-block;
  background-color: #e0e0e0;
  color: #333;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.95em;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: default;
  white-space: nowrap;
  border: 1px solid #d0d0d0;
}

.skill-tag:hover {
  background-color: #42b983;
  color: white;
}

/* Styles pour la Section Distinctions */
.distinctions-section {
  margin-top: 4rem;
  padding: 0 20px;
  text-align: center;
  max-width: 1000px; /* Augmenté pour mieux accueillir les colonnes */
  margin-left: auto;
  margin-right: auto;
}

.distinctions-section h2 {
  font-size: 2.5em;
  color: #42b983;
  margin-bottom: 2rem;
}

/* NOUVEAU: Conteneur Grid pour les distinctions */
.distinctions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 2 ou 3 colonnes flexibles */
  gap: 20px;
  justify-items: center;
}

.distinction-category {
  background-color: #fefefe;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  margin-bottom: 0; /* Supprimé car le gap gère l'espace */
  text-align: left;
  width: 100%;
  box-sizing: border-box;
}

.distinction-category h3 {
  font-size: 1.8em;
  color: #2c3e50;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.distinction-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.distinction-list li {
  margin-bottom: 1.5rem;
}

.distinction-item {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #eee;
  box-shadow: 0 1px 4px rgba(0,0,0,0.02);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.distinction-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

.distinction-item h4 {
  font-size: 1.4em;
  color: #42b983;
  margin-top: 0;
  margin-bottom: 5px;
}

.distinction-meta {
  font-size: 0.95em;
  color: #888;
  margin-bottom: 10px;
  font-style: italic;
}

.distinction-description {
  font-size: 1em;
  color: #666;
  line-height: 1.6;
}

/* Styles pour la Section Langues */
.languages-section {
  margin-top: 4rem;
  padding: 0 20px;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.languages-section h2 {
  font-size: 2.5em;
  color: #42b983;
  margin-bottom: 2rem;
}

/* NOUVEAU: Conteneur Grid pour les langues */
.languages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  justify-items: center;
}

.language-item {
  background-color: #fefefe;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  margin-bottom: 0; /* Supprimé car le gap gère l'espace */
  text-align: left;
  width: 100%;
  box-sizing: border-box;
}

.language-item h3 {
  font-size: 1.8em;
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 10px;
}

.language-level {
  font-size: 1.1em;
  color: #666;
  margin-bottom: 15px;
  font-weight: 500;
}

.progress-bar-container {
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  height: 15px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: #42b983;
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
}

/* Styles généraux pour les boutons (si non définis ailleurs) */
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

/* Media Queries pour la responsivité */
@media (max-width: 768px) {
  .about-me-page {
    padding: 60px 15px 30px;
  }
  .about-me-hero h1 {
    font-size: 2.5em;
  }
  .about-me-hero .intro {
    font-size: 1em;
  }
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.5em;
  }
  section p {
    font-size: 0.95em;
  }
  .contact-prompt p {
    font-size: 1.1em;
  }
  .btn {
    padding: 12px 24px;
    font-size: 1em;
  }

  /* Ajustements pour les grilles sur petits écrans */
  .distinctions-grid,
  .skills-grid,
  .languages-grid {
    grid-template-columns: 1fr; /* Une seule colonne sur les petits écrans */
    gap: 15px; /* Réduction de l'espace entre les éléments */
  }

  /* Assurez-vous que le margin-bottom est bien supprimé ici aussi */
  .distinction-category,
  .my-skills .skills-category,
  .language-item {
    margin-bottom: 0;
  }

  .skill-tag {
    font-size: 0.9em;
    padding: 7px 12px;
  }
  .skill-tags-container {
    gap: 8px;
  }
  .my-skills .skills-category {
    padding: 15px;
  }
  .distinction-category {
    padding: 15px;
  }
  .language-item {
    padding: 15px;
  }
}
</style>