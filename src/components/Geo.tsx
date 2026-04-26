const GEO_CARDS = [
  {
    title: 'Be the cited source',
    desc: 'Structure your content so AI models reference you by name when answering queries in your domain.',
  },
  {
    title: 'Semantic authority',
    desc: 'Build topical depth and schema markup that signals expertise to both search engines and LLMs.',
  },
  {
    title: 'Adaptive content strategy',
    desc: 'As AI models evolve, your content strategy evolves with them — continuously monitored and refined.',
  },
]

/** GEO explainer section — why generative engine optimisation matters now. */
export function Geo() {
  return (
    <section id="geo" aria-labelledby="geo-heading">
      <div className="geo-inner">
        <p className="section-label reveal">Why GEO matters now</p>
        <h2 className="section-heading reveal reveal-delay-1" id="geo-heading">
          The search landscape<br />has <em>fundamentally shifted.</em>
        </h2>

        <div className="geo-grid">
          <div className="geo-text reveal reveal-delay-1">
            <p className="geo-lead">
              Google's AI Overviews, ChatGPT, Perplexity, and Claude now answer millions of
              queries without a user ever clicking a link. Your SEO strategy wasn't built for this.
            </p>
            <p className="geo-body">
              Generative Engine Optimisation (GEO) is the discipline of making your content
              legible, trustworthy, and citable to large language models. It's about semantic
              clarity, structured authority, and building content that AI systems choose to
              surface — not just keyword density and backlinks.
            </p>
          </div>

          <div className="geo-cards">
            {GEO_CARDS.map((card, i) => (
              <div
                key={card.title}
                className={`geo-card reveal reveal-delay-${i + 1}`}
              >
                <h3 className="geo-card-title">{card.title}</h3>
                <p className="geo-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
