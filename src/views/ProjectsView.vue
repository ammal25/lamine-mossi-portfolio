<template>
  <div class="projects-page">
    <section class="projects-hero">
      <h1>Mes Projets</h1>
      <p class="intro">Découvrez mes réalisations et mes contributions dans différents domaines de l'informatique.</p>
    </section>

    <section class="project-category-section">
      <h2>Informatique et Développement</h2>
      <div class="project-grid">
        <div class="project-item">
          <h3>Gestion de Portefeuille d'Actions en Ligne</h3>
          <p class="project-meta">Cours de Python</p>
          <p class="project-description">
            Développement d'une application Python permettant la connexion et la gestion d'un portefeuille d'actions en ligne. Le projet intègre une API externe pour la récupération des données boursières et la mise à jour en temps réel des informations du portefeuille.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">Python</span>
            <span class="skill-tag">API REST</span>
            <span class="skill-tag">Gestion de données</span>
          </p>
          </div>

        <div class="project-item">
          <h3>Système de Gestion de Bornes de Stationnement</h3>
          <p class="project-meta">Cours de C++</p>
          <p class="project-description">
            Conception et implémentation d'un système logiciel pour la gestion de bornes de stationnement. Le projet couvre la logique de contrôle, l'interaction avec les utilisateurs et la gestion des places disponibles.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">C++</span>
            <span class="skill-tag">Algorithmes</span>
            <span class="skill-tag">GOOGLETEST</span>
            <span class="skill-tag">Netbeans GUI</span>
          </p>
          </div>

        <div class="project-item">
          <h3>Création et Gestion de Comptes Bancaires</h3>
          <p class="project-meta">Cours de C++</p>
          <p class="project-description">
            Réalisation d'un programme en C++ pour la création, la modification et la gestion des opérations sur des comptes bancaires. Ce projet met en œuvre des principes de programmation orientée objet.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">C++</span>
            <span class="skill-tag">POO</span>
            <span class="skill-tag">Gestion de données</span>
            <span class="skill-tag">GOOGLETEST</span>
            <span class="skill-tag">Netbeans GUI</span>
          </p>
          </div>

        <div class="project-item">
          <h3>Site de Vente en Ligne</h3>
          <p class="project-meta">Cours de Base de Données</p>
          <p class="project-description">
            Création d'un site de vente en ligne. Le projet s'est concentré sur la conception de la base de données relationnelle et l'implémentation des requêtes SQL pour gérer les produits, les commandes et les utilisateurs.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">SQL</span>
            <span class="skill-tag">Base de données</span>
            <span class="skill-tag">Modélisation</span>
          </p>
          </div>

        <div class="project-item">
          <h3>Plateforme Multimédia et de Vente (Diaspora)</h3>
          <p class="project-meta">Projet personnel</p>
          <p class="project-description">
            Conception d'un site web dédié à la diaspora, intégrant des fonctionnalités de podcast, d'interviews et une section de vente de services ou de produits. Ce projet vise à créer un espace communautaire et commercial.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">SQL</span>
            <span class="skill-tag">Développement Web</span>
            <span class="skill-tag">UI/UX</span>
          </p>
          </div>

        <div class="project-item">
          <h3>Site Portfolio Personnel</h3>
          <p class="project-meta">Application web - {{ new Date().getFullYear() }}</p>
          <p class="project-description">
            Développement complet de ce site web interactif et responsive en utilisant le framework Vue.js. Conception axée sur l'expérience utilisateur et la présentation claire de mes compétences et réalisations.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">CSS</span>
            <span class="skill-tag">HTML</span>
            <span class="skill-tag">Responsive Design</span>
          </p>
          <a href="https://github.com/votre-utilisateur/votre-repo-portfolio" target="_blank" class="project-link">Voir sur GitHub</a>
        </div>
      </div>
    </section>

    <section class="project-category-section">
      <h2>Informatique et Électronique</h2>
      <div class="project-grid">
        <div class="project-item">
          <h3>Jeu Ping Pong</h3>
          <p class="project-meta">Cours de Circuit Logique</p>
          <p class="project-description">
            Conception et implémentation d'un jeu de Ping Pong numérique dans le cadre du cours de Circuit Logique. Ce projet a permis d'appliquer les principes de logique numérique et de conception de systèmes embarqués simples.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">Logique Digitale</span>
            <span class="skill-tag">FPGA</span>
            <span class="skill-tag">VHDL/Verilog</span>
            <span class="skill-tag">Circuits Intégrés</span>
          </p>
          </div>

        <div class="project-item">
          <h3>Gestion de Mémoire PC (ARM)</h3>
          <p class="project-meta">Cours d'Ordinateur Structures et Applications</p>
          <p class="project-description">
            Projet axé sur la gestion de la mémoire d'un PC, incluant le codage en assembleur ARM. Ce travail a permis d'explorer l'architecture des ordinateurs et les mécanismes de gestion de la mémoire à un niveau bas.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">Assembleur ARM</span>
            <span class="skill-tag">Architecture Ordinateur</span>
            <span class="skill-tag">Gestion Mémoire</span>
            <span class="skill-tag">Systèmes Embarqués</span>
          </p>
          </div>

        <div class="project-item">
          <h3>Système de Surveillance de Température</h3>
          <p class="project-meta">Cours électronique pour ingénieur informaticien</p>
          <p class="project-description">
            Mise en place d'un système autonome de lecture et d'enregistrement de données de température via une carte Arduino et divers capteurs. Affichage en temps réel sur un écran LCD.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">Arduino</span>
            <span class="skill-tag">C/C++ embarqué</span>
            <span class="skill-tag">Capteurs</span>
            <span class="skill-tag">Circuiterie</span>
          </p>
          </div>

        <div class="project-item">
          <h3>Contrôle d'éclairage Intelligent</h3>
          <p class="project-meta">Domotique - 2024</p>
          <p class="project-description">
            Développement d'une solution de contrôle d'éclairage à distance utilisant un Raspberry Pi et des scripts Python. Interface web simple pour la gestion.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">Raspberry Pi</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">IoT</span>
            <span class="skill-tag">Web Control</span>
          </p>
          </div>

      </div>
    </section>

    <section class="project-category-section">
      <h2>Informatique Scientifique</h2>
      <div class="project-grid">
        <div class="project-item">
          <h3>RAG pour l'Assurance au Québec (Beneva)</h3>
          <p class="project-meta">Partenariat Beneva, Université Laval</p>
          <p class="project-description">
            Ce projet visait à créer un système de type RAG (Retrieval-Augmented Generation) pour répondre aux questions d'assurance au Québec, en partenariat avec Beneva. L'objectif principal était d'entraîner un nouveau modèle BERT pour évaluer la qualité linguistique (français) des réponses générées par le RAG. En combinaison avec des modules évaluant la légalité, la fidélité au texte original, etc., ce système garantissait des réponses de très haute qualité. Une publication est actuellement sous étude à la conférence ACL, sous la supervision du professeur Richard Khoury.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">NLP</span>
            <span class="skill-tag">BERT</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">Machine Learning</span>
            <span class="skill-tag">IA</span>
          </p>
          </div>

        <div class="project-item">
          <h3>Simulation de Propagation d'Ondes</h3>
          <p class="project-meta">Modélisation</p>
          <p class="project-description">
            Implémentation d'un modèle de simulation pour la propagation d'ondes en 2D. Visualisation des résultats et analyse des paramètres d'influence.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">Python</span>
            <span class="skill-tag">NumPy</span>
            <span class="skill-tag">Matplotlib</span>
            <span class="skill-tag">Modélisation</span>
          </p>
          </div>

        <div class="project-item">
          <h3>Traitement d'Images Scientifiques</h3>
          <p class="project-meta">Analyse de Données / Imagerie</p>
          <p class="project-description">
            Développement de codes pour la gestion et l'analyse de problèmes liés au traitement d'images. Cela inclut des opérations comme le filtrage, la segmentation et la reconnaissance de motifs pour des applications scientifiques.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">Traitement d'image</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">OpenCV</span>
            <span class="skill-tag">NumPy</span>
          </p>
          </div>

        <div class="project-item">
          <h3>Simulation de l'Effet Radar des Ondes Électromagnétiques</h3>
          <p class="project-meta">Modélisation Numérique</p>
          <p class="project-description">
            Développement de simulations numériques pour étudier l'effet radar des ondes électromagnétiques. Ce projet implique la modélisation des phénomènes de propagation et de réflexion pour diverses configurations.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">Modélisation</span>
            <span class="skill-tag">Physique Numérique</span>
            <span class="skill-tag">Simulation</span>
            <span class="skill-tag">Python</span>
          </p>
          </div>

        <div class="project-item">
          <h3>Résolution par la Méthode des Différences Finies</h3>
          <p class="project-meta">Analyse Numérique</p>
          <p class="project-description">
            Application et développement de codes utilisant la méthode des différences finies pour résoudre des équations aux dérivées partielles (EDP) ou d'autres problèmes mathématiques. Analyse des résultats numériques.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">Différences Finies</span>
            <span class="skill-tag">Calcul Scientifique</span>
            <span class="skill-tag">Algorithmes Numériques</span>
            <span class="skill-tag">Python/Matlab</span>
          </p>
          </div>

        <div class="project-item">
          <h3>Méthodes d'Interpolation</h3>
          <p class="project-meta">Analyse Numérique</p>
          <p class="project-description">
            Exploration et implémentation de diverses méthodes d'interpolation pour l'estimation de valeurs intermédiaires à partir de données discrètes. Application à des ensembles de données scientifiques.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">Interpolation</span>
            <span class="skill-tag">Analyse Numérique</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">SciPy</span>
          </p>
          </div>

        <div class="project-item">
          <h3>Analyse Statistique Appliquée</h3>
          <p class="project-meta">Statistiques / Data Science</p>
          <p class="project-description">
            Réalisation de projets d'analyse de données en utilisant des méthodes statistiques populaires. Cela inclut la collecte, le nettoyage, l'analyse et l'interprétation de données pour en tirer des conclusions significatives.
          </p>
          <p class="project-tags-container">
            <span class="skill-tag">Statistiques</span>
            <span class="skill-tag">Analyse de données</span>
            <span class="skill-tag">Python (Pandas/SciPy)</span>
          </p>
          </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'ProjectsView'
}
</script>

