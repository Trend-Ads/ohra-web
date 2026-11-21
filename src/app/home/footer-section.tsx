import { contact } from "./content";

export function FooterSection() {
  return (
    <footer id="contact" className="luxury-footer" aria-labelledby="footer-title">
      <div className="luxury-footer-bezel">
        {/* Top Editorial Callout */}
        <div className="luxury-footer-statement">
          <div className="luxury-footer-badge">
            <span className="luxury-footer-badge-dot" aria-hidden="true">✦</span>
            PRIVATE INQUIRIES &amp; PARTNERSHIPS
          </div>
          <h2 id="footer-title" className="luxury-footer-heading">
            Let&apos;s craft your <em>next sanctuary</em> or elevate your estate&apos;s <em>true heritage</em>.
          </h2>
          <p className="luxury-footer-subtitle">
            Whether reserving an exclusive villa buyout, planning a private retreat, or entrusting your estate to our management collective, our concierge team is at your disposal.
          </p>

          <div className="luxury-footer-cta-row">
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent("Private Stay / Partnership Inquiry - OHRA")}`}
              className="luxury-footer-cta-primary"
            >
              <span>Inquire with Concierge</span>
              <span className="luxury-footer-cta-arrow" aria-hidden="true">»</span>
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-footer-cta-secondary"
            >
              <span>WhatsApp Consultation</span>
              <span className="luxury-footer-arrow-icon" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* 4-Column Luxury Navigation & Details Grid */}
        <div className="luxury-footer-grid">
          {/* Col 1: Brand & Philosophy */}
          <div className="luxury-footer-brand-col">
            <a href="#top" className="luxury-footer-brand-logo" aria-label="OHRA Home">
              OHRA
            </a>
            <p className="luxury-footer-brand-desc">
              A private collection of architectural villas, heritage estates, and boutique hospitality sanctuaries across South India.
            </p>
            <div className="luxury-footer-locations-pill">
              <span className="locations-dot" aria-hidden="true">●</span>
              <span>Kochi • Munnar • Kumarakom • Wayanad</span>
            </div>
          </div>

          {/* Col 2: Portfolio Links */}
          <div className="luxury-footer-col">
            <span className="luxury-footer-col-title">Portfolio</span>
            <ul className="luxury-footer-links">
              <li><a href="#about">About the Collective</a></li>
              <li><a href="#services">Services &amp; Stays</a></li>
              <li><a href="#destinations">Curated Destinations</a></li>
              <li><a href="#experience">The OHRA Standard</a></li>
              <li><a href="#faqs">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Col 3: Sanctuaries */}
          <div className="luxury-footer-col">
            <span className="luxury-footer-col-title">Sanctuaries</span>
            <ul className="luxury-footer-links">
              <li><a href="#destinations">Backwater Sanctuary, Kumarakom</a></li>
              <li><a href="#destinations">Highland Tea Bungalow, Munnar</a></li>
              <li><a href="#destinations">Canopy Nature Retreat, Wayanad</a></li>
              <li><a href="#destinations">Heritage Fort Residence, Kochi</a></li>
              <li><a href="#experience">Private Estate Buyouts</a></li>
            </ul>
          </div>

          {/* Col 4: Direct Inquiries */}
          <div className="luxury-footer-col">
            <span className="luxury-footer-col-title">Direct Inquiries</span>
            <div className="luxury-footer-contact-details">
              <a href={`mailto:${contact.email}`} className="luxury-contact-highlight">
                {contact.email}
              </a>
              <a href={contact.phoneHref} className="luxury-contact-highlight">
                {contact.phone}
              </a>
              <span className="luxury-contact-timing">{contact.officeHours}</span>
              <p className="luxury-contact-response">
                Dedicated concierge responses guaranteed within 24 business hours.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="luxury-footer-bottom-bar">
          <p className="luxury-footer-copyright">
            © 2026 OHRA Hospitality Collective. All rights reserved.
          </p>
          <div className="luxury-footer-legal-links">
            <span>Kerala, South India</span>
            <span>•</span>
            <a href="https://www.ohrahospitality.com" target="_blank" rel="noopener noreferrer">
              www.ohrahospitality.com
            </a>
          </div>
          <a href="#top" className="luxury-footer-top-btn" aria-label="Return to top of page">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

// Backwards compatibility alias
export const HomeFooter = FooterSection;
