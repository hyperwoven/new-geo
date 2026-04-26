import { LogoMark } from './Nav'

/** Site footer with brand, services, company, and connect columns. */
export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-logo-wrap">
            <LogoMark className="footer-logo-icon" />
            <span>Hyperwoven</span>
          </div>
          <p className="footer-tagline">Accessibility &amp; Generative Engine Optimisation</p>
          <p className="footer-location">Tees Valley, United Kingdom</p>
        </div>

        <div>
          <p className="footer-col-title">Services</p>
          <ul className="footer-links">
            <li><a href="#services">Web Accessibility</a></li>
            <li><a href="#services">WCAG Audits</a></li>
            <li><a href="#geo">GEO</a></li>
            <li><a href="#geo">Content Strategy</a></li>
          </ul>
        </div>

        <div>
          <p className="footer-col-title">Company</p>
          <ul className="footer-links">
            <li><a href="#approach">Our Approach</a></li>
            <li><a href="#insights">Insights</a></li>
            <li><a href="#location">About</a></li>
            <li><a href="#cta">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="footer-col-title">Connect</p>
          <ul className="footer-links">
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter / X</a></li>
            <li>
              <a href="mailto:principal.consultant@hyperwoven.co.uk">
                principal.consultant@hyperwoven.co.uk
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Hyperwoven Ltd. All rights reserved.</span>
        <span className="footer-copy">Registered in England &amp; Wales</span>
      </div>
    </footer>
  )
}
