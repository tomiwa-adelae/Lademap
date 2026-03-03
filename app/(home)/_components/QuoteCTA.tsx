"use client";

import { motion } from "framer-motion";
import { IconArrowRight, IconTruck } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const QuoteCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 opacity-5">
          <IconTruck size={400} className="text-white" />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[4px] text-primary"
          >
            Reliable Logistics Service
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-white uppercase leading-tight"
          >
            We Don't Just Move Goods.{" "}
            <span className="text-primary">We Move Businesses</span> Forward.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg font-medium max-w-2xl mx-auto"
          >
            Ready to experience seamless logistics? Let Lademab Nigeria Limited
            handle your supply chain from end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="h-14 px-10 text-base font-black uppercase tracking-wide">
              <Link href="/contact">
                Request a Quote
                <IconArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-10 text-base font-black uppercase tracking-wide border-slate-700 text-white hover:bg-slate-800 hover:text-white bg-transparent"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
