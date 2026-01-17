import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { sectors } from '@/data/formations'

const SectorCard = ({ sector, index }) => {
  const IconComponent = Icons[sector.icon] || Icons.BookOpen

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      {/* Premium animated border gradient */}
      <div 
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"
        style={{ background: `linear-gradient(135deg, ${sector.color}40, transparent, ${sector.color}40)` }}
      />
      
      <Link
        to={`/formations?sector=${sector.id}`}
        className="flex flex-col h-full relative bg-white dark:bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10 hover:border-transparent shadow-sm dark:shadow-none transition-all duration-500 hover:-translate-y-3 overflow-hidden"
      >
        {/* Image de fond avec overlay */}
        {sector.image && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={sector.image} 
              alt={sector.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            />
            {/* Color overlay on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
              style={{ backgroundColor: sector.color }}
            />
            {/* Icon floating */}
            <div
              className="absolute bottom-4 left-4 w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-500 group-hover:scale-110"
              style={{ backgroundColor: `${sector.color}cc` }}
            >
              <IconComponent className="w-7 h-7 text-white" />
            </div>
          </div>
        )}
        
        {/* Glow effect on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{ boxShadow: `0 20px 60px ${sector.color}25, 0 0 40px ${sector.color}15` }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-6">
          {/* Icon - only if no image */}
          {!sector.image && (
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              style={{ backgroundColor: `${sector.color}15` }}
            >
              <IconComponent
                className="w-8 h-8 transition-colors duration-300"
                style={{ color: sector.color }}
              />
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
            {sector.name}
          </h3>

          {/* Description - fixed height */}
          <p className="text-gray-600 dark:text-white/50 text-sm mb-5 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-white/70 line-clamp-2 min-h-[2.5rem]">
            {sector.description}
          </p>

          {/* Link - pushed to bottom */}
          <div className="flex items-center gap-2 font-semibold transition-colors duration-300 mt-auto" style={{ color: sector.color }}>
            <span>Découvrir</span>
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
              style={{ backgroundColor: `${sector.color}20` }}
            >
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </div>
        
        {/* Corner gradient decoration */}
        <div 
          className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-150 transition-all duration-500"
          style={{ background: `radial-gradient(circle, ${sector.color} 0%, transparent 70%)` }}
        />
      </Link>
    </motion.div>
  )
}

const FormationsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="glow-blob glow-blob-orange w-[400px] h-[400px] top-20 right-0 opacity-10 dark:opacity-20" />
      <div className="glow-blob glow-blob-purple w-[400px] h-[400px] bottom-20 left-0 opacity-10 dark:opacity-20" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-20" />
      
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
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/10 border border-primary-500/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Nos formations
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            Découvrez nos formations{' '}
            <span className="text-gradient">100% en ligne</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-white/50 leading-relaxed">
            Des formations diplômantes et certifiantes pour booster votre carrière dans les secteurs qui recrutent
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sectors.map((sector, index) => (
            <SectorCard key={sector.id} sector={sector} index={index} />
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
            to="/formations"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-full shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            <span>Voir toutes nos formations</span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FormationsSection
