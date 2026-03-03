"use client";

import React from "react";
import {
  IconShip,
  IconFileCertificate,
  IconRoute,
  IconBuildingWarehouse,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Freight Forwarding",
    description:
      "Safe, timely, and cost-effective movement of goods by air, sea, and land across global borders.",
    icon: IconShip,
    tag: "Global Reach",
  },
  {
    title: "Warehousing & Distribution",
    description:
      "Modern storage facilities and streamlined distribution networks to keep your supply chains agile.",
    icon: IconBuildingWarehouse,
    tag: "Secure Storage",
  },
  {
    title: "Customs Brokerage",
    description:
      "Smooth and hassle-free navigation through complex international customs regulations and compliance.",
    icon: IconFileCertificate,
    tag: "100% Compliant",
  },
  {
    title: "Supply Chain Management",
    description:
      "Tailored solutions that optimize procurement, inventory, and delivery for maximum efficiency.",
    icon: IconRoute,
    tag: "Optimization",
  },
];

export const ServicesGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-sm font-semibold text-primary uppercase mb-2">
            Our Core Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
            Integrated Logistics <br className="hidden lg:block" />
            <span className="text-muted-foreground">for a Connected World</span>
          </h3>
        </div>

        {/* The Grid */}
        <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-px bg-slate-200 border border-slate-200 overflow-hidden rounded-2xl">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ backgroundColor: "#f8fafc" }}
                className="bg-white p-6 md:p-10 group transition-all cursor-default"
              >
                <div className="mb-8 p-3 inline-block rounded-xl bg-blue-50 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="group-hover:text-white text-primary" />
                </div>

                <p className="text-[10px] font-semibold uppercase text-primary mb-2">
                  {service.tag}
                </p>

                <h4 className="text-2xl font-black uppercase mb-2.5">
                  {service.title}
                </h4>

                <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                  {service.description}
                </p>

                <div className="mt-8 h-1 w-0 bg-primary hidden md:block group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
