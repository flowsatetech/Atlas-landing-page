export default function HowItWorks() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Three Steps from Today to Growth
          </h2>
        </div>

        {/* STEPS */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* STEP 1 */}
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#D4AF37] text-white font-semibold mb-4">
              1
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Book Your Free Strategy Call
            </h3>

            <p className="text-sm text-white/70 leading-relaxed">
              We spend 30 minutes understanding your business, your goals, and where your marketing is falling short. No pitch. No pressure. Just clarity.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#D4AF37] text-white font-semibold mb-4">
              2
            </div>

            <h3 className="text-lg font-semibold mb-2">
              We Build Your Custom Growth Plan
            </h3>

            <p className="text-sm text-white/70 leading-relaxed">
              We design the right combination of services, mapped to your specific revenue targets, with clear timelines and expected outcomes.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#D4AF37] text-white font-semibold mb-4">
              3
            </div>

            <h3 className="text-lg font-semibold mb-2">
              We Execute and You Grow
            </h3>

            <p className="text-sm text-white/70 leading-relaxed">
              We launch, optimize, and scale. You get regular reporting on what’s working and what we’re adjusting — and results that show up in your revenue.
            </p>
          </div>
        </div>

        {/* CTA BLOCK */}
        <div className="mt-16 flex flex-col items-center gap-4">

          {/* PRIMARY */}
          <button className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition">
            👉 Start With a Free Strategy Call
          </button>

          {/* SECONDARY */}
          <button className="w-full sm:w-auto border border-white/20 text-white px-6 py-3 rounded-md text-sm hover:bg-white hover:text-black transition">
            I Know What I Need — Get a Quote
          </button>

          {/* TERTIARY */}
          <a
            href="https://wa.me/234802343780"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Atlas Africa on WhatsApp"
            className="text-sm text-white/70 hover:text-white transition"
          >
            💬 Chat With Us on WhatsApp First
          </a>
        </div>

      </div>
    </section>
  );
}