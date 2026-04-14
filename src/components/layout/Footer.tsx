import { CTA } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">
              ATLAS AFRICA
            </h2>

            <p className="text-sm text-gray-400 mt-3 leading-relaxed max-w-xs">
              Marketing systems that drive revenue, not vanity metrics.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="text-sm text-gray-400 space-y-2">
            <p className="text-white font-semibold mb-3">Navigation</p>

            <p className="hover:text-white cursor-pointer">Services</p>
            <p className="hover:text-white cursor-pointer">Difference</p>
            <p className="hover:text-white cursor-pointer">FAQ</p>
            <p className="hover:text-white cursor-pointer">Contact</p>
          </div>

          {/* CTA BLOCK */}
          <div className="flex flex-col">
            <p className="text-white font-semibold mb-3">
              Ready to grow your business?
            </p>

            <button className="w-full bg-white text-black px-4 py-3 rounded-md text-sm mb-3 hover:bg-gray-200 transition">
              {CTA.primary}
            </button>

            <button className="w-full border border-white text-white px-4 py-3 rounded-md text-sm hover:bg-white hover:text-black transition">
              {CTA.secondary}
            </button>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Atlas Africa</span>
          <span>No long-term contracts • Results-focused systems</span>
        </div>
      </div>
    </footer>
  );
}