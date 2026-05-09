import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { PortfolioSection } from "@/components/projects/PortfolioSection";
import { AchievementsSection } from "@/components/achievements/AchievementsSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { FocusAreasSection } from "@/components/focus/FocusAreasSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <AchievementsSection />
        <ServicesSection />
        <ContactSection />
        <FocusAreasSection />
      </main>
      <Footer />
    </>
  );
}