<style scoped>
/* Les styles existants sont conservés */
.projects-page {
  padding: 80px 20px 40px;
  max-width: 900px;
  margin: 0 auto;
  color: #333;
  background-color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
}

.projects-hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 30px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.projects-hero h1 {
  font-size: 3em;
  color: #2c3e50;
  margin-bottom: 20px;
}

.projects-hero .intro {
  font-size: 1.2em;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
}

.project-category-section h2 {
  font-size: 2.5em;
  color: #42b983;
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

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 2rem;
  margin-bottom: 3rem;
}

.project-item {
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

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}

.project-item h3 {
  color: #42b983;
  margin-bottom: 5px;
}

.project-meta {
  font-size: 1em;
  color: #777;
  margin-bottom: 5px;
  font-style: italic;
}

.project-description {
  margin-top: 10px;
  font-size: 1em;
  color: #555;
  flex-grow: 1;
  text-align: justify;
  margin-bottom: 15px;
}

.project-tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
  margin-bottom: 15px;
  justify-content: flex-start;
  min-height: 30px;
  align-items: center;
}

.skill-tag {
  display: inline-block;
  background-color: #e0e0e0;
  color: #333;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.85em;
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

.project-link {
  display: inline-block;
  margin-top: auto;
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;
}

.project-link:hover {
  color: #369c70;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .projects-page {
    padding: 60px 15px 30px;
  }
  .projects-hero h1 {
    font-size: 2.5em;
  }
  .projects-hero .intro {
    font-size: 1em;
  }
  .project-category-section h2 {
    font-size: 2em;
  }
  .project-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .project-item {
    padding: 20px;
  }
  .project-item h3 {
    font-size: 1.6em;
  }
  .project-meta, .project-description, .project-link {
    font-size: 0.95em;
  }
  .skill-tag {
    font-size: 0.8em;
    padding: 5px 10px;
  }
  .project-tags-container {
    gap: 6px;
  }
}
</style>