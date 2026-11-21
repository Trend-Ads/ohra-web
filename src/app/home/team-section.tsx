import { team } from "./content";
import { SectionHeading } from "./section-heading";

export function TeamSection() {
  return (
    <section id="team" className="home-section home-section-light" aria-labelledby="team-title">
      <div className="home-container">
        <SectionHeading
          id="team-title"
          label="Our Collective"
          title="Meet the team steering OHRA"
        >
          A seasoned coalition of hospitality directors, growth strategists, design leads, and local market specialists dedicated to your property&apos;s success.
        </SectionHeading>

        <div className="home-team-grid">
          {/* Founder Featured Card */}
          <article className="home-team-card home-team-founder-card">
            <div className="home-team-card-top">
              <div className="home-avatar-monogram">DN</div>
              <span className="home-team-division-tag">Executive Leadership</span>
            </div>
            <h3 className="home-team-name">
              <a href="#founder">Devika Nair</a>
            </h3>
            <p className="home-team-role">Founder &amp; CEO</p>
            <p className="home-team-bio">
              Orchestrates OHRA’s overarching strategic trajectory, investor partnerships, and hospitality philosophy.
            </p>
          </article>

          {/* Core Team Members */}
          {team.map(({ name, role, division, description, initials }) => (
            <article key={name} className="home-team-card">
              <div className="home-team-card-top">
                <div className="home-avatar-monogram">{initials}</div>
                <span className="home-team-division-tag">{division}</span>
              </div>
              <h3 className="home-team-name">{name}</h3>
              <p className="home-team-role">{role}</p>
              <p className="home-team-bio">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
