// Site Configuration for Avenir&Progres
export const siteConfig = {
  name: 'Avenir&Progres',
  slogan: 'Votre avenir commence ici',
  tagline: 'Une formation pour changer de vie',
  description: 'Centre de formation professionnelle certifié Qualiopi. Titres professionnels RNCP en alternance : Conseiller Commercial et Graphiste.',
  phone: '01 71 18 23 97',
  email: 'contact@aveniretprogres.fr',
  emailCfa: 'cfa@aveniretprogres.fr',
  address: '123 Avenue de la Formation, 75001 Paris',
  url: 'https://aveniretprogres.fr',
  
  social: {
    facebook: 'https://facebook.com/aveniretprogres',
    instagram: 'https://instagram.com/aveniretprogres',
    linkedin: 'https://linkedin.com/company/aveniretprogres',
    youtube: 'https://youtube.com/@aveniretprogres',
  },
  
  stats: {
    insertionRate: 94,
    learners: 100,
    successRate: 92,
    yearsExperience: 15,  // Expertise cumulée des formateurs
  },
  
  certifications: [
    { name: 'Qualiopi', image: '/images/certifications/qualiopi.png' },
    { name: 'France Travail', image: '/images/certifications/france-travail.png' },
  ],
}

export const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Formations', href: '/formations' },
  { name: 'Méthode', href: '/methode' },
  { name: 'Alternance', href: '/alternance' },
  { name: 'Qui sommes-nous', href: '/qui-sommes-nous' },
  { name: 'Blog', href: '/blog' },
  { name: 'Avis', href: '/avis' },
  { name: 'Contact', href: '/contact' },
]

export const footerLinks = {
  formations: [
    { name: 'Toutes nos formations', href: '/formations' },
    { name: 'TP Conseiller Commercial', href: '/formations/tp-conseiller-commercial' },
    { name: 'TP Graphiste', href: '/formations/tp-graphiste' },
  ],
  informations: [
    { name: 'Alternance', href: '/alternance' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'Notre méthode', href: '/methode' },
    { name: 'Témoignages', href: '/avis' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'CGU', href: '/cgu' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'Accessibilité', href: '/accessibilite' },
  ],
}
