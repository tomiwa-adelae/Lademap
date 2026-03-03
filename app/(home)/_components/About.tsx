"use client";

import { motion } from "framer-motion";
import { IconUsers, IconTarget, IconLeaf, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

const pillars = [
  {
    icon: IconUsers,
    label: "Expert Team",
    bg: "bg-slate-900",
  },
  {
    icon: IconTarget,
    label: "Precision",
    bg: "bg-primary",
  },
  {
    icon: IconLeaf,
    label: "Sustainability",
    bg: "bg-emerald-500",
  },
];

export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight">
                A Trusted Leader in <br className="hidden md:block" />
                <span className="text-primary">Global Logistics.</span>
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-base font-medium max-w-2xl">
              Lademab Nigeria Limited is a trusted leader in logistics and global
              supply chain solutions, dedicated to connecting businesses with
              efficiency, reliability, and innovation. Our team of experienced
              professionals are committed to delivering customized solutions that
              meet the unique needs of each client.
            </p>

            <p className="text-slate-600 leading-relaxed text-base font-medium max-w-2xl">
              With a focus on cutting-edge technology and sustainability, we
              continually strive to optimize operations and reduce environmental
              impact. We believe in building strong partnerships, fostering
              growth, and enabling our clients to succeed in an ever-evolving
              global market.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest hover:gap-3 transition-all"
            >
              Learn More About Us
              <IconArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right: Pillars + Quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Pillar cards */}
            <div className="grid grid-cols-3 gap-3">
              {pillars.map(({ icon: Icon, label, bg }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center text-white`}>
                    <Icon size={20} />
                  </div>
                  <p className="text-[10px] font-bold uppercase text-slate-500 text-center tracking-wide">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-2xl" />
              <p className="text-slate-700 font-medium leading-relaxed italic text-base">
                "Join us as we pave the way for a future where logistics are not
                just a necessity, but a strategic advantage."
              </p>
              <p className="mt-4 text-xs font-bold uppercase text-primary tracking-widest">
                — Lademab Nigeria Limited
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
