export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  details: string;
  features: string[];
  badge: string;
}

export const services: ServiceItem[] = [
  {
    id: "residential",
    title: "Residential Property Management",
    tagline: "End-to-end long-term asset stewardship",
    description: "Rent out your home long-term with one dedicated team handling the day-to-day operations from tenant vetting to routine maintenance.",
    details: "Marketing, tenant sourcing, inspections and financial reporting",
    features: [
      "Rigorous background & credit checks for all tenants",
      "Quarterly digital inspection audits with photographic logs",
      "Automated rent remittance & itemized expense statements",
      "Preventive upkeep & 24/7 on-call emergency repairs",
    ],
    badge: "Long-Term Leasing",
  },
  {
    id: "sejour",
    title: "Séjour Boutique Stays",
    tagline: "Curated vacation rentals & luxury hosting",
    description: "Distinctive properties paired with personalised hospitality, 5-star guest services, and thoughtfully curated holiday experiences.",
    details: "Boutique rentals, guest hosting and curated experiences",
    features: [
      "Dynamic algorithmic pricing across Airbnb, Booking & direct channels",
      "High-thread-count hotel linen, premium toiletries & welcome hampers",
      "24/7 dedicated concierge & local experiences curator",
      "Professional interior staging & architectural 4K photography",
    ],
    badge: "Boutique Hospitality",
  },
  {
    id: "nri",
    title: "NRI Property Care",
    tagline: "Transparent overseas ownership & passive income",
    description: "Look after your South Indian property from abroad with zero friction, live digital updates, and proactive rental yield management.",
    details: "Digital inspections, tenant management, rent collection and rental setup",
    features: [
      "Virtual video inspections & scheduled owner walkthroughs",
      "Tax filing coordination, municipal compliance & utility management",
      "Furnishing & renovation oversight for vacant properties",
      "Direct remittance to NRE/NRO accounts with full compliance",
    ],
    badge: "Global Indian Care",
  },
  {
    id: "commercial",
    title: "Commercial Property Management",
    tagline: "Institutional care for retail & corporate spaces",
    description: "Comprehensive day-to-day management for corporate offices, boutique retail storefronts, and mixed-use commercial assets.",
    details: "Lease administration, tenant relations, rent collection, maintenance planning and safety compliance",
    features: [
      "Structured commercial lease drafting & escalation tracking",
      "HVAC, fire safety & electrical facility management audits",
      "Vendor contract negotiations & operational cost minimization",
      "High-retention tenant relationship management",
    ],
    badge: "Corporate & Retail",
  },
];

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  subtitle: string;
  stat?: string;
  statLabel?: string;
}

export const benefits: BenefitItem[] = [
  {
    id: "team",
    title: "One accountable team",
    subtitle: "Single Point of Contact",
    description: "A single dedicated relationship manager for owners and a consistent, five-star standard of care for guests. No third-party confusion.",
    stat: "100%",
    statLabel: "Accountability",
  },
  {
    id: "pricing",
    title: "Transparent pricing",
    subtitle: "Zero Hidden Markups",
    description: "Clear fee structures and itemized statements help you plan your returns and understand every operational expense with confidence.",
    stat: "100%",
    statLabel: "Clear Invoicing",
  },
  {
    id: "design",
    title: "Design-led care",
    subtitle: "Architectural Presentation",
    description: "Thoughtful presentation shapes everything we touch—from interior styling and curated guest spaces to bespoke owner financial dossiers.",
    stat: "4K",
    statLabel: "Visual Staging",
  },
  {
    id: "local",
    title: "Local expertise",
    subtitle: "Deep Kerala Footprint",
    description: "Our Kochi headquarters and local vendor networks give us firsthand knowledge of South India’s premier property and hospitality markets.",
    stat: "5+",
    statLabel: "Target Markets",
  },
];

export interface ProcessItem {
  step: string;
  title: string;
  phase: string;
  description: string;
  highlights: string[];
}

export const process: ProcessItem[] = [
  {
    step: "01",
    phase: "Discovery & Yield Audit",
    title: "Onboarding & Strategy",
    description: "We assess your property in person, analyze historical yields, discuss your financial objectives, and structure a custom management agreement.",
    highlights: ["In-person property assessment", "Comparative rental yield forecast", "Bespoke management roadmap"],
  },
  {
    step: "02",
    phase: "Interior & Marketing Setup",
    title: "Preparation & Staging",
    description: "Our creative team handles interior staging, deep cleaning, professional architectural photography, and multi-channel listing publication.",
    highlights: ["Interior styling & deep cleaning", "Architectural 4K media capture", "Multi-channel distribution launch"],
  },
  {
    step: "03",
    phase: "Turnkey Operations",
    title: "Management & Growth",
    description: "We oversee guest hosting or tenant relations, execute periodic inspections, handle maintenance proactively, and deliver transparent monthly payouts.",
    highlights: ["24/7 guest & tenant concierge", "Preventive facility maintenance", "Monthly digital financial dossiers"],
  },
];

