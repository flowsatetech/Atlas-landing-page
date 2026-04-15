export default function FinalCTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-[#0b0b0b] to-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
            Your Marketing Should Be Working Harder Than It Is Right Now.
          </h2>

          <p className="mt-4 text-white/70">
            If you’re spending on marketing without a clear system behind it —
            you’re leaving real revenue on the table. Let’s fix that.
          </p>

          <p className="mt-2 text-sm text-white/50">
            Choose how you want to start:
          </p>
        </div>

        {/* OPTIONS */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {/* OPTION 1 */}
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex flex-col">
            <h3 className="text-lg font-semibold mb-2">
              Let’s Talk
            </h3>

            <p className="text-sm text-white/70 mb-4">
              Best for businesses that want to discuss their goals, understand what’s possible, and get expert guidance before committing.
            </p>

            <button className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition">
              👉 Book a Free 30-Minute Strategy Call
            </button>

            <p className="text-xs text-white/50 mt-3">
              No commitment. No pitch. Just a focused conversation about your growth.
            </p>
          </div>

          {/* OPTION 2 */}
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex flex-col">
            <h3 className="text-lg font-semibold mb-2">
              I Know What I Want
            </h3>

            <p className="text-sm text-white/70 mb-4">
              Best for businesses that have already decided on a service and want to move quickly.
            </p>

            <button className="mt-auto border border-white/20 text-white px-5 py-3 rounded-md text-sm hover:bg-white hover:text-black transition">
              📋 Request a Quote
            </button>

            <p className="text-xs text-white/50 mt-3">
              Tell us what you need and we’ll send a custom proposal within 24 hours.
            </p>
          </div>

          {/* OPTION 3 */}
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex flex-col">
            <h3 className="text-lg font-semibold mb-2">
              Quick Question
            </h3>

            <p className="text-sm text-white/70 mb-4">
              Best for businesses still doing their research and want a fast, direct answer before taking the next step.
            </p>

            <a
              href="https://wa.me/234802343780"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Atlas Africa on WhatsApp"
              className="mt-auto text-center bg-green-500 text-white px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              💬 Chat With Us on WhatsApp
            </a>

            <p className="text-xs text-white/50 mt-3">
              We respond fast. No bots. Real people.
            </p>
          </div>
        </div>

        {/* URGENCY */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-sm text-white/60">
            We limit our active client roster each month to protect execution quality.
            If you’re considering working with us, now is the right time to reach out.
          </p>
        </div>

      </div>
    </section>
  );
}