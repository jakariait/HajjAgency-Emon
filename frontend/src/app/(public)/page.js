import CaseStudiesSample from "@/components/CaseStudiesSample";
import BrandsWeWorkWith from "@/components/BrandsWeWorkWith";
import OurExpertise from "@/components/OurExpertise";
import ReadyToScaleCta from "@/components/ReadyToScaleCTA";
import React from "react";
import ResultsWeGet from "@/components/ResultsWeGet";
import MarketingHero from "@/components/MarketingHero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MarketingHero />
      <BrandsWeWorkWith />
      <ResultsWeGet />
      <OurExpertise />
      <CaseStudiesSample />{/* CTA Section */}
      <ReadyToScaleCta />
    </main>
  );
}
