import React from "react";
import { Hero } from "./_components/Hero";
import { Sustainability } from "./_components/Sustainability";
import { TrackingUI } from "./_components/TrackingUI";

const page = () => {
  return (
    <div>
      <Hero />
      <Sustainability />
      <TrackingUI />
    </div>
  );
};

export default page;
