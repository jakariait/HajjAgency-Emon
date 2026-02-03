import React from "react";
import HajjHero from "@/components/HajjHero";
import Services from "@/components/Service";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HajjHero/>
      <Services />
    </main>
  );
}
