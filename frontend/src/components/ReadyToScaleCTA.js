"use client";
import React from "react";
import { getCalendlyLink } from "@/utils/brand";
import Link from "next/link";
import { gtmPushEvent } from "@/utils/gtm";

const ReadyToScaleCta = () => {
  const handleClick = (buttonName, destination) => {
    gtmPushEvent("button_click", {
      buttonName,
      category: "Navigation",
      destination,
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Ready to Scale Your Business?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of successful businesses who trust us to improve their digital marketing performance. Let&apos;s discuss how we support your Amazon growth strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={getCalendlyLink()} target="_blank" rel="noopener noreferrer">
            <button
              onClick={() =>
                handleClick("Schedule Free Consultation", getCalendlyLink())
              }
              className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg cursor-pointer"
            >
              Schedule Free Consultation
            </button>
          </a>
          <Link href="/success-story">
            <button
              onClick={() => handleClick("View Case Studies", "/success-story")}
              className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 cursor-pointer"
            >
              View Case Studies
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReadyToScaleCta;
