import { motion } from 'framer-motion'
import { Star, Quote, Play } from 'lucide-react'

const TestimonialCard = ({ testimonial, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      {/* Quote Icon */}
      <div className="w-12 h-12 bg-primary-500/10 dark:bg-primary-400/10 rounded-full flex items-center justify-center mb-4">
        <Quote className="w-6 h-6 text-primary-500 dark:text-primary-400" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.formation}
          </p>
          <p className="text-sm text-primary-500 dark:text-primary-400">
            Avant : {testimonial.previousJob} → Maintenant : {testimonial.currentJob}
          </p>
        </div>
      </div>

      {/* Video Link */}
      {testimonial.videoUrl && (
        <a
          href={testimonial.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 transition-colors"
        >
          <Play className="w-5 h-5" />
          <span className="font-medium">Voir le témoignage vidéo</span>
        </a>
      )}
    </motion.div>
  )
}

export default TestimonialCard
