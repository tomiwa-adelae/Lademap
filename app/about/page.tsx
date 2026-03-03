import React from "react";
import { Hero } from "./_components/Hero";
import { Philosophy } from "./_components/Philosophy";
import { CoreIdentity } from "./_components/CoreIdentity";

const page = () => {
  return (
    <div>
      <Hero />
      <Philosophy />
      <CoreIdentity />
    </div>
  );
};

export default page;
