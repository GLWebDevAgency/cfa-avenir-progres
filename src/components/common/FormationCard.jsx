import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Award, Users } from 'lucide-react'
import { getSectorById } from '@/data/formations'

const FormationCard = ({ formation, index = 0 }) => {
  const sector = getSectorById(formation.sector)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Link
        to={`/formations/${formation.id}`}
        className="flex flex-col h-full bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          {/* Real image or gradient fallback */}
          {formation.image ? (
            <>
              <img 
                src={formation.image} 
                alt={formation.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay gradient */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              />
              {/* Color overlay on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundColor: sector?.color }}
              />
            </>
          ) : (
            <>
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${sector?.color}30, ${sector?.color}60)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl opacity-40">🎓</span>
              </div>
            </>
          )}
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {formation.rncp && (
              <span className="px-2.5 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-sm backdrop-blur-sm">
                {formation.rncp}
              </span>
            )}
            {formation.eligible_alternance && (
              <span className="px-2.5 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full shadow-sm backdrop-blur-sm">
                Alternance
              </span>
            )}
          </div>
          
          {/* Type Badge */}
          <div className="absolute bottom-3 right-3">
            <span
              className="px-3 py-1 text-white text-xs font-semibold rounded-full shadow-sm backdrop-blur-sm"
              style={{ backgroundColor: `${sector?.color}dd` }}
            >
              {formation.type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: sector?.color }}
            />
            <span className="text-sm text-gray-500 dark:text-gray-400 truncate">
              {sector?.name}
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {formation.name}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
            {formation.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{formation.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{formation.type}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm group-hover:underline">
              En savoir plus
            </span>
            <ArrowRight className="w-4 h-4 text-primary-500 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default FormationCard
