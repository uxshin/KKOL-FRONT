"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const NavigationLink = ({ href, ...props }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={
        isActive
          ? "underline text-[15px] underline-offset-4 hover:cursor-pointer"
          : "text-[15px] hover:cursor-pointer"
      }
      {...props}
    />
  );
};
