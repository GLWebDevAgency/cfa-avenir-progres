// Illustration Premium - Career Growth avec graphique et fusée
// Style: Flat design moderne avec éléments dynamiques

const CareerGrowth = ({ className = "", size = 160, primaryColor = "#ff6b35", secondaryColor = "#10b981" }) => {
  return (
    <svg
      viewBox="0 0 200 160"
      width={size}
      height={size * 0.8}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Fond circulaire */}
      <circle cx="100" cy="90" r="65" fill={secondaryColor} fillOpacity="0.05" />
      
      {/* Grille de fond */}
      <g opacity="0.1">
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={`h${i}`} x1="35" y1={50 + i * 22} x2="165" y2={50 + i * 22} stroke={primaryColor} strokeWidth="1" strokeDasharray="4 4" />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`v${i}`} x1={35 + i * 26} y1="50" x2={35 + i * 26} y2="138" stroke={primaryColor} strokeWidth="1" strokeDasharray="4 4" />
        ))}
      </g>
      
      {/* Graphique de croissance */}
      <path
        d="M40 130 L65 110 L95 95 L125 70 L155 45"
        stroke={secondaryColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Zone sous la courbe */}
      <path
        d="M40 130 L65 110 L95 95 L125 70 L155 45 L155 130 L40 130"
        fill={secondaryColor}
        fillOpacity="0.1"
      />
      
      {/* Points sur la courbe */}
      {[
        { x: 40, y: 130 },
        { x: 65, y: 110 },
        { x: 95, y: 95 },
        { x: 125, y: 70 },
        { x: 155, y: 45 },
      ].map((point, i) => (
        <g key={i}>
          <circle cx={point.x} cy={point.y} r="6" fill="white" stroke={secondaryColor} strokeWidth="2.5" />
          <circle cx={point.x} cy={point.y} r="3" fill={secondaryColor} />
        </g>
      ))}
      
      {/* Fusée au sommet */}
      <g className="animate-float" style={{ transformOrigin: '155px 45px' }}>
        {/* Corps de la fusée */}
        <ellipse cx="168" cy="32" rx="8" ry="15" fill={primaryColor} />
        <ellipse cx="168" cy="28" rx="5" ry="6" fill="white" fillOpacity="0.3" />
        
        {/* Ailerons */}
        <path d="M160 40L155 50L163 45Z" fill={primaryColor} fillOpacity="0.8" />
        <path d="M176 40L181 50L173 45Z" fill={primaryColor} fillOpacity="0.8" />
        
        {/* Flamme */}
        <ellipse cx="168" cy="52" rx="4" ry="7" fill="#FCD34D" />
        <ellipse cx="168" cy="50" rx="2.5" ry="4" fill={primaryColor} fillOpacity="0.8" />
        
        {/* Hublot */}
        <circle cx="168" cy="30" r="3" fill="white" fillOpacity="0.6" />
      </g>
      
      {/* Étoiles autour de la fusée */}
      <g className="animate-pulse">
        <path d="M180 20L181 22L183 23L181 24L180 26L179 24L177 23L179 22L180 20Z" fill={primaryColor} fillOpacity="0.6" />
      </g>
      <g className="animate-pulse" style={{ animationDelay: '0.3s' }}>
        <path d="M150 15L151 17L153 18L151 19L150 21L149 19L147 18L149 17L150 15Z" fill={secondaryColor} fillOpacity="0.5" />
      </g>
      
      {/* Badges de réussite */}
      <g>
        <circle cx="35" cy="35" r="15" fill={primaryColor} fillOpacity="0.1" stroke={primaryColor} strokeWidth="1.5" />
        <path d="M30 35L33 38L40 31" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      
      {/* Pourcentage indicateur */}
      <g>
        <rect x="15" y="75" width="35" height="20" rx="4" fill={secondaryColor} fillOpacity="0.15" />
        <text x="32" y="89" textAnchor="middle" fill={secondaryColor} fontSize="10" fontWeight="bold">+85%</text>
      </g>
    </svg>
  )
}

export default CareerGrowth
