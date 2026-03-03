"use client";

import { motion } from "framer-motion";
import {
  IconBuildingFactory2,
  IconCertificate,
  IconHeartHandshake,
} from "@tabler/icons-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div className="container">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium uppercase">
              Corporate Division
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold uppercase text-slate-900 leading-tight mb-8"
          >
            Strategic <br />
            <span className="text-blue-600">Partnerships.</span>{" "}
            <br />
            Institutional Growth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed"
          >
            LADEMAB Nigeria Limited collaborates with global enterprises to
            build resilient supply chain infrastructures that power the modern
            African economy.
          </motion.p>
        </div>

        {/* Business Pillars Quick-Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              label: "B2B Integration",
              icon: <IconHeartHandshake className="text-blue-600" />,
            },
            {
              label: "Compliance & Ethics",
              icon: <IconCertificate className="text-blue-600" />,
            },
            {
              label: "Sustainable Scaling",
              icon: <IconBuildingFactory2 className="text-blue-600" />,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <span className="font-bold uppercase text-slate-900 tracking-tight">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
