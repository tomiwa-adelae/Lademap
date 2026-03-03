"use client";

import React from "react";
import Link from "next/link";
import {
  IconShip,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { SmallLogo } from "./Logo";
import { homeNavLinks } from "@/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-10 md:pt-20 pb-10 border-t border-slate-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2">
              <SmallLogo />
              <span className="text-2xl mt-2 font-bold text-primary uppercase">
                LADEMAB
              </span>
            </div>
            <p className="text-slate-500 mt-2 mb-4 text-sm leading-relaxed">
              Africa’s most reliable logistics and supply chain partner.
              Enabling businesses to thrive in a connected global economy
              through innovation and efficiency.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 bg-slate-900 rounded-full hover:bg-primary transition-colors"
              >
                <IconBrandLinkedin size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 bg-slate-900 rounded-full hover:bg-primary transition-colors"
              >
                <IconBrandTwitter size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 bg-slate-900 rounded-full hover:bg-primary transition-colors"
              >
                <IconBrandInstagram size={18} />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold uppercase text-xs mb-4 text-primary">
              Navigation
            </h4>
            <ul className="space-y-4">
              {homeNavLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.slug}
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center group"
                  >
                    {item.label}
                    <IconArrowUpRight
                      size={14}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Link */}
          <div>
            <h4 className="font-bold uppercase text-xs mb-4 text-primary">
              Solutions
            </h4>
            <ul className="space-y-4">
              {[
                "Freight Forwarding",
                "Warehousing",
                "Customs Brokerage",
                "Supply Chain",
              ].map((service) => (
                <li
                  key={service}
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 font-bold uppercase">
            © {currentYear} LADEMAB NIGERIA LIMITED. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase text-slate-600">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
