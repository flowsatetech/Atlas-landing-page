import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    highlight: "For brands that are invisible or inconsistent on social",
    description:
      "We build content systems that generate inbound demand, not just followers.",
    includes:
      "Content strategy and planning · High-converting creative production · Community management · Growth-focused execution",
    result:
      "Consistent brand presence that generates inbound demand on autopilot.",
    cta: "Get a Quote for Social Media Management",
  },
  {
    title: "PAID ADVERTISING — META & GOOGLE",
    highlight: "For brands spending on ads without predictable returns",
    description:
      "We build data-driven campaigns that target the right people at the right moment.",
    includes:
      "Facebook and Instagram Ads · Google Search and Display · Retargeting sequences · Conversion tracking and optimization",
    result:
      "Qualified leads that convert. Predictable, scalable revenue.",
    cta: "Get a Quote for Paid Advertising",
  },
  {
    title: "BRAND IDENTITY DESIGN",
    highlight: "For brands competing on price instead of perception",
    description:
      "We build visual identities that position you as the premium option in your market.",
    includes:
      "Logo and full visual identity · Brand guidelines · Messaging and positioning · Creative direction",
    result:
      "A brand that commands attention and earns trust instantly.",
    cta: "Get a Quote for Brand Identity",
  },
  {
    title: "WEB & APP DEVELOPMENT",
    highlight: "For brands losing customers to weak websites",
    description:
      "We build high-converting digital experiences engineered for sales.",
    includes:
      "Landing pages · Websites & web apps · UI/UX design · Performance optimization",
    result:
      "A digital presence that works 24/7 to convert visitors into customers.",
    cta: "Get a Quote for Web Development",
  },
  {
    title: "CONTENT DEVELOPMENT & MEDIA",
    highlight: "For brands that need attention at scale",
    description:
      "We create scroll-stopping content that drives action across platforms.",
    includes:
      "Video production · Reels · Brand storytelling · Photography · Campaign content",
    result:
      "Content that fuels every growth channel.",
    cta: "Get a Quote for Content Production",
  },
  {
    title: "STRATEGY & GROWTH CONSULTATION",
    highlight: "For brands without a clear growth system",
    description:
      "We analyze your business and build a data-backed growth roadmap.",
    includes:
      "Strategy audit · Funnel design · Positioning · Growth roadmap",
    result:
      "Clarity on exactly what to do to hit your growth targets.",
    cta: "Book a Strategy Session",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
          Six Growth Systems. One Goal: Revenue.
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Pick the service your business needs most — or let us build a custom combination.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {services.map((service, i) => (
            <Card key={i} className="border border-gray-100 shadow-sm hover:shadow-md transition">
              <CardContent className="p-6">

                <h3 className="text-lg font-bold text-[#0057FF]">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {service.highlight}
                </p>

                <p className="mt-4 text-gray-700">
                  {service.description}
                </p>

                <div className="mt-4 text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">Includes:</span>{" "}
                  {service.includes}
                </div>

                <p className="mt-4 text-sm font-medium text-[#FFD500]">
                  Result: {service.result}
                </p>

                {/* CTA */}
                <div className="mt-6 flex gap-3 flex-wrap">
                  <Button className="bg-[#0057FF] hover:bg-[#0046cc] text-white">
                    {service.cta}
                  </Button>

                  <Button variant="outline" className="border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF] hover:text-white">
                    WhatsApp
                  </Button>
                </div>

              </CardContent>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}