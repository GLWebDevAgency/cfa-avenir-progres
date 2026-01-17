import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Phone, Info } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SEO, SectionTitle, FAQ } from '@/components/common'
import { CTASection } from '@/components/sections'
import { siteConfig } from '@/data/siteConfig'

const pricingPlans = [
  {
    id: 'starter',
    name: 'Essentiel',
    description: 'Accès à la formation en ligne',
    price: 'À partir de',
    priceValue: '990',
    priceUnit: '€',
    isPopular: false,
    features: [
      'Accès illimité aux cours en ligne',
      'Supports de cours téléchargeables',
      'Quiz et exercices interactifs',
      'Forum communautaire',
      'Convention de stage fournie',
    ],
    cta: 'En savoir plus',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Formation complète avec accompagnement',
    price: 'À partir de',
    priceValue: '1 490',
    priceUnit: '€',
    isPopular: true,
    features: [
      'Tout de l\'offre Essentiel',
      'Coaching personnalisé',
      'Corrections détaillées',
      'Accès prioritaire aux professeurs',
      'Kit matériel inclus',
      'Examens blancs illimités',
    ],
    cta: 'Choix populaire',
  },
  {
    id: 'alternance',
    name: 'Alternance',
    description: 'Formation gratuite et rémunérée',
    price: '',
    priceValue: '0',
    priceUnit: '€',
    isPopular: false,
    features: [
      'Formation 100% financée',
      'Salaire pendant la formation',
      'Accompagnement recherche entreprise',
      'Tuteur dédié en entreprise',
      'Insertion professionnelle facilitée',
    ],
    cta: 'Découvrir l\'alternance',
    highlighted: true,
  },
]

const financingMethods = [
  { name: 'Alternance', description: 'Formation 100% financée par l\'OPCO de l\'entreprise', link: '/alternance#alternance' },
  { name: 'OPCO', description: 'Financement pour les salariés en poste', link: '/alternance#opco' },
  { name: 'Entreprise', description: 'Plan de développement des compétences', link: '/alternance#entreprise' },
  { name: 'Personnel', description: 'Paiement échelonné sans frais', link: '/alternance#personnel' },
]

const faqItems = [
  {
    question: 'Combien coûte une formation ?',
    answer: 'En alternance, la formation est 100% financée par l\'entreprise. Pour les autres options, le tarif dépend de la formation choisie. Contactez-nous pour un devis personnalisé.',
  },
  {
    question: 'Puis-je payer en plusieurs fois ?',
    answer: 'Oui, nous proposons un paiement échelonné sans frais supplémentaires. Vous pouvez répartir le coût sur plusieurs mensualités selon votre situation.',
  },
  {
    question: 'Ma formation peut-elle être 100% financée ?',
    answer: 'Oui ! En alternance, la formation est entièrement prise en charge par l\'OPCO de l\'entreprise. Nos conseillers vous aident à trouver une entreprise d\'accueil.',
  },
  {
    question: 'Y a-t-il des frais cachés ?',
    answer: 'Non, le tarif annoncé inclut l\'accès à la plateforme, les cours et l\'accompagnement prévu. Seules les options supplémentaires (kit matériel premium, sessions coaching extra) sont facturées en plus.',
  },
]

const TarifsPage = () => {
  return (
    <>
      <SEO
        title="Nos Tarifs"
        description="Découvrez les tarifs de nos formations professionnelles. Formation en alternance 100% financée ou facilités de paiement. Titres professionnels RNCP reconnus."
        keywords="tarifs formation, prix formation, formation alternance, formation financée, OPCO"
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
              Des tarifs adaptés{' '}
              <span className="text-secondary-400">à votre budget</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Nos formations sont accessibles grâce à différentes formules et 
              modes de financement. Trouvez la solution qui vous convient.
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="btn bg-white text-primary-600 hover:bg-gray-100"
            >
              <Phone className="w-5 h-5" />
              Demander un devis : {siteConfig.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nos formules"
            highlight="de formation"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl p-8 ${
                  plan.isPopular
                    ? 'bg-primary-600 text-white scale-105 shadow-2xl'
                    : plan.highlighted
                    ? 'bg-accent-500 text-white'
                    : 'bg-gray-50 dark:bg-gray-800/50'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Le plus populaire
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.isPopular || plan.highlighted ? 'text-white' : 'text-primary-600 dark:text-primary-400'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${
                  plan.isPopular || plan.highlighted ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  {plan.price && (
                    <span className={`text-sm ${
                      plan.isPopular || plan.highlighted ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {plan.price}
                    </span>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${
                      plan.isPopular || plan.highlighted ? 'text-white' : 'text-primary-600 dark:text-primary-400'
                    }`}>
                      {plan.priceValue}
                    </span>
                    <span className={`text-xl ${
                      plan.isPopular || plan.highlighted ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {plan.priceUnit}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                        plan.isPopular ? 'text-secondary-400' : 
                        plan.highlighted ? 'text-white' : 'text-accent-500'
                      }`} />
                      <span className={`text-sm ${
                        plan.isPopular || plan.highlighted ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`btn w-full justify-center ${
                    plan.isPopular
                      ? 'bg-secondary-500 text-white hover:bg-secondary-600'
                      : plan.highlighted
                      ? 'bg-white text-accent-500 hover:bg-gray-100'
                      : 'btn-primary'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="section bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Modes de"
            highlight="financement"
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {financingMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={method.link}
                  className="flex items-center gap-4 bg-white dark:bg-gray-800/50 rounded-xl p-6 hover:shadow-lg transition-shadow dark:border dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-secondary-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-600 dark:text-primary-400">{method.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{method.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link to="/alternance" className="btn btn-primary">
              Voir tous les financements
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Questions fréquentes"
            highlight="sur les tarifs"
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

export default TarifsPage
