import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b0b0b] to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <Image
                src="/logo.png"
                alt="Atlas Africa logo"
                width={52}
                height={52}
              />

              <div>
                <p className="font-semibold text-lg leading-tight">
                  Atlas <span className="text-[#D4AF37]">Africa</span>
                </p>

                <p className="text-[10px] tracking-widest text-gray-400 mt-1">
                  CREATING • MARKETING • MEDIA
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Atlas{" "}
              <span className="text-[#D4AF37] font-medium">
                Africa
              </span>{" "}
              — A performance marketing agency helping ambitious
              businesses across Africa grow through strategy, creativity, and data.
            </p>

            {/* CONTACT */}
            <div className="space-y-3 pt-2 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#D4AF37]/10 flex items-center justify-center">
                  <MapPin size={16} className="text-[#D4AF37]" />
                </div>
                <span>Lagos, Nigeria</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#D4AF37]/10 flex items-center justify-center">
                  <Phone size={16} className="text-[#D4AF37]" />
                </div>
                <span>+234 802 343 780</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#D4AF37]/10 flex items-center justify-center">
                  <Mail size={16} className="text-[#D4AF37]" />
                </div>
                <span>info@atlasafrica.org</span>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <p className="text-sm font-semibold mb-4">Services</p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link href="#services" className="hover:text-white transition">Social Media</Link>
              <Link href="#services" className="hover:text-white transition">Paid Ads</Link>
              <Link href="#services" className="hover:text-white transition">Brand Identity</Link>
              <Link href="#services" className="hover:text-white transition">Web Development</Link>
              <Link href="#services" className="hover:text-white transition">Content Production</Link>
              <Link href="#services" className="hover:text-white transition">Consulting</Link>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <p className="text-sm font-semibold mb-4">Company</p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link href="#about" className="hover:text-white transition">About</Link>
              <Link href="#results" className="hover:text-white transition">Results</Link>
              <Link href="#portfolio" className="hover:text-white transition">Portfolio</Link>
              <Link href="#contact" className="hover:text-white transition">Contact</Link>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col">
            <p className="text-lg font-semibold leading-snug mb-6">
              Stop Spending on Marketing That Isn’t Working.
            </p>


            {/* CTA STACK */}
            <div className="flex flex-col gap-3">

              {/* PRIMARY */}
              <button className="w-full bg-white text-black px-4 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition">
                👉 Book a Free Strategy Call
              </button>

              {/* SECONDARY */}
              <button className="w-full border border-white/20 text-white px-4 py-3 rounded-md text-sm hover:bg-white hover:text-black transition">
                📋 Request a Custom Quote
              </button>

              {/* TERTIARY */}
              <a
                href="https://wa.me/234802343780"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with Atlas Africa on WhatsApp"
                className="text-sm text-white/70 hover:text-white text-center mt-1 transition"
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: FaFacebookF, label: "Facebook", link: "https://facebook.com/atlasafrica" },
                { icon: FaTwitter, label: "Twitter", link: "https://twitter.com/atlasafrica" },
                { icon: FaInstagram, label: "Instagram", link: "https://instagram.com/atlasafrica" },
                { icon: FaLinkedinIn, label: "LinkedIn", link: "https://linkedin.com/company/atlasafrica" },
                { icon: FaYoutube, label: "YouTube", link: "https://youtube.com/@atlasafrica" },
              ].map(({ icon: Icon, label, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Atlas Africa on ${label}`}
                  title={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col items-center gap-3 text-xs text-gray-500 text-center">

          {/* LINKS */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            <Link href="#services" className="hover:text-white transition">Services</Link>
            <Link href="#results" className="hover:text-white transition">Results</Link>
            <Link href="#about" className="hover:text-white transition">About</Link>
            <Link href="#contact" className="hover:text-white transition">Contact</Link>
          </div>

          {/* TRUST LINE */}
          <p className="max-w-md">
            No long-term contract required for your first consultation. We’ll tell you honestly if we’re not the right fit.
          </p>

          {/* COPYRIGHT */}
          <span className="text-[#D4AF37]">
            © {new Date().getFullYear()} Atlas Africa — Creative Excellence
          </span>
        </div>
      </div>
    </footer>
  );
}