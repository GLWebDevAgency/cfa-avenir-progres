import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle, Loader2, Sparkles } from 'lucide-react'
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
    const finalData = { ...formData, ...data }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          subject: `Nouvelle demande - ${finalData.firstName} ${finalData.lastName}`,
          from_name: 'Avenir&Progres',
          ...finalData,
        }),
      })
      if (response.ok) setIsSuccess(true)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success State
  if (isSuccess) {
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
          Merci pour votre demande ! 🎉
        </h3>
        <p className="text-gray-600 dark:text-white/60 mb-8 leading-relaxed">
          Un conseiller vous contactera dans les plus brefs délais pour discuter de votre projet de formation.
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
    <div className={className}>
      {/* Progress Steps - Centered */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((s, index) => (
          <div key={s} className="flex items-center">
            <div className="relative">
              <motion.div
                initial={false}
                animate={{
                  scale: s === step ? 1.1 : 1,
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  s <= step 
                    ? 'bg-gradient-to-r from-primary-500 to-primary-400 text-white shadow-lg shadow-primary-500/30' 
                    : 'bg-gray-100 dark:bg-white/10 text-gray-400 dark:text-white/40 border border-gray-200 dark:border-white/10'
                }`}
              >
                {s < step ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  s
                )}
              </motion.div>
              {s === step && (
                <motion.div
                  layoutId="stepIndicator"
                  className="absolute inset-0 rounded-full border-2 border-primary-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </div>
            {s < 3 && (
              <div className="w-16 sm:w-24 h-1 mx-2 rounded-full overflow-hidden bg-gray-200 dark:bg-white/10">
                <motion.div
                  initial={false}
                  animate={{ width: s < step ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-400"
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

      {/* Trust indicators - Premium */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 flex items-center justify-center gap-6 text-xs text-gray-500 dark:text-white/40">
        <span className="flex items-center gap-1.5">
          <span className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">🔒</span>
          <span>Données sécurisées</span>
        </span>
        <span className="text-gray-300 dark:text-white/20">•</span>
        <span className="flex items-center gap-1.5">
          <span className="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center">⚡</span>
          <span>Réponse rapide</span>
        </span>
      </div>
    </div>
  )
}

export default ContactFormMultiStep
