#!/usr/bin/env node

/**
 * 🚀 Social Media Post Generator for Avenir&Progres
 * 
 * Ce script génère des posts optimisés pour les 4 réseaux sociaux :
 * - Facebook
 * - Instagram
 * - LinkedIn
 * - YouTube (description vidéo)
 * 
 * Usage: node scripts/social-post-generator.js
 */

import readline from 'readline';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  brand: 'Avenir&Progres',
  hashtags: {
    global: ['#Formation', '#Reconversion', '#Alternance', '#RNCP', '#Qualiopi'],
    facebook: ['#FormationProfessionnelle', '#NouvelleCarrière', '#CPF'],
    instagram: ['#FormationPro', '#Reconversion2026', '#ChangerDeVie', '#AlternanceFrance', '#TitreProfessionnel', '#FormationCertifiante'],
    linkedin: ['#FormationProfessionnelle', '#DéveloppementProfessionnel', '#Emploi', '#RH', '#Recrutement'],
    youtube: ['formation professionnelle', 'reconversion', 'alternance', 'titre RNCP'],
  },
  emojis: {
    formation: '📚',
    success: '✅',
    rocket: '🚀',
    star: '⭐',
    fire: '🔥',
    target: '🎯',
    graduation: '🎓',
    handshake: '🤝',
    calendar: '📅',
    link: '🔗',
    phone: '📞',
    money: '💰',
    arrow: '➡️',
    check: '✔️',
  },
  urls: {
    website: 'https://aveniretprogres.fr',
    formations: 'https://aveniretprogres.fr/formations',
  },
  contact: {
    phone: '01 71 18 23 97',
    email: 'contact@aveniretprogres.fr',
  }
};

// Templates de posts par type
const POST_TEMPLATES = {
  formation: {
    title: 'Nouvelle formation',
    description: 'Promouvoir une formation spécifique',
  },
  testimonial: {
    title: 'Témoignage',
    description: 'Partager un témoignage client',
  },
  tips: {
    title: 'Conseils',
    description: 'Partager des conseils professionnels',
  },
  news: {
    title: 'Actualité',
    description: 'Annoncer une nouveauté',
  },
  event: {
    title: 'Événement',
    description: 'Promouvoir un événement (webinaire, portes ouvertes...)',
  },
};

// Interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (prompt) => new Promise((resolve) => rl.question(prompt, resolve));

// Couleurs console
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  blue: '\x1b[34m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  red: '\x1b[31m',
};

const log = {
  title: (text) => console.log(`\n${colors.bright}${colors.blue}${text}${colors.reset}`),
  success: (text) => console.log(`${colors.green}✅ ${text}${colors.reset}`),
  info: (text) => console.log(`${colors.cyan}ℹ️  ${text}${colors.reset}`),
  warning: (text) => console.log(`${colors.yellow}⚠️  ${text}${colors.reset}`),
  network: (name, text) => console.log(`\n${colors.bright}${colors.magenta}━━━ ${name} ━━━${colors.reset}\n${text}`),
};

// Générateurs de posts par réseau
function generateFacebookPost(data) {
  const { title, content, cta, includeContact } = data;
  const hashtags = [...CONFIG.hashtags.global.slice(0, 3), ...CONFIG.hashtags.facebook.slice(0, 2)].join(' ');
  
  let post = `${CONFIG.emojis.rocket} ${title}\n\n`;
  post += `${content}\n\n`;
  
  if (cta) {
    post += `${CONFIG.emojis.arrow} ${cta}\n`;
    post += `${CONFIG.emojis.link} ${CONFIG.urls.website}\n\n`;
  }
  
  if (includeContact) {
    post += `${CONFIG.emojis.phone} ${CONFIG.contact.phone}\n`;
  }
  
  post += `\n${hashtags}`;
  
  return {
    platform: 'Facebook',
    post,
    charCount: post.length,
    limit: 63206,
    tips: [
      '📸 Ajoutez une image ou vidéo pour 2.3x plus d\'engagement',
      '⏰ Meilleur moment: mercredi 11h ou dimanche 12h-13h',
      '💬 Posez une question pour encourager les commentaires',
    ],
  };
}

