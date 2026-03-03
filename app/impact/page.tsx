import React from "react";
import { Hero } from "./_components/Hero";
import { ImpactStats } from "./_components/ImpactStats";
import { StrategicImpact } from "./_components/StrategicImpact";
import { NetworkAdvantage } from "./_components/NetworkAdvantage";

const page = () => {
  return (
    <div>
      <Hero />
      <ImpactStats />
      <StrategicImpact />
      <NetworkAdvantage />
    </div>
  );
};

export default page;
