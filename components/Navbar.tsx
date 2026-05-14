"use client";

import Link from "next/link";
import Image from "next/image";export default function Navbar() {


  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-[0.2em]">
          EB MOTORS
        </h1>

        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
          <a href="#">Inventory</a>
          <a href="#">Finance</a>
          <a href="#">Sell Your Car</a>
          <a href="#">Contact</a>
        </div>

      </div>
    </nav>
  );
}