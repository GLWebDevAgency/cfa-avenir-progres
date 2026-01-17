// Illustration Premium - Graduation Cap avec étoiles
// Style: Flat design moderne avec effets de brillance

const GraduationCap = ({ className = "", size = 120, color = "currentColor" }) => {
  return (
    <svg
      viewBox="0 0 120 100"
      width={size}
      height={size * 0.83}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Étoiles décoratives */}
      <g className="animate-pulse" style={{ animationDelay: '0s' }}>
        <path
          d="M95 15L96.5 18.5L100 20L96.5 21.5L95 25L93.5 21.5L90 20L93.5 18.5L95 15Z"
          fill={color}
          fillOpacity="0.6"
        />
      </g>
      <g className="animate-pulse" style={{ animationDelay: '0.5s' }}>
        <path
          d="M15 25L16.2 27.8L19 29L16.2 30.2L15 33L13.8 30.2L11 29L13.8 27.8L15 25Z"
          fill={color}
          fillOpacity="0.4"
        />
      </g>
      <g className="animate-pulse" style={{ animationDelay: '1s' }}>
        <path
          d="M108 45L109 47L111 48L109 49L108 51L107 49L105 48L107 47L108 45Z"
          fill={color}
          fillOpacity="0.5"
        />
      </g>

      {/* Pompon du chapeau */}
      <circle cx="100" cy="35" r="4" fill={color} fillOpacity="0.9" />
      <path
        d="M100 39V55"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Partie supérieure du chapeau (mortarboard) */}
      <path
        d="M60 30L10 50L60 70L110 50L60 30Z"
        fill={color}
        fillOpacity="0.15"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      
      {/* Partie inférieure du chapeau */}
      <path
        d="M30 55V75C30 75 45 85 60 85C75 85 90 75 90 75V55"
        fill={color}
        fillOpacity="0.1"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Ligne centrale décorative */}
      <path
        d="M60 70V55"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.5"
      />
      
      {/* Badge de succès */}
      <circle cx="60" cy="55" r="6" fill={color} fillOpacity="0.2" />
      <path
        d="M57 55L59 57L63 53"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default GraduationCap
