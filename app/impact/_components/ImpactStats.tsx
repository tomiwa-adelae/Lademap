"use client";

import { motion } from "framer-motion";
import {
  IconBoxSeam,
  IconRoute,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";

const stats = [
  {
    label: "Shipments Delivered",
    value: "15k+",
    sub: "Successful cross-border moves",
    icon: <IconBoxSeam size={24} />,
  },
  {
    label: "Global Partners",
    value: "120+",
    sub: "Trusted carrier networks",
    icon: <IconWorld size={24} />,
  },
  {
    label: "Route Optimization",
    value: "30%",
    sub: "Average cost reduction",
    icon: <IconRoute size={24} />,
  },
  {
    label: "Expert Staff",
    value: "50+",
    sub: "Logistics professionals",
    icon: <IconUsers size={24} />,
  },
];

export const ImpactStats = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-primary font-semibold uppercase text-xs mb-4">
            Operational Scale
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
            Our Numbers <br className="hidden lg:block" />
            <span className="text-muted-foreground">Speak for Themselves.</span>
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-blue-900/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>

              <div className="space-y-1">
                <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
                <p className="text-sm font-black uppercase text-primary">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
