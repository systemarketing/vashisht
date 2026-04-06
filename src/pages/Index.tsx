import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ProgramSection from "@/components/ProgramSection";
import LeadersSection from "@/components/LeadersSection";
import VashishtSection from "@/components/VashishtSection";
import RoerichSection from "@/components/RoerichSection";
import DussehraSection from "@/components/DussehraSection";
import AccommodationSection from "@/components/AccommodationSection";
import GallerySection from "@/components/GallerySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactCTASection from "@/components/ContactCTASection";
import LocationBlock from "@/components/LocationBlock";

const Index = () => {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <ProgramSection />
      <LeadersSection />
      <LocationBlock />
      <AccommodationSection />
      <GallerySection />
      <PricingSection />
      <FAQSection />
      <ContactCTASection />
      <footer className="py-12 bg-card border-t border-border text-center">
        <p className="font-body text-muted-foreground text-sm">
          © 2026 Аштанга-тур в Гималаи. Все права защищены.
        </p>
      </footer>
    </main>
  );
};

export default Index;
