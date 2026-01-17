import { motion } from 'framer-motion'
import { Phone, Mail, Building2, User, GraduationCap, Clock, MapPin } from 'lucide-react'

import { SEO, SectionTitle, FAQ } from '@/components/common'
import { ContactFormMultiStep } from '@/components/forms'
import { siteConfig } from '@/data/siteConfig'

const contactOptions = [
  {
    icon: GraduationCap,
    title: 'En projet de formation',
    description: 'Je suis intéressé(e) par une formation',
    action: 'Demande de contact',
    color: '#f59e0b',
  },
  {
    icon: User,
    title: 'Élèves Avenir&Progres',
    description: 'Vous avez un problème avec votre compte ou formation ?',
    action: 'Contactez-nous',
    phone: siteConfig.phone,
    color: '#4f46e5',
  },
  {
    icon: Building2,
    title: 'Entreprise',
    description: 'Offre d\'emploi, stage, alternance ou partenariat',
    action: 'Nous contacter',
    email: 'contact@aveniretprogres.fr',
    color: '#10b981',
  },
]

const faqItems = [
  {
    question: 'Combien coûte une formation en ligne ?',
    answer: 'En alternance, la formation est 100% financée par l\'entreprise via son OPCO. Pour d\'autres modes de financement, contactez-nous pour un devis personnalisé.',
  },
  {
    question: 'Comment fonctionne l\'alternance ?',
    answer: 'L\'alternance vous permet d\'être formé tout en travaillant en entreprise. Vous êtes rémunéré et la formation est entièrement prise en charge.',
  },
  {
    question: 'Une formation à distance délivre-t-elle un diplôme reconnu ?',
    answer: 'Oui, nos formations préparent à des titres professionnels RNCP reconnus par l\'État et les entreprises. Ce sont des certifications de niveau Bac à Bac+2.',
  },
  {
    question: 'Est-ce que ce sont de vrais profs qui dispensent les cours ?',
    answer: 'Absolument ! Nos professeurs sont des professionnels en activité ou d\'anciens praticiens experts de leur domaine. Ils corrigent vos travaux et sont disponibles pour répondre à vos questions.',
  },
  {
    question: 'De quel matériel vais-je avoir besoin ?',
    answer: 'Un ordinateur, tablette ou smartphone avec connexion internet suffit pour suivre les cours. Pour la pratique, nous vous indiquons le matériel nécessaire en fonction de votre formation.',
  },
]

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contactez-nous"
        description="Contactez Avenir&Progres pour toute question sur nos formations. Demande de documentation, renseignements, assistance élèves. Nous sommes là pour vous accompagner."
        keywords="contact formation, renseignement formation, documentation gratuite, assistance élèves, aveniretprogres"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Contactez<span className="text-secondary-400">-nous</span>
            </h1>
            <p className="text-xl text-white/80">
              Vous avez besoin de plus d'informations ? 
              Nos conseillers sont là pour répondre à toutes vos questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 text-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${option.color}15` }}
                >
                  <option.icon
                    className="w-8 h-8"
                    style={{ color: option.color }}
                  />
                </div>
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {option.description}
                </p>
                {option.phone ? (
                  <a
                    href={`tel:${option.phone.replace(/\s/g, '')}`}
                    className="btn btn-primary w-full"
                  >
                    <Phone className="w-5 h-5" />
                    {option.phone}
                  </a>
                ) : option.email ? (
                  <a
                    href={`mailto:${option.email}`}
                    className="btn btn-primary w-full"
                  >
                    <Mail className="w-5 h-5" />
                    Envoyer un email
                  </a>
                ) : (
                  <a href="#form" className="btn btn-primary w-full">
                    {option.action}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="section bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-6">
                Demande de{' '}
                <span className="text-secondary-600 dark:text-secondary-400">documentation</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Remplissez ce formulaire et un conseiller vous rappellera rapidement 
                pour discuter de votre projet de formation.
              </p>
              <ContactFormMultiStep />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg dark:border dark:border-gray-700">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-6">
                  Nos coordonnées
                </h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-secondary-500/10 transition-colors"
                  >
                    <div className="w-12 h-12 bg-secondary-500/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Téléphone</p>
                      <p className="font-semibold text-primary-600 dark:text-primary-400">{siteConfig.phone}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-secondary-500/10 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="font-semibold text-primary-600 dark:text-primary-400">{siteConfig.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <div className="w-12 h-12 bg-accent-500/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Adresse</p>
                      <p className="font-semibold text-primary-600 dark:text-primary-400">{siteConfig.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg dark:border dark:border-gray-700">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  Horaires d'ouverture
                </h3>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Clock className="w-5 h-5" />
                  <span>Lundi - Vendredi : 9h00 - 18h00</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Les questions"
            highlight="les plus fréquentes"
          />
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
