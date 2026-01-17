import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

import { SEO } from '@/components/common'

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="Page non trouvée"
        description="La page que vous recherchez n'existe pas ou a été déplacée."
      />

      <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-xl mx-auto"
          >
            <div className="text-9xl font-bold text-primary-600/10 dark:text-primary-400/10 mb-4">
              404
            </div>
            <h1 className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              Page non trouvée
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Oups ! La page que vous recherchez n'existe pas ou a été déplacée. 
              Pas de panique, retrouvez votre chemin ci-dessous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn btn-primary">
                <Home className="w-5 h-5" />
                Retour à l'accueil
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn btn-outline"
              >
                <ArrowLeft className="w-5 h-5" />
                Page précédente
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
