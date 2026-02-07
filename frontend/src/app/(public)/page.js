import React from "react";
import HajjHero from "@/components/HajjHero";
import Services from "@/components/Service";
import Packages from "@/components/Package";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import Testimonials from "@/components/Testimonial";
import HomePageProducts from "@/components/HomePageProducts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HajjHero />
      <Services
        selectedServices={[
          "ভিসা প্রসেসিং",
          "এয়ার টিকিট বুকিং",
          "মানসম্মত হোটেল",
        ]}
        isHomePage={true}
      />
      <Packages isHomePage={true} />
      <Gallery isHomePage={true} />
      <VideoGallery isHomePage={true} />
      <Testimonials />
      <HomePageProducts />
    </main>
  );
}
