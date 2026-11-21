import Image from "next/image";

interface DestinationItem {
  id: string;
  name: string;
  region: string;
  type: string;
  description: string;
  image: string;
  specs: string;
}

const destinations: DestinationItem[] = [
  {
    id: "kumarakom",
    name: "The Backwater Sanctuary",
    region: "Kumarakom",
    type: "Waterfront Private Villa",
    description: "Serene lagoon-front estate with private boat dock, traditional teak architecture, and sunset deck.",
    image: "/service-nri.webp",
    specs: "4 Suites • Private Plunge Pool • Dedicated Butler",
  },
  {
    id: "munnar",
    name: "Highland Tea Bungalow",
    region: "Munnar",
    type: "Estate Manor",
    description: "Perched amidst rolling mist and organic tea plantations, featuring stone hearths and panoramic valley views.",
    image: "/service-sejour.webp",
    specs: "5 Bedrooms • Colonial Veranda • Private Chef",
  },
  {
    id: "wayanad",
    name: "Canopy Nature Retreat",
    region: "Wayanad",
    type: "Forest Villa",
    description: "Modern minimalist timber and glass pavilion embedded in ancient rainforest canopy with cascading natural stream.",
    image: "/about-villa-2.webp",
    specs: "3 Suites • Infinity Forest Deck • Wellness Pavilion",
  },
  {
    id: "kochi",
    name: "Heritage Fort Residence",
    region: "Kochi",
    type: "Boutique Heritage Suite",
    description: "Restored Dutch-colonial sanctuary with courtyards, hand-carved woodwork, and walking access to art quarters.",
    image: "/about-villa-1.webp",
    specs: "3 Suites • Inner Courtyard • Curated Art Collection",
  },
];

export function DestinationsSection() {
  return (
    <section id="destinations" className="destinations-section" aria-labelledby="destinations-title">
      <div className="destinations-container">
        {/* Header Block */}
        <div className="destinations-header">
          <div className="destinations-badge">
            <span className="destinations-badge-dot" aria-hidden="true">✦</span>
            CURATED DESTINATIONS
          </div>
          <h2 id="destinations-title" className="destinations-heading">
            Where <em>tranquility</em> meets <em>architectural excellence</em>.
          </h2>
          <p className="destinations-subheading">
            A hand-picked portfolio of private villas, heritage estates, and nature sanctuaries across Kerala&apos;s most sought-after landscapes.
          </p>
        </div>

        {/* 4-Card Luxury Grid */}
        <div className="destinations-grid">
          {destinations.map((dest) => (
            <article key={dest.id} className="destination-card">
              <div className="destination-media">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="destination-img"
                />
                <div className="destination-region-tag">{dest.region}</div>
              </div>
              <div className="destination-info">
                <span className="destination-type">{dest.type}</span>
                <h3 className="destination-name">{dest.name}</h3>
                <p className="destination-desc">{dest.description}</p>
                <div className="destination-specs">
                  <span>{dest.specs}</span>
                  <a href="#contact" className="destination-inquire-link" aria-label={`Inquire about ${dest.name}`}>
                    Inquire ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
