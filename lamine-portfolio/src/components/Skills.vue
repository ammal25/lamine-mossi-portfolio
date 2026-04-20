<!--
  Skills.vue — section compétences techniques
  Chemin : src/components/Skills.vue
-->
<template>
  <section id="skills" class="section">
    <div class="section-head">
      <span class="section-num">03</span>
      <h2 class="section-title">Compétences</h2>
    </div>

    <div class="skills-grid">
      <div class="skill-group" v-for="group in groups" :key="group.title">
        <h3 class="skill-group-title">{{ group.title }}</h3>
        <ul class="skill-list">
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      groups: [
        {
          title: 'Langages',
          items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL', 'VBA', 'Assembleur ARM', 'VHDL / Verilog']
        },
        {
          title: 'Systèmes & embarqué',
          items: ['Linux / WSL2', 'pthreads', 'OpenMP', 'FUSE', 'Arduino (ATmega2560)', 'Raspberry Pi', 'FPGA', 'LTSpice', 'FEMM']
        },
        {
          title: 'Développement',
          items: ['React', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'MySQL', 'REST', 'JWT', 'Git (workflow rebase)', 'GoogleTest']
        },
        {
          title: 'IA & calcul scientifique',
          items: ['BERT', 'Transformers', 'NLP', 'NumPy', 'SciPy', 'Pandas', 'Matplotlib', 'OpenCV', 'MATLAB', 'FEM / FD']
        },
        {
          title: 'Réseaux',
          items: ['ARP', 'IPv4 / IPv6', 'OSPF', 'Wireshark', 'Machines Linux']
        },
        {
          title: 'Outils & écosystème',
          items: ['Microsoft 365', 'SharePoint', 'Power BI', 'Vercel', 'Doxygen']
        }
      ]
    }
  }
}
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem 3rem;
}

.skill-group-title {
  font-family: var(--mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent);
  margin-bottom: 1.25rem;
  padding-bottom: 0.65rem;
  border-bottom: 1px solid var(--line);
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-list li {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--ink-2);
  padding: 0.32rem 0.7rem;
  background: var(--bg-inset);
  border: 1px solid var(--line);
  border-radius: 4px;
  letter-spacing: 0.02em;
  transition: all var(--trans);
}

.skill-list li:hover {
  border-color: var(--accent);
  color: var(--accent-ink);
}

@media (max-width: 640px) {
  .skills-grid { grid-template-columns: 1fr; gap: 2rem; }
}
</style>
