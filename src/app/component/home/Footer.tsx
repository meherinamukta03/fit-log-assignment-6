import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#0b0c0f] px-3 py-3 sm:px-4 md:px-6 lg:px-8">
      <div className="flex items-center justify-between">

      
        <div className="flex items-center">
          <Image
            src={logo}
            alt="logo"
            width={28}
            height={28}
            className="h-6 w-6 sm:h-7 sm:w-7"
          />

          <span className="text-[10px] font-bold tracking-wider text-white sm:text-xs md:text-sm">
            FITLOG
          </span>
        </div>

        <p className="text-right text-[6px] text-gray-400 sm:text-[8px] md:text-[12px]">
          2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;