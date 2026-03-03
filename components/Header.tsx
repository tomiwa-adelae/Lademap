"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { homeNavLinks } from "@/constants";
import { Logo } from "./Logo";
import { IconMessageChatbot } from "@tabler/icons-react";
import { MobileNavbar } from "./MobileNavbar";

export const Header = () => {
  const pathname = usePathname();

  const isActive = (slug: string) =>
    pathname === slug || (slug !== "/" && pathname.startsWith(slug));

  return (
    <header className="fixed top-0 z-50 w-full bg-white overflow-hidden border-b">
      {/* 1. Earth-Tone Glow Effects (Shifting from Emerald to Amber/Gold) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-yellow-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container h-20 flex items-center justify-between relative z-10">
        {/* Logo Area */}
        <Link href={"/"}>
          <Logo color="white" />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-2 font-semibold text-sm">
          {homeNavLinks.map(({ slug, label }, index) => (
            <Button
              size={"md"}
              key={index}
              asChild
              variant={isActive(slug) ? "default" : "ghost"}
            >
              <Link
                href={slug}
                className="hover:text-primary transition-colors"
              >
                {label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Action Area */}
        <div className="flex items-center space-x-4">
          <Button asChild size="md">
            <Link href="/contact">
              <IconMessageChatbot size={18} />
              Contact us
            </Link>
          </Button>

          <div className="lg:hidden">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </header>
  );
};
