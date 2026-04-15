"use client";

import { useState } from "react";
import CTAButtons from "./CTAButtons";
import { useScroll } from "@/hooks/use-scroll";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const scrolled = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Atlas Africa logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="text-white font-semibold tracking-tight">
            Atlas <span className="text-[#D4AF37]">Africa</span>
          </span>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <Link href="#services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="#difference" className="hover:text-white transition">
            Difference
          </Link>
          <Link href="#faq" className="hover:text-white transition">
            FAQ
          </Link>
        </nav>

        {/* CTA (IMPORTANT: Always visible on desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <CTAButtons />
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-5 h-0.5 bg-white" />
          <span className="w-5 h-0.5 bg-white" />
          <span className="w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* MOBILE MENU (FULL SCREEN - PROFESSIONAL) */}
      <div
        className={`md:hidden fixed inset-0 bg-black text-white z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-6 py-6">

          {/* TOP BAR */}
          <div className="flex items-center justify-between mb-10">
            <span className="font-semibold text-lg">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-2xl"
            >
              ✕
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-6 text-lg font-medium">
            <Link href="#services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="#difference" onClick={() => setOpen(false)}>
              Difference
            </Link>
            <Link href="#faq" onClick={() => setOpen(false)}>
              FAQ
            </Link>
          </div>

          {/* CTA (CRITICAL FOR CONVERSION) */}
          <div className="mt-auto pt-10 flex flex-col gap-4">
            <CTAButtons />
          </div>
        </div>
      </div>
    </header>
  );
}