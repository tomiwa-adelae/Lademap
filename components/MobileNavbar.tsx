"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconLogout, IconMenu2, IconMoon, IconSun } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { useTheme } from "next-themes";
import { ScrollArea } from "./ui/scroll-area";
import { homeNavLinks } from "@/constants";

export function MobileNavbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const handleLinkClick = () => setOpen(false);

  const [open, setOpen] = useState(false);

  const isActive = (slug: string) =>
    pathname === slug || pathname.startsWith(`${slug}/`);

  // Helper to render link items to avoid repetition
  const renderNavLinks = (links: any[]) => (
    <div className="grid gap-1 px-2">
      {links.map(({ icon: Icon, slug, label, comingSoon }, index) =>
        comingSoon ? (
          <Button
            key={index}
            className="justify-start gap-3"
            variant="ghost"
            disabled
          >
            {/* <Icon size={20} /> */}
            {label}
            <Badge variant="secondary" className="ml-auto">
              Soon
            </Badge>
          </Button>
        ) : (
          <Button
            key={index}
            asChild
            className="justify-start gap-3"
            variant={isActive(slug) ? "default" : "ghost"}
            onClick={handleLinkClick}
          >
            <Link href={slug}>
              {/* <Icon size={20} /> */}
              {label}
            </Link>
          </Button>
        ),
      )}
    </div>
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <IconMenu2 />
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col h-full p-0">
        <SheetHeader className="p-4 border-b">
          <Link href="/" onClick={handleLinkClick}>
            <Logo color={theme === "dark" ? "white" : "black"} />
          </Link>
        </SheetHeader>

        <ScrollArea className="overflow-y-auto">
          <div className="space-y-6">
            <div>
              <p className="px-4 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Menu
              </p>
              {renderNavLinks(homeNavLinks)}
            </div>
          </div>
        </ScrollArea>
        <SheetFooter className="mb-10">
          <Button asChild>
            <Link href="/contact">Contact us</Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
