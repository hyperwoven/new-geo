import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

type ServiceKey = 'accessibility' | 'geo' | 'both'

const SERVICE_OPTIONS: { key: ServiceKey; label: string }[] = [
  { key: 'accessibility', label: 'Accessibility' },
  { key: 'geo',           label: 'GEO' },
  { key: 'both',          label: 'Both / Not sure' },
]

/**
 * Contact form with:
 * - honeypot spam protection
 * - client-side validation with aria-invalid / role="alert" error messages
 * - toggle buttons for service interest (aria-pressed)
 *
 * TODO: Replace the simulated delay in handleSubmit with a real fetch() to your form endpoint.
 */
function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', company: '', budget: '', message: '' })
  const [consent, setConsent] = useState({ contact: false, marketing: false })
  const [errors, setErrors] = useState({ name: false, email: false, message: false, contact: false })
  const [selected, setSelected] = useState<Set<ServiceKey>>(new Set(['accessibility', 'geo']))
  const [honeypot, setHoneypot] = useState('')
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  function toggleService(key: ServiceKey) {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  function validate(): boolean {
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const next = {
      name: !fields.name.trim(),
      email: !emailRx.test(fields.email.trim()),
      message: !fields.message.trim(),
      contact: !consent.contact,
    }
    setErrors(next)
    return !Object.values(next).some(Boolean)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (honeypot) return   // silently discard bot submissions
    if (!validate()) return

    setSending(true)
    // TODO: replace with real fetch() to your form endpoint
    await new Promise((r) => setTimeout(r, 1800))
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="form-success visible" role="status" aria-live="polite">
        <div className="form-success-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 11l5 5 9-9" stroke="oklch(0.72 0.16 175)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="form-success-title">Message sent.</p>
        <p className="form-success-sub">Thank you — we'll be in touch within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Project enquiry">
      {/* Honeypot */}
      <div className="form-hp" aria-hidden="true">
        <label htmlFor="hp-website">Website</label>
        <input
          type="text"
          id="hp-website"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="cf-name">
            Name <span className="required-marker" aria-hidden="true">*</span>
            <span className="visually-hidden">(required)</span>
          </label>
          <input
            className={`form-input${errors.name ? ' error' : ''}`}
            type="text"
            id="cf-name"
            name="name"
            placeholder="Jane Smith"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={errors.name}
            aria-describedby="err-name"
            value={fields.name}
            onChange={(e) => {
              setFields((f) => ({ ...f, name: e.target.value }))
              if (errors.name) setErrors((er) => ({ ...er, name: false }))
            }}
          />
          <span className={`form-error-msg${errors.name ? ' visible' : ''}`} id="err-name" role="alert">
            Please enter your name.
          </span>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="cf-email">
            Email <span className="required-marker" aria-hidden="true">*</span>
            <span className="visually-hidden">(required)</span>
          </label>
          <input
            className={`form-input${errors.email ? ' error' : ''}`}
            type="email"
            id="cf-email"
            name="email"
            placeholder="jane@company.com"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={errors.email}
            aria-describedby="err-email"
            value={fields.email}
            onChange={(e) => {
              setFields((f) => ({ ...f, email: e.target.value }))
              if (errors.email) setErrors((er) => ({ ...er, email: false }))
            }}
          />
          <span className={`form-error-msg${errors.email ? ' visible' : ''}`} id="err-email" role="alert">
            Please enter a valid email.
          </span>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="cf-company">Organisation</label>
          <input
            className="form-input"
            type="text"
            id="cf-company"
            name="company"
            placeholder="Company Ltd"
            autoComplete="organization"
            value={fields.company}
            onChange={(e) => setFields((f) => ({ ...f, company: e.target.value }))}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="cf-budget">Approximate budget</label>
          <select
            className="form-select"
            id="cf-budget"
            name="budget"
            value={fields.budget}
            onChange={(e) => setFields((f) => ({ ...f, budget: e.target.value }))}
          >
            <option value="" disabled>Select range</option>
            <option value="under5k">Under £5,000</option>
            <option value="5to10k">£5,000 – £10,000</option>
            <option value="10to25k">£10,000 – £25,000</option>
            <option value="25kplus">£25,000+</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <fieldset className="form-fieldset">
          <legend className="form-label">I'm interested in</legend>
          <div className="form-services">
            {SERVICE_OPTIONS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                className={[
                  'form-service-btn',
                  selected.has(key) ? 'active' : '',
                  selected.has(key) && key === 'geo' ? 'violet' : '',
                ].filter(Boolean).join(' ')}
                aria-pressed={selected.has(key)}
                onClick={() => toggleService(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>
        <input type="hidden" name="services" value={Array.from(selected).join(',')} />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="cf-message">
          Tell us about your project{' '}
          <span className="required-marker" aria-hidden="true">*</span>
          <span className="visually-hidden">(required)</span>
        </label>
        <textarea
          className={`form-textarea${errors.message ? ' error' : ''}`}
          id="cf-message"
          name="message"
          placeholder="A brief overview of what you're looking to achieve…"
          required
          aria-required="true"
          aria-invalid={errors.message}
          aria-describedby="err-message"
          value={fields.message}
          onChange={(e) => {
            setFields((f) => ({ ...f, message: e.target.value }))
            if (errors.message) setErrors((er) => ({ ...er, message: false }))
          }}
        />
        <span className={`form-error-msg${errors.message ? ' visible' : ''}`} id="err-message" role="alert">
          Please add a short message.
        </span>
      </div>

      {/* Consent checkboxes — required before submission */}
      <fieldset className="form-fieldset form-consent">
        <legend className="visually-hidden">Data consent</legend>

        <div className="form-consent-item">
          <div className="form-consent-row">
            <input
              type="checkbox"
              id="cf-contact-consent"
              name="contactConsent"
              required
              aria-required="true"
              aria-invalid={errors.contact}
              aria-describedby="err-contact-consent"
              checked={consent.contact}
              onChange={(e) => {
                setConsent((c) => ({ ...c, contact: e.target.checked }))
                if (errors.contact) setErrors((er) => ({ ...er, contact: false }))
              }}
            />
            <label htmlFor="cf-contact-consent">
              I consent to Hyperwoven storing and processing my personal data to respond
              to this enquiry. <Link to="/privacy">Read our Privacy Policy</Link>.{' '}
              <span className="required-marker" aria-hidden="true">*</span>
              <span className="visually-hidden">(required)</span>
            </label>
          </div>
          <span
            className={`form-error-msg${errors.contact ? ' visible' : ''}`}
            id="err-contact-consent"
            role="alert"
          >
            You must consent to data storage to submit this form.
          </span>
        </div>

        <div className="form-consent-item">
          <div className="form-consent-row">
            <input
              type="checkbox"
              id="cf-marketing-consent"
              name="marketingConsent"
              checked={consent.marketing}
              onChange={(e) => setConsent((c) => ({ ...c, marketing: e.target.checked }))}
            />
            <label htmlFor="cf-marketing-consent">
              I'd like to receive occasional updates, insights, and news from Hyperwoven.
              You can unsubscribe at any time.
            </label>
          </div>
        </div>
      </fieldset>

      <button
        type="submit"
        className={`form-submit${sending ? ' sending' : ''}`}
        disabled={sending}
      >
        <span>{sending ? 'Sending\u2026' : 'Send message'}</span>
        {!sending && (
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true" focusable="false">
            <path d="M1 5h14M10 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {sending && (
          <svg
            width="18" height="18" viewBox="0 0 18 18" fill="none"
            style={{ animation: 'spinSlow 0.8s linear infinite' }}
            aria-hidden="true"
          >
            <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" strokeDasharray="22 22" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </form>
  )
}

/** CTA section — copy column + contact form. */
export function Cta() {
  return (
    <section id="cta" aria-labelledby="cta-heading">
      <div className="cta-inner">
        <div>
          <p className="section-label reveal">Let's talk</p>
          <h2 className="cta-heading reveal reveal-delay-1" id="cta-heading">
            Ready to build something<br /><em>remarkable?</em>
          </h2>
          <p className="cta-sub reveal reveal-delay-2">
            Tell us about your project. Whether it's an accessibility audit, a GEO strategy,
            or both — we'd love to hear from you.
          </p>
          <div className="cta-details reveal reveal-delay-3">
            <div className="cta-detail">
              <div className="cta-detail-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 3.5C1 2.67 1.67 2 2.5 2h9C12.33 2 13 2.67 13 3.5v7c0 .83-.67 1.5-1.5 1.5h-9C1.67 12 1 11.33 1 10.5v-7z" stroke="currentColor" strokeWidth="1.1" />
                  <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.1" />
                </svg>
              </div>
              <a href="mailto:principal.consultant@hyperwoven.co.uk">
                principal.consultant@hyperwoven.co.uk
              </a>
            </div>
            <div className="cta-detail">
              <div className="cta-detail-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.1" />
                  <path d="M7 1C4.24 1 2 3.24 2 6c0 3.75 5 8 5 8s5-4.25 5-8c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.1" />
                </svg>
              </div>
              Tees Valley, United Kingdom
            </div>
            <div className="cta-detail">
              <div className="cta-detail-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.1" />
                  <path d="M7 4v3.5l2 2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                </svg>
              </div>
              Typically respond within 24 hours
            </div>
          </div>
        </div>

        <div className="contact-form-wrap reveal reveal-delay-2">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
