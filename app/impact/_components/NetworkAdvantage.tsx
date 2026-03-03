"use client";

import { motion } from "framer-motion";
import {
  IconHierarchy2,
  IconReplace,
  IconAffiliate,
  IconArrowRight,
  IconShieldCheck,
} from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const layers = [
  {
    title: "Global Inbound",
    desc: "Seamlessly receiving cargo from international air and sea hubs into Nigerian ports.",
    icon: <IconAffiliate size={24} />,
  },
  {
    title: "Compliance Layer",
    desc: "Navigating customs and regulatory frameworks with 100% legal integrity.",
    icon: <IconShieldCheck size={24} />,
  },
  {
    title: "Last-Mile Sync",
    desc: "Precise distribution from our Mafoluku hub to the final business destination.",
    icon: <IconReplace size={24} />,
  },
];

export const NetworkAdvantage = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="bg-primary rounded-2xl p-8 md:p-20 text-white relative overflow-hidden">
          {/* Decorative Rings */}
          <div className="absolute -right-20 -top-20 w-96 h-96 border-[40px] border-white/5 rounded-full" />

          <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <h2 className="text-xs font-semibold text-blue-100 uppercase mb-3">
                The Integrated Edge
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold uppercase leading-tight mb-2">
                Turning Logistics <br className="hidden lg:block" />
                into a <span className="text-black">Strategic Asset.</span>
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-4 max-w-md">
                We don’t just move goods; we create a connected ecosystem where
                every touchpoint adds value to your bottom line.
              </p>

              <Link href="/business">
                <Button variant={"black"}>
                  Partner With Us
                  <IconArrowRight />
                </Button>
              </Link>
            </div>

            <div className="space-y-2">
              {layers.map((layer, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex gap-3 p-6 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-sm hover:bg-white/20 transition-all cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-white text-primary flex items-center justify-center flex-shrink-0">
                    {layer.icon}
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-lg mb-1">
                      {layer.title}
                    </h4>
                    <p className="text-blue-100 text-sm">{layer.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
