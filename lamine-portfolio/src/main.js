/* ==========================================================================
   main.js — point d'entrée
   Chemin : src/main.js
   ========================================================================== */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Tokens partagés (variables CSS, reset, utilitaires .section, .reveal, etc.)
import '@/assets/styles/tokens.css'

// Google Fonts — chargés une seule fois globalement
const fontLink = document.createElement('link')
fontLink.rel = 'stylesheet'
fontLink.href = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'
document.head.appendChild(fontLink)

const pre1 = document.createElement('link')
pre1.rel = 'preconnect'
pre1.href = 'https://fonts.googleapis.com'
document.head.appendChild(pre1)

const pre2 = document.createElement('link')
pre2.rel = 'preconnect'
pre2.href = 'https://fonts.gstatic.com'
pre2.crossOrigin = ''
document.head.appendChild(pre2)

createApp(App).use(router).mount('#app')