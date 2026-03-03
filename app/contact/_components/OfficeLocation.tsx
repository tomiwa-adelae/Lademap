"use client";

import { motion } from "framer-motion";
import {
  IconMap2,
  IconCar,
  IconPlaneArrival,
  IconExternalLink,
} from "@tabler/icons-react";

export const OfficeLocation = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Travel & Location Narrative */}
          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-semibold text-primary uppercase mb-4">
                Visit Our Hub
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold uppercase text-slate-900">
                Strategic Proximity. <br className="hidden lg:block" />
                <span className="text-slate-400">Global Accessibility.</span>
              </h3>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Our head office is located in the heart of the Mafoluku
                logistics corridor, just minutes away from Nigeria’s busiest
                international air terminal.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex gap-3 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <IconPlaneArrival size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-base">
                    Airport Proximity
                  </h4>
                  <p className="text-sm text-muted-foreground font-medium">
                    Under 15 minutes from MMIA, ensuring rapid response for air
                    freight operations.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <IconCar size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-base">
                    Mainland Access
                  </h4>
                  <p className="text-sm text-muted-foreground font-medium">
                    Easily accessible via the Airport Road and Oshodi-Isolo
                    Expressway.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=28+Alhaja+Shokoya+Street,+Mafoluku,+Lagos,+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-blue-600 font-bold uppercase tracking-widest group"
            >
              Get Directions on Google Maps
              <IconExternalLink
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>

          {/* Right: The Map UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl relative">
              <iframe
                src="https://maps.google.com/maps?q=28+Alhaja+Shokoya+Street,+Mafoluku,+Lagos,+Nigeria&output=embed&hl=en"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Address Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-slate-950 p-10 rounded-[3rem] text-white shadow-2xl">
              <IconMap2 className="text-blue-500 mb-4" size={32} />
              <p className="text-2xl font-bold uppercase leading-none mb-2">
                LADEMAB Head Office
              </p>
              <p className="text-sm font-medium opacity-60 uppercase leading-relaxed">
                28 Alhaja Shokoya Street, <br />
                Mafoluku, Lagos, Nigeria.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
