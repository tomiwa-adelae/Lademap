"use client";

import { motion } from "framer-motion";
import {
  IconSearch,
  IconSettingsAutomation,
  IconTruckLoading,
  IconChartInfographic,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Audit & Analysis",
    desc: "We analyze your current procurement and inventory flow to identify bottlenecks.",
    icon: <IconSearch size={24} />,
  },
  {
    title: "Tailored Strategy",
    desc: "Developing a customized logistical roadmap that aligns with your business goals.",
    icon: <IconSettingsAutomation size={24} />,
  },
  {
    title: "Seamless Execution",
    desc: "Deploying our freight and warehousing assets to move your goods with precision.",
    icon: <IconTruckLoading size={24} />,
  },
  {
    title: "Continuous Growth",
    desc: "Real-time reporting and data analytics to further optimize and scale your reach.",
    icon: <IconChartInfographic size={24} />,
  },
];

export const Workflow = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-950 text-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xs font-semibold text-primary uppercase mb-4">
            Our Methodology
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight">
            How we drive <span className="text-slate-500">Efficiency.</span>
          </h3>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-800 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-md bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {step.icon}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl font-bold text-slate-800 group-hover:text-blue-500/20 transition-colors leading-none">
                    0{idx + 1}
                  </span>
                  <h4 className="text-xl font-bold uppercase">{step.title}</h4>
                </div>

                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Teaser */}
        <div className="mt-14 p-6 md:p-10 rounded-2xl bg-gradient-to-r from-primary to-blue-600 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-2">
            <h4 className="text-xl md:text-2xl font-bold uppercase">
              Ready for a tailored solution?
            </h4>
            <p className="text-blue-100 text-sm font-medium">
              Let our experts analyze your supply chain today.
            </p>
          </div>
          <Button variant={"white"} className="rounded-full">
            Consult Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};
