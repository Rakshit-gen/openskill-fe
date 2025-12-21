export function OpenSkillLogo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Combined O and S shape */}
      {/* Outer O circle (partial) */}
      <path
        d="M 200 60 A 140 140 0 1 1 80 200 A 140 140 0 0 1 200 340"
        fill="none"
        stroke="#FF6B35"
        strokeWidth="28"
        strokeLinecap="round"
      />

      {/* S curve integrated into O */}
      <path
        d="M 200 60 Q 280 100 260 160 Q 240 220 200 240 Q 160 260 140 320"
        fill="none"
        stroke="#FF6B35"
        strokeWidth="28"
        strokeLinecap="round"
      />

      {/* Terminal cursor element */}
      <rect x="135" y="310" width="20" height="30" fill="#FF6B35" opacity="0.9" />

      {/* Geometric accent lines */}
      <line x1="90" y1="200" x2="70" y2="200" stroke="#FF6B35" strokeWidth="6" strokeLinecap="round"/>
      <line x1="310" y1="200" x2="330" y2="200" stroke="#FF6B35" strokeWidth="6" strokeLinecap="round"/>

      {/* Small dots for tech aesthetic */}
      <circle cx="200" cy="50" r="4" fill="#FF6B35"/>
      <circle cx="340" cy="200" r="4" fill="#FF6B35"/>
      <circle cx="60" cy="200" r="4" fill="#FF6B35"/>
    </svg>
  );
}

export function OpenSkillLogoAnimated({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Combined O and S shape */}
      {/* Outer O circle (partial) */}
      <path
        d="M 200 60 A 140 140 0 1 1 80 200 A 140 140 0 0 1 200 340"
        fill="none"
        stroke="#FF6B35"
        strokeWidth="28"
        strokeLinecap="round"
      />

      {/* S curve integrated into O */}
      <path
        d="M 200 60 Q 280 100 260 160 Q 240 220 200 240 Q 160 260 140 320"
        fill="none"
        stroke="#FF6B35"
        strokeWidth="28"
        strokeLinecap="round"
      />

      {/* Terminal cursor element - blinking */}
      <rect x="135" y="310" width="20" height="30" fill="#FF6B35">
        <animate
          attributeName="opacity"
          values="0.9;0.2;0.9"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Geometric accent lines */}
      <line x1="90" y1="200" x2="70" y2="200" stroke="#FF6B35" strokeWidth="6" strokeLinecap="round"/>
      <line x1="310" y1="200" x2="330" y2="200" stroke="#FF6B35" strokeWidth="6" strokeLinecap="round"/>

      {/* Small dots for tech aesthetic */}
      <circle cx="200" cy="50" r="4" fill="#FF6B35"/>
      <circle cx="340" cy="200" r="4" fill="#FF6B35"/>
      <circle cx="60" cy="200" r="4" fill="#FF6B35"/>
    </svg>
  );
}

// Simplified version for small sizes (favicon, small icons)
export function OpenSkillIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer O circle (partial) */}
      <path
        d="M 200 60 A 140 140 0 1 1 80 200 A 140 140 0 0 1 200 340"
        fill="none"
        stroke="#FF6B35"
        strokeWidth="36"
        strokeLinecap="round"
      />

      {/* S curve integrated into O */}
      <path
        d="M 200 60 Q 280 100 260 160 Q 240 220 200 240 Q 160 260 140 320"
        fill="none"
        stroke="#FF6B35"
        strokeWidth="36"
        strokeLinecap="round"
      />

      {/* Terminal cursor element */}
      <rect x="130" y="305" width="24" height="35" fill="#FF6B35" />
    </svg>
  );
}