function generateInstagramPost(data) {
  const { title, content, cta } = data;
  const hashtags = [...CONFIG.hashtags.global, ...CONFIG.hashtags.instagram].join(' ');
  
  let post = `${CONFIG.emojis.graduation} ${title}\n\n`;
  post += `${content}\n\n`;
  
  if (cta) {
    post += `${CONFIG.emojis.target} ${cta}\n`;
    post += `\n${CONFIG.emojis.link} Lien en bio\n`;
  }
  
  post += `\n.\n.\n.\n${hashtags}`;
  
  return {
    platform: 'Instagram',
    post,
    charCount: post.length,
    limit: 2200,
    tips: [
      '📸 Format carré (1080x1080) ou vertical (1080x1350)',
      '🎬 Les Reels ont 22% plus de portée que les posts classiques',
      '⏰ Meilleur moment: mardi, mercredi 11h-14h',
      '#️⃣ Utilisez 20-30 hashtags pour maximiser la portée',
    ],
  };
}

function generateLinkedInPost(data) {
  const { title, content, cta, includeContact } = data;
  const hashtags = [...CONFIG.hashtags.global.slice(0, 2), ...CONFIG.hashtags.linkedin.slice(0, 3)].join(' ');
  
  let post = `${CONFIG.emojis.star} ${title}\n\n`;
  post += `${content}\n\n`;
  
  // LinkedIn aime les listes à puces
  post += `${CONFIG.emojis.check} Formation certifiée Qualiopi\n`;
  post += `${CONFIG.emojis.check} Titres RNCP reconnus par l'État\n`;
  post += `${CONFIG.emojis.check} 100% finançable (CPF, OPCO, France Travail)\n\n`;
  
  if (cta) {
    post += `${CONFIG.emojis.arrow} ${cta}\n`;
    post += `${CONFIG.urls.website}\n\n`;
  }
  
  if (includeContact) {
    post += `---\n`;
    post += `${CONFIG.emojis.phone} ${CONFIG.contact.phone}\n`;
  }
  
  post += `\n${hashtags}`;
  
  return {
    platform: 'LinkedIn',
    post,
    charCount: post.length,
    limit: 3000,
    tips: [
      '📊 Les posts avec données chiffrées ont +37% d\'engagement',
      '⏰ Meilleur moment: mardi-jeudi 8h-10h ou 17h-18h',
      '🤝 Mentionnez des personnes/entreprises pour plus de visibilité',
      '📝 Les posts de 1200-1500 caractères performent le mieux',
    ],
  };
}

function generateYouTubeDescription(data) {
  const { title, content, cta } = data;
  const tags = CONFIG.hashtags.youtube.join(', ');
  
  let description = `${title}\n\n`;
  description += `${content}\n\n`;
  description += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  description += `${CONFIG.emojis.link} LIENS UTILES\n`;
  description += `➤ Notre site : ${CONFIG.urls.website}\n`;
  description += `➤ Nos formations : ${CONFIG.urls.formations}\n`;
  description += `➤ Nous contacter : ${CONFIG.contact.phone}\n\n`;
  description += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  description += `${CONFIG.emojis.target} ${cta || 'Inscrivez-vous à notre prochaine session !'}\n\n`;
  description += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  description += `${CONFIG.emojis.graduation} À PROPOS D'AVENIR&PROGRES\n`;
  description += `Centre de formation certifié Qualiopi, nous proposons des titres professionnels RNCP en alternance. Notre mission : vous accompagner vers une reconversion réussie.\n\n`;
  description += `Tags: ${tags}\n`;
  description += `${CONFIG.hashtags.global.join(' ')}`;
  
  return {
    platform: 'YouTube',
    post: description,
    charCount: description.length,
    limit: 5000,
    tips: [
      '📌 Les 150 premiers caractères sont visibles dans la recherche',
      '⏱️ Ajoutez des timestamps pour améliorer l\'expérience',
      '🔔 Rappelez aux viewers de s\'abonner et activer la cloche',
      '🏷️ Utilisez jusqu\'à 500 caractères de tags',
    ],
  };
}

