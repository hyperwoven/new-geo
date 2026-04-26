const STEPS = [
  {
    num: '01',
    title: 'Discovery & Audit',
    desc: 'We start with a thorough analysis of your existing digital presence — accessibility barriers, content structure, and AI visibility gaps.',
  },
  {
    num: '02',
    title: 'Strategy & Roadmap',
    desc: 'A prioritised action plan aligned to your business goals, compliance requirements, and AI landscape opportunities.',
  },
  {
    num: '03',
    title: 'Implementation',
    desc: 'Hands-on delivery — whether that\'s code-level remediation, structured data implementation, or content re-architecture.',
  },
  {
    num: '04',
    title: 'Monitor & Evolve',
    desc: 'Ongoing reporting, testing, and refinement as standards evolve and AI models update their understanding of your content.',
  },
]

/** Orbital dot positions on the approach visual. */
const DOTS = [
  { angle: 0,   radius: 140, violet: false },
  { angle: 120, radius: 140, violet: false },
  { angle: 240, radius: 140, violet: false },
  { angle: 60,  radius: 110, violet: true  },
  { angle: 180, radius: 110, violet: true  },
  { angle: 300, radius: 110, violet: true  },
]

const CX = 140
const CY = 140

/** Our four-step process section with animated orbital visual. */
export function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-heading">
      <p className="section-label reveal">How we work</p>
      <h2 className="section-heading reveal reveal-delay-1" id="approach-heading">
        Process as <em>craft.</em>
      </h2>

      <div className="approach-grid">
        <ol className="approach-steps" aria-label="Our four-step process">
          {STEPS.map((step, i) => (
            <li
              key={step.num}
              className={`approach-step reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}
            >
              <div className="step-num" aria-hidden="true">{step.num}</div>
              <div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="approach-visual reveal reveal-delay-2" aria-hidden="true">
          <div className="approach-visual-inner">
            <div className="av-ring av-ring-1" />
            <div className="av-ring av-ring-2" />
            <div className="av-ring av-ring-3" />
            <div className="av-center">
              <div className="av-center-text">Hyper<br />woven</div>
            </div>
            {DOTS.map((d, i) => (
              <div
                key={i}
                className={d.violet ? 'av-dot av-dot-v' : 'av-dot'}
                style={{
                  position: 'absolute',
                  left: CX + Math.cos((d.angle * Math.PI) / 180) * d.radius - 4,
                  top:  CY + Math.sin((d.angle * Math.PI) / 180) * d.radius - 4,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
