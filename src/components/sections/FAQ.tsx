import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

export default function FAQ() {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Questions We Hear Before Every First Call
        </h2>

        {/* FAQ */}
        <Accordion type="single" collapsible className="mt-12 space-y-4">

          <AccordionItem value="item-1">
            <AccordionTrigger>Do you offer fixed packages?</AccordionTrigger>
            <AccordionContent>
              No, and deliberately so. Fixed packages are built for agencies,
              not for clients. We analyze your business first, then build a custom
              system around what actually moves the needle.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>What happens after I book a strategy call?</AccordionTrigger>
            <AccordionContent>
              You’ll get a confirmation and calendar invite immediately. On the call,
              we analyze your business, goals, audience, and current marketing.
              Afterward, we send a clear proposal with recommendations  no obligation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How fast will I see results?</AccordionTrigger>
            <AccordionContent>
              Paid ads usually show traction in 2–4 weeks. Content and brand work
              compounds over 60–90 days. We set realistic expectations before starting.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>What if I’m not sure what I need?</AccordionTrigger>
            <AccordionContent>
              That’s exactly what the strategy call is for. We diagnose your gaps
              and guide you toward the right growth system.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>What types of businesses do you work with?</AccordionTrigger>
            <AccordionContent>
              Restaurants, eCommerce brands, service businesses, startups, and SMEs
              across Africa. If you need customers, we can build a system for you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Do you handle everything or do I need to stay involved?</AccordionTrigger>
            <AccordionContent>
              We handle strategy, execution, and optimization. We only need your input
              at the start, then we run the system while you run your business.
            </AccordionContent>
          </AccordionItem>

        </Accordion>

        {/* CTA Block */}
        <div className="text-center mt-14">

          <p className="text-gray-700 mb-6">
            Still have questions?
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <Button className="bg-[#0057FF] hover:bg-[#0046cc] text-white px-6 py-3 rounded-xl">
              Book a Free Strategy Call
            </Button>

            <Button variant="outline" className="border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF] hover:text-white px-6 py-3 rounded-xl">
              Chat on WhatsApp
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}