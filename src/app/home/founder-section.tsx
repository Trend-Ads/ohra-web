import { SectionHeading } from "./section-heading";

export function FounderSection() {
  return (
    <section id="founder" className="home-section" aria-labelledby="founder-title">
      <div className="home-container">
        <div className="home-founder-grid">
          {/* Left Column: Editorial Quote & Identity */}
          <div className="home-founder-left">
            <SectionHeading
              id="founder-title"
              label="Leadership Spotlight"
              title="Devika Nair"
            >
              Founder &amp; Chief Executive Officer | OHRA
            </SectionHeading>

            <blockquote className="home-founder-quote">
              <span className="home-quote-mark" aria-hidden="true">“</span>
              <p>
                Building businesses is not just about managing assets; it’s about creating value, building trust, and turning possibilities into lasting experiences.
              </p>
            </blockquote>

            <div className="home-founder-badges">
              <div className="home-founder-badge-item">
                <strong>10+ Years</strong>
                <span>Strategic Leadership &amp; Growth</span>
              </div>
              <div className="home-founder-badge-item">
                <strong>Cross-Sector</strong>
                <span>Hospitality, Operations &amp; Real Estate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div>
            <div className="home-bio-card">
              <h4 className="home-bio-heading">The Vision Behind OHRA</h4>
              <p className="home-bio-paragraph">
                Devika Nair is an entrepreneur and business strategist with over a decade of executive experience spanning business development, sales strategy, operations, client relationship management, and multi-market expansion. Across industries, she has forged pivotal partnerships, engineered robust growth trajectories, and nurtured high-performing teams.
              </p>
              <p className="home-bio-paragraph">
                She founded OHRA to dismantle the friction between impersonal property maintenance and luxury guest hospitality. By fusing modern operational discipline, transparent reporting technology, and deeply personalised hospitality, she enables property owners to unlock the true potential of their real estate while gifting guests with unforgettable stays.
              </p>
              <p className="home-bio-paragraph">
                At the helm of OHRA, Devika orchestrates corporate vision, business development alliances, portfolio expansion, and hospitality benchmarks with an unwavering commitment to authenticity, trust, and lasting value.
              </p>

              <div className="home-bio-footer">
                <a className="home-founder-connect-btn" href="#contact">
                  Connect with Leadership <span aria-hidden="true">&nearr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
