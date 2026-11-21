import { expansionCities, locations } from "./content";
import { SectionHeading } from "./section-heading";

export function LocationsSection() {
  return (
    <section id="locations" className="home-section home-section-light" aria-labelledby="locations-title">
      <div className="home-container">
        <SectionHeading
          id="locations-title"
          label="Destinations &amp; Footprint"
          title="Rooted in Kerala. Expanding Across South India."
        >
          From the vibrant waterfronts of Kochi to the mist-wrapped tea hills of Munnar and the tranquil backwaters of Kumarakom, we manage standout properties across South India’s most prized locales.
        </SectionHeading>

        {/* Active Locations Grid */}
        <div className="home-location-grid">
          {locations.map((loc) => (
            <article className="home-location-card" key={loc.name}>
              <div className="home-location-card-top">
                <span className="home-location-status-pill">{loc.status}</span>
                <span className="home-location-type-tag">{loc.type}</span>
              </div>
              <h3 className="home-location-city-name">{loc.name}</h3>
              <p className="home-location-tagline">{loc.tagline}</p>
              <p className="home-location-description">{loc.description}</p>

              <div className="home-location-feature-tags">
                {loc.features.map((feature) => (
                  <span key={feature} className="home-location-tag">
                    {feature}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Expansion Strip */}
        <div className="home-expansion-strip">
          <div>
            <span className="home-expansion-badge">Next Chapter</span>
            <h4 className="home-expansion-title">Expanding into Major South Indian Metro &amp; Leisure Hubs</h4>
            <p className="home-expansion-text">
              We are actively accepting strategic owner partnerships and boutique listings across key metropolitan and holiday destinations:
            </p>
          </div>
          <div className="home-expansion-cities-list">
            {expansionCities.map((city) => (
              <span key={city} className="home-expansion-city-tag">
                <span className="home-city-pin" aria-hidden="true">📍</span> {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
