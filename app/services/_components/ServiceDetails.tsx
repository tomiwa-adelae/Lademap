"use client";

import { motion } from "framer-motion";
import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";

const detailedServices = [
  {
    title: "Freight Forwarding & Transportation",
    description:
      "Our global network ensures your cargo moves seamlessly across air, sea, and land. We prioritize speed without compromising safety, offering end-to-end tracking and optimized routing.",
    features: [
      "International Air/Sea Freight",
      "Intermodal Land Transport",
      "Real-time Cargo Tracking",
      "Oversized & Project Cargo",
    ],
    image: "/assets/images/freight.avif",
    reverse: false,
  },
  {
    title: "Warehousing & Distribution",
    description:
      "Modern storage facilities equipped with advanced inventory management systems. We keep your supply chain agile with flexible storage and rapid fulfillment strategies.",
    features: [
      "Climate-Controlled Storage",
      "Inventory Management",
      "Last-Mile Distribution",
      "Cross-Docking Facilities",
    ],
    image: "/assets/images/warehousing.avif",
    reverse: true,
  },
  {
    title: "Customs Brokerage & Compliance",
    description:
      "Navigate complex international trade regulations with ease. Our compliance experts ensure hassle-free clearance, preventing costly delays and ensuring legal integrity.",
    features: [
      "Import/Export Documentation",
      "Tariff Classification",
      "Duty Drawback Services",
      "Regulatory Compliance Consulting",
    ],
    image: "/assets/images/customs.avif",
    reverse: false,
  },
];

export const ServiceDetails = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container space-y-32">
        {detailedServices.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}
          >
            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-600/5 rounded-[2rem] group-hover:bg-blue-600/10 transition-colors duration-500" />
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    width={1000}
                    height={1000}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: service.reverse ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-2"
            >
              <div className="inline-flex items-center gap-2 text-primary">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-medium uppercase">
                  Core Solution {idx + 1}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold uppercase">
                {service.title}
              </h3>

              <p className="text-muted-foreground mt-2 text-lg leading-relaxed">
                {service.description}
              </p>

              <div className="grid md:grid-cols-2 mt-8 gap-4">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                      <IconCheck size={14} stroke={4} />
                    </div>
                    <span className="text-sm font-bold text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
