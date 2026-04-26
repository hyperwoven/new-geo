const ITEMS = [
  'Accessibility', 'WCAG 2.2', 'GEO', 'Inclusive Design',
  'Structured Data', 'LLM Visibility', 'Screen Reader Testing',
  'Semantic SEO', 'AI Citation', 'Tees Valley', 'Schema Markup', 'ARIA',
]

/** Auto-scrolling keyword strip between hero and services. */
export function Marquee() {
  // Double the items so the CSS marquee animation loops seamlessly
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((label, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
