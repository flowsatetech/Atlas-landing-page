import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function OurDifference() {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
          We Don’t Sell Services.<br />
          We Build Revenue Systems.
        </h2>

        {/* Intro */}
        <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto">
          Most agencies sell fixed packages and execute them whether they fit or not.
          You pay for services you don’t need — and miss the ones you do.
          <br /><br />
          We work differently.
          We analyze your business first, then build a system tailored to your growth.
        </p>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* Left: Process */}
          <Card className="shadow-sm border border-gray-100">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-[#0057FF]">
                Our Approach
              </h3>

              <p className="text-gray-700 mt-4 leading-relaxed">
                Before we recommend anything, we analyze your business — your goals,
                your audience, your current gaps, and your growth potential.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                Then we build a custom combination of services that solves your actual problem.
              </p>
            </CardContent>
          </Card>

          {/* Right: Example */}
          <Card className="shadow-sm border border-gray-100">
            <CardContent className="p-6">

              <h3 className="text-lg font-bold text-[#FFD500]">
                Real Example
              </h3>

              <p className="text-gray-700 mt-4">
                A Lagos restaurant was spending on marketing but foot traffic wasn’t moving.
                The issue wasn’t awareness — it was conversion.
              </p>

              <div className="mt-4 text-sm text-gray-700 space-y-2">
                <p>We built:</p>
                <p>→ Social content showing dining experience</p>
                <p>→ UGC from real customers</p>
                <p>→ Meta ads driving reservations</p>
                <p>→ Retargeting for engaged users</p>
              </div>

              <p className="mt-4 font-semibold text-[#0057FF]">
                Result: 65% increase in covers within 60 days.
              </p>

            </CardContent>
          </Card>

        </div>

        {/* Closing line */}
        <p className="text-center mt-14 text-gray-800 font-medium">
          That’s the difference between buying a service and getting a system.
        </p>

        {/* CTA */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">

          <Button className="bg-[#0057FF] hover:bg-[#0046cc] text-white px-6 py-3 rounded-xl">
            Book a Free Strategy Call — Let’s Build Your System
          </Button>

          <Button variant="outline" className="border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF] hover:text-white px-6 py-3 rounded-xl">
            Get a Custom Quote
          </Button>

          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-xl">
            WhatsApp
          </Button>

        </div>

      </div>
    </section>
  );
}