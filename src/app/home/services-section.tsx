"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface DialCard {
  id: string;
  title: string;
  location: string;
  image: string;
}

const dialCards: DialCard[] = [
  { id: "kochi", title: "Waterfront Residence", location: "Kochi", image: "/service-residential.webp" },
  { id: "munnar", title: "Highland Tea Villa", location: "Munnar", image: "/service-sejour.webp" },
  { id: "kumarakom", title: "Backwater Sanctuary", location: "Kumarakom", image: "/service-nri.webp" },
  { id: "heritage", title: "Heritage Nalukettu", location: "Kochi", image: "/about-villa-1.webp" },
  { id: "wayanad", title: "Canopy Nature Retreat", location: "Wayanad", image: "/about-villa-2.webp" },
  { id: "commercial", title: "Boutique Enterprise", location: "Kochi", image: "/service-commercial.webp" },
  { id: "staging", title: "Designer Interior Suite", location: "Kerala", image: "/service-staging.webp" },
];

const dialStats = [
  { value: "12+", label: "Years of Experience" },
  { value: "25+", label: "Curated Stays & Hubs" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "1:1", label: "Personalized Support" },
];

export function ServicesSection() {
  const [centerIndex, setCenterIndex] = useState(3); // Start with middle card active
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = dialCards.length;
  // Angular step between cards in degrees
  const angleStep = 20;

  const nextCard = useCallback(() => {
    setCenterIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevCard = useCallback(() => {
    setCenterIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Gentle auto-rotation
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextCard();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextCard]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextCard();
      else prevCard();
    }
    touchStartX.current = null;
  };

  // Generate tick marks for the radial gauge arc
  const ticks = [];
  const startAngle = -75;
  const endAngle = 75;
  const tickStep = 1.4;
  for (let a = startAngle; a <= endAngle; a += tickStep) {
    const isMajor = Math.abs(a % 10) < 0.8;
    ticks.push({ angle: a, isMajor });
  }

  return (
    <section
      id="services"
      className="dial-arc-section"
      aria-labelledby="dial-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="dial-arc-container">
        {/* SVG Radial Dial Gauge with Tick Marks */}
        <div className="dial-gauge-track" aria-hidden="true">
          <svg viewBox="0 0 1200 640" className="dial-gauge-svg" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(600, 610)">
              {ticks.map(({ angle, isMajor }, i) => {
                const rad = (angle * Math.PI) / 180;
                const r1 = isMajor ? 475 : 482;
                const r2 = 500;
                const x1 = Math.sin(rad) * r1;
                const y1 = -Math.cos(rad) * r1;
                const x2 = Math.sin(rad) * r2;
                const y2 = -Math.cos(rad) * r2;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={isMajor ? "#969082" : "#cfc9bc"}
                    strokeWidth={isMajor ? 1.8 : 1}
                  />
                );
              })}
            </g>
          </svg>
        </div>

        {/* Orbiting Cards Layer along the Arc */}
        <div className="dial-orbit-stage">
          {dialCards.map((card, idx) => {
            // Normalized offset from active center card (-3 to +3)
            const rawDiff = (idx - centerIndex + total) % total;
            const offset = rawDiff > Math.floor(total / 2) ? rawDiff - total : rawDiff;
            const angle = offset * angleStep;
            const isCenter = offset === 0;

            return (
              <div
                key={card.id}
                className={`dial-card ${isCenter ? "dial-card-active" : ""}`}
                style={
                  {
                    "--dial-angle": `${angle}deg`,
                    "--dial-offset": offset,
                  } as React.CSSProperties
                }
                onClick={() => setCenterIndex(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setCenterIndex(idx);
                }}
                aria-label={`View ${card.title} in ${card.location}`}
              >
                <div className="dial-card-inner">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 600px) 130px, 190px"
                    className="dial-card-photo"
                  />
                  <div className="dial-card-caption">
                    <span className="dial-card-title">{card.title}</span>
                    <span className="dial-card-loc">{card.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Content Box Inside the Concave Arc */}
        <div className="dial-center-content">
          <div className="dial-badge">
            <span className="dial-badge-dot" aria-hidden="true">✦</span>
            ABOUT OHRA
          </div>

          <h2 id="dial-heading" className="dial-heading">
            Helping people find calm,<br />clarity, and confidence
          </h2>

          <p className="dial-description">
            We believe meaningful care starts with listening. Our goal is to help our clients succeed with zero stress, complete transparency, and five-star hospitality.
          </p>

          <a href="#contact" className="dial-cta-btn">
            <span>Learn More About Us</span>
            <span className="dial-cta-arrow" aria-hidden="true">»</span>
          </a>
        </div>

        {/* Bottom Metrics / Stats Row */}
        <div className="dial-stats-row">
          {dialStats.map((stat, i) => (
            <div key={stat.label} className={`dial-stat-item ${i < dialStats.length - 1 ? "dial-stat-divider" : ""}`}>
              <span className="dial-stat-num">{stat.value}</span>
              <span className="dial-stat-desc">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
