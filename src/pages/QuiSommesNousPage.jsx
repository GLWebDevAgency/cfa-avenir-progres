import { motion } from 'framer-motion'
import { CheckCircle, Heart, Building, TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SEO, SectionTitle } from '@/components/common'
import { TestimonialsSection, PartnersSection, CTASection } from '@/components/sections'
import { siteConfig } from '@/data/siteConfig'
import { QualiopiBadge } from '@/assets/logos'

const values = [
  {
    icon: Heart,
    title: 'Inclusive & bienveillante',
    subtitle: 'Sociales',
    description: 'Nous souhaitons rendre la reconversion accessible au plus grand nombre. Notre méthode d\'apprentissage est collective et inclusive.',
    color: '#ec4899',
  },
  {
    icon: Building,
    title: 'Made in France',
    subtitle: 'Entreprise locale',
    description: 'Nous œuvrons pour l\'insertion professionnelle en France. 100% de nos infrastructures et emplois sont sur le territoire français.',
    color: '#4f46e5',
  },
  {
    icon: TrendingUp,
    title: 'Insertion professionnelle',
    subtitle: 'Ancré dans la réalité',
    description: 'Engagé dans le défi actuel des pénuries de personnels, nos formations sont professionnalisantes et sans cesse mises à jour.',
    color: '#10b981',
  },
]

const timeline = [
  { year: '2014-2015', title: 'Naissance d\'Avenir&Progres', description: 'Notre idée : créer une méthode d\'apprentissage accessible à distance.' },
  { year: '2016', title: 'Premières formations', description: 'Lancement des CAP Pâtissier, CAP Cuisine et CAP Boulanger.' },
  { year: '2017-2023', title: 'Expansion', description: 'Ouverture de nouvelles formations dans la Beauté, l\'Artisanat, les Animaux et la Petite Enfance.' },
  { year: '2024', title: '10 ans d\'expertise', description: 'Nous sommes fiers de suivre l\'évolution de nos 55 000 apprenants.' },
  { year: '2025', title: 'CFA agréé', description: 'Avenir&Progres devient CFA et fait un pas de plus vers l\'employabilité.' },
  { year: 'Et après ?', title: 'L\'avenir vous appartient', description: 'Toujours plus d\'adultes nous font confiance. Pourquoi pas vous ?' },
]

const QuiSommesNousPage = () => {
  return (
    <>
      <SEO
        title="Qui sommes-nous ?"
        description="Découvrez Avenir&Progres, centre de formation professionnelle spécialisé dans la reconversion des adultes. 10 ans d'expertise, +55 000 apprenants formés."
        keywords="Avenir&Progres, aveniretprogres, centre formation, histoire, valeurs, équipe, mission"
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
              Une école dédiée à la{' '}
              <span className="text-secondary-400">reconversion professionnelle</span>
            </h1>
            <p className="text-xl text-white/80">
              Avenir&Progres est un organisme de formation spécialement conçu pour vous former 
              et encadrer votre reconversion. Nos formations en ligne, accessibles depuis chez vous, 
              permettent un apprentissage à votre rythme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-6">
                Notre mission : faciliter l'accès à la{' '}
                <span className="text-secondary-600 dark:text-secondary-400">formation et à l'emploi</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Avenir&Progres est né d'un besoin : comment changer de métier ou se former 
                lorsqu'on a une vie active, une vie de famille et pas la possibilité de 
                quitter son travail immédiatement ?
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                En 2014, nous avons mis au point une méthode pour apprendre au mieux depuis chez soi, 
                au rythme qui vous convient. Notre objectif ? Vous accompagner dans votre changement de vie !
              </p>
              <Link to="/methode" className="btn btn-primary">
                Découvrir notre méthode
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-primary-600 text-white rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">
                  {siteConfig.stats.yearsExperience}+
                </div>
                <p className="text-white/80">Années d'expertise</p>
              </div>
              <div className="bg-secondary-500 text-white rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">
                  {(siteConfig.stats.learners / 1000).toFixed(0)}K+
                </div>
                <p className="text-white/80">Apprenants</p>
              </div>
              <div className="bg-accent-500 text-white rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">
                  {siteConfig.stats.insertionRate}%
                </div>
                <p className="text-white/80">Insertion pro</p>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center flex items-center justify-center shadow-sm">
                <QualiopiBadge className="!h-14" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nos valeurs et"
            highlight="engagements"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-8"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <value.icon
                    className="w-7 h-7"
                    style={{ color: value.color }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {value.subtitle}
                </span>
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mt-1 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Avenir&Progres : une entreprise"
            highlight="100% française"
          />

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-secondary-500 rounded-full" />
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-sm font-bold text-secondary-500">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mt-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PartnersSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

export default QuiSommesNousPage
