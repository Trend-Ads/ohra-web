import Image from "next/image";

const aboutStats = [
  { value: "2012", label: "The year we were born" },
  { value: "72", label: "Communities covered" },
  { value: "164", label: "Numbers of employees" },
  { value: "2637", label: "Registered buyers" },
];

export function AboutSection() {
  return (
    <section id="about" className="about-editorial-section" aria-labelledby="about-title">
      <div className="about-editorial-container">
        {/* Top Header Row: Left "About Us", Right Editorial Statement & Stats */}
        <div className="about-editorial-header">
          <div className="about-editorial-label" id="about-title">
            About Us
          </div>
          <div className="about-editorial-content">
            <h2 className="about-editorial-heading">
              Our agency handles <em>all types</em> of property transactions across South India, offering each client a <em>seamless</em> and <em>personalized</em> experience.
            </h2>

            <div className="about-editorial-stats">
              {aboutStats.map((item) => (
                <div key={item.label} className="about-stat-item">
                  <span className="about-stat-value">{item.value}</span>
                  <span className="about-stat-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Staggered 4-Card Gallery */}
        <div className="about-staggered-gallery">
          {/* Card 1: Elevated Architectural Villa */}
          <div className="about-gallery-card about-card-1">
            <Image
              src="/about-villa-1.webp"
              alt="Contemporary architectural luxury villa on hillside stone foundation"
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
              className="about-card-img"
            />
          </div>

          {/* Card 2: Minimalist Geometric White Villa (Shifted down) */}
          <div className="about-gallery-card about-card-2">
            <Image
              src="/about-villa-2.webp"
              alt="Geometric minimalist modern villa with glass balconies and lawn"
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
              className="about-card-img"
            />
          </div>

          {/* Card 3: Feature Card with Dark Designer Interior, Title & Arrow Button */}
          <div className="about-gallery-card about-card-3 about-card-feature">
            <Image
              src="/about-interior.webp"
              alt="Designer apartment interior with modern lounge chair and ambient lighting"
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
              className="about-card-img"
            />
            <div className="about-feature-overlay">
              <span className="about-feature-title">
                Designer<br />apartments
              </span>
              <a href="#services" className="about-feature-arrow" aria-label="Explore designer apartments">
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Card 4: Modern Timber and Stone Villa Entrance */}
          <div className="about-gallery-card about-card-4">
            <Image
              src="/about-villa-3.webp"
              alt="Luxury timber and stone villa entrance with floor-to-ceiling glass"
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
              className="about-card-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
