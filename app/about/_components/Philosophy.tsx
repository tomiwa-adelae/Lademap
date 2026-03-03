"use client";

import { motion } from "framer-motion";
import { IconCpu, IconHeartHandshake, IconLeaf } from "@tabler/icons-react";

const pillars = [
  {
    title: "Cutting-Edge Tech",
    desc: "We continually strive to optimize operations using modern logistical frameworks and data-driven insights to reduce latency.",
    icon: <IconCpu size={32} stroke={1.5} />,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Environmental Impact",
    desc: "Dedicated to sustainability, we focus on innovative solutions that reduce environmental impact across the entire global supply chain.",
    icon: <IconLeaf size={32} stroke={1.5} />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Strong Partnerships",
    desc: "We believe in building lasting alliances, fostering growth, and enabling our clients to succeed in an ever-evolving global market.",
    icon: <IconHeartHandshake size={32} stroke={1.5} />,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export const Philosophy = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Narrative Card */}
          <div className="lg:col-span-1 space-y-3">
            <h2 className="text-sm font-semibold text-primary uppercase mb-2">
              Our Way of Working
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold uppercase text-slate-900 leading-tight">
              Innovation <span className="text-slate-400">meets</span>{" "}
              Responsibility.
            </h3>
            <p className="text-muted-foreground font-medium leading-relaxed">
              At Lademab Nigeria Limited, our team of experienced professionals
              are committed to delivering customized solutions that meet the
              unique needs of each client.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="lg:col-span-2 grid 2xl:grid-cols-3 gap-3">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${pillar.bg} ${pillar.color} flex items-center justify-center mb-6`}
                >
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="font-black uppercase text-slate-900 mb-3 tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
