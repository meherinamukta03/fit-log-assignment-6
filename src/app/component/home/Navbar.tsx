import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import WorkOutButton from "@/app/buttton/WorkOutButton";

const Navbar = () => {
  return (
    <div className="navbar min-h-[50px] border-b border-gray-800 bg-[#0b0c0f] px-3 sm:px-4 md:px-6 lg:px-8">

      {/* Logo */}
      <div className="navbar-start">
        
          <Image  className="sm:h-[32px] sm:w-[32px]"
            src={logo}
            alt="logo"
            width={30}
            height={30}
           
          />

          <span className="text-xs font-bold tracking-wider text-white sm:text-sm md:text-base">
            FITLOG
          </span>
      
      </div>


      {/* Navigation Links */}
      <div className="navbar-center flex">

        <div className="flex items-center gap-0 sm:gap-1">

          
          <WorkOutButton href="/">
            Workout
          </WorkOutButton>

          <WorkOutButton href="/my-plan">
            My Plan
          </WorkOutButton>


        </div>

      </div>


      {/* Right Side Badges */}
      <div className="navbar-end flex gap-1 sm:gap-2 md:gap-3">

        {/* Plan */}
        <Link
          href="/my-plan"
          className="flex items-center gap-1 text-[9px] text-gray-300 sm:text-[10px] md:text-sm"
        >
          <span>Plan</span>

          <span className="badge h-4 min-h-4 min-w-4 border-none bg-[#ccff00] px-1 text-[8px] text-black sm:h-5 sm:min-h-5 sm:min-w-5 sm:text-[9px]">
            0
          </span>
        </Link>


        {/* Saved */}
        <Link
          href="/my-plan"
          className="flex items-center gap-1 text-[9px] text-gray-300 sm:text-[10px] md:text-sm"
        >
          <span>Saved</span>

          <span className="badge h-4 min-h-4 min-w-4 border-gray-600 px-1 text-[8px] text-gray-300 sm:h-5 sm:min-h-5 sm:min-w-5 sm:text-[9px]">
            0
          </span>
        </Link>

      </div>

    </div>
  );
};

export default Navbar;