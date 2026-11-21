import { benefits } from "./content";
import { SectionHeading } from "./section-heading";

export function ApproachSection() {
  return (
    <section id="approach" className="home-section" aria-labelledby="approach-title">
      <div className="home-container">
        <SectionHeading
          id="approach-title"
          label="Our Approach"
          title="Why property owners &amp; guests choose OHRA"
        >
          We operate at the convergence of high-touch hospitality and institutional discipline, protecting your capital while providing uncompromised owner clarity.
        </SectionHeading>

        <div className="home-benefit-grid">
          {benefits.map(({ id, title, subtitle, description, stat, statLabel }, idx) => (
            <article className="home-benefit-card" key={id}>
              <div className="home-benefit-top">
                <span className="home-benefit-index">0{idx + 1}</span>
                {stat && (
                  <div className="home-benefit-stat-badge">
                    <span className="home-benefit-stat-value">{stat}</span>
                    <span className="home-benefit-stat-label">{statLabel}</span>
                  </div>
                )}
              </div>
              <p className="home-benefit-subtitle">{subtitle}</p>
              <h3 className="home-benefit-title">{title}</h3>
              <p className="home-benefit-description">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
