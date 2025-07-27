<template>
  <div class="experiences-page">
    <section class="experiences-hero">
      <h1>Mes Expériences</h1>
      <p class="intro">Découvrez mes parcours professionnel et académique, ainsi que mes contributions à divers projets.</p>
    </section>

    <section class="professional-experiences">
      <h2>Expériences Professionnelles</h2>
      <div class="experience-grid">
        <div class="experience-item">
          <h3>Signaleur routier et Agent de Stationnement</h3>
          <p class="company-location">Mckinnon Services</p>
          <p class="dates">Juin 2024 - Octobre 2024</p>
          <ul class="responsibilities">
            <li>Gestion et régulation de la circulation sur des chantiers ou événements.</li>
            <li>Assurer la sécurité des travailleurs et du public.</li>
            <li>Fournir des indications claires aux conducteurs et piétons.</li>
          </ul>
        </div>

        <div class="experience-item">
          <h3>Annotateur de données</h3>
          <p class="company-location">Université Laval</p>
          <p class="dates">Automne 2024</p>
          <ul class="responsibilities">
            <li>Annotation et catégorisation de données pour des projets de recherche.</li>
            <li>Assurer la qualité et la cohérence des ensembles de données.</li>
            <li>Contribution à l'amélioration de modèles d'apprentissage automatique.</li>
          </ul>
        </div>

        <div class="experience-item">
          <h3>Serveur</h3>
          <p class="company-location">Eden Club</p>
          <p class="dates">Été 2022</p>
          <ul class="responsibilities">
            <li>Accueil et service des clients dans un environnement de club.</li>
            <li>Gestion des commandes et encaissements.</li>
            <li>Maintien d'un environnement propre et accueillant.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="volunteer-experiences">
      <h2>Expériences Bénévoles</h2>
      <div class="experience-grid">
        <div class="experience-item">
          <h3>Bénévole</h3>
          <p class="company-location">Carnaval d'hiver de Québec</p>
          <p class="dates">Hiver 2025</p>
          <ul class="responsibilities">
            <li>Participation à l'organisation et au déroulement d'activités.</li>
            <li>Assistance aux visiteurs et aux organisateurs de l'événement.</li>
          </ul>
        </div>

        <div class="experience-item">
          <h3>Réceptionniste Bénévole</h3>
          <p class="company-location">Association des Nigériens au Québec</p>
          <p class="dates">Printemps 2025</p>
          <ul class="responsibilities">
            <li>Accueil des membres et visiteurs.</li>
            <li>Gestion des communications et de l'information.</li>
            <li>Support administratif pour les activités de l'association.</li>
          </ul>
        </div>
        <div class="experience-item">
          <h3>Membre du Club d'Intelligence Artificielle</h3>
          <p class="company-location">Université Laval</p>
          <p class="dates"> Depuis Septembre 2024</p>
          <ul class="responsibilities">
            <li>Participation à des ateliers et projets liés à l'intelligence artificielle.</li>
            <li>Collaboration avec d'autres étudiants sur des défis d'IA.</li>
            <li>Veille technologique sur les avancées en IA.</li>
          </ul>
        </div>

        <div class="experience-item">
          <h3>Aide à la réussite (Bénévole)</h3>
          <p class="company-location">Lycée et Prépa</p>
          <p class="dates">2018-2023</p>
          <ul class="responsibilities">
            <li>Tutorat et soutien scolaire pour des élèves.</li>
            <li>Aide à la compréhension de concepts complexes en mathématiques et sciences.</li>
            <li>Partage de méthodes d'étude efficaces.</li>
          </ul>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'ExperiencesView',
  data() {
    return {
      // Si vous voulez gérer vos expériences via des données JavaScript, vous pouvez les structurer ici.
      // Par exemple:
      // professionalExperiences: [
      //   { title: 'Signaleur routier...', company: 'Mckinnon Services', dates: 'Juin 2024 - Octobre 2024', responsibilities: [...] },
      //   // ...
      // ],
      // volunteerExperiences: [
      //   { role: 'Bénévole', organization: 'Carnaval d\'hiver de Québec', dates: 'Hiver 2023', responsibilities: [...] },
      //   // ...
      // ]
    };
  },
}
</script>

<style scoped>
/* Les styles restent les mêmes que ceux que je vous ai fournis précédemment,
   mais je les inclus pour la complétude du fichier. */
.experiences-page {
  padding: 80px 20px 40px;
  max-width: 900px;
  margin: 0 auto;
  color: #333;
  background-color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
}

.experiences-hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 30px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.experiences-hero h1 {
  font-size: 3em;
  color: #2c3e50;
  margin-bottom: 20px;
}

.experiences-hero .intro {
  font-size: 1.2em;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
}

h2 {
  font-size: 2.5em;
  color: #42b983; /* Votre couleur verte */
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.8em;
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 0.8rem;
}

section p {
  font-size: 1.1em;
  color: #666;
  text-align: justify;
  margin-bottom: 1em;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 2rem;
}

.experience-item {
  background-color: #fefefe;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.experience-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}

.experience-item h3 {
  color: #42b983;
  margin-bottom: 5px;
}

.company-location, .project-meta {
  font-size: 1em;
  color: #777;
  margin-bottom: 5px;
  font-style: italic;
}

.dates {
  font-size: 0.95em;
  color: #888;
  margin-bottom: 15px;
}

.responsibilities {
  list-style: disc;
  margin-left: 20px;
  padding: 0;
  font-size: 1em;
  color: #555;
  flex-grow: 1;
}

.responsibilities li {
  margin-bottom: 8px;
  text-align: left;
}

.project-description {
  margin-top: 10px;
  flex-grow: 1;
}

.project-link {
  display: inline-block;
  margin-top: 15px;
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;
}

.project-link:hover {
  color: #369c70;
  text-decoration: underline;
}

/* Media Queries pour la responsivité */
@media (max-width: 768px) {
  .experiences-page {
    padding: 60px 15px 30px;
  }
  .experiences-hero h1 {
    font-size: 2.5em;
  }
  .experiences-hero .intro {
    font-size: 1em;
  }
  h2 {
    font-size: 2em;
  }
  .experience-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .experience-item {
    padding: 20px;
  }
  .experience-item h3 {
    font-size: 1.6em;
  }
  .company-location, .project-meta, .dates, .responsibilities, .project-description {
    font-size: 0.95em;
  }
}
</style>