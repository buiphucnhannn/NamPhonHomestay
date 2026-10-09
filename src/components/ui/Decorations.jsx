export function LotusFlower({ className = "", color = "#C89B53", opacity = 0.35 }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
    >
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity={opacity}>
        {/* Central petal */}
        <path d="M 100 30 C 90 60 85 95 100 135 C 115 95 110 60 100 30 Z" />
        {/* Inner left petal */}
        <path d="M 100 45 C 80 65 65 95 85 135 C 95 110 98 85 100 45 Z" />
        {/* Inner right petal */}
        <path d="M 100 45 C 120 65 135 95 115 135 C 105 110 102 85 100 45 Z" />
        {/* Outer left petal */}
        <path d="M 90 70 C 60 85 45 115 70 145 C 85 130 90 110 90 70 Z" />
        {/* Outer right petal */}
        <path d="M 110 70 C 140 85 155 115 130 145 C 115 130 110 110 110 70 Z" />
        {/* Flared low petals */}
        <path d="M 75 110 C 40 120 30 140 55 155 C 75 150 85 138 85 135" />
        <path d="M 125 110 C 160 120 170 140 145 155 C 125 150 115 138 115 135" />
        {/* Base lotus pod and calyx */}
        <path d="M 70 150 C 90 162 110 162 130 150" strokeWidth="1.5" />
        <path d="M 80 155 C 95 168 105 168 120 155" />
        {/* Water ripple */}
        <path d="M 45 165 C 80 160 120 160 155 165" strokeDasharray="3 3" />
        <path d="M 60 172 C 85 168 115 168 140 172" strokeDasharray="2 2" />
      </g>
    </svg>
  );
}

export function BotanicalBranch({ className = "", flip = false, color = "#1E4B38" }) {
  return (
    <svg
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
    >
      <g stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.6}>
        {/* Main stem curve */}
        <path d="M 20 210 Q 50 140 110 30" />
        {/* Leaf 1 top */}
        <path d="M 110 30 Q 125 10 140 15 Q 135 35 110 30" fill={color} fillOpacity="0.2" />
        {/* Leaf pair 2 */}
        <path d="M 95 60 Q 125 45 145 60 Q 125 75 95 60" fill={color} fillOpacity="0.25" />
        <path d="M 90 70 Q 60 55 45 70 Q 65 85 90 70" fill={color} fillOpacity="0.22" />
        {/* Leaf pair 3 */}
        <path d="M 75 105 Q 115 95 130 115 Q 100 125 75 105" fill={color} fillOpacity="0.25" />
        <path d="M 70 115 Q 35 100 20 118 Q 45 130 70 115" fill={color} fillOpacity="0.2" />
        {/* Leaf pair 4 */}
        <path d="M 55 150 Q 95 140 110 160 Q 80 170 55 150" fill={color} fillOpacity="0.25" />
        <path d="M 48 160 Q 15 150 5 170 Q 30 180 48 160" fill={color} fillOpacity="0.2" />
      </g>
    </svg>
  );
}

// Ornamental seam between two cream sections: fading gold rules around a small lotus.
// Place it absolutely at the top of the lower section; className sets the vertical offset.
export function SectionDivider({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-x-0 flex items-center justify-center gap-4 px-6 pointer-events-none z-0 ${className}`}
    >
      <span data-reveal="divider-l" data-reveal-delay="200" className="h-px w-full max-w-[420px] bg-gradient-to-r from-transparent via-[#C89B53]/35 to-[#C89B53]/60" />
      <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B53]/50 shrink-0" />
      <span data-reveal="divider-lotus" className="shrink-0 -mt-4">
        <LotusFlower className="w-14 h-14 md:w-16 md:h-16" opacity={1} />
      </span>
      <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B53]/50 shrink-0" />
      <span data-reveal="divider-r" data-reveal-delay="200" className="h-px w-full max-w-[420px] bg-gradient-to-l from-transparent via-[#C89B53]/35 to-[#C89B53]/60" />
    </div>
  );
}
