import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#020617] via-[#020617] to-[#0A1A3A] text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* PRE-HEADLINE */}
          <p className="text-sm text-[#D4AF37] tracking-wide mb-4 font-medium">
            Turn Your Marketing Into Revenue — Not Just Activity
          </p>

          {/* HEADLINE */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            Your Marketing Should Be{" "}
            <span className="text-[#D4AF37]">Making You Money.</span>
          </h1>

          {/* SUB */}
          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Most businesses don’t have a marketing problem — they have a system problem.
            Atlas Africa builds performance-driven marketing systems that turn your
            audience into customers and your spend into revenue.
          </p>

          {/* BODY */}
          <p className="mt-4 text-sm text-white/60 max-w-md mx-auto lg:mx-0">
            No guesswork. No vanity metrics. No fixed packages built for our
            convenience instead of your growth.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4">

            {/* PRIMARY */}
            <button className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition">
              👉 Book a Free Strategy Call
            </button>

            {/* SECONDARY */}
            <button className="w-full sm:w-auto border border-white/20 text-white px-6 py-3 rounded-md text-sm hover:bg-white hover:text-black transition">
              Get a Quote for Your Business
            </button>
          </div>

          {/* TERTIARY */}
          <a
            href="https://wa.me/234802343780"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Atlas Africa on WhatsApp"
            className="inline-block mt-4 text-sm text-white/70 hover:text-white transition"
          >
            💬 Chat With Us on WhatsApp
          </a>

          {/* MICRO */}
          <p className="mt-4 text-xs text-white/50">
            We limit active client spots monthly to protect quality. Don’t wait.
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hidden lg:block relative">

          {/* BLUE GLOW */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] bg-[#0057FF]/20 blur-3xl rounded-full" />
          </div>

          {/* IMAGE CONTAINER */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-3 shadow-2xl">

            <Image
              src="/hero-image.png"
              alt="Marketing team collaborating on growth strategy"
              width={600}
              height={450}
              priority
              className="rounded-xl object-cover"
            />

            {/* FLOATING STAT CARD
            <div className="absolute -top-6 -right-6 bg-[#0A1A3A] border border-white/10 rounded-xl px-4 py-3 shadow-lg">
              <p className="text-xs text-white/60">Avg. ROI</p>
              <p className="text-lg font-semibold text-[#0057FF]">3.2x</p>
              <p className="text-xs text-white/50">in 90 days</p>
            </div>*/}

          </div>
        </div>

      </div>
    </section>
  );
}