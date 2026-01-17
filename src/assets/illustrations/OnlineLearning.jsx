// Illustration Premium - Online Learning avec laptop et éléments flottants
// Style: Flat design moderne avec effets de profondeur

const OnlineLearning = ({ className = "", size = 160, primaryColor = "#ff6b35", secondaryColor = "#8b5cf6" }) => {
  return (
    <svg
      viewBox="0 0 200 160"
      width={size}
      height={size * 0.8}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cercle de fond */}
      <circle cx="100" cy="80" r="70" fill={primaryColor} fillOpacity="0.05" />
      
      {/* Éléments flottants - Livres */}
      <g className="animate-float" style={{ animationDelay: '0s' }}>
        <rect x="25" y="35" width="25" height="32" rx="2" fill={secondaryColor} fillOpacity="0.2" stroke={secondaryColor} strokeWidth="1.5" />
        <line x1="30" y1="42" x2="45" y2="42" stroke={secondaryColor} strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="30" y1="48" x2="42" y2="48" stroke={secondaryColor} strokeWidth="1.5" strokeOpacity="0.3" />
      </g>
      
      {/* Éléments flottants - Certificat */}
      <g className="animate-float" style={{ animationDelay: '0.5s' }}>
        <rect x="155" y="25" width="30" height="38" rx="3" fill={primaryColor} fillOpacity="0.15" stroke={primaryColor} strokeWidth="1.5" />
        <circle cx="170" cy="38" r="6" stroke={primaryColor} strokeWidth="1.5" fill="none" />
        <path d="M167 38L169 40L173 36" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="160" y1="52" x2="180" y2="52" stroke={primaryColor} strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="163" y1="57" x2="177" y2="57" stroke={primaryColor} strokeWidth="1.5" strokeOpacity="0.3" />
      </g>
      
      {/* Laptop principal */}
      <g>
        {/* Écran */}
        <rect x="50" y="50" width="100" height="65" rx="6" fill="white" stroke={primaryColor} strokeWidth="2.5" />
        <rect x="55" y="55" width="90" height="50" rx="3" fill={primaryColor} fillOpacity="0.05" />
        
        {/* Contenu écran - Vidéo */}
        <circle cx="100" cy="75" r="12" fill={primaryColor} fillOpacity="0.2" />
        <path d="M96 70V80L105 75L96 70Z" fill={primaryColor} />
        
        {/* Barre de progression */}
        <rect x="65" y="95" width="70" height="4" rx="2" fill={primaryColor} fillOpacity="0.1" />
        <rect x="65" y="95" width="45" height="4" rx="2" fill={primaryColor} />
        
        {/* Base du laptop */}
        <path d="M40 115H160L155 125H45L40 115Z" fill={primaryColor} fillOpacity="0.1" stroke={primaryColor} strokeWidth="2" />
        <ellipse cx="100" cy="120" rx="20" ry="3" fill={primaryColor} fillOpacity="0.2" />
      </g>
      
      {/* Bulles de notification */}
      <g className="animate-pulse">
        <circle cx="145" cy="45" r="10" fill={secondaryColor} fillOpacity="0.2" stroke={secondaryColor} strokeWidth="1.5" />
        <text x="145" y="49" textAnchor="middle" fill={secondaryColor} fontSize="10" fontWeight="bold">✓</text>
      </g>
      
      {/* Points décoratifs */}
      <circle cx="30" cy="100" r="3" fill={primaryColor} fillOpacity="0.3" />
      <circle cx="175" cy="95" r="4" fill={secondaryColor} fillOpacity="0.3" />
      <circle cx="20" cy="70" r="2" fill={secondaryColor} fillOpacity="0.4" />
      <circle cx="185" cy="70" r="2.5" fill={primaryColor} fillOpacity="0.4" />
      
      {/* Wifi/Signal */}
      <g opacity="0.5">
        <path d="M170 105C173 102 177 102 180 105" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M172 108C174 106 176 106 178 108" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="175" cy="111" r="1.5" fill={primaryColor} />
      </g>
    </svg>
  )
}

export default OnlineLearning
