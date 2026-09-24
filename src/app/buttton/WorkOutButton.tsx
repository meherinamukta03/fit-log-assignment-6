"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const WorkOutButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={
        active
          ? "rounded-full bg-[#182600] px-2 py-1.5 text-[10px] text-[#ccff00] sm:px-3 sm:py-2 sm:text-xs md:px-4 md:text-sm"
          : "rounded-full px-2 py-1.5 text-[10px] text-gray-100 hover:text-gray-500 sm:px-3 sm:py-2 sm:text-xs md:px-4 md:text-sm"
      }
    >
      {children}
    </Link>
  );
};

export default WorkOutButton;