import { useEffect, useState } from 'react'

/** The Hyperwoven wordmark SVG, extracted for reuse. */
function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 306 316"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g transform="matrix(1,0,0,1,-387.44,-382.24)">
        <path
          d="M481.38,392.25L648.12,392.25C667.1,392.25 682.55,407.7 682.55,426.68L682.55,592.32L692.55,605.06L692.55,426.68C692.55,402.14 672.66,382.25 648.12,382.25L475.79,382.25C478.17,385.22 480.08,388.59 481.38,392.25Z"
          fill="currentColor"
          style={{ fillRule: 'nonzero' }}
        />
      </g>
      <g transform="matrix(1,0,0,1,-387.44,-382.24)">
        <path
          d="M692.55,633.57C692.55,628.73 690.93,624.04 687.94,620.23L657.22,581.1L579.78,482.46C575.69,477.24 569.42,474.2 562.79,474.2L518.54,474.2C506.61,474.2 496.94,483.87 496.94,495.8L496.94,567.82C496.94,575.15 491,581.1 483.66,581.1C476.33,581.1 470.38,575.16 470.38,567.82L470.38,403.84C470.38,391.91 460.71,382.24 448.78,382.24L409.04,382.24C397.11,382.24 387.44,391.91 387.44,403.84L387.44,676.14C387.44,688.07 397.11,697.74 409.04,697.74L504.42,697.74C516.35,697.74 526.02,688.07 526.02,676.14L526.02,613.74C526.02,602.35 540.4,597.38 547.43,606.34L570.83,636.14L612.71,689.49C616.8,694.71 623.07,697.75 629.7,697.75L670.94,697.75C682.87,697.75 692.54,688.08 692.54,676.15L692.54,633.58L692.55,633.57Z"
          fill="currentColor"
          style={{ fillRule: 'nonzero' }}
        />
      </g>
    </svg>
  )
}

export { LogoMark }

/**
 * Fixed navigation bar with scroll-triggered glass effect.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav aria-label="Main navigation" className={scrolled ? 'scrolled' : ''}>
      <a className="nav-logo" href="#">
        <LogoMark className="nav-logo-icon" />
        <span className="nav-logo-text">Hyperwoven</span>
      </a>

      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#approach">Approach</a></li>
        <li><a href="#geo">GEO</a></li>
        <li><a href="#insights">Insights</a></li>
        <li><a href="#location">About</a></li>
      </ul>

      <a className="nav-cta" href="#cta">Start a Project</a>

      <button
        className="nav-menu-btn"
        aria-label="Open navigation menu"
        aria-expanded="false"
      >
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true" focusable="false">
          <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </nav>
  )
}
