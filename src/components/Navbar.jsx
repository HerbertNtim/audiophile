"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Headphones", href: "/headphones" },
    { name: "Speakers", href: "/speakers" },
    { name: "Earphones", href: "/earphones" },
  ];

  return (
    <nav className="w-full bg-black text-white md:border-b border-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center flex-1">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-wide hover:text-gray-300 transition duration-200"
          >
            audiophile
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <ul className="hidden md:flex flex-1 items-center justify-center space-x-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="uppercase tracking-wider hover:text-gray-300 transition duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end flex-1">
          <Link
            href="/cart"
            className="hidden md:block hover:text-gray-300 transition duration-200"
          >
            <ShoppingCart />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white hover:text-gray-300 transition-transform duration-200 ml-4 cursor-pointer"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only render when open */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white z-40">
          <ul className="space-y-4 text-right px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block uppercase tracking-wider hover:text-gray-300 transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/cart"
                onClick={() => setMobileOpen(false)}
                className="inline-block mt-2 hover:text-gray-300 transition duration-200"
              >
                <ShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
