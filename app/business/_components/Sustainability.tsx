"use client";

import { motion } from "framer-motion";
import {
  IconLeaf,
  IconChartLine,
  IconCloudComputing,
  IconTruck,
} from "@tabler/icons-react";

const initiatives = [
  {
    title: "Eco-Routing AI",
    desc: "Using advanced algorithms to reduce fuel consumption and CO2 emissions through optimized transit paths.",
    icon: <IconCloudComputing size={28} />,
  },
  {
    title: "Carbon Offset Goals",
    desc: "Committed to 2030 targets for carbon neutrality across our warehousing and last-mile operations.",
    icon: <IconLeaf size={28} />,
  },
  {
    title: "Digital Documentation",
    desc: "100% paperless customs processing to reduce waste and accelerate clearance speeds.",
    icon: <IconChartLine size={28} />,
  },
];

export const Sustainability = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual: The "Green Fleet" Concept */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Sustainable Warehouse"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </div>
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-8 -right-8 bg-emerald-500 p-8 rounded-[2rem] text-white shadow-xl z-20 max-w-[240px]">
              <IconLeaf size={32} className="mb-4" />
              <p className="text-2xl font-black uppercase leading-none mb-2">
                Clean Supply
              </p>
              <p className="text-xs font-bold opacity-90 uppercase tracking-widest">
                Pioneering Sustainable Logistics in Nigeria.
              </p>
            </div>
          </motion.div>

          {/* Content: The Tech-Green Narrative */}
          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-semibold text-emerald-600 uppercase mb-4">
                Future-Proofing
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold uppercase text-slate-900 leading-tight">
                Logistics for a <br />
                <span className="text-emerald-500">Greener</span> Tomorrow.
              </h3>
              <p className="mt-6 text-slate-600 text-lg  leading-relaxed">
                We leverage cutting-edge technology to minimize our
                environmental footprint while maximizing the efficiency of your
                supply chain.
              </p>
            </div>

            <div className="space-y-6">
              {initiatives.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-6 items-start p-6 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-slate-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm ">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
