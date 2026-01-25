import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle, Loader2, Sparkles, X, AlertCircle } from 'lucide-react'
import { sectors } from '@/data/formations'
import CustomSelect from '@/components/ui/CustomSelect'

// Validation schemas for each step
const step1Schema = z.object({
  sector: z.string().min(1, 'Veuillez sélectionner un secteur'),
  diploma: z.string().min(1, 'Veuillez sélectionner votre diplôme'),
})

const step2Schema = z.object({
  civility: z.string().min(1, 'Veuillez sélectionner votre civilité'),
  ageRange: z.string().min(1, 'Veuillez sélectionner votre tranche d\'âge'),
  firstName: z.string().min(2, 'Prénom requis (min. 2 caractères)'),
  lastName: z.string().min(2, 'Nom requis (min. 2 caractères)'),
})

const step3Schema = z.object({
  email: z.string().email('Email invalide'),
  phone: z.string().regex(/^(\+33|0)[1-9](\d{2}){4}$/, 'Numéro de téléphone invalide'),
  postalCode: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'Vous devez accepter d\'être contacté'),
})

const diplomaOptions = [
  'Sans diplôme',
  'Brevet des collèges',
  'CAP / BEP',
  'Baccalauréat',
  'Bac +2 (BTS, DUT...)',
  'Bac +3 et plus',
]

const ageRanges = [
  '18-25 ans',
  '26-35 ans',
  '36-45 ans',
  '46-55 ans',
  '55+ ans',
]

