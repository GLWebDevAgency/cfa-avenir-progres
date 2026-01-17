import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowRight, Heart } from 'lucide-react'
import { siteConfig, footerLinks } from '@/data/siteConfig'
import { AvenirProgresLogo, QualiopiBadge, RNCPBadge } from '@/assets/logos'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      {/* Newsletter Section */}
      <div className="relative bg-gradient-to-r from-primary-500 to-secondary-500 py-12">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Restez informé</h3>
              <p className="text-white/80">Recevez nos actualités et conseils formation</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 md:w-80 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <span className="hidden sm:inline">S'inscrire</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white relative">
        {/* Grid pattern background */}
        <div className="absolute inset-0 grid-pattern opacity-10 dark:opacity-20" />
        
        <div className="container mx-auto px-4 py-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-flex items-center gap-4 mb-6 group">
                <div className="relative flex-shrink-0">
                  {/* Premium glow effect */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 group-hover:border-primary-500/30 transition-all duration-300">
                    <AvenirProgresLogo size="md" className="transition-transform duration-300 group-hover:scale-105" />
                  </div>
                </div>
                {/* Nom de marque */}
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight">
                    <span className="text-gray-900 dark:text-white">Avenir</span>
                    <span className="text-primary-500">&</span>
                    <span className="text-gradient">Progres</span>
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Centre de Formation</span>
                </div>
              </Link>
              
              <p className="text-gray-600 dark:text-white/70 mb-6 leading-relaxed">
                {siteConfig.tagline}. Votre centre de formation professionnelle pour une reconversion réussie.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-gray-600 dark:text-white/70 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-200 dark:bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-secondary-500/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{siteConfig.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-600 dark:text-white/70 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-200 dark:bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-secondary-500/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{siteConfig.email}</span>
                </a>
                <div className="flex items-start gap-3 text-gray-600 dark:text-white/70">
                  <div className="w-10 h-10 bg-gray-200 dark:bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="mt-2 leading-relaxed">{siteConfig.address}</span>
                </div>
              </div>
            </div>

            {/* Formations Column */}
            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                <div className="w-2 h-2 rounded-full bg-secondary-500" />
                Nos Formations
              </h4>
              <ul className="space-y-3">
                {footerLinks.formations.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-white/70 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-secondary-500 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Informations Column */}
            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                <div className="w-2 h-2 rounded-full bg-accent-500" />
                Informations
              </h4>
              <ul className="space-y-3">
                {footerLinks.informations.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-white/70 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-secondary-500 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Certifications */}
            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                Suivez-nous
              </h4>
              <div className="flex gap-3 mb-8">
                {[
                  { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
                  { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
                  { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
                  { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl flex items-center justify-center text-gray-600 dark:text-white hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Certifications */}
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                Certifications
              </h4>
              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <QualiopiBadge className="!h-14" />
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <RNCPBadge className="!h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 dark:border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 dark:text-white/50 text-sm text-center md:text-left flex items-center gap-1">
                © {currentYear} {siteConfig.name}. Tous droits réservés.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-white/50">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
