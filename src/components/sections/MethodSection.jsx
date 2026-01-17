import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Clock, Users, Lightbulb, Play, Zap } from 'lucide-react'

const advantages = [
  {
    icon: Clock,
    title: 'Flexibilité totale',
    subtitle: 'Une reconversion à votre rythme',
    description: 'Les cours sont accessibles 7j/7 et 24h/24. Idéal pour aménager votre emploi du temps à votre guise.',
    gradient: 'from-blue-500 to-cyan-400',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    number: '01',
  },
  {
    icon: Users,
    title: 'Accompagnement personnalisé',
    subtitle: 'Un suivi sur-mesure',
    description: 'Comptez sur le soutien de vos professeurs et de vos coachs pour vous mener vers la réussite.',
    gradient: 'from-primary-500 to-amber-400',
    glowColor: 'rgba(255, 107, 53, 0.4)',
    number: '02',
  },
  {
    icon: Lightbulb,
    title: 'Community Learning',
    subtitle: 'Apprendre ensemble',
    description: 'Grâce au community learning et le réseau social de formation, échangez avec les autres élèves.',
    gradient: 'from-emerald-500 to-teal-400',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    number: '03',
  },
]

const included = [
  { text: 'Accès 24/24 et 7/7 jours', icon: Clock },
  { text: 'Inscription toute l\'année', icon: CheckCircle },
  { text: 'Coaching personnalisé', icon: Users },
  { text: 'Rendez-vous avec les profs', icon: Lightbulb },
  { text: 'Cours théoriques & pratiques', icon: Play },
  { text: 'Conventions de stage', icon: Zap },
]

const MethodSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-secondary-500/5 dark:bg-secondary-500/10 rounded-full blur-[120px]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4"
          >
            <Zap className="w-4 h-4" />
            Notre méthode
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            Les avantages de la méthode{' '}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Avenir&Progres
            </span>
          </h2>
        </motion.div>

        {/* Advantages Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div 
                className="relative bg-white dark:bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200 dark:border-white/10 hover:border-primary-500/30 dark:hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-sm dark:shadow-none"
                style={{ '--glow-color': advantage.glowColor }}
              >
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ boxShadow: `0 0 60px ${advantage.glowColor}` }}
                />
                
                {/* Number badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center">
                  <span className={`text-sm font-bold bg-gradient-to-r ${advantage.gradient} bg-clip-text text-transparent`}>
                    {advantage.number}
                  </span>
                </div>
                
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${advantage.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`} style={{ boxShadow: `0 10px 40px ${advantage.glowColor}` }}>
                  <advantage.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 bg-gradient-to-r ${advantage.gradient} text-white`}>
                  {advantage.subtitle}
                </span>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {advantage.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Included in Formation - Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-500/90 to-secondary-500" />
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
                  <CheckCircle className="w-4 h-4" />
                  Tout inclus
                </span>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
                  Inclus dans ma formation
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {included.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/90">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="inline-block bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  
                  <p className="text-lg text-white/90 mb-6">
                    Découvrez notre méthode d'apprentissage innovante
                  </p>
                  
                  <Link
                    to="/methode"
                    className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-white/90 transition-all duration-300"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MethodSection
