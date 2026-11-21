import { process } from "./content";
import { SectionHeading } from "./section-heading";

export function ProcessSection() {
  return (
    <section id="process" className="home-section home-section-dark" aria-labelledby="process-title">
      <div className="home-container">
        <div className="home-process-header">
          <SectionHeading
            id="process-title"
            label="Onboarding Process"
            title="How we take on and steward your property"
          >
            A frictionless, 3-step structured journey from initial yield evaluation to live booking and full-cycle asset maintenance.
          </SectionHeading>
        </div>

        <div className="home-process-timeline">
          {process.map(({ step, phase, title, description, highlights }) => (
            <div className="home-process-card" key={step}>
              <div className="home-process-card-header">
                <span className="home-process-step-pill">{step}</span>
                <span className="home-process-phase-tag">{phase}</span>
              </div>

              <h3 className="home-process-card-title">{title}</h3>
              <p className="home-process-card-desc">{description}</p>

              <div className="home-process-checklist">
                {highlights.map((h) => (
                  <div key={h} className="home-process-check-item">
                    <span className="home-process-check-mark" aria-hidden="true">✦</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="home-process-banner">
          <div className="home-process-banner-content">
            <h4>Ready to onboard your property?</h4>
            <p>Our team conducts on-site valuation visits across Kerala within 48 hours of your request.</p>
          </div>
          <a className="home-process-banner-btn" href="#contact">
            Request an Assessment <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
