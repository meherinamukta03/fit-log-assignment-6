import React from 'react';
 import Link from "next/link";
import Image from 'next/image';
import logo from '@/assets/logo.png'
const Navbar = () => {
    return (
  
    <div className="navbar border-b border-gray-800 bg-[#0b0c0f] px-4 md:px-8">

      {/* Logo */}
      <div className="navbar-start">
        <Link
          href="/"
          className="flex items-center gap-2"
        >
         <Image src={logo} alt="logo"></Image>

          <span className="font-bold tracking-wider text-white">
            FITLOG
          </span>
        </Link>
      </div>


      {/* Navigation Links */}
      <div className="navbar-center hidden md:flex">

        <div className="flex items-center gap-2">

          <Link
            href="/"
            className="rounded-full bg-[#182600] px-5 py-2 text-sm text-[#ccff00]"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-5 py-2 text-sm text-gray-400 hover:text-white"
          >
            My Plan
          </Link>

        </div>

      </div>


      {/* Right Side Badges */}
      <div className="navbar-end flex gap-3">

        {/* Plan */}
        <Link
          href="/my-plan"
          className="flex items-center gap-2 text-sm text-gray-300"
        >
          <span>Plan</span>

          <span className="badge border-none bg-[#ccff00] text-black">
            0
          </span>
        </Link>


        {/* Saved */}
        <Link
          href="/my-plan"
          className="flex items-center gap-2 text-sm text-gray-300"
        >
          <span>Saved</span>

          <span className="badge badge-outline border-gray-600 text-gray-300">
            0
          </span>
        </Link>

      </div>

    </div>
  );
};


export default Navbar;