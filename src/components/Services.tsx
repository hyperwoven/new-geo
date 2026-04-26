/** Arrow used on "Learn more" service links. */
function ArrowRight() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true" focusable="false">
      <path d="M1 5h14M10 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Services section — Accessibility and GEO cards side by side. */
export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading">
      <div className="services-header">
        <div>
          <p className="section-label reveal">What we do</p>
          <h2 className="section-heading reveal reveal-delay-1" id="services-heading">
            Two disciplines.<br /><em>One vision.</em>
          </h2>
        </div>
        <p className="services-intro reveal reveal-delay-2">
          We believe that accessible design and AI-optimised content aren't just best practices
          — they are the foundations of a web that works for human beings and intelligent systems alike.
        </p>
      </div>

      <div className="services-grid">
        {/* Accessibility */}
        <div className="service-card reveal">
          <div className="service-number" aria-hidden="true">01 / 02</div>
          <div className="service-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="10" r="4" stroke="oklch(0.72 0.16 175)" strokeWidth="1.5" />
              <path d="M12 22h24M24 22v16M16 38l8-16 8 16" stroke="oklch(0.72 0.16 175)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="24" cy="24" r="22" stroke="oklch(0.72 0.16 175 / 0.15)" strokeWidth="1" />
            </svg>
          </div>
          <h3 className="service-title">Web<br />Accessibility</h3>
          <p className="service-desc">
            We make digital products usable for every person — regardless of disability, device, or
            context. WCAG-conformant. Genuinely inclusive.
          </p>
          <ul className="service-features">
            <li>WCAG 2.2 AA &amp; AAA audits</li>
            <li>Remediation &amp; implementation</li>
            <li>Accessible design systems</li>
            <li>Screen reader &amp; assistive tech testing</li>
            <li>Accessibility statements &amp; compliance</li>
          </ul>
          <a className="service-link" href="#cta">Learn more <ArrowRight /></a>
          <div className="service-card-accent" aria-hidden="true" />
        </div>

        {/* GEO */}
        <div className="service-card violet reveal reveal-delay-2">
          <div className="service-number" aria-hidden="true">02 / 02</div>
          <div className="service-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 36L20 20l8 10 6-8 6 14" stroke="oklch(0.72 0.16 290)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="38" cy="12" r="4" stroke="oklch(0.72 0.16 290)" strokeWidth="1.5" />
              <path d="M34 12H6" stroke="oklch(0.72 0.16 290 / 0.4)" strokeWidth="1" strokeDasharray="2 3" />
              <circle cx="24" cy="24" r="22" stroke="oklch(0.72 0.16 290 / 0.15)" strokeWidth="1" />
            </svg>
          </div>
          <h3 className="service-title">Generative Engine<br />Optimisation</h3>
          <p className="service-desc">
            As AI becomes the front door to the web, your content must be structured to be cited,
            summarised, and surfaced by large language models.
          </p>
          <ul className="service-features">
            <li>AI citation &amp; answer-engine optimisation</li>
            <li>Structured data &amp; schema implementation</li>
            <li>Semantic content architecture</li>
            <li>Prompt-aligned copywriting strategy</li>
            <li>LLM visibility reporting</li>
          </ul>
          <a className="service-link" href="#cta">Learn more <ArrowRight /></a>
          <div className="service-card-accent" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
