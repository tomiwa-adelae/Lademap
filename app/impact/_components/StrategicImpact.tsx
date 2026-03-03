"use client";

import { motion } from "framer-motion";
import {
  IconTrendingUp,
  IconShieldCheckered,
  IconBuildingFactory2,
  IconWorld,
} from "@tabler/icons-react";

const impactPillars = [
  {
    title: "Economic Diversification",
    desc: "By streamlining non-oil exports like agriculture and solid minerals, we help reduce Nigeria's dependency on petroleum.",
    icon: <IconTrendingUp size={24} />,
    stat: "+15% Export Efficiency",
  },
  {
    title: "Supply Chain Resilience",
    desc: "Our localized warehousing and rapid distribution networks mitigate global shocks and ensure market stability.",
    icon: <IconShieldCheckered size={24} />,
    stat: "99.8% Reliability",
  },
  {
    title: "AfCFTA Integration",
    desc: "We simplify cross-border trade, enabling local SMEs to access a market of 1.3 billion people across the continent.",
    icon: <IconWorld size={24} />,
    stat: "Regional Hub Leader",
  },
  {
    title: "Industrial Support",
    desc: "Providing the fundamental architecture for the manufacturing sector, which currently contributes 10% to Nigeria's GDP.",
    icon: <IconBuildingFactory2 size={24} />,
    stat: "Scale-Ready Infrastructure",
  },
];

export const StrategicImpact = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xs font-semibold text-primary uppercase mb-4">
            The Catalyst
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-white">
            Empowering the <span className="text-slate-500">Future</span> of
            Trade.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {impactPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 transition-all duration-500 flex flex-col md:flex-row gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-md bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500 group-hover:bg-primary group-hover:text-white transition-all duration-500 flex-shrink-0">
                {pillar.icon}
              </div>

              <div className="space-y-2">
                <div className="space-y-1">
                  <span className="text-xs font-medium uppercase text-primary">
                    {pillar.stat}
                  </span>
                  <h4 className="text-xl font-bold uppercase text-white">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-slate-400 font-medium leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
