"use client";

import { motion } from "framer-motion";
import { IconHeadset, IconMailOpened, IconMapPin } from "@tabler/icons-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium uppercase">
              Available 24/7
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase text-white mb-4"
          >
            Connect with our <br className="hidden lg:block" />
            <span className="text-primary">Logistics Experts.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 font-medium leading-relaxed mb-12"
          >
            Whether you are looking for a quote, tracking a shipment, or seeking
            a long-term partnership, our team in Lagos is ready to move your
            business forward.
          </motion.p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-3">
          {[
            {
              label: "Direct Line",
              value: "+234-708-418-2254",
              icon: <IconHeadset size={24} />,
              color: "border-blue-500/30",
            },
            {
              label: "Email Inquiry",
              value: "info@lademab.com",
              icon: <IconMailOpened size={24} />,
              color: "border-slate-800",
            },
            {
              label: "Head Office",
              value: "Mafoluku, Lagos",
              icon: <IconMapPin size={24} />,
              color: "border-slate-800",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className={`p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border ${item.color} group hover:bg-primary transition-all duration-500`}
            >
              <div className="text-primary group-hover:text-white mb-4 transition-colors">
                {item.icon}
              </div>
              <p className="text-xs font-medium uppercase text-slate-500 group-hover:text-blue-200 mb-1">
                {item.label}
              </p>
              <p className="text-lg font-bold text-white">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
