import { Navbar } from "./home/navbar";
import { HeroSection } from "./home/hero-section";
import {
  AboutSection,
  DestinationsSection,
  ExperienceSection,
  FaqSection,
  HomeFooter,
  ServicesSection,
} from "./home/home-sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="landing">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DestinationsSection />
        <ExperienceSection />
        <FaqSection />
      </main>
      <HomeFooter />
    </>
  );
}
