import { articles } from '../content/insights/articles'

/** Arrow icon used on "Read article" links. */
function ArrowRight() {
  return (
    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true" focusable="false">
      <path d="M1 4.5h12M8.5 1l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Formats an ISO date string to "d MMM YYYY" for display. */
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

/**
 * Insights section — article cards driven by MDX frontmatter.
 * The featured article spans two columns; the rest fill the remaining grid cells.
 */
export function Insights() {
  const featured = articles.find((a) => a.featured)
  const rest = articles.filter((a) => !a.featured)

  return (
    <section id="insights" aria-labelledby="insights-heading">
      <div className="insights-inner">
        <div className="insights-header">
          <div>
            <p className="section-label reveal">Insights</p>
            <h2 className="section-heading reveal reveal-delay-1" id="insights-heading">
              Thinking from<br /><em>the studio.</em>
            </h2>
          </div>
          <a className="insights-view-all reveal reveal-delay-2" href="#">
            All articles
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true" focusable="false">
              <path d="M1 5h14M10 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="insights-grid">
          {/* Featured card */}
          {featured && (
            <a className="insight-card featured reveal" href={`#${featured.slug}`}>
              <div className="insight-body">
                <div className="insight-meta">
                  <span className={`insight-tag ${featured.tag === 'GEO' ? 'violet' : 'teal'}`}>
                    {featured.tag}
                  </span>
                  <time className="insight-date" dateTime={featured.date}>
                    {formatDate(featured.date)}
                  </time>
                </div>
                <h3 className="insight-title">{featured.title}</h3>
                <p className="insight-excerpt">{featured.excerpt}</p>
                <span className="insight-read">Read article <ArrowRight /></span>
              </div>
              <div className="insight-visual" aria-hidden="true">
                <div className="featured-visual-bg" />
                <div className="featured-visual-grid" />
                <div className="featured-visual-label">Article<br />cover image</div>
              </div>
            </a>
          )}

          {/* Remaining cards */}
          {rest.map((article, i) => (
            <a
              key={article.slug}
              className={`insight-card reveal${i > 0 ? ` reveal-delay-${Math.min(i, 4)}` : ' reveal-delay-1'}`}
              href={`#${article.slug}`}
            >
              <div className="insight-meta">
                <span className={`insight-tag ${article.tag === 'GEO' ? 'violet' : 'teal'}`}>
                  {article.tag}
                </span>
                <time className="insight-date" dateTime={article.date}>
                  {formatDate(article.date)}
                </time>
              </div>
              <h3 className="insight-title">{article.title}</h3>
              <p className="insight-excerpt">{article.excerpt}</p>
              <span className="insight-read">Read article <ArrowRight /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
