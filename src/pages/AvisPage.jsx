import { motion } from 'framer-motion'
import { Star, TrendingUp, Users, Award, ThumbsUp } from 'lucide-react'

import { SEO, SectionTitle, TestimonialCard, FAQ } from '@/components/common'
import { CTASection } from '@/components/sections'
import { testimonials, ratings } from '@/data/testimonials'
import { siteConfig } from '@/data/siteConfig'

// Calculer le total des avis et la moyenne pondérée
const totalReviews = Object.values(ratings).reduce((sum, r) => sum + r.count, 0)
const weightedAverage = Object.values(ratings).reduce((sum, r) => sum + r.score * r.count, 0) / totalReviews

// Composant pour afficher les étoiles avec remplissage partiel
const StarRating = ({ score, starSize = 'w-4 h-4' }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const fillPercentage = Math.min(1, Math.max(0, score - i)) * 100
        return (
          <div key={i} className="relative">
            {/* Étoile vide (fond) */}
            <Star className={`${starSize} text-gray-300`} />
            {/* Étoile remplie (superposée avec clip) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <Star className={`${starSize} text-yellow-400 fill-yellow-400`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

const stats = [
  {
    value: siteConfig.stats.insertionRate,
    suffix: '%',
    label: "D'insertion professionnelle",
    icon: TrendingUp,
  },
  {
    value: siteConfig.stats.learners,
    suffix: '+',
    label: 'Apprenants formés',
    icon: Users,
  },
  {
    value: siteConfig.stats.successRate,
    suffix: '%',
    label: 'Taux de réussite',
    icon: Award,
  },
]

const faqItems = [
  {
    question: 'Quels sont les avis sur Avenir&Progres ?',
    answer: 'Nos élèves nous attribuent une note moyenne de 4.6/5 sur les principales plateformes d\'avis (Google, Trustpilot, Avis Vérifiés). Ils apprécient particulièrement la flexibilité de nos formations et la qualité de l\'accompagnement.',
  },
  {
    question: 'Comment se déroule la formation à distance ?',
    answer: 'Vous accédez à votre espace de formation en ligne 24h/24, 7j/7. Les cours sont dispensés sous forme de vidéos, documents et quiz interactifs. Nos professeurs et coachs sont disponibles pour vous accompagner.',
  },
  {
    question: 'Y a-t-il des retours négatifs sur Avenir&Progres ?',
    answer: 'Comme tout organisme de formation, nous recevons parfois des retours constructifs. Nous les prenons en compte pour améliorer constamment nos services. Notre taux de satisfaction global reste très élevé (94%).',
  },
  {
    question: 'Comment est l\'accompagnement des étudiants ?',
    answer: 'Chaque élève bénéficie d\'un coaching personnalisé. Nos coachs vous accompagnent du début à la fin de votre formation : organisation, motivation, préparation aux examens et insertion professionnelle.',
  },
]

const AvisPage = () => {
  return (
    <>
      <SEO
        title="Avis et Témoignages de nos Élèves"
        description="Découvrez les avis et témoignages de nos élèves. Plus de 55 000 apprenants formés avec un taux de satisfaction de 94%. Lisez leurs retours d'expérience."
        keywords="avis Avenir&Progres, aveniretprogres, témoignages formation, retour expérience, reconversion réussie"
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
              Nos élèves donnent leurs{' '}
              <span className="text-secondary-400">avis</span>
            </h1>
            <p className="text-xl text-white/80 mb-4">
              Découvrez les avis et témoignages des anciens élèves Avenir&Progres. 
              Ils reviennent sur le déroulé de leur formation à distance et ce qu'ils ont apprécié.
            </p>
            
            {/* Note globale */}
            <div className="mb-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <StarRating score={weightedAverage} starSize="w-5 h-5" />
              <span className="text-xl font-bold">{weightedAverage.toFixed(1)}/5</span>
              <span className="text-white/70">({totalReviews}+ avis)</span>
            </div>

            {/* Rating Badges */}
            <div className="flex flex-wrap justify-center gap-6">
              {Object.entries(ratings).map(([key, rating]) => (
                <a
                  key={key}
                  href={rating.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 hover:bg-white/20 transition-colors"
                >
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <StarRating score={rating.score} starSize="w-4 h-4" />
                  </div>
                  <p className="text-2xl font-bold">{rating.score}/5</p>
                  <p className="text-sm text-white/70">
                    {key === 'google' ? 'Google' : key === 'trustpilot' ? 'Trustpilot' : 'Avis Vérifiés'}
                  </p>
                  <p className="text-xs text-white/50">{rating.count} avis</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-secondary-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-7 h-7 text-secondary-500" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
                  {stat.value.toLocaleString('fr-FR')}{stat.suffix}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Témoignages de nos"
            highlight="élèves"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Questions pratiques"
            highlight="sur la formation"
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

export default AvisPage
