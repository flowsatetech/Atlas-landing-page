import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Services from "@/components/sections/Services";
import Difference from "@/components/sections/Difference";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Services />
      <Difference />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
    </>
  );
}