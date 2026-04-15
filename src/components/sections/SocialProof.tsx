import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SocialProofStrip() {
  return (
    <section className="py-16 px-6 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto">

        {/* Headline */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
          Brands That Stopped Guessing and Started Growing
        </h2>

        {/* Results */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <Card className="bg-gray-50 border-none shadow-sm text-center">
            <CardContent className="p-6">
              <p className="text-lg font-semibold text-[#0057FF]">
                ★ 65% increase in sales within 60 days
              </p>
              <p className="text-sm text-gray-600 mt-2">
                F&B Brand, Lagos
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-none shadow-sm text-center">
            <CardContent className="p-6">
              <p className="text-lg font-semibold text-[#FFD500]">
                ★ 5x return on ad spend
              </p>
              <p className="text-sm text-gray-600 mt-2">
                eCommerce Brand, Nigeria
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-none shadow-sm text-center">
            <CardContent className="p-6">
              <p className="text-lg font-semibold text-[#0057FF]">
                ★ 2x inbound leads in 6 weeks
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Service Business, Abuja
              </p>
            </CardContent>
          </Card>

        </div>

        {/* Testimonial */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-800 italic">
            “Before Atlas Africa, we were spending on marketing and crossing our fingers. Now we know what’s working — and our revenue shows it.”
          </p>

          <div className="mt-3 text-gray-500 text-sm">
            — Client Name · Role · Brand
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">

          <Button className="bg-[#0057FF] hover:bg-[#0046cc] text-white px-6 py-3 rounded-xl">
            Book a Free Strategy Call
          </Button>

          <Button variant="outline" className="border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF] hover:text-white px-6 py-3 rounded-xl">
            Chat With Us on WhatsApp
          </Button>

        </div>

        {/* Micro note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Quick questions welcome — no pressure sales.
        </p>

      </div>
    </section>
  );
}