import { motion } from 'framer-motion'
import { GraduationCap, Building2, Wallet, Briefcase, ArrowRight, CheckCircle, Phone, Users, Award, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SEO, SectionTitle, FAQ } from '@/components/common'
import { CTASection } from '@/components/sections'
import { siteConfig } from '@/data/siteConfig'

const financingOptions = [
  {
    id: 'alternance',
    icon: GraduationCap,
    title: 'Formation en alternance',
    subtitle: 'Formation gratuite et rémunérée',
    description: 'Lorsque vous choisissez de suivre une formation en alternance avec Avenir&Progres, le financement est pris en charge par l\'entreprise qui vous emploie via son OPCO. Vous n\'avez donc rien à payer pour votre scolarité !',
    benefits: [
      'Formation 100% financée par l\'entreprise',
      'Vous êtes rémunéré pendant votre formation',
      'Expérience professionnelle valorisante',
      'Insertion professionnelle facilitée',
    ],
    colorClass: 'text-primary-500',
    bgClass: 'bg-primary-500/10',
    borderClass: 'border-primary-500/30',
  },
  {
    id: 'opco',
    icon: Building2,
    title: 'Financement OPCO',
    subtitle: 'Opérateurs de Compétences',
    description: 'Les OPCO (Opérateurs de Compétences) financent les contrats d\'apprentissage et de professionnalisation. Votre entreprise d\'accueil bénéficie d\'une prise en charge des frais de formation.',
    benefits: [
      'Prise en charge intégrale des frais de formation',
      'Accompagnement administratif simplifié',
      'Aide au recrutement pour l\'entreprise',
      'Suivi personnalisé tout au long du parcours',
    ],
    colorClass: 'text-secondary-500',
    bgClass: 'bg-secondary-500/10',
    borderClass: 'border-secondary-500/30',
  },
  {
    id: 'entreprise',
    icon: Briefcase,
    title: 'Plan de développement des compétences',
    subtitle: 'Financement employeur',
    description: 'Si vous êtes salarié, votre employeur peut financer votre formation via son plan de développement des compétences. Une solution idéale pour évoluer au sein de votre entreprise.',
    benefits: [
      'Formation pendant le temps de travail',
      'Maintien de votre salaire',
      'Montée en compétences valorisée',
      'Évolution de carrière facilitée',
    ],
    colorClass: 'text-accent-500',
    bgClass: 'bg-accent-500/10',
    borderClass: 'border-accent-500/30',
  },
  {
    id: 'personnel',
    icon: Wallet,
    title: 'Financement personnel',
    subtitle: 'Paiement en plusieurs mensualités',
    description: 'Vous souhaitez autofinancer votre formation ? Nous proposons des facilités de paiement avec la possibilité de régler en plusieurs mensualités pour rendre votre projet accessible.',
    benefits: [
      'Échelonnement du paiement',
      'Sans frais supplémentaires',
      'Flexibilité du nombre de mensualités',
      'Accompagnement par nos conseillers',
    ],
    colorClass: 'text-secondary-400',
    bgClass: 'bg-secondary-400/10',
    borderClass: 'border-secondary-400/30',
  },
]

const alternanceAdvantages = [
  {
    icon: Award,
    title: 'Diplôme reconnu',
    description: 'Titre professionnel RNCP inscrit au Répertoire National des Certifications Professionnelles',
  },
  {
    icon: TrendingUp,
    title: 'Expérience valorisée',
    description: 'Alternez entre formation théorique et mise en pratique en entreprise',
  },
  {
    icon: Users,
    title: 'Réseau professionnel',
    description: 'Développez votre réseau dès la formation et maximisez vos chances d\'embauche',
  },
]

const faqItems = [
  {
    question: 'Qu\'est-ce que l\'alternance ?',
    answer: 'L\'alternance est un mode de formation qui combine des périodes d\'enseignement théorique en centre de formation et des périodes de mise en pratique en entreprise. Vous êtes salarié de l\'entreprise et donc rémunéré.',
  },
  {
    question: 'Comment trouver une entreprise pour mon alternance ?',
    answer: 'Nos équipes vous accompagnent dans votre recherche d\'entreprise. Nous disposons d\'un réseau d\'entreprises partenaires et vous aidons à préparer vos candidatures et entretiens.',
  },
  {
    question: 'Quelle est la rémunération en alternance ?',
    answer: 'La rémunération dépend de votre âge et de votre niveau d\'études. Elle varie de 27% à 100% du SMIC. Nos conseillers peuvent vous donner une estimation précise selon votre situation.',
  },
  {
    question: 'Quelle est la durée d\'une formation en alternance ?',
    answer: 'Nos formations durent de 6 à 18 mois selon le titre professionnel choisi. Le rythme d\'alternance est adapté pour optimiser votre apprentissage.',
  },
]

const AlternancePage = () => {
  return (
    <>
      <SEO
        title="Alternance - Financer ma Formation"
        description="Formez-vous en alternance avec Avenir&Progres. Formation 100% financée, rémunérée et diplômante. Titres professionnels RNCP Conseiller Commercial et Graphiste."
        keywords="alternance, formation alternance, contrat apprentissage, OPCO, formation financée, titre professionnel"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-400 py-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-20 -left-32 w-96 h-96 glow-blob glow-blob-purple opacity-30" />
        <div className="absolute bottom-0 right-0 w-80 h-80 glow-blob glow-blob-orange opacity-40" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
              Formez-vous en{' '}
              <span className="text-gray-900">alternance</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Une formation 100% financée, rémunérée et diplômante. 
              L'alternance est la voie royale pour vous former tout en acquérant une expérience professionnelle valorisante.
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="btn btn-white btn-lg"
            >
              <Phone className="w-5 h-5" />
              Contacter un conseiller : {siteConfig.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Alternance Advantages */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Pourquoi choisir"
            highlight="l'alternance ?"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {alternanceAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 dark:text-white/70">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            title="Comment financer sa formation ?"
            highlight="Les solutions adaptées à votre profil"
          />

          <div className="space-y-16">
            {financingOptions.map((option, index) => (
              <motion.div
                key={option.id}
                id={option.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center ${option.bgClass}`}
                    >
                      <option.icon
                        className={`w-7 h-7 ${option.colorClass}`}
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {option.title}
                      </h2>
                      <p className={`font-medium ${option.colorClass}`}>
                        {option.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-white/70 text-lg mb-6">
                    {option.description}
                  </p>
                  <Link
                    to="/contact"
                    className="btn btn-primary"
                  >
                    En savoir plus
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div
                  className={`card p-8 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <h3 className={`font-bold mb-6 ${option.colorClass}`}>
                    Les avantages
                  </h3>
                  <div className="space-y-4">
                    {option.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle
                          className={`w-5 h-5 flex-shrink-0 ${option.colorClass}`}
                        />
                        <span className="text-gray-700 dark:text-white/80">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Vos questions sur"
            highlight="l'alternance"
          />
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default AlternancePage
