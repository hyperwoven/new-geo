const STATS = [
  { number: '98%', label: 'Average Lighthouse Accessibility score post-remediation' },
  { number: '3×',  label: 'Increase in AI-cited content for GEO clients' },
  { number: 'WCAG\n2.2', label: 'Fully conformant to the latest international standard' },
  { number: '100%', label: 'Of projects delivered with full documentation & handoff' },
]

/** Four-column stat grid. */
export function Stats() {
  return (
    <section id="stats" aria-label="Key statistics">
      <div className="stats-grid">
        {STATS.map(({ number, label }, i) => (
          <div
            key={label}
            className={`stat-item reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}
          >
            <div className="stat-number">
              {number.split('\n').map((line, j) => (
                <span key={j}>{line}{j < number.split('\n').length - 1 && <br />}</span>
              ))}
            </div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
