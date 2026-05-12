"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">

      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-[0.35em]">
              EB MOTORS
            </h2>

            <p className="text-neutral-400 mt-6 leading-relaxed text-sm">
              Premium luxury and performance vehicles curated for South Africa’s most discerning drivers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Explore
            </h3>

            <ul className="space-y-3 text-neutral-400 text-sm">
              <li className="hover:text-white transition">Inventory</li>
              <li className="hover:text-white transition">Sell Your Car</li>
              <li className="hover:text-white transition">Finance Options</li>
              <li className="hover:text-white transition">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Contact
            </h3>

            <ul className="space-y-3 text-neutral-400 text-sm">
              <li>Sandton, Johannesburg</li>
              <li>+27 XX XXX XXXX</li>
              <li>info@ebmotors.co.za</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Social
            </h3>

            <ul className="space-y-3 text-neutral-400 text-sm">
              <li className="hover:text-white transition cursor-pointer">Instagram</li>
              <li className="hover:text-white transition cursor-pointer">Facebook</li>
              <li className="hover:text-white transition cursor-pointer">WhatsApp</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-16 border-t border-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-500 text-sm">

          <p>
            © {new Date().getFullYear()} EB Motors. All rights reserved.
          </p>

          <p className="tracking-wider uppercase text-xs">
            Driven by excellence
          </p>

        </div>

      </div>
    </footer>
  );
}