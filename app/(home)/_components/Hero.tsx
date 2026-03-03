"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  IconArrowRight,
  IconShip,
  IconTruck,
  IconPlaneTilt,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] py-16 lg:py-24 flex items-center bg-slate-950 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          width={1000}
          height={1000}
          src="/assets/images/home-hero.jpg"
          alt="Logistics and Supply Chain"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl space-y-2">
          {/* Animated Badge */}
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
              Global Supply Chain Solutions
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white"
          >
            Moving Goods. <br className="hidden lg:block" />
            <span className="text-blue-500">Moving Businesses </span>
            <br className="hidden lg:block" />
            Forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mt-6 font-medium leading-relaxed"
          >
            Lademab Nigeria Limited delivers world-class logistics solutions
            that simplify trade, strengthen supply chains, and create strategic
            advantages for global partners.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-4 h-full w-full"
          >
            <Button className="w-full md:w-auto" variant="white">
              Our Services
            </Button>
          </motion.div>

          {/* Quick Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-8 mt-10 pt-8 border-t border-slate-800 max-w-2xl"
          >
            <div className="flex items-center gap-3 text-slate-500">
              <IconPlaneTilt size={24} />
              <span className="text-xs font-bold uppercase tracking-tighter">
                Air Freight
              </span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <IconShip size={24} />
              <span className="text-xs font-bold uppercase tracking-tighter">
                Sea Freight
              </span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <IconTruck size={24} />
              <span className="text-xs font-bold uppercase tracking-tighter">
                Land Transport
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