const ContactFormMultiStep = ({ className = '' }) => {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [formData, setFormData] = useState({})

  const schemas = { 1: step1Schema, 2: step2Schema, 3: step3Schema }

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
    control,
  } = useForm({
    resolver: zodResolver(schemas[step]),
    mode: 'onChange',
  })

  const nextStep = async () => {
    const isValid = await trigger()
    if (isValid) {
      setFormData({ ...formData, ...getValues() })
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitError(null)
    const finalData = { ...formData, ...data }

    try {
      // Utiliser Web3Forms pour l'envoi des emails
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
      
      if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        // Mode simulation si pas de clé API configurée
        console.log('Mode simulation - Données du formulaire:', finalData)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSuccess(true)
        setShowSuccessModal(true)
        return
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Nouvelle demande de formation - ${finalData.firstName} ${finalData.lastName}`,
          from_name: 'Avenir&Progres - Site Web',
          to_name: 'Équipe Avenir&Progres',
          // Informations formatées
          sector: finalData.sector,
          diploma: finalData.diploma,
          civility: finalData.civility,
          age_range: finalData.ageRange,
          first_name: finalData.firstName,
          last_name: finalData.lastName,
          email: finalData.email,
          phone: finalData.phone,
          postal_code: finalData.postalCode || 'Non renseigné',
          consent: finalData.consent ? 'Oui' : 'Non',
        }),
      })
      
      const result = await response.json()
      
      if (response.ok && result.success) {
        setIsSuccess(true)
        setShowSuccessModal(true)
      } else {
        throw new Error(result.message || 'Une erreur est survenue lors de l\'envoi')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Fermer la modal et réinitialiser le formulaire
  const handleCloseModal = () => {
    setShowSuccessModal(false)
    setIsSuccess(false)
    setStep(1)
    setFormData({})
  }

  // Success Modal Popup
  const SuccessModal = () => (
    <AnimatePresence>
      {showSuccessModal && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-[101] p-4"
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-200 dark:border-white/10 relative">
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4 text-gray-500 dark:text-white/60" />
              </button>
              
              {/* Success icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30"
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                Demande envoyée !
              </h3>
              <p className="text-gray-600 dark:text-white/60 mb-6 leading-relaxed text-center">
                Votre demande a bien été prise en compte. Un conseiller vous contactera dans les plus brefs délais pour discuter de votre projet de formation.
              </p>
              
              {/* CTA */}
              <button
                onClick={handleCloseModal}
                className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-full shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )

  // Success State (inline version - fallback)
  if (isSuccess && !showSuccessModal) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center ${className}`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30"
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Merci pour votre demande !
        </h3>
        <p className="text-gray-600 dark:text-white/60 mb-8 leading-relaxed">
          Votre demande a bien été prise en compte. Un conseiller vous contactera dans les plus brefs délais.
        </p>
        <button
          onClick={() => { setIsSuccess(false); setStep(1); setFormData({}) }}
          className="text-primary-600 dark:text-primary-400 font-semibold hover:underline underline-offset-4"
        >
          Faire une nouvelle demande
        </button>
      </motion.div>
    )
  }

  return (
    <>
      {/* Success Modal */}
      <SuccessModal />
      
      <div className={className}>
      {/* Progress Steps - Centered */}
      <div className="flex items-center justify-center mb-6 px-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <motion.div
              initial={false}
              animate={{
                scale: s === step ? 1.05 : 1,
              }}
              className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xs transition-all flex-shrink-0 ${
                s <= step 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
              }`}
            >
              {s < step ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                s
              )}
            </motion.div>
            {s < 3 && (
              <div className="w-8 sm:w-12 h-0.5 mx-1 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <motion.div
                  initial={false}
                  animate={{ width: s < step ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-primary-500"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {/* Step 1 */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <p className="text-sm text-gray-500 dark:text-white/50 text-center font-medium">
                Étape 1 : Choisissez votre formation
              </p>

              <div className="form-group">
                <label className="form-label form-label-required text-gray-700 dark:text-white/80">Quel secteur vous intéresse ?</label>
                <Controller
                  name="sector"
                  control={control}
                  render={({ field }) => (
                    <CustomSelect
                      options={sectors.map(s => ({ value: s.id, label: s.name }))}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Sélectionnez un secteur"
                      error={errors.sector}
                    />
                  )}
                />
                {errors.sector && <p className="form-error text-red-400">{errors.sector.message}</p>}
              </div>

              <div className="form-group">
                <label className="form-label form-label-required text-gray-700 dark:text-white/80">Votre dernier diplôme obtenu</label>
                <Controller
                  name="diploma"
                  control={control}
                  render={({ field }) => (
                    <CustomSelect
                      options={diplomaOptions}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Sélectionnez un diplôme"
                      error={errors.diploma}
                    />
                  )}
                />
                {errors.diploma && <p className="form-error text-red-400">{errors.diploma.message}</p>}
              </div>

              <button type="button" onClick={nextStep} className="w-full py-3.5 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-full shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden group">
                <span className="relative z-10">Suivant</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </motion.div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <p className="text-sm text-gray-500 dark:text-white/50 text-center font-medium">
                Étape 2 : Qui êtes-vous ?
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label form-label-required text-gray-700 dark:text-white/80">Civilité</label>
                  <Controller
                    name="civility"
                    control={control}
                    render={({ field }) => (
                      <CustomSelect
                        options={['Madame', 'Monsieur']}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Civilité"
                        error={errors.civility}
                      />
                    )}
                  />
                  {errors.civility && <p className="form-error text-red-400">{errors.civility.message}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label form-label-required text-gray-700 dark:text-white/80">Vous avez entre</label>
                  <Controller
                    name="ageRange"
                    control={control}
                    render={({ field }) => (
                      <CustomSelect
                        options={ageRanges}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Âge"
                        error={errors.ageRange}
                      />
                    )}
                  />
                  {errors.ageRange && <p className="form-error text-red-400">{errors.ageRange.message}</p>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label form-label-required text-gray-700 dark:text-white/80">Prénom</label>
                <input {...register('firstName')} placeholder="Votre prénom" className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all" />
                {errors.firstName && <p className="form-error text-red-400">{errors.firstName.message}</p>}
              </div>

              <div className="form-group">
                <label className="form-label form-label-required text-gray-700 dark:text-white/80">Nom</label>
                <input {...register('lastName')} placeholder="Votre nom" className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all" />
                {errors.lastName && <p className="form-error text-red-400">{errors.lastName.message}</p>}
              </div>

              <div className="flex gap-3 mt-4">
                <button type="button" onClick={prevStep} className="flex-1 py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white font-medium rounded-full hover:bg-gray-200 dark:hover:bg-white/10 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[0.98] active:scale-95">
                  <ArrowLeft className="w-5 h-5" /> Retour
                </button>
                <button type="button" onClick={nextStep} className="flex-1 py-3 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-full shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5 relative overflow-hidden group">
                  <span className="relative z-10">Suivant</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <p className="text-sm text-gray-500 dark:text-white/50 text-center font-medium">
                Étape 3 : Vos coordonnées
              </p>

              <div className="form-group">
                <label className="form-label form-label-required text-gray-700 dark:text-white/80">Email</label>
                <input {...register('email')} type="email" placeholder="votre@email.fr" className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all" />
                {errors.email && <p className="form-error text-red-400">{errors.email.message}</p>}
              </div>

              <div className="form-group">
                <label className="form-label form-label-required text-gray-700 dark:text-white/80">Téléphone</label>
                <input {...register('phone')} type="tel" placeholder="06 12 34 56 78" className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all" />
                {errors.phone && <p className="form-error text-red-400">{errors.phone.message}</p>}
              </div>

              <div className="form-group">
                <label className="form-label text-gray-700 dark:text-white/80">Code postal (optionnel)</label>
                <input {...register('postalCode')} placeholder="75001" className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all" />
              </div>

              <div className="flex items-start gap-3 mt-4">
                <input {...register('consent')} type="checkbox" id="consent" className="mt-1 w-4 h-4 rounded border-gray-300 dark:border-white/20 bg-gray-50 dark:bg-white/5 text-primary-500 focus:ring-primary-500/20" />
                <label htmlFor="consent" className="text-sm text-gray-600 dark:text-white/60 leading-relaxed cursor-pointer">
                  J'accepte d'être contacté(e) par Avenir&Progres pour étudier ma demande de formation.
                </label>
              </div>
              {errors.consent && <p className="form-error text-red-400">{errors.consent.message}</p>}

              {/* Error message */}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-sm"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{submitError}</span>
                </motion.div>
              )}

              <div className="flex gap-3 mt-4">
                <button type="button" onClick={prevStep} className="flex-1 py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white font-medium rounded-full hover:bg-gray-200 dark:hover:bg-white/10 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[0.98] active:scale-95">
                  <ArrowLeft className="w-5 h-5" /> Retour
                </button>
                <button type="submit" disabled={isSubmitting} className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 relative overflow-hidden group">
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Envoi...</>
                  ) : (
                    <>
                      <span className="relative z-10">Envoyer</span>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
    </>
  )
}

export default ContactFormMultiStep
