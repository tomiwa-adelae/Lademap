import React from "react";
import { Hero } from "./_components/Hero";
import { ServicesGrid } from "./_components/Services";
import { MarketImpact } from "./_components/Impact";
import { ContactSection } from "./_components/Contact";

const page = () => {
  return (
    <div>
      <Hero />
      <ServicesGrid />
      <MarketImpact />
      <ContactSection />
    </div>
  );
};

export default page;
