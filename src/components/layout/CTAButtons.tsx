export default function CTAButtons() {
  return (
    <div className="flex items-center gap-4">

      {/* TERTIARY
      <a
        href="https://wa.me/234802343780"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:block text-xs text-white/70 hover:text-white"
      >
        💬 Chat
      </a>*/}

      {/* SECONDARY */}
      <button className="px-4 py-2 text-sm border border-white/20 text-white hover:bg-white hover:text-black rounded-md ">
        Request Quote
      </button>

      {/* PRIMARY */}
      <button className="px-4 py-2 text-sm bg-white text-black font-semibold rounded-md hover:opacity-90 transition">
        Book Call
      </button>
    </div>
  );
}