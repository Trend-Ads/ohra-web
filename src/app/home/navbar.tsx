"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-fixed-container">
      <header className={`hero-header ${isScrolled ? "hero-header-floating" : ""}`}>
        <Link className="brand" href="/" aria-label="OHRA home">
          OHRA
        </Link>
        <nav className="hero-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#destinations">Destinations</a>
          <a href="#experience">Experience</a>
          <a href="#faqs">FAQs</a>
        </nav>
        <a className="login" href="#contact">Contact</a>
      </header>
    </div>
  );
}
