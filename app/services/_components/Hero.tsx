"use client";

import { motion } from "framer-motion";
import {
  IconShip,
  IconPlaneTilt,
  IconTruck,
  IconBox,
} from "@tabler/icons-react";

const capabilities = [
  { icon: <IconPlaneTilt size={20} />, label: "Air Freight" },
  { icon: <IconShip size={20} />, label: "Sea Cargo" },
  { icon: <IconTruck size={20} />, label: "Land Transport" },
  { icon: <IconBox size={20} />, label: "Warehousing" },
];

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
      {/* Background Technical Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#2563eb 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-medium uppercase">
              Global Operations
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase text-white leading-tight mb-4"
          >
            End-to-End <br className="hidden lg:block" />
            <span className="text-primary">Logistics Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl font-medium leading-relaxed mb-8"
          >
            Customized supply chain services designed to meet the unique needs
            of businesses in an ever-evolving global market. From procurement to
            final delivery, we optimize every mile.
          </motion.p>

          {/* Service Capability Tags */}
          <div className="flex flex-wrap gap-2">
            {capabilities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 group hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300"
              >
                <span className="text-primary group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="text-sm font-semibold uppercase">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Gradient Bush */}
      <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />
    </section>
  );
};
