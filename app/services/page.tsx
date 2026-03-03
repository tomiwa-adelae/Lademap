import React from "react";
import { Hero } from "./_components/Hero";
import { ServiceDetails } from "./_components/ServiceDetails";
import { Workflow } from "./_components/Workflow";
import { Sectors } from "./_components/Sectors";

const page = () => {
  return (
    <div>
      <Hero />
      <ServiceDetails />
      <Workflow />
      <Sectors />
    </div>
  );
};

export default page;
