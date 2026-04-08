import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ProgramSection from "@/components/ProgramSection";
import LeadersSection from "@/components/LeadersSection";
import VashishtSection from "@/components/VashishtSection";
import RoerichSection from "@/components/RoerichSection";
import DussehraSection from "@/components/DussehraSection";
import AccommodationSection from "@/components/AccommodationSection";
import WorkshopSection from "@/components/WorkshopSection";
import GallerySection from "@/components/GallerySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactCTASection from "@/components/ContactCTASection";
import QuoteSection from "@/components/QuoteSection";
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
      <WorkshopSection />
      <GallerySection />
      <PricingSection />
      <FAQSection />
      <ContactCTASection />
      <QuoteSection />
      <footer className="py-12 bg-card border-t border-border text-center flex flex-col items-center gap-3">
        <img src={logoSvg} alt="himalayatour.ru" className="h-14 w-auto" />
        <a href="https://systemarketing.ru/" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground text-sm hover:text-primary transition-colors">
          Маркетинг и дизайн: systemarketing.ru
        </a>
      </footer>
    </main>
  );
};

export default Index;
