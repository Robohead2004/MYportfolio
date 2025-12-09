import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { OneProfileSection } from "@/components/sections/OneProfileSection";
import { FreelancersSection } from "@/components/sections/FreelancersSection";
import { TeachingSection } from "@/components/sections/TeachingSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OneProfileSection />
      <FreelancersSection />
      <TeachingSection />
      <WorksSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