export interface LocationItem {
  name: string;
  type: string;
  tagline: string;
  description: string;
  features: string[];
  status: "Active" | "Expanding";
}

export const locations: LocationItem[] = [
  {
    name: "Kochi",
    type: "Headquarters & Primary Hub",
    tagline: "Urban Waterfront & NRI Property Hub",
    description: "Our core base for residential leasing, NRI remote management, and luxury waterfront boutique stays in Fort Kochi, Marine Drive & Kakkanad.",
    features: ["Long-term leasing", "NRI concierge", "Luxury waterfront stays"],
    status: "Active",
  },
  {
    name: "Munnar",
    type: "Hill-Station Portfolio",
    tagline: "Misty Tea Plantations & Highland Villas",
    description: "High-altitude boutique holiday homes and private tea estate bungalows offering cool climes and curated mountain experiences.",
    features: ["Private plantation villas", "Estate dining", "Trek curation"],
    status: "Active",
  },
  {
    name: "Kumarakom",
    type: "Backwater Sanctuaries",
    tagline: "Serene Lakefront & Heritage Waterfronts",
    description: "Quiet lakefront retreats and restored heritage nalukettu homes nestled along the tranquil waters of Lake Vembanad.",
    features: ["Lakefront heritage homes", "Houseboat coordination", "Ayurvedic retreats"],
    status: "Active",
  },
  {
    name: "Wayanad",
    type: "Rainforest Nature Escapes",
    tagline: "Canopy Retreats & Bio-Diverse Havens",
    description: "Eco-luxury jungle villas and secluded plantation stays situated deep within the Western Ghats rainforest belt.",
    features: ["Rainforest chalets", "Wildlife trails", "Eco-conscious operations"],
    status: "Active",
  },
];

export const expansionCities = ["Bengaluru", "Chennai", "Goa", "Pune", "Hyderabad"];

export interface TeamMember {
  name: string;
  role: string;
  division: string;
  description: string;
  initials: string;
}

export const team: TeamMember[] = [
  {
    name: "Vyshak",
    role: "Co-Founder & Director",
    division: "Operations & Governance",
    description: "Contributes to business leadership, operational governance, and the strategic scaling of OHRA’s hospitality infrastructure.",
    initials: "VY",
  },
  {
    name: "Jayakrishnan",
    role: "Partner, Business Development & Sales",
    division: "Growth & Client Acquisition",
    description: "Builds strategic developer opportunities, develops institutional partnerships, and leads property owner acquisitions across regions.",
    initials: "JK",
  },
  {
    name: "Badhusha",
    role: "Partner, Client Relations & Partnerships",
    division: "Client Relations & Alliances",
    description: "Cultivates lasting property owner relationships, handles high-value stakeholder accounts, and strengthens strategic business alliances.",
    initials: "BA",
  },
  {
    name: "Harikrishnan",
    role: "Head of Guest Experience & Hospitality",
    division: "Hospitality & Guest Standards",
    description: "Oversees ground hospitality operations, concierge standards, and ensures five-star guest satisfaction across all Séjour stays.",
    initials: "HK",
  },
  {
    name: "Neeraj Sudheer",
    role: "Chief Marketing Officer (CMO)",
    division: "Brand Strategy & Growth",
    description: "Leads omnichannel marketing, brand elevation, and creative campaigns at OHRA while concurrently serving as CEO of Trend Ads.",
    initials: "NS",
  },
  {
    name: "Bhavya",
    role: "Creative Director & Design Lead",
    division: "Aesthetic Direction & Interior Staging",
    description: "Shapes OHRA’s visual identity, interior staging standards, and architectural design experience across every touchpoint.",
    initials: "BH",
  },
];

export const stats = [
  { value: "100%", label: "Turnkey Accountability", detail: "Single point of contact for every asset" },
  { value: "4+", label: "Key Kerala Destinations", detail: "Kochi, Munnar, Kumarakom & Wayanad" },
  { value: "24/7", label: "Concierge & Support", detail: "Proactive care for owners and guests alike" },
  { value: "5+", label: "Expansion Cities", detail: "Bengaluru, Chennai, Goa, Pune, Hyderabad" },
];

export const contact = {
  email: "ohrahospitality@gmail.com",
  phone: "+91 89216 85805",
  phoneHref: "tel:+918921685805",
  whatsappHref: "https://wa.me/918921685805?text=Hi%20OHRA%2C%20I%20would%20like%20to%20inquire%20about%20your%20property%20management%20services.",
  address: "Kochi, Kerala, India",
  website: "www.ohrahospitality.com",
  officeHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
};
