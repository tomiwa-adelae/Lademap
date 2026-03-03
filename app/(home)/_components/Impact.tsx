"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconGlobe,
  IconChartBar,
  IconUsersGroup,
  IconTargetArrow,
  IconEye,
} from "@tabler/icons-react";

const impacts = [
  {
    title: "Global Supply Chains",
    desc: "Boosting Nigeria’s Role in Global Supply Chains.",
    icon: <IconGlobe size={24} />,
  },
  {
    title: "Reliability & Trust",
    desc: "Enhancing Reliability and Trust in African Logistics.",
    icon: <IconChartBar size={24} />,
  },
  {
    title: "Scalable Growth",
    desc: "Empowering Businesses with Scalable Supply Chains.",
    icon: <IconUsersGroup size={24} />,
  },
];

export const MarketImpact = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-950 text-white overflow-hidden relative">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left Column: Mission & Vision */}
          <div className="space-y-12">
            <div>
              <div className="space-y-8">
                {/* Mission */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                    <IconTargetArrow size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-1">
                      Our Mission
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-base font-medium">
                      Delivering world-class logistics solutions that simplify
                      trade, strengthen supply chains, and create value for our
                      clients and partners.
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-600/20 border border-emerald-600/30 flex items-center justify-center text-emerald-500">
                    <IconEye size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-1">
                      Our Vision
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-medium">
                      To be Africa’s most reliable logistics and supply chain
                      partner, enabling businesses to thrive in a connected
                      global economy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Market Impact Cards */}
          <div className="relative">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative z-10">
              <h3 className="text-2xl font-bold uppercase mb-8 border-b border-slate-800 pb-6">
                Market <span className="text-primary">Impact</span>
              </h3>

              <div className="space-y-8">
                {impacts.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-primary group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <h4 className="font-bold text-slate-200 uppercase text-sm">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-slate-500 font-medium text-sm pl-10">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-primary rounded-2xl flex items-center justify-between group cursor-pointer overflow-hidden relative">
                <div className="relative z-10">
                  <p className="text-[10px] font-medium uppercase text-blue-100">
                    Ready to Scale?
                  </p>
                  <p className="font-bold uppercase">Join the Network</p>
                </div>
                <IconGlobe
                  size={48}
                  className="absolute -right-4 -bottom-4 opacity-20 group-hover:rotate-12 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
