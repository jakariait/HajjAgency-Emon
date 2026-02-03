"use client";
import React from "react";
import { HelpCircle, MessageCircle, Clock } from "lucide-react";
import { getCalendlyLink } from "@/utils/brand";
import Link from "next/link";
import UserFAQ from "@/components/UserFAQ";
import { gtmPushEvent } from "@/utils/gtm";

export default function FAQ() {
  const handleClick = (buttonName, destination) => {
    gtmPushEvent("button_click", {
      buttonName,
      category: "Navigation",
      destination,
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Questions & Answers
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-500 bg-clip-text text-transparent">
            Frequently Asked
            <br />
            Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about our digital marketing
            services, pricing, and process. Can&apos;t find what you&apos;re
            looking for? We&apos;re here to help.
          </p>
        </div>
      </section>

      <UserFAQ />

      <section className="mt-10 pb-10 border-t border-gray-200 pt-6 max-w-3xl mx-auto">
        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-700">
          General Disclaimer
        </h4>
        <p className="text-sm leading-relaxed text-gray-600">
          All services, case studies, and examples referenced are based on
          previous client engagements and real-world implementations. Results
          may vary depending on factors such as business model, product
          category, competition, and market conditions. No specific outcomes,
          performance metrics, or results are guaranteed.
        </p>
      </section>
      {/* Still Have Questions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our team is here to help! Schedule a free consultation to discuss
              your specific needs and get personalized answers to your
              questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getCalendlyLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  onClick={() =>
                    handleClick("Schedule Free Consultation", getCalendlyLink())
                  }
                  className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg cursor-pointer"
                >
                  Schedule Free Consultation
                </button>
              </a>

              <Link href="/contact-us">
                <button
                  onClick={() => handleClick("Contact Support", "/contact-us")}
                  className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 cursor-pointer"
                >
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                Live Chat
              </h3>
              <p className="text-gray-600">
                We’re online 24/7 – Feel free to message us anytime!
              </p>
            </div>
            <div className="group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                Response Time
              </h3>
              <p className="text-gray-600">
                Get an instant reply — no waiting around!
              </p>
            </div>
            <div className="group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                <HelpCircle className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                Free Consultation
              </h3>
              <p className="text-gray-600">30-minute strategy session</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
