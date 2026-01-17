import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { Search, Filter } from 'lucide-react'
import * as Icons from 'lucide-react'

import { SEO, SectionTitle, FormationCard } from '@/components/common'
import { CTASection } from '@/components/sections'
import { sectors, formations, getFormationsBySector } from '@/data/formations'
import { QualiopiBadge, RNCPBadge } from '@/assets/logos'

const FormationsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  
  const activeSector = searchParams.get('sector') || 'all'

  const filteredFormations = useMemo(() => {
    let result = formations

    // Filter by sector
    if (activeSector !== 'all') {
      result = result.filter(f => f.sector === activeSector)
    }

    // Filter by type
    if (selectedType !== 'all') {
      result = result.filter(f => f.type === selectedType)
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        f =>
          f.name.toLowerCase().includes(term) ||
          f.description.toLowerCase().includes(term)
      )
    }

    return result
  }, [activeSector, selectedType, searchTerm])

  const types = [...new Set(formations.map(f => f.type))]

  return (
    <>
      <SEO
        title="Nos Formations en Alternance"
        description="Découvrez nos titres professionnels RNCP en alternance : TP Conseiller Commercial et TP Graphiste. Formation 100% financée et rémunérée."
        keywords="formations alternance, titre professionnel, RNCP, graphiste, conseiller commercial, reconversion"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-500 text-white py-20 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero/formation-etudiant-2048x799.webp" 
            alt="" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-primary-500/90" />
        </div>
        
        {/* Floating design elements */}
        <div className="absolute top-10 right-10 hidden lg:block">
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl"
          >
            <img 
              src="/images/formations/Dom-Graphisme-Design_4.jpg" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-10 hidden lg:block">
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl"
          >
            <img 
              src="/images/formations/Dom-Graphisme-Design_11.jpg" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Suivre une formation à distance pour{' '}
              <span className="text-primary-200">changer de métier</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Et si cette année était synonyme de reconversion professionnelle ? 
              Découvrez toutes les formations possibles avec Avenir&Progres !
            </p>
            
            {/* Certifications */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-xl px-4 py-3 shadow-md">
                <QualiopiBadge className="!h-12" />
              </div>
              <div className="bg-white rounded-xl px-4 py-3 shadow-md">
                <RNCPBadge className="!h-10" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            {/* Sector Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full lg:w-auto">
              <button
                onClick={() => setSearchParams({})}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                  activeSector === 'all'
                    ? 'bg-primary-600 dark:bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                Toutes
              </button>
              {sectors.map((sector) => {
                const IconComponent = Icons[sector.icon] || Icons.BookOpen
                return (
                  <button
                    key={sector.id}
                    onClick={() => setSearchParams({ sector: sector.id })}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                      activeSector === sector.id
                        ? 'text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                    style={{
                      backgroundColor: activeSector === sector.id ? sector.color : undefined,
                    }}
                  >
                    <IconComponent className="w-4 h-4" />
                    {sector.name}
                  </button>
                )
              })}
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="all">Tous les types</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {filteredFormations.length > 0 ? (
            <>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {filteredFormations.length} formation{filteredFormations.length > 1 ? 's' : ''} trouvée{filteredFormations.length > 1 ? 's' : ''}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFormations.map((formation, index) => (
                  <FormationCard
                    key={formation.id}
                    formation={formation}
                    index={index}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Aucune formation trouvée
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Advantages Table */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Les avantages à rejoindre"
            highlight="une formation à distance"
          />

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="p-4 text-left font-semibold text-gray-900 dark:text-white">
                    Critères
                  </th>
                  <th className="p-4 text-center font-semibold text-gray-600 dark:text-gray-400">
                    En présentiel
                  </th>
                  <th className="p-4 text-center font-semibold text-primary-500 dark:text-primary-400">
                    Avec Avenir&Progres
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Professeurs experts', '✓', '✓'],
                  ['Conventions de stage', '✓', '✓'],
                  ['Alternance financée', '✓', '✓'],
                  ['Horaires flexibles', '✗', '✓'],
                  ['Lieu flexible', '✗', '✓'],
                  ['Bonus inclus', '✗', '✓'],
                  ['Inscription toute l\'année', '✗', '✓'],
                  ['Community Learning', '✗', '✓'],
                  ['Accompagnement financement', '✗', '✓'],
                ].map(([criteria, presentiel, distance], i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="p-4 font-medium text-gray-700 dark:text-gray-300">
                      {criteria}
                    </td>
                    <td className="p-4 text-center">
                      <span className={presentiel === '✓' ? 'text-green-500' : 'text-red-400'}>
                        {presentiel}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={distance === '✓' ? 'text-green-500 text-xl' : 'text-red-400'}>
                        {distance}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default FormationsPage
