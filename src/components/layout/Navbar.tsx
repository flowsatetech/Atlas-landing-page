"use client";

import CTAButtons from "./CTAButtons";
import { useState } from "react";
import { useScroll } from "@/hooks/use-scroll";
import Link from "next/link";

export default function Navbar() {
  const scrolled = useScroll();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">

        {/* LOGO */}
        <Link
          href="/"
          className="font-bold text-lg sm:text-xl tracking-tight"
        >
          ATLAS
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <Link href="#services" className="hover:text-black">
            Services
          </Link>
          <Link href="#difference" className="hover:text-black">
            Difference
          </Link>
          <Link href="#faq" className="hover:text-black">
            FAQ
          </Link>
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <CTAButtons />
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden border px-3 py-2 rounded-md text-sm"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-5 text-sm">

          {/* NAV LINKS */}
          <div className="flex flex-col gap-4 text-gray-700">
            <Link href="#services" onClick={closeMenu}>
              Services
            </Link>
            <Link href="#difference" onClick={closeMenu}>
              Difference
            </Link>
            <Link href="#faq" onClick={closeMenu}>
              FAQ
            </Link>
          </div>

          {/* CTA SECTION */}
          <div className="pt-4 flex flex-col gap-3">
            <CTAButtons />
          </div>
        </div>
      )}
    </header>
  );
}