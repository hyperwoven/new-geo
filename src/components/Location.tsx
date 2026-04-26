/** Location section with decorative map pin placeholder. */
export function Location() {
  return (
    <section id="location" aria-labelledby="location-heading">
      <p className="section-label reveal">Where we are</p>
      <h2 className="section-heading reveal reveal-delay-1" id="location-heading">
        Rooted in Tees Valley.<br /><em>Working everywhere.</em>
      </h2>

      <div className="location-grid">
        <div className="reveal reveal-delay-1">
          <p className="location-lead">
            Based in the Tees Valley, in the North East of England — one of the UK's
            fastest-growing digital economies.
          </p>
          <p className="location-body">
            We work with organisations across the UK and beyond, from ambitious regional
            businesses to public sector bodies and global brands. Our location grounds us in a
            community that values straight-talking, genuine craft, and doing things properly.
          </p>
          <p className="location-tag">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
              <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M6 1v1M6 9v1M1 5h1M10 5h1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
            Tees Valley, United Kingdom
          </p>
        </div>

        <div
          className="location-map-placeholder reveal reveal-delay-2"
          role="img"
          aria-label="Illustrated map pin marking Tees Valley, North East England"
        >
          <div className="map-grid-lines" aria-hidden="true" />
          <div className="map-pin">
            <div className="map-pin-dot" aria-hidden="true" />
            <p className="map-pin-label">Tees Valley</p>
            <p className="map-pin-sub">North East England, UK</p>
          </div>
        </div>
      </div>
    </section>
  )
}
