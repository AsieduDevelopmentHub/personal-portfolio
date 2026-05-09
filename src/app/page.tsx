import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { ContactCTA } from "@/components/contact/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedProjects />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
