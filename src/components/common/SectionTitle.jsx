import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SectionTitle = ({
  title,
  subtitle,
  highlight,
  align = 'center',
  className = '',
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-12 ${alignClasses[align]} ${className}`}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary-600 dark:text-primary-400 bg-orange-50 dark:bg-primary-900/30 rounded-full">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {title}
        {highlight && (
          <span className="text-primary-500 dark:text-primary-400"> {highlight}</span>
        )}
      </h2>
    </motion.div>
  )
}

export default SectionTitle
