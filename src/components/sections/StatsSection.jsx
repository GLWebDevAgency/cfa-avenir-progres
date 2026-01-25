import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { TrendingUp, Users, Award, Clock } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { QualiopiBadge, RNCPBadge } from '@/assets/logos'

// Animated Counter Hook
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return
    
    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * (end - start) + start))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration, start])

  return { count, ref }
}

const stats = [
  {
    value: siteConfig.stats.insertionRate,
    suffix: '%',
    label: "Insertion pro",
    description: "de nos diplômés trouvent un emploi",
    icon: TrendingUp,
    glowColor: 'rgba(16, 185, 129, 0.4)',
    iconColor: '#10b981',
  },
  {
    value: siteConfig.stats.learners,
    suffix: '+',
    label: 'Apprenants formés',
    description: "nous ont fait confiance",
    icon: Users,
    glowColor: 'rgba(255, 107, 53, 0.4)',
    iconColor: '#ff6b35',
  },
  {
    value: siteConfig.stats.successRate,
    suffix: '%',
    label: 'Taux de réussite',
    description: "aux examens officiels",
    icon: Award,
    glowColor: 'rgba(59, 130, 246, 0.4)',
    iconColor: '#3b82f6',
  },
  {
    value: siteConfig.stats.yearsExperience,
    suffix: ' ans',
    label: "D'expertise",
    description: "cumulée de nos formateurs",
    icon: Clock,
    glowColor: 'rgba(139, 92, 246, 0.4)',
    iconColor: '#8b5cf6',
  },
]

const StatCard = ({ value, suffix, label, description, icon: Icon, glowColor, iconColor, index }) => {
  const { count, ref } = useCounter(value)
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div 
        className="relative bg-white dark:bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 shadow-lg dark:shadow-none transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col"
        style={{ '--glow-color': glowColor }}
      >
        {/* Icon */}
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: `${iconColor}20` }}
        >
          <Icon className="w-7 h-7" style={{ color: iconColor }} />
        </div>
        
        {/* Number */}
        <div className="mb-3">
          <span className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            {count.toLocaleString('fr-FR')}
          </span>
          <span className="text-2xl md:text-3xl font-bold" style={{ color: iconColor }}>
            {suffix}
          </span>
        </div>
        
        {/* Label - hauteur fixe pour harmoniser */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-1">{label}</h3>
        <p className="text-sm text-gray-500 dark:text-white/50 mt-auto">{description}</p>
        
        {/* Decorative gradient line */}
        <div 
          className="absolute bottom-0 left-6 right-6 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: iconColor }}
        />
        
        {/* Glow on hover */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{ boxShadow: `0 0 60px ${glowColor}` }}
        />
      </div>
    </motion.div>
  )
}

const StatsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="glow-blob glow-blob-purple w-[400px] h-[400px] top-0 left-1/4 opacity-30" />
      <div className="glow-blob glow-blob-orange w-[300px] h-[300px] bottom-0 right-1/4 opacity-30" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
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
            className="inline-block px-4 py-1.5 bg-primary-500/10 border border-primary-500/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4"
          >
            Nos résultats
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {siteConfig.stats.yearsExperience} ans d'expertise dans{' '}
            <span className="gradient-text">l'apprentissage à distance</span>
          </h2>
        </motion.div>

        {/* Stats Grid - items-stretch pour hauteur égale */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 items-stretch">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 pt-12 border-t border-gray-200 dark:border-white/10"
        >
          <div className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-md">
            <QualiopiBadge className="!h-14" />
            <div>
              <p className="font-bold text-gray-900">Qualiopi</p>
              <p className="text-sm text-gray-500">Certification qualité</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-md">
            <RNCPBadge className="!h-12" />
            <div>
              <p className="font-bold text-gray-900">RNCP</p>
              <p className="text-sm text-gray-500">Titres reconnus</p>
            </div>
          </div>
        
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
