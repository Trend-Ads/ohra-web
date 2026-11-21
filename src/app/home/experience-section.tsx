interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Dedicated Local Concierge",
    subtitle: "24/7 Bespoke Hosting",
    description:
      "From bespoke backwater culinary journeys and private chef banquets to curated spice trail excursions, your dedicated host attends to every detail with effortless discretion.",
  },
  {
    number: "02",
    title: "Architectural Distinction",
    subtitle: "Verified Heritage & Modern Luxury",
    description:
      "Every residence in the OHRA collective undergoes rigorous vetting for acoustic privacy, artisanal regional craftsmanship, contemporary comforts, and uninterrupted natural surroundings.",
  },
  {
    number: "03",
    title: "Complete Peace of Mind",
    subtitle: "Effortless Ownership & Stays",
    description:
      "For homeowners and NRI investors, we deliver end-to-end estate stewardship, preventive upkeep, and transparent financial reporting. For guests, we guarantee five-star hospitality standards.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="experience-container">
        {/* Top Header Block */}
        <div className="experience-header">
          <div className="experience-badge">
            <span className="experience-badge-dot" aria-hidden="true">✦</span>
            THE OHRA STANDARD
          </div>
          <h2 id="experience-title" className="experience-heading">
            Hospitality designed around <em>uncompromising peace of mind</em>.
          </h2>
          <p className="experience-subheading">
            We bridge the warmth of authentic South Indian heritage with the exacting operational precision of a world-class luxury boutique hotel.
          </p>
        </div>

        {/* 3 Pillars Row */}
        <div className="experience-pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="experience-pillar-card">
              <span className="pillar-number">{pillar.number}</span>
              <div className="pillar-header">
                <span className="pillar-subtitle">{pillar.subtitle}</span>
                <h3 className="pillar-title">{pillar.title}</h3>
              </div>
              <p className="pillar-description">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Subtle Highlight Banner */}
        <div className="experience-highlight-banner">
          <div className="highlight-content">
            <span className="highlight-tag">EXCLUSIVE BUYOUTS &amp; RETREATS</span>
            <h3 className="highlight-title">Seeking an entire estate for private gatherings?</h3>
            <p className="highlight-desc">
              Reserve our private villas for family reunions, executive retreats, or intimate celebrations with tailored hospitality and total exclusivity.
            </p>
          </div>
          <div className="highlight-cta-wrap">
            <a href="#contact" className="highlight-cta-btn">
              <span>Plan a Private Buyout</span>
              <span className="highlight-cta-arrow" aria-hidden="true">»</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