// Fonction principale
async function main() {
  console.clear();
  log.title('🚀 AVENIR&PROGRES - Générateur de Posts Social Media');
  console.log('━'.repeat(50));
  
  // 1. Choisir le type de post
  console.log('\n📋 Types de posts disponibles:\n');
  const templateKeys = Object.keys(POST_TEMPLATES);
  templateKeys.forEach((key, index) => {
    console.log(`  ${index + 1}. ${POST_TEMPLATES[key].title} - ${POST_TEMPLATES[key].description}`);
  });
  
  const typeChoice = await question('\n👉 Choisissez un type (1-5): ');
  const selectedType = templateKeys[parseInt(typeChoice) - 1] || 'news';
  
  log.info(`Type sélectionné: ${POST_TEMPLATES[selectedType].title}`);
  
  // 2. Collecter les informations
  console.log('\n📝 Renseignez les informations du post:\n');
  
  const title = await question('Titre du post: ');
  console.log('(Astuce: Appuyez sur Entrée 2 fois pour terminer)');
  
  let content = '';
  let line = '';
  console.log('Contenu principal (plusieurs lignes possibles):');
  
  // Lecture multiligne simplifiée
  const contentPromise = new Promise((resolve) => {
    let emptyLineCount = 0;
    const contentLines = [];
    
    const onLine = (line) => {
      if (line === '') {
        emptyLineCount++;
        if (emptyLineCount >= 2) {
          rl.removeListener('line', onLine);
          resolve(contentLines.join('\n'));
          return;
        }
      } else {
        emptyLineCount = 0;
      }
      contentLines.push(line);
    };
    
    rl.on('line', onLine);
  });
  
  content = await contentPromise;
  
  const cta = await question('\nCall-to-action (ex: "Inscrivez-vous maintenant"): ');
  const includeContact = (await question('Inclure les coordonnées ? (o/n): ')).toLowerCase() === 'o';
  
  // 3. Générer les posts
  const data = { title, content, cta, includeContact };
  
  const posts = [
    generateFacebookPost(data),
    generateInstagramPost(data),
    generateLinkedInPost(data),
    generateYouTubeDescription(data),
  ];
  
  // 4. Afficher les résultats
  console.log('\n');
  log.title('📱 VOS POSTS GÉNÉRÉS');
  console.log('━'.repeat(50));
  
  posts.forEach((result) => {
    log.network(result.platform, result.post);
    console.log(`\n${colors.cyan}📊 ${result.charCount}/${result.limit} caractères${colors.reset}`);
    console.log(`${colors.yellow}💡 Tips:${colors.reset}`);
    result.tips.forEach((tip) => console.log(`   ${tip}`));
    console.log('\n' + '─'.repeat(50));
  });
  
  // 5. Sauvegarder les posts
  const save = (await question('\n💾 Sauvegarder les posts dans un fichier ? (o/n): ')).toLowerCase() === 'o';
  
  if (save) {
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `social-posts-${timestamp}-${Date.now()}.md`;
    const outputDir = path.join(__dirname, '../social-posts');
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    let fileContent = `# Posts Social Media - ${timestamp}\n\n`;
    fileContent += `**Titre:** ${title}\n`;
    fileContent += `**Type:** ${POST_TEMPLATES[selectedType].title}\n\n`;
    fileContent += '---\n\n';
    
    posts.forEach((result) => {
      fileContent += `## ${result.platform}\n\n`;
      fileContent += '```\n';
      fileContent += result.post;
      fileContent += '\n```\n\n';
      fileContent += `*${result.charCount}/${result.limit} caractères*\n\n`;
      fileContent += '---\n\n';
    });
    
    const filePath = path.join(outputDir, filename);
    fs.writeFileSync(filePath, fileContent);
    
    log.success(`Posts sauvegardés dans: ${filePath}`);
  }
  
  console.log('\n');
  log.success('Posts générés avec succès !');
  console.log(`\n${colors.cyan}📋 Prochaines étapes:${colors.reset}`);
  console.log('   1. Copiez le post correspondant à chaque réseau');
  console.log('   2. Ajoutez une image/vidéo adaptée');
  console.log('   3. Publiez aux heures recommandées');
  console.log('   4. Engagez avec les commentaires!\n');
  
  rl.close();
}

// Exécution
main().catch((error) => {
  console.error('Erreur:', error);
  rl.close();
  process.exit(1);
});
