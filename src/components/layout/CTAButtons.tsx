import { CTA } from "@/lib/constants";

export default function CTAButtons() {
  return (
    <div className="flex items-center gap-2">
      
      {/* Secondary */}
      <button className="px-3 py-2 border rounded-md text-sm hover:bg-gray-50">
        {CTA.secondary}
      </button>

      {/* Primary */}
      <button className="px-4 py-2 bg-black text-white rounded-md text-sm hover:opacity-90">
        {CTA.primary}
      </button>

    </div>
  );
}