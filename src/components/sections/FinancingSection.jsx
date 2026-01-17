import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CreditCard, Building2, Wallet, GraduationCap, BadgeEuro, ChevronRight, Sparkles } from 'lucide-react'

const financingOptions = [
  {
    icon: GraduationCap,
    title: 'Alternance',
    subtitle: 'Formation gratuite et rémunérée',
    description: 'Votre formation est prise en charge par l\'entreprise via son OPCO et vous êtes rémunéré.',
    gradient: 'from-primary-500 to-amber-400',
    glowColor: 'rgba(255, 107, 53, 0.4)',
    link: '/alternance#alternance',
    popular: true,
  },
  {
    icon: Building2,
    title: 'OPCO',
    subtitle: 'Opérateurs de Compétences',
    description: 'Les OPCO financent intégralement les contrats d\'apprentissage et de professionnalisation.',
    gradient: 'from-emerald-500 to-teal-400',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    link: '/alternance#opco',
  },
  {
    icon: CreditCard,
    title: 'Entreprise',
    subtitle: 'Plan de développement des compétences',
    description: 'Votre employeur peut financer votre formation via son budget formation.',
    gradient: 'from-blue-500 to-cyan-400',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    link: '/alternance#entreprise',
  },
  {
    icon: Wallet,
    title: 'Facilités de paiement',
    subtitle: 'Paiement en plusieurs fois',
    description: 'Étalez le coût de votre formation sur plusieurs mensualités sans frais.',
    gradient: 'from-secondary-500 to-pink-400',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    link: '/alternance#personnel',
  },
]

const FinancingSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold rounded-full mb-4"
          >
            <BadgeEuro className="w-4 h-4" />
            Financement
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            Comment financer{' '}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              ma formation ?
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-white/60 leading-relaxed">
            Il existe de nombreux dispositifs pouvant assurer la prise en charge de vos frais de formation. 
            Nos solutions de financement s'adaptent en fonction de votre profil.
          </p>
        </motion.div>

        {/* Financing Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {financingOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <Link
                to={option.link}
                className="block relative bg-white dark:bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-white/10 hover:border-primary-500/30 dark:hover:border-white/20 transition-all duration-500 hover:-translate-y-2 h-full overflow-hidden shadow-sm dark:shadow-none"
              >
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ boxShadow: `0 0 60px ${option.glowColor}` }}
                />
                
                {/* Popular badge */}
                {option.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-primary-500 to-amber-400 text-white text-xs font-bold rounded-full">
                      <Sparkles className="w-3 h-3" />
                      Populaire
                    </span>
                  </div>
                )}
                
                {/* Icon */}
                <div 
                  className={`w-16 h-16 bg-gradient-to-r ${option.gradient} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 10px 40px ${option.glowColor}` }}
                >
                  <option.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors relative z-10">
                  {option.title}
                </h3>
                
                {/* Subtitle */}
                <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${option.gradient} bg-clip-text text-transparent`}>
                  {option.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed mb-5 relative z-10">
                  {option.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm relative z-10">
                  <span>En savoir plus</span>
                  <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
                
                {/* Hover gradient line */}
                <div className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${option.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            to="/alternance" 
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-full shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-1 transition-all duration-300"
          >
            <span>Quel financement est fait pour moi ?</span>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FinancingSection
