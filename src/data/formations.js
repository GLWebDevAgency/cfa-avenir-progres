// Formations data for Avenir&Progres
// Certifications RNCP uniquement - Financement par alternance/OPCO

export const sectors = [
  {
    id: 'commerce',
    name: 'Commerce & Vente',
    icon: 'ShoppingBag',
    color: '#ff6b35',
    description: 'Négociation commerciale et relation client',
    image: '/images/hero/formation-etudiant-2048x799.webp',
  },
  {
    id: 'design',
    name: 'Design & Graphisme',
    icon: 'Palette',
    color: '#8b5cf6',
    description: 'Création graphique et communication visuelle',
    image: '/images/formations/Dom-Graphisme-Design_3-scaled.jpg',
  },
]

export const formations = [
  // Commerce & Vente
  {
    id: 'tp-conseiller-commercial',
    name: 'TP Conseiller Commercial',
    sector: 'commerce',
    type: 'Titre Professionnel',
    niveau: 'Niveau 4 (Bac)',
    rncp: 'RNCP37717',
    duration: '6 à 12 mois',
    eligible_alternance: true,
    certificateur: 'Ministère du Travail',
    dateEcheance: '31-07-2028',
    description: 'Devenez conseiller commercial et développez vos compétences en prospection, négociation et fidélisation client. Ce titre professionnel vous prépare à tous les métiers de la vente B2B et B2C.',
    objectifs: 'Le conseiller commercial vend des produits, des prestations de services ou des solutions d\'une entreprise. Il prospecte des entreprises et des particuliers, développe son portefeuille client et le chiffre d\'affaires de l\'entreprise.',
    skills: [
      'Prospection commerciale',
      'Négociation et vente',
      'Fidélisation client',
      'Social selling',
      'Analyse des performances',
      'Veille commerciale',
    ],
    blocs: [
      {
        code: 'RNCP37717BC01',
        titre: 'Prospecter un secteur de vente',
        competences: [
          'Assurer une veille professionnelle et commerciale',
          'Mettre en œuvre un plan d\'actions commerciales et organiser son activité',
          'Mettre en œuvre la démarche de prospection',
          'Analyser ses performances commerciales et en rendre compte',
        ],
      },
      {
        code: 'RNCP37717BC02',
        titre: 'Accompagner le client et lui proposer des produits et des services',
        competences: [
          'Représenter l\'entreprise et contribuer à la valorisation de son image',
          'Conseiller le client en conduisant l\'entretien de vente',
          'Assurer le suivi de ses ventes',
          'Fidéliser en consolidant l\'expérience client',
        ],
      },
    ],
    career: [
      'Conseiller commercial',
      'Attaché commercial',
      'Commercial',
      'Prospecteur commercial',
      'Délégué commercial',
    ],
    rome: ['D1404', 'D1403', 'D1407', 'D1402', 'C1102'],
    secteurs: [
      'Tous les secteurs d\'activité',
      'Distribution',
      'Services aux entreprises',
      'Banque et assurance',
    ],
    prerequis: 'Aucun prérequis spécifique. Une expérience en relation client est un plus.',
    modalitesEvaluation: [
      'Mise en situation professionnelle (1h45)',
      'Entretien technique (55 min)',
      'Questionnement à partir de productions (1h10)',
      'Entretien final (10 min)',
    ],
    image: '/images/hero/youschool-changement-de-vie.webp',
  },
  
  // Design & Graphisme
  {
    id: 'tp-graphiste',
    name: 'TP Graphiste',
    sector: 'design',
    type: 'Titre Professionnel',
    niveau: 'Niveau 5 (Bac+2)',
    rncp: 'RNCP39532',
    duration: '12 à 18 mois',
    eligible_alternance: true,
    certificateur: 'Ministère du Travail',
    dateEcheance: '30-09-2029',
    description: 'Formez-vous au métier de graphiste et maîtrisez la conception de supports de communication visuelle. Ce titre professionnel vous ouvre les portes de la création graphique print et digitale.',
    objectifs: 'Le graphiste conçoit et réalise des supports de communication visuelle pour différents médias, destinés à l\'impression ou numériques. Son objectif est de créer des designs qui attirent l\'attention et transmettent des messages clairs.',
    skills: [
      'Mise en page et illustration',
      'Création graphique',
      'Motion design et vidéo',
      'Packaging et PLV',
      'Gestion de projet créatif',
      'Veille créative et technologique',
    ],
    blocs: [
      {
        code: 'RNCP39532BC01',
        titre: 'Concevoir et réaliser des compositions graphiques',
        competences: [
          'Appliquer et intégrer des techniques simples de mise en page et illustration',
          'Appliquer et intégrer des techniques avancées de mise en page et illustration',
          'Mener une veille créative et artistique',
        ],
      },
      {
        code: 'RNCP39532BC02',
        titre: 'Développer des solutions visuelles innovantes et multimédia',
        competences: [
          'Concevoir des designs pour du packaging, des PLV et de la signalétique',
          'Créer des contenus en motion design et vidéo',
          'Mener une veille technologique et s\'adapter aux innovations',
        ],
      },
      {
        code: 'RNCP39532BC03',
        titre: 'Gérer et coordonner des projets de communication visuelle',
        competences: [
          'Comprendre et traduire les besoins clients',
          'Gérer un projet de communication visuelle en collaboration',
          'Assurer le suivi technique et la qualité des livrables',
        ],
      },
    ],
    career: [
      'Graphiste',
      'Infographiste',
      'Webdesigner',
      'Maquettiste',
      'Designer graphique',
      'Directeur artistique',
      'Motion designer',
    ],
    rome: ['E1103', 'E1104', 'E1205', 'E1305', 'E1306'],
    secteurs: [
      'Agences de communication et publicité',
      'Studios de création',
      'Édition et presse',
      'E-commerce et distribution',
      'Freelance',
    ],
    prerequis: 'Sensibilité artistique et créativité. Maîtrise des outils informatiques de base.',
    modalitesEvaluation: [
      'Présentation d\'un projet réalisé en amont (50 min)',
      'Entretien technique (20 min)',
      'Entretien final (15 min)',
    ],
    outils: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe InDesign',
      'Adobe After Effects',
      'Adobe Premiere Pro',
      'Figma',
    ],
    image: '/images/formations/Dom-Graphisme-Design_11.jpg',
    gallery: [
      '/images/formations/Dom-Graphisme-Design_3-scaled.jpg',
      '/images/formations/Dom-Graphisme-Design_4.jpg',
      '/images/formations/Dom-Graphisme-Design_11.jpg',
    ],
  },
]

// Informations sur le financement (sans CPF)
export const financementInfo = {
  alternance: {
    title: 'Alternance / Apprentissage',
    description: 'Formation financée par l\'OPCO de l\'entreprise. Vous êtes rémunéré pendant votre formation.',
    avantages: [
      'Formation 100% financée',
      'Rémunération pendant la formation',
      'Expérience professionnelle',
      'Meilleure employabilité',
    ],
  },
  entreprise: {
    title: 'Plan de développement des compétences',
    description: 'Votre employeur peut financer votre formation via son budget formation.',
    avantages: [
      'Prise en charge par l\'entreprise',
      'Formation pendant le temps de travail',
      'Maintien du salaire',
    ],
  },
  personnel: {
    title: 'Financement personnel',
    description: 'Possibilité de financer vous-même votre formation avec des facilités de paiement.',
    avantages: [
      'Facilités de paiement',
      'Démarrage rapide',
      'Autonomie dans votre projet',
    ],
  },
}

export const getFormationsBySector = (sectorId) => {
  return formations.filter(f => f.sector === sectorId)
}

export const getSectorById = (sectorId) => {
  return sectors.find(s => s.id === sectorId)
}

export const getFormationById = (formationId) => {
  return formations.find(f => f.id === formationId)
}
