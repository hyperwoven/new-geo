import { Link } from 'react-router-dom'

/**
 * Privacy Policy page — GDPR-compliant under UK GDPR.
 * Covers enquiry data processing and marketing consent.
 * Last reviewed: 2026-04-26.
 */
export function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <nav className="privacy-nav" aria-label="Site navigation">
        <Link to="/" className="privacy-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Hyperwoven
        </Link>
      </nav>

      <main className="privacy-content" id="main-content" tabIndex={-1}>
        <header className="privacy-header">
          <p className="section-label">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="privacy-meta">Last updated: 26 April 2026</p>
        </header>

        <section aria-labelledby="pp-who">
          <h2 id="pp-who">Who we are</h2>
          <p>
            Hyperwoven is a web development consultancy operated by Dave Hill
            (<strong>data controller</strong>), based in Tees Valley, United Kingdom.
          </p>
          <p>
            If you have any questions about how we handle your personal data, contact us
            at{' '}
            <a href="mailto:principal.consultant@hyperwoven.co.uk">
              principal.consultant@hyperwoven.co.uk
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="pp-data">
          <h2 id="pp-data">What data we collect and why</h2>

          <h3>Enquiry data</h3>
          <p>When you submit the contact form on our website, we collect:</p>
          <ul>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your organisation name (if provided)</li>
            <li>Your approximate budget range (if provided)</li>
            <li>Your service interests</li>
            <li>Your project description</li>
            <li>The date and time of your submission</li>
            <li>A record of your consent to data processing</li>
          </ul>
          <p>
            This data is collected solely to respond to your enquiry and manage our
            business relationship with you.
          </p>

          <h3>Marketing communications</h3>
          <p>
            If you separately consent to receive updates, we will use your name and email
            address to send you occasional insights, articles, and news relevant to web
            accessibility and generative engine optimisation. You can withdraw this consent
            at any time by emailing us or using the unsubscribe link included in every
            communication.
          </p>
        </section>

        <section aria-labelledby="pp-basis">
          <h2 id="pp-basis">Legal basis for processing</h2>
          <ul>
            <li>
              <strong>Enquiry data</strong> — processed on the basis of your explicit
              consent (Article 6(1)(a) UK GDPR), given when you tick the consent
              checkbox and submit the form.
            </li>
            <li>
              <strong>Marketing communications</strong> — processed solely on the basis of
              your separate, explicit consent. We will never send marketing communications
              without it.
            </li>
          </ul>
        </section>

        <section aria-labelledby="pp-retention">
          <h2 id="pp-retention">How long we keep your data</h2>
          <ul>
            <li>
              <strong>Enquiry data</strong> — retained for up to 2 years from the date of
              your last contact with us, after which it is securely deleted.
            </li>
            <li>
              <strong>Marketing consent and associated data</strong> — retained until you
              withdraw your consent, after which it is deleted within 30 days.
            </li>
          </ul>
        </section>

        <section aria-labelledby="pp-sharing">
          <h2 id="pp-sharing">Who we share your data with</h2>
          <p>
            We do not sell, rent, or share your personal data with third parties for their
            own marketing purposes. Your data may be processed by third-party services we
            use to operate our business (for example, email or database providers), but
            only under data processing agreements that comply with UK GDPR requirements.
          </p>
          <p>
            We will only disclose your data to others where required by law or to protect
            our legitimate legal rights.
          </p>
        </section>

        <section aria-labelledby="pp-rights">
          <h2 id="pp-rights">Your rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>
              <strong>Access</strong> — request a copy of the personal data we hold about
              you
            </li>
            <li>
              <strong>Rectification</strong> — ask us to correct inaccurate or incomplete
              data
            </li>
            <li>
              <strong>Erasure</strong> — ask us to delete your personal data
            </li>
            <li>
              <strong>Restriction</strong> — ask us to limit how we use your data
            </li>
            <li>
              <strong>Portability</strong> — receive your data in a structured,
              machine-readable format
            </li>
            <li>
              <strong>Object</strong> — object to our processing of your personal data
            </li>
            <li>
              <strong>Withdraw consent</strong> — where processing is based on consent,
              you can withdraw it at any time without affecting the lawfulness of processing
              before withdrawal
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:principal.consultant@hyperwoven.co.uk">
              principal.consultant@hyperwoven.co.uk
            </a>
            . We will respond within one calendar month.
          </p>
        </section>

        <section aria-labelledby="pp-cookies">
          <h2 id="pp-cookies">Cookies</h2>
          <p>
            This website does not currently use cookies or tracking technologies beyond
            those strictly necessary for the site to function. We do not use analytics
            cookies, advertising cookies, or any third-party tracking.
          </p>
        </section>

        <section aria-labelledby="pp-complaints">
          <h2 id="pp-complaints">Complaints</h2>
          <p>
            If you have concerns about how we handle your personal data and are not
            satisfied with our response, you have the right to lodge a complaint with the
            Information Commissioner's Office (ICO):
          </p>
          <ul>
            <li>
              Website:{' '}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>
            </li>
            <li>Helpline: 0303 123 1113</li>
          </ul>
        </section>

        <section aria-labelledby="pp-changes">
          <h2 id="pp-changes">Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The date at the top of this page
            reflects when it was last revised. Material changes will be communicated to
            anyone who has provided their contact details.
          </p>
        </section>
      </main>
    </div>
  )
}
