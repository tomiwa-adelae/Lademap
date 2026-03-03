"use client";

import { motion } from "framer-motion";
import { IconTrophy, IconRocket } from "@tabler/icons-react";

export const CoreIdentity = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-sm font-semibold text-primary uppercase mb-4">
            The Foundation
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
            Our Purpose &{" "}
            <span className="text-muted-foreground">Direction</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 md:p-12 rounded-[3rem] bg-slate-950 text-white overflow-hidden transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <IconTrophy size={120} stroke={1} />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <span className="text-[10px] font-semibold uppercase">
                  Execution
                </span>
              </div>
              <h4 className="text-2xl font-bold uppercase">Our Mission</h4>
              <p className="text-slate-400 text-base leading-relaxed font-medium">
                Delivering world-class logistics solutions that simplify trade,
                strengthen supply chains, and create value for our clients and
                partners.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 md:p-12 rounded-[3rem] bg-blue-600 text-white overflow-hidden transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
              <IconRocket size={120} stroke={1} />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white">
                <span className="text-[10px] font-semibold uppercase">
                  Future State
                </span>
              </div>
              <h4 className="text-2xl font-bold uppercase">Our Vision</h4>
              <p className="text-blue-50 text-base leading-relaxed font-medium">
                To be Africa’s most reliable logistics and supply chain partner,
                enabling businesses to thrive in a connected global economy.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Market Impact Summary */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground font-medium uppercase text-sm">
            Empowering Nigeria.{" "}
            <span className="text-primary">Connecting the World.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
