"use client";

import { motion } from "framer-motion";
import { IconUsers, IconTarget, IconLeaf } from "@tabler/icons-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium uppercase">
                Established Leadership
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl 2xl:text-7xl font-bold uppercase"
            >
              Paving the way for <br className="hidden 2xl:block" />
              <span className="text-primary">Strategic Logistics</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 font-medium leading-relaxed"
            >
              Lademab Nigeria Limited is a trusted leader in logistics and
              global supply chain solutions, dedicated to connecting businesses
              with efficiency, reliability, and innovation.
            </motion.p>

            {/* Quick Core Values Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-2 pt-4"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white">
                  <IconUsers size={20} />
                </div>
                <p className="text-[10px] font-bold uppercase text-slate-400">
                  Expert Team
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
                  <IconTarget size={20} />
                </div>
                <p className="text-[10px] font-bold uppercase text-slate-400">
                  Precision
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                  <IconLeaf size={20} />
                </div>
                <p className="text-[10px] font-bold uppercase text-slate-400">
                  Sustainability
                </p>
              </div>
            </motion.div>
          </div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden relative z-10 shadow-2xl shadow-blue-900/10">
              <Image
                width={1000}
                height={1000}
                src={"/assets/images/about-hero.jpg"}
                alt="Logistics Operations"
                className="w-full h-full object-cover"
              />
              {/* Floating Stat Card */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl max-w-[200px]">
                <p className="text-3xl font-black italic text-slate-900 leading-none mb-1">
                  100%
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 leading-tight">
                  Commitment to Operational Excellence
                </p>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-100 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
