/** Full-width blockquote — the Hyperwoven ethos. */
export function Manifesto() {
  return (
    <section id="manifesto" aria-labelledby="manifesto-heading">
      <div className="manifesto-inner">
        <p className="visually-hidden" id="manifesto-heading">Hyperwoven ethos</p>
        <blockquote className="manifesto-quote reveal">
          "The most <strong>performant</strong> digital experience is one that every user can
          access — and every AI can understand."
        </blockquote>
        <p className="manifesto-byline reveal reveal-delay-1">— The Hyperwoven ethos</p>
      </div>
    </section>
  )
}
