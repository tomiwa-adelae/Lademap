import React from "react";
import { Hero } from "./_components/Hero";
import { ContactForm } from "./_components/ContactForm";
import { OfficeLocation } from "./_components/OfficeLocation";

const page = () => {
  return (
    <div>
      <Hero />
      <ContactForm />
      <OfficeLocation />
    </div>
  );
};

export default page;
