import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Clock,
  GraduationCap,
  Award,
  Users,
  CheckCircle,
  Briefcase,
  BookOpen,
  Target,
  FileText,
  Calendar,
  Building2,
  ExternalLink,
  ChevronRight,
  Star,
  Shield,
  Euro,
  MapPin,
} from 'lucide-react'

import { SEO } from '@/components/common'
import { ContactFormMultiStep } from '@/components/forms'
import { CTASection } from '@/components/sections'
import { getFormationById, getSectorById } from '@/data/formations'
import { QualiopiBadge, RNCPBadge } from '@/assets/logos'

const FormationDetailPage = () => {
  const { formationId } = useParams()
  const formation = getFormationById(formationId)
  const sector = formation ? getSectorById(formation.sector) : null

  // Redirect to 404 if formation not found
  if (!formation) {
    return <Navigate to="/404" replace />
  }

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <>
      <SEO
        title={`${formation.name} - ${formation.rncp}`}
        description={formation.description}
        keywords={`${formation.name}, ${formation.rncp}, alternance, titre professionnel, ${sector?.name}`}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-500 text-white py-16 lg:py-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={formation.image}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/95 to-primary-500/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-white/70 mb-8"
          >
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/formations" className="hover:text-white transition-colors">Formations</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{formation.name}</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/30 backdrop-blur-sm rounded-full text-sm font-semibold text-amber-100 border border-amber-400/30">
                  <Award className="w-4 h-4 text-amber-300" />
                  {formation.rncp}
                </span>
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white border border-white/20"
                  style={{ backgroundColor: sector?.color + '60' }}
                >
                  {sector?.name}
                </span>
                {formation.eligible_alternance && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/40 backdrop-blur-sm rounded-full text-sm font-semibold text-emerald-100 border border-emerald-400/30">
                    <CheckCircle className="w-4 h-4 text-emerald-300" />
                    Alternance
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-white">
                {formation.name}
              </h1>

              {/* Type and Level */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-white">
                  <GraduationCap className="w-5 h-5 text-sky-300" />
                  <span className="font-medium">{formation.type}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Target className="w-5 h-5 text-amber-300" />
                  <span className="font-medium">{formation.niveau}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-5 h-5 text-emerald-300" />
                  <span className="font-medium">{formation.duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                {formation.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#inscription"
                  className="btn btn-lg bg-white text-primary-600 hover:bg-gray-100 font-semibold shadow-xl"
                >
                  Demander une brochure
                </a>
                <a
                  href={`https://www.francecompetences.fr/recherche/rncp/${formation.rncp.replace('RNCP', '')}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg bg-white/25 hover:bg-white/35 backdrop-blur-sm border border-white/40 font-semibold text-white"
                >
                  Fiche RNCP officielle
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>

            {/* Right - Quick Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/30">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                  <FileText className="w-5 h-5 text-white" />
                  Informations clés
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white/15 rounded-xl border border-white/10">
                    <Award className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-200">Code RNCP</p>
                      <p className="text-white font-medium">{formation.rncp}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/15 rounded-xl border border-white/10">
                    <Building2 className="w-6 h-6 text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sky-200">Certificateur</p>
                      <p className="text-white font-medium">{formation.certificateur}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/15 rounded-xl border border-white/10">
                    <Calendar className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-emerald-200">Validité</p>
                      <p className="text-white font-medium">Jusqu'au {formation.dateEcheance}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/15 rounded-xl border border-white/10">
                    <Euro className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-orange-200">Financement</p>
                      <p className="text-white font-medium">100% pris en charge en alternance</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content - 2/3 */}
            <div className="lg:col-span-2 space-y-12">
              {/* Objectifs */}
              <motion.div
                {...fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary-500" />
                  Objectifs de la formation
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {formation.objectifs}
                </p>
              </motion.div>

              {/* Compétences acquises */}
              <motion.div
                {...fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Star className="w-6 h-6 text-amber-500" />
                  Compétences acquises
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {formation.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Blocs de compétences */}
              <motion.div
                {...fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                  Blocs de compétences (CCP)
                </h2>
                <div className="space-y-6">
                  {formation.blocs.map((bloc, index) => (
                    <motion.div
                      key={bloc.code}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className="border border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full mb-2">
                              {bloc.code}
                            </span>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                              {bloc.titre}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          {bloc.competences.map((comp, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 dark:text-gray-300">{comp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Modalités d'évaluation */}
              <motion.div
                {...fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-purple-500" />
                  Modalités d'évaluation
                </h2>
                <ul className="space-y-4">
                  {formation.modalitesEvaluation.map((modalite, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                    >
                      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-200">{modalite}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Débouchés / Métiers */}
              <motion.div
                {...fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-emerald-500" />
                  Métiers accessibles
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {formation.career.map((job, index) => (
                    <motion.div
                      key={job}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800"
                    >
                      <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-800 dark:text-gray-200 font-medium">{job}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Codes ROME */}
                {formation.rome && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Codes ROME associés :</p>
                    <div className="flex flex-wrap gap-2">
                      {formation.rome.map((code) => (
                        <span
                          key={code}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm font-mono"
                        >
                          {code}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Secteurs d'activité */}
              <motion.div
                {...fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-blue-500" />
                  Secteurs d'activité
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {formation.secteurs.map((secteur, index) => (
                    <motion.div
                      key={secteur}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl"
                    >
                      <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200">{secteur}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Outils (si disponible - pour graphiste) */}
              {formation.outils && formation.outils.length > 0 && (
                <motion.div
                  {...fadeInUp}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-indigo-500" />
                    Outils maîtrisés
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {formation.outils.map((outil) => (
                      <span
                        key={outil}
                        className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-xl font-medium border border-indigo-100 dark:border-indigo-800"
                      >
                        {outil}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Prérequis */}
              <motion.div
                {...fadeInUp}
                className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-amber-100 dark:border-amber-800"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-amber-600" />
                  Prérequis
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {formation.prerequis}
                </p>
              </motion.div>
            </div>

            {/* Right Sidebar - 1/3 */}
            <div className="lg:col-span-1 space-y-8">
              {/* Sticky Form */}
              <div className="lg:sticky lg:top-24" id="inscription">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Demandez votre brochure
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Un conseiller vous rappelle sous 24h
                    </p>
                  </div>
                  <ContactFormMultiStep />
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    Certifications
                  </h4>
                  <div className="flex items-center justify-center gap-4">
                    <QualiopiBadge className="!h-12" />
                    <RNCPBadge className="!h-10" />
                  </div>
                </motion.div>

                {/* Back to formations */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6"
                >
                  <Link
                    to="/formations"
                    className="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:underline"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voir toutes les formations
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery (if available) */}
      {formation.gallery && formation.gallery.length > 0 && (
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Découvrez la formation en images
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {formation.gallery.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-video rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={img}
                    alt={`${formation.name} - Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />
    </>
  )
}

export default FormationDetailPage
