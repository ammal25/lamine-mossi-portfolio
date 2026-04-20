/* ==========================================================================
   projects.js — source unique des projets
   Chemin : src/data/projects.js
   Utilisé par Projects.vue (liste) ET ProjectDetail.vue (page /projects/:slug)
   ========================================================================== */

export const projects = [
  {
    slug: 'rag-beneva',
    cat: 'ai',
    featured: true,
    course: "Recherche · Prof. R. Khoury",
    badge: "Publication en révision · ACL",
    badgeAccent: false,
    title: "Système RAG pour l'assurance — Beneva × Université Laval",
    desc: "Système de Retrieval-Augmented Generation pour répondre aux questions d'assurance au Québec. Entraînement d'un BERT spécialisé pour évaluer la qualité linguistique en français, combiné à des modules de légalité, fidélité et cohérence.",
    tags: ['Python', 'BERT', 'Transformers', 'NLP FR', 'RAG', 'Machine Learning'],
    long: "Projet de recherche conjoint avec Beneva (assurance) sur la fiabilité des réponses générées par un LLM dans un contexte réglementé. Travail sur l'évaluation linguistique (BERT fine-tuné FR), le contrôle de légalité, la fidélité au corpus source et la cohérence inter-réponses. Article co-écrit en révision à ACL."
  },
  {
    slug: 'flexilame',
    cat: 'systems',
    featured: true,
    course: "Capstone · GEL-2007",
    badge: "Résultat : erreur < 1 %",
    badgeAccent: true,
    title: "FlexiLame — système mécatronique instrumenté",
    desc: "Simulateur FEM Python pour l'analyse de poutres flexibles, couplé à un banc physique (ATmega2560, servo-moteur, capteur Hall, actuateur FEMM). Interface DearPyGui, boucle PID, validation expérimentale.",
    tags: ['Python', 'Méthode des éléments finis', 'ATmega2560', 'DearPyGui', 'PID', 'FEMM'],
    long: "Capstone de 3e année combinant simulation numérique et instrumentation réelle. Solveur FEM maison en Python, validation contre FEMM, contrôle PID sur ATmega2560, acquisition capteur Hall, IHM DearPyGui. Erreur mesurée < 1 % entre simulation et banc physique."
  },
  {
    slug: 'heatmyfloor',
    cat: 'software',
    featured: false,
    course: "GLO-2004 · Génie logiciel OO",
    badge: null,
    title: "HeatMyFloor — logiciel de CAO pour plancher chauffant",
    desc: "Application Java 21 / Swing de conception assistée par ordinateur : validation de contraintes géométriques en temps réel, génération automatique du serpentin par parcours de graphe, undo/redo massif, zoom vectoriel et export PNG. Équipe de 5, workflow Git rebase.",
    tags: ['Java 21', 'Swing', 'Algorithmes de graphes', 'MVC', 'UML', 'Git rebase'],
    long: "Projet d'équipe (5 personnes) sur un semestre. Architecture MVC stricte, modélisation UML complète, sérialisation JSON du plan, pattern Command pour un undo/redo illimité. Parcours de graphe pour le routage automatique du serpentin dans des pièces à géométrie arbitraire. Workflow Git avec rebase interactif obligatoire."
  },
  {
    slug: 'fuse-fs',
    cat: 'systems',
    featured: false,
    course: "GLO-2001 · Systèmes d'exploitation",
    badge: null,
    title: "Système de fichiers FUSE + simulateur FS en C++",
    desc: "Développement d'un FS utilisateur via FUSE (unlink, rename) en C, puis implémentation complète d'un système de fichiers sur disque virtuel 64 Ko en C++ : gestion d'inodes, bitmap d'espace libre, répertoire racine, et algorithme de compactage anti-fragmentation.",
    tags: ['C', 'C++', 'FUSE', 'Linux kernel API', 'Inodes', 'Allocation dynamique'],
    long: "Deux TPs successifs. TP3 partie 1 : extension d'un FS FUSE avec les appels unlink/rename en suivant l'API kernel. TP3 partie 2 : conception d'un FS complet sur un disque virtuel 64 Ko avec 16 inodes, bitmap de secteurs, répertoire racine plat, et un algorithme de compactage pour gérer la fragmentation après suppressions."
  },
  {
    slug: 'parallelisme',
    cat: 'systems',
    featured: false,
    course: "GLO-2001 · Parallélisme",
    badge: null,
    title: "Parallélisme multi-cœur — pthreads, OpenMP, verrous R/W",
    desc: "Benchmark comparatif de trois paradigmes de parallélisme (monothread, pthreads, OpenMP) sur multiplication matricielle, avec analyse des gains en fonction du nombre de cœurs. Synchronisation avancée avec pthread_rwlock_t et gestion de priorité via setpriority.",
    tags: ['C', 'pthreads', 'OpenMP', 'Concurrence', 'Benchmarking', 'Linux'],
    long: "Étude des gains réels du parallélisme sur multiplication matricielle : speedup vs nombre de cœurs, effet du false sharing, comparaison pthreads (threads POSIX bruts) vs OpenMP (directives de haut niveau). Mise en œuvre de verrous lecteurs/écrivains avec pthread_rwlock_t et contrôle de priorité via l'API setpriority."
  },
  {
    slug: 'cmos-driver',
    cat: 'scientific',
    featured: false,
    course: "GEL-3007 · Microélectronique",
    badge: null,
    title: "Driver laser CMOS — sélection de technologie microélectronique",
    desc: "Conception et simulation SPICE d'un étage de polarisation directe pour diode laser (temps de montée < 250 ps, diagramme de l'œil conforme PRBS). Benchmark de trois technologies CMOS (QSMF, SkyWater open-source, fonderie US) et extraction des paramètres MOSFET.",
    tags: ['LTSpice', 'CMOS', 'MOSFET', 'Intégrité du signal', 'Python / Jupyter', 'Analog IC Design'],
    long: "Cahier des charges : driver de diode laser avec commutation < 250 ps et intégrité de signal validée par diagramme de l'œil sous PRBS. Trois technologies candidates comparées (QSMF, SkyWater open-source, foundry US), extraction des paramètres MOSFET depuis les modèles SPICE, choix final justifié par le compromis vitesse / consommation / coût."
  },
  {
    slug: 'microstrip',
    cat: 'scientific',
    featured: false,
    course: "GEL-2910 · Électromagnétisme appliqué",
    badge: null,
    title: "Solveur EM numérique — ligne microruban par différences finies",
    desc: "Solveur numérique pour calculer l'impédance caractéristique Z₀ et la vitesse de propagation v_p d'une ligne microruban multi-diélectriques. Discrétisation de l'équation de Laplace par différences finies (relaxation itérative) et intégrale de Gauss numérique.",
    tags: ['MATLAB', 'Python', 'Différences finies', 'Laplace', 'RF / hyperfréquences', 'Calcul scientifique'],
    long: "Résolution numérique de l'équation de Laplace en 2D sur un maillage non uniforme, avec conditions aux limites Dirichlet (conducteurs) et Neumann (air). Méthode de relaxation itérative (Gauss-Seidel + SOR). Capacité linéique extraite par intégrale de Gauss autour du conducteur. Validation contre formules analytiques de Hammerstad."
  },
  {
    slug: 'photodiode-sige',
    cat: 'scientific',
    featured: false,
    course: "GEL-3007 · Photonique",
    badge: null,
    title: "Caractérisation d'une photodiode Si/Ge intégrée",
    desc: "Caractérisation expérimentale d'une photodiode Si-Ge intégrée sur guide d'onde silice : responsivité spectrale et en puissance (0–10 dBm), tension de claquage en polarisation inverse, modélisation du phénomène d'avalanche. Banc de test automatisé (EXFO, Keysight).",
    tags: ['Photonique', 'Instrumentation', 'Keysight', 'EXFO', 'Semi-conducteurs', 'Laboratoire optique'],
    long: "Travail expérimental en salle blanche : banc optique avec laser accordable EXFO, SMU Keysight pour la polarisation, acquisition automatisée. Mesure de la responsivité R(λ) et R(P), caractérisation du régime avalanche (gain M vs tension inverse), extraction de la tension de claquage. Modélisation paramétrique du gain d'avalanche."
  },
  {
    slug: 'full-stack',
    cat: 'software',
    featured: false,
    course: "Projet personnel · Déployé",
    badge: null,
    title: "Application web full stack — conception & déploiement",
    desc: "Cycle de développement complet : analyse, maquettes, frontend React, backend Node.js / Express, base MongoDB, authentification JWT, API REST, déploiement Vercel avec SSL.",
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST', 'Vercel'],
    long: "Projet mené seul de bout en bout : cahier des charges, maquettes Figma, frontend React (hooks, router, state management), backend Express avec architecture en couches (routes / controllers / services), MongoDB avec Mongoose, auth JWT (access + refresh tokens), déploiement Vercel avec CI GitHub Actions."
  },
  {
    slug: 'outilsdecontrat',
    cat: 'software',
    featured: false,
    course: "MES · DGBC · Gouvernement du Québec",
    badge: "En production",
    badgeAccent: false,
    title: "OutilsDeContrat — automatisation VBA en production",
    desc: "Générateur automatique de contrats Word multi-annexes pour le ministère de l'Enseignement supérieur : UserForms Excel complexes, accord grammatical automatique, intégration SharePoint et Microsoft 365, COM late-binding.",
    tags: ['VBA', 'Word', 'Excel', 'COM late-binding', 'SharePoint', 'Microsoft 365'],
    long: "Outil utilisé quotidiennement par les équipes contractuelles de la DGBC. UserForms Excel paramétrables, génération de contrats Word multi-annexes avec accord grammatical automatique (masculin/féminin, singulier/pluriel), intégration SharePoint pour le stockage, COM late-binding pour la compatibilité inter-versions Office."
  },
  {
    slug: 'medifind',
    cat: 'software',
    featured: false,
    course: "GLO-2005 · Base de données",
    badge: null,
    title: "MediFind — plateforme médicale avec couche BI",
    desc: "Plateforme de recherche de médicaments et pharmacies au Québec. Couche business intelligence avec procédures stockées, triggers et curseurs MySQL.",
    tags: ['MySQL', 'Procédures stockées', 'Triggers', 'Analytics BI'],
    long: "Projet de base de données avec schéma normalisé (5NF partielle), procédures stockées pour la logique métier (recherche géospatiale, disponibilité), triggers pour l'historique et l'audit, curseurs MySQL pour les rapports BI agrégés."
  },
  {
    slug: 'bank-cpp',
    cat: 'software',
    featured: false,
    course: "IFT-3001 · Génie logiciel",
    badge: null,
    title: "Système bancaire C++ — théorie du contrat",
    desc: "Système bancaire en C++ moderne : programmation orientée objet, gestion mémoire avancée, théorie du contrat (invariants, pré/post conditions), tests unitaires GoogleTest.",
    tags: ['C++', 'POO', 'GoogleTest', 'Théorie du contrat'],
    long: "Application des principes de Meyer (Design by Contract) en C++ : invariants de classe, préconditions et postconditions documentées et vérifiées, RAII strict, smart pointers, tests unitaires GoogleTest avec couverture > 90 %."
  },
  {
    slug: 'networks-lab',
    cat: 'networks',
    featured: false,
    course: "GIF-3001 · Réseaux",
    badge: null,
    title: "Lab ARP, IPv4/IPv6 & OSPF sous WSL2",
    desc: "Environnement réseau virtuel complet sous WSL2 avec namespaces Linux. Analyse ARP, fragmentation IPv4, routage OSPF, six captures pcapng analysées avec Wireshark.",
    tags: ['WSL2', 'Namespaces Linux', 'ARP', 'OSPF', 'Wireshark'],
    long: "Topologie virtuelle à base de namespaces réseau Linux (ip netns), six captures pcapng analysées : résolution ARP, fragmentation IPv4 avec MTU contrainte, voisinage IPv6 (NDP), convergence OSPF après panne de lien. Rapport d'analyse avec extraits Wireshark commentés."
  },
  {
    slug: 'fpga-ping-pong',
    cat: 'systems',
    featured: false,
    course: "GIF-1001 · Logique digitale",
    badge: null,
    title: "Jeu Ping Pong sur FPGA — logique séquentielle",
    desc: "Implémentation VHDL/Verilog d'un jeu Ping Pong sur FPGA : logique combinatoire et séquentielle, machines d'état, systèmes embarqués temps réel.",
    tags: ['FPGA', 'VHDL', 'Verilog', 'Logique digitale'],
    long: "Conception VHDL d'un jeu Ping Pong sur carte FPGA Intel : machine d'état du jeu, gestion des interruptions boutons, pilotage de LEDs 7-segments, horloge dérivée, synchronisation inter-processus. Simulation ModelSim puis synthèse et test sur matériel."
  },
  {
    slug: 'arm-memory',
    cat: 'systems',
    featured: false,
    course: "GIF-1001 · Architecture",
    badge: null,
    title: "Gestion mémoire bas niveau — assembleur ARM",
    desc: "Exploration des architectures x86 / ARM et des mécanismes de gestion mémoire à bas niveau. Codage assembleur ARM pour la gestion des segments et de la pile.",
    tags: ['Assembleur ARM', 'Architecture', 'Gestion mémoire'],
    long: "Codage assembleur ARM (32-bit) : conventions d'appel AAPCS, manipulation de la pile (push/pop, frame pointer), segments .text/.data/.bss, chargement/stockage avec offsets, comparaison avec x86-64 en termes de jeu d'instructions et de modèle mémoire."
  }
]

export function findProject(slug) {
  return projects.find(p => p.slug === slug) || null
}