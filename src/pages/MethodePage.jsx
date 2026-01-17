import { motion } from 'framer-motion'
import { Clock, Users, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SEO, SectionTitle, FAQ } from '@/components/common'
import { TestimonialsSection, CTASection } from '@/components/sections'

const advantages = [
  {
    icon: Clock,
    title: 'Flexibilité',
    subtitle: 'Une reconversion à votre rythme',
    description: 'Un rythme d\'apprentissage personnalisé selon vos disponibilités. Idéal pour réussir son projet professionnel (emploi, création d\'entreprise…).',
    color: '#4f46e5',
  },
  {
    icon: Users,
    title: 'Un accompagnement personnalisé',
    subtitle: 'Sur mesure',
    description: '100% pensés pour l\'apprentissage à distance, nos cours sont dispensés par des professionnels du secteur, et sous toutes formes (écrits, vidéo, quiz...).',
    color: '#f59e0b',
  },
  {
    icon: Lightbulb,
    title: 'Apprendre ensemble',
    subtitle: 'Community Learning',
    description: 'Notre plateforme de formation fonctionne comme un réseau social d\'apprentissage. Apprenez ensemble, apprenez des autres.',
    color: '#10b981',
  },
]

const faqItems = [
  {
    question: 'Comment fonctionne l\'apprentissage à distance ?',
    answer: 'Vous accédez à vos cours via notre plateforme en ligne, disponible 24h/24 et 7j/7. Les cours sont composés de vidéos, de documents écrits et de quiz interactifs. Vous pouvez étudier à votre rythme, où que vous soyez.',
  },
  {
    question: 'Ai-je accès à des professeurs ?',
    answer: 'Oui ! Nos professeurs sont des professionnels du secteur qui corrigent vos exercices, répondent à vos questions et vous accompagnent tout au long de votre formation. Vous pouvez les contacter directement via la plateforme.',
  },
  {
    question: 'Comment se passent les stages ?',
    answer: 'Nous vous fournissons des conventions de stage officielles. Notre équipe vous accompagne dans la recherche de stage grâce à notre réseau d\'entreprises partenaires.',
  },
  {
    question: 'La formation est-elle reconnue ?',
    answer: 'Oui, nos formations préparent à des diplômes d\'État (CAP) ou des titres RNCP reconnus par l\'État. Nous sommes certifiés Qualiopi, gage de qualité.',
  },
]

const MethodePage = () => {
  return (
    <>
      <SEO
        title="Notre Méthode d'Apprentissage"
        description="Découvrez la méthode Avenir&Progres : flexibilité, accompagnement personnalisé et community learning pour une reconversion réussie à distance."
        keywords="méthode apprentissage, formation à distance, community learning, coaching, reconversion, aveniretprogres"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Une méthode adaptée à{' '}
              <span className="text-secondary-400">votre situation</span>
            </h1>
            <p className="text-xl text-white/80">
              Avec notre méthode d'apprentissage, retrouvez les avantages d'une formation en présentiel 
              combinés avec la flexibilité de l'apprentissage en ligne !
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Les avantages de la méthode"
            highlight="Avenir&Progres"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 text-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${advantage.color}15` }}
                >
                  <advantage.icon
                    className="w-8 h-8"
                    style={{ color: advantage.color }}
                  />
                </div>
                <span
                  className="text-sm font-semibold"
                  style={{ color: advantage.color }}
                >
                  {advantage.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mt-2 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reconversion Section */}
      <section className="section bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-6">
                Une reconversion à{' '}
                <span className="text-secondary-600 dark:text-secondary-400">votre rythme</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Notre objectif est de permettre à tous et toutes de réussir leur reconversion 
                quel que soit leur âge ou leur situation. Que vous soyez actuellement en poste, 
                en recherche d'emploi, avec une vie de famille, des horaires décalés ou loin 
                d'un centre de formation… Avenir&Progres vous aide à changer de vie professionnelle !
              </p>
              <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                Réussir sa formation, trouver un emploi
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Nous vous accompagnons dans le développement de votre projet : trouver un emploi, 
                créer une entreprise ou développer vos compétences. Nos formations sont 
                professionnalisantes et sans cesse mises à jour en fonction du marché du travail.
              </p>
              <Link to="/formations" className="btn btn-primary">
                Découvrir nos formations
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800/50 rounded-3xl p-8 shadow-xl dark:border dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-6">
                Nos professeurs et coachs
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-secondary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-600 dark:text-primary-400">
                      Des professionnels du secteur
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Choisir Avenir&Progres c'est être entouré d'une équipe d'enseignants experts de leur domaine.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-600 dark:text-primary-400">
                      Un coaching personnalisé
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Chez Avenir&Progres vous ne serez jamais seul ! Les coachs vous guident pas à pas.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Questions fréquentes"
            highlight="sur notre méthode"
          />
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  )
}

export default MethodePage
