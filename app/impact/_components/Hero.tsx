"use client";

import { motion } from "framer-motion";
import { IconChartArrows, IconCircleCheck } from "@tabler/icons-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background World Map Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_with_points.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "invert(1) opacity(0.1)",
        }}
      />

      <div className="container relative z-10">
        <div className="">
          {/* Left Side: Strategic Narrative */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-medium uppercase">
                Global Economic Contribution
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase text-white"
            >
              Driving <br className="hidden lg:block" />
              <span className="text-blue-500">Market Impact</span>{" "}
              <br className="hidden lg:block" />
              Across Borders.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-medium leading-relaxed max-w-xl"
            >
              Lademab Nigeria Limited is more than a logistics provider; we are
              an engine for growth, enhancing reliability in African logistics
              and empowering businesses with scalable supply chains.
            </motion.p>

            {/* Quick Impact Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-3">
                <IconCircleCheck className="text-primary" size={20} />
                <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">
                  Global Scalability
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconChartArrows className="text-primary" size={20} />
                <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">
                  Regional Reliability
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
