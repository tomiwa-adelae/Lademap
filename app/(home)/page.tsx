import { Hero } from "./_components/Hero";
import { AboutSection } from "./_components/About";
import { ServicesGrid } from "./_components/Services";
import { QuoteCTA } from "./_components/QuoteCTA";
import { MarketImpact } from "./_components/Impact";
import { ContactSection } from "./_components/Contact";

const page = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesGrid />
      <QuoteCTA />
      <MarketImpact />
      <ContactSection />
    </div>
  );
};

export default page;
