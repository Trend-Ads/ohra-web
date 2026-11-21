import Image from "next/image";

const filters = [
  { name: "city", label: "Location", placeholder: "Select Your City", options: ["Kochi", "Munnar", "Kumarakom", "Wayanad"] },
  { name: "type", label: "Property Type", placeholder: "Choose Property Type", options: ["Apartment", "Townhouse", "Villa"] },
  { name: "price", label: "Price Range", placeholder: "Choose Price Range", options: ["Under ₹50 lakh", "₹50 lakh to ₹1 crore", "Above ₹1 crore"] },
];

export function HeroSection() {
  return (
    <>
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-scene">
          <Image className="hero-photo" src="/haven-homes.webp" alt="" fill preload sizes="100vw" />
          <h1 id="hero-title" className="hero-title">
            Find Your<br />Sanctuary
          </h1>
          <Image className="hero-photo hero-foreground" src="/haven-homes.webp" alt="" fill sizes="100vw" />
        </div>

        <div className="hero-header-placeholder" aria-hidden="true" />

        <div className="hero-content">
          <p className="hero-caption">Buy, Rent, or Sell – Simplifying Your<br className="caption-break" /> Real Estate Journey</p>
          <form id="property-search" className="property-search" action="#property-results">
            {filters.map(({ name, label, placeholder, options }) => (
              <label className="property-field" key={name}>
                <span>{label}</span>
                <select name={name} defaultValue="">
                  <option value="">{placeholder}</option>
                  {options.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
            ))}
            <button type="submit">Browse Properties</button>
          </form>
        </div>
      </section>
      <section id="property-results" className="property-results" aria-label="Property results">
        Property listings are coming soon. <a href="#contact">Contact OHRA for availability</a>.
      </section>
    </>
  );
}
