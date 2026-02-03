"use client";
import React, { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import Link from "next/link";
import StatsAll from "@/components/StatsAll";
import { gtmPushEvent } from "@/utils/gtm";

export default function MarketingHero() {
  const handleClick = (buttonName, destination) => {
    gtmPushEvent("button_click", {
      buttonName,
      category: "Navigation",
      destination,
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  const services = [
    { name: "Amazon Brand Building", link: "/amazon" },
    // { name: "Shopify Optimization", link: "/shopify" },
    // { name: "Meta Ads Management", link: "/meta" },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {}, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-2 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 container mx-auto px-6 py-10 flex flex-col lg:flex-row items-center ">
        {/* Left Content */}
        <div
          className={`lg:w-1/2 space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-700 text-sm font-medium backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            Amazon-Focused eCommerce Service Provider
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
              Scale Your
              <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Amazon Empire
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Transform your brand with our expertise in Amazon Seller Central
              account management, Amazon PPC optimization, listing optimization,
              FBA operations, and compliance support — built to drive
              sustainable growth on Amazon.
            </p>
          </div>

          {/* Service Tags */}
          <div className="flex items-center justify-center flex-wrap gap-3">
            {services.map((service, index) => (
              <Link
                key={service.name}
                href={service.link}
                className={`px-4 py-2 bg-white/80 border border-gray-200 rounded-lg text-gray-700 text-sm backdrop-blur-sm transform transition-all duration-500 hover:border-orange-500/50 hover:text-orange-600 hover:bg-orange-50 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => handleClick(service.name, service.link)}
              >
                {service.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center ">
            <Link href="/contact-us">
              <button
                onClick={() =>
                  handleClick("Boost My Amazon Sales", "/contact-us")
                }
                className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 cursor-pointer"
              >
                Boost My Amazon Sales
              </button>
            </Link>

            <Link href="/amazon">
              <button
                onClick={() =>
                  handleClick("Solve My Amazon Problem", "/amazon")
                }
                className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 cursor-pointer"
              >
                Solve My Amazon Problem
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content - Visual Element */}
        <div
          className={`lg:w-1/2 lg:pl-12 mt-12 lg:mt-0 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
        >
          <div className="relative">
            {/* Main visual container */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl  shadow-2xl">
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-2xl shadow-lg transform rotate-12 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-lg transform -rotate-12 animate-pulse"></div>

              {/* Content inside visual */}
              <div className="space-y-6">
                <div className="w-full ">
                  <video
                    src="/tessagencyfba.mp4" // Place your video in public/ directory
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-lg shadow-lg aspect-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StatsAll />

      <div
        className={"max-w-4xl text-center mx-auto py-5 text-md text-gray-900"}
      >
        <p>
          Metrics shown are based on historical client case studies. Results
          vary by brand, category, and market conditions.
        </p>
        <p>No specific outcomes are guaranteed.</p>
      </div>
    </div>
  );
}
