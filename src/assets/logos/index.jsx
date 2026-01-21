// Logos officiels pour Avenir&Progres
// Utilise les vraies images des partenaires et certifications

// Logo Avenir&Progres officiel - Adapte automatiquement au thème
export const AvenirProgresLogo = ({ className = '', size = 'md' }) => {
  const sizes = {
    xs: 'h-8',
    sm: 'h-10',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-20',
  }
  const sizeClass = sizes[size] || sizes.md

  return (
    <>
      {/* Logo couleur pour light mode */}
      <img
        src="/images/logos/logo-a&p.png"
        alt="Avenir&Progres - Centre de Formation Professionnelle"
        className={`${sizeClass} w-auto object-contain dark:hidden ${className}`}
      />
      {/* Logo blanc pour dark mode */}
      <img
        src="/images/logos/logo-a&p-white.png"
        alt="Avenir&Progres - Centre de Formation Professionnelle"
        className={`${sizeClass} w-auto object-contain hidden dark:block ${className}`}
      />
    </>
  )
}

// Badge Avenir&Progres Premium (avec effet glassmorphism)
export const AvenirProgresBadge = ({ className = '', size = 'md', withGlow = true }) => {
  const sizes = {
    sm: 'h-10',
    md: 'h-12',
    lg: 'h-14',
    xl: 'h-16',
  }
  const sizeClass = sizes[size] || sizes.md

  return (
    <div className={`relative group ${className}`}>
      {/* Glow effect */}
      {withGlow && (
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      {/* Badge container */}
      <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-xl px-4 py-2 border border-gray-200/50 dark:border-white/10 shadow-lg shadow-gray-900/5 dark:shadow-none group-hover:border-primary-500/30 transition-all duration-300">
        <img
          src="/images/logos/logo-a&p-v2.png"
          alt="Avenir&Progres"
          className={`${sizeClass} w-auto object-contain`}
        />
      </div>
    </div>
  )
}

// Logo Qualiopi officiel
export const QualiopiLogo = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
    xl: 'h-24',
  }
  const sizeClass = sizes[size] || sizes.md

  return (
    <img
      src="/images/logos/qualiopi-logo.avif"
      alt="Qualiopi - Processus certifié - République Française"
      className={`${sizeClass} w-auto object-contain ${className}`}
    />
  )
}

// Badge Qualiopi compact (pour footer, badges)
export const QualiopiBadge = ({ className = '' }) => {
  return (
    <img
      src="/images/logos/qualiopi-logo.avif"
      alt="Certifié Qualiopi"
      className={`h-12 w-auto object-contain ${className}`}
    />
  )
}

// Logo France Compétences / RNCP officiel
export const RNCPLogo = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
    xl: 'h-24',
  }
  const sizeClass = sizes[size] || sizes.md

  return (
    <img
      src="/images/logos/RNCP-logo.png"
      alt="France Compétences - Certification enregistrée au RNCP"
      className={`${sizeClass} w-auto object-contain ${className}`}
    />
  )
}

// Badge RNCP compact
export const RNCPBadge = ({ className = '' }) => {
  return (
    <img
      src="/images/logos/RNCP-logo.png"
      alt="RNCP - France Compétences"
      className={`h-10 w-auto object-contain ${className}`}
    />
  )
}

// Logo France Travail officiel
export const FranceTravailLogo = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-20',
  }
  const sizeClass = sizes[size] || sizes.md

  return (
    <img
      src="/images/logos/LOGO-FRANCE-TRAVAIL.png"
      alt="France Travail"
      className={`${sizeClass} w-auto object-contain ${className}`}
    />
  )
}

// Logo France Compétences (alias pour compatibilité)
export const FranceCompetencesLogo = ({ className = '', size = 'md' }) => {
  return <RNCPLogo className={className} size={size} />
}

// Logo République Française (utilise Qualiopi qui contient le logo)
export const RepubliqueFrancaiseLogo = ({ className = '', size = 'md' }) => {
  return <QualiopiLogo className={className} size={size} />
}

// Logo OPCO officiel
export const OPCOLogo = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
    xl: 'h-16',
  }
  const sizeClass = sizes[size] || sizes.md

  return (
    <img
      src="/images/logos/opco-logo.webp"
      alt="OPCO - Opérateurs de Compétences"
      className={`${sizeClass} w-auto object-contain ${className}`}
    />
  )
}

// Badge Alternance (simple badge textuel stylisé)
export const AlternanceBadge = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg ${className}`}>
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="text-white font-semibold text-sm">ALTERNANCE</span>
    </div>
  )
}

// Composant groupé pour afficher toutes les certifications
export const CertificationsBanner = ({ className = '', size = 'md' }) => {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-6 ${className}`}>
      <QualiopiLogo size={size} />
      <RNCPLogo size={size} />
      <FranceTravailLogo size={size} />
      <OPCOLogo size={size} />
    </div>
  )
}

export default {
  AvenirProgresLogo,
  AvenirProgresBadge,
  QualiopiLogo,
  QualiopiBadge,
  RNCPLogo,
  RNCPBadge,
  FranceTravailLogo,
  FranceCompetencesLogo,
  RepubliqueFrancaiseLogo,
  OPCOLogo,
  AlternanceBadge,
  CertificationsBanner,
}
