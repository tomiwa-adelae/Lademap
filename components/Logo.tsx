import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = ({
  color = "white",
  size = "h-12 md:h-16",
}: {
  color: "white" | "black";
  size?: string;
}) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center space-x-2",
        color === "white" && "text-white",
        color === "black" && "text-black dark:text-white",
      )}
    >
      <Image
        src="/assets/images/logo.png"
        alt="FORBLIZ"
        width={120}
        height={40}
        className={cn("w-auto object-contain", size)}
        priority
      />
    </Link>
  );
};

export const SmallLogo = ({ size = "h-12 md:h-16" }: { size?: string }) => {
  return (
    <Link href="/">
      <Image
        src="/assets/images/small-logo.png"
        alt="FORBLIZ"
        width={120}
        height={40}
        className={cn("w-auto object-contain", size)}
        priority
      />
    </Link>
  );
};
