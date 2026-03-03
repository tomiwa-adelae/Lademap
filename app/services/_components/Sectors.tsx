"use client";

import { motion } from "framer-motion";
import {
  IconContainer,
  IconBuildingStore,
  IconTractor,
  IconDroplet,
} from "@tabler/icons-react";

const sectors = [
  {
    name: "Oil & Gas",
    description:
      "Specialized logistics for energy exploration, equipment mobilization, and offshore support.",
    icon: <IconDroplet size={32} />,
  },
  {
    name: "FMCG & Retail",
    description:
      "High-speed distribution and warehousing for fast-moving consumer goods and retail chains.",
    icon: <IconBuildingStore size={32} />,
  },
  {
    name: "Construction",
    description:
      "End-to-end transport for raw materials, heavy machinery, and site-specific infrastructure.",
    icon: <IconContainer size={32} />,
  },
  {
    name: "Agriculture",
    description:
      "Supply chain solutions for agribusiness, ensuring fresh produce and equipment reach global markets.",
    icon: <IconTractor size={32} />,
  },
];

export const Sectors = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="mb-10 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold text-primary uppercase mb-4">
              Industries We Serve
            </h2>
            <h3 className="text-4xl font-bold uppercase">
              Tailored Expertise for <br className="hidden lg:block" />
              <span className="text-muted-foreground">Diverse Markets.</span>
            </h3>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed">
            From heavy industry to consumer retail, we adapt our logistics
            framework to meet the specific compliance and speed requirements of
            your sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-blue-100 transition-colors mb-6">
                {sector.icon}
              </div>
              <h4 className="text-lg font-bold uppercase mb-3">
                {sector.name}
              </h4>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                {sector.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
