import { motion } from 'framer-motion'
import { ContactFormMultiStep } from '@/components/forms'
import { Phone, Clock, Award, Users, Sparkles, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { CareerGrowth, GraduationCap, OnlineLearning } from '@/assets/illustrations'

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900" />
      
      {/* Animated glow blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/10 dark:bg-primary-500/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-500/10 dark:bg-secondary-500/15 rounded-full blur-[130px]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating decorative illustrations - Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-10 left-[5%] hidden lg:block opacity-[0.06] dark:opacity-[0.10]"
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <GraduationCap size={100} primaryColor="#ff6b35" secondaryColor="#10b981" />
          </motion.div>
        </motion.div>

        {/* Top right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-20 right-[8%] hidden lg:block opacity-[0.05] dark:opacity-[0.08]"
        >
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <CareerGrowth size={90} primaryColor="#10b981" secondaryColor="#ff6b35" />
          </motion.div>
        </motion.div>

        {/* Bottom left */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-16 left-[10%] hidden xl:block opacity-[0.05] dark:opacity-[0.08]"
        >
          <motion.div
            animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <OnlineLearning size={85} primaryColor="#0ea5e9" secondaryColor="#ff6b35" />
          </motion.div>
        </motion.div>

        {/* Bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-24 right-[12%] hidden lg:block opacity-[0.04] dark:opacity-[0.07]"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          >
            <GraduationCap size={75} primaryColor="#0ea5e9" secondaryColor="#10b981" />
          </motion.div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-900 dark:text-white"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Démarrez votre projet
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Un projet de formation ?{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Contactez-nous !
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-white/60 mb-8 leading-relaxed">
              Échangez avec un conseiller et démarrez votre projet de formation. 
              Renseignez vos coordonnées et vous serez rappelé rapidement.
            </p>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="group p-6 bg-white dark:bg-white/[0.03] backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/10 hover:border-primary-500/30 transition-all duration-300 mb-10 hover:shadow-lg dark:hover:shadow-[0_0_40px_rgba(255,107,53,0.15)]"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-white/50 text-sm mb-1">Appelez-nous directement</p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white hover:text-primary-500 transition-colors flex items-center gap-2"
                  >
                    {siteConfig.phone}
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { value: `${siteConfig.stats.insertionRate}%`, label: 'Insertion pro', icon: Users },
                { value: `${siteConfig.stats.successRate}%`, label: 'Taux de réussite', icon: Award },
                { value: '24/7', label: 'Accès plateforme', icon: Clock },
              ].map((stat, index) => (
                <div key={stat.label} className="bg-white dark:bg-white/[0.03] backdrop-blur-sm rounded-2xl p-4 text-center border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
                  <stat.icon className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Premium animated glow effect behind form */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-secondary-500/10 to-accent-500/20 rounded-3xl blur-2xl animate-pulse-glow" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-3xl" />
            
            {/* Form card */}
            <div className="relative bg-white dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-white/10 shadow-2xl dark:shadow-none">
              <ContactFormMultiStep />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
