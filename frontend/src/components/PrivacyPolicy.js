import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  const policySections = [
    {
      title: "Introduction",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: `Hajj Express BD ("we", "our", "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, store, and disclose your personal information when you interact with our website or use our services related to Hajj and Umrah travel bookings. We advise you to read this Privacy Policy carefully to understand how your data is handled.`,
    },
    {
      title: "Information We Collect",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      content: "We collect personal information (name, passport, contact details), payment information (processed through secure gateways), and technical data (IP address, browser type, cookies) to provide our services effectively.",
    },
    {
      title: "How We Use Your Information",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      content: "We use your data to register and manage bookings, process travel itineraries, fulfill legal requirements, provide customer support, send notifications, and improve our services.",
    },
    {
      title: "Data Sharing & Disclosure",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      content: "We do not sell your data. We may share information with government authorities (Ministry of Hajj, MOFA), travel partners (airlines, hotels), payment processors, and IT service providers. All third parties comply with data protection laws.",
    },
    {
      title: "Data Storage & Security",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      content: "We use SSL encryption, firewall protection, secure servers, role-based access control, and data retention policies to protect your information. Data is retained only as long as necessary.",
    },
    {
      title: "Your Rights",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      content: "You have the right to access, correct, delete, object to processing, withdraw consent, and request data portability. Contact us at contact@hajjexpressbd.com to exercise these rights.",
    },
    {
      title: "Cookies & Tracking",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      content: "We use essential, performance, functional, and marketing cookies to improve your experience. You can manage cookies through your browser settings.",
    },
    {
      title: "Children's Privacy",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      content: "Our services are not directed to individuals under 18. We do not knowingly collect data from minors. If we become aware of such data, we will delete it immediately.",
    },
    {
      title: "International Transfers",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: "Your data may be transferred outside Bangladesh (e.g., to Saudi Arabia) for Hajj and Umrah processing. We ensure all transfers are secure and comply with data protection laws.",
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden">
      {/* Background Islamic Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="privacy-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M50 0 L75 25 L50 50 L25 25 Z M50 50 L75 75 L50 100 L25 75 Z M0 25 L25 50 L0 75 L-25 50 Z M100 25 L125 50 L100 75 L75 50 Z"
                fill="none"
                stroke="#059669"
                strokeWidth="0.5"
              />
              <circle
                cx="50"
                cy="50"
                r="15"
                fill="none"
                stroke="#059669"
                strokeWidth="0.5"
              />
              <circle
                cx="50"
                cy="50"
                r="25"
                fill="none"
                stroke="#059669"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#privacy-pattern)" />
        </svg>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

      <div className="relative xl:container xl:mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Decorative Top Element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-400"></div>
            <div className="w-2 h-2 rotate-45 bg-amber-500"></div>
            <div className="w-16 h-px bg-gradient-to-r from-emerald-400 to-amber-400"></div>
            <div className="w-3 h-3 rotate-45 bg-emerald-500"></div>
            <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-emerald-400"></div>
            <div className="w-2 h-2 rotate-45 bg-amber-500"></div>
            <div className="w-12 h-px bg-gradient-to-r from-emerald-400 to-transparent"></div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 relative inline-block">
            Privacy Policy
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500 rounded-full"></div>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-amber-700 font-semibold mt-8 mb-4">
            Your Privacy, Our Commitment
          </p>

          {/* Description */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border-2 border-emerald-200/50">
              {/* Decorative Corners */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-emerald-500/40 rounded-tl"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-emerald-500/40 rounded-tr"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-amber-500/40 rounded-bl"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-500/40 rounded-br"></div>

              <p className="text-gray-700 leading-relaxed text-lg">
                Our website address is:{" "}
                <a
                  href="https://www.hajjexpressbd.com"
                  className="text-emerald-700 font-semibold hover:text-amber-600 transition-colors duration-300"
                >
                  www.hajjexpressbd.com
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                Thank you for visiting Hajj Express BD. Please read this Privacy
                Policy carefully. By using our website or submitting your
                information to us, you consent to the practices described herein.
              </p>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-300"></div>
            <div className="w-2 h-2 rotate-45 bg-emerald-400"></div>
            <div className="w-2 h-2 rotate-45 bg-amber-400"></div>
            <div className="w-2 h-2 rotate-45 bg-emerald-400"></div>
            <div className="w-16 h-px bg-gradient-to-r from-emerald-300 to-transparent"></div>
          </div>
        </div>

        {/* Policy Sections Grid */}
        <div className="grid grid-cols-2  gap-8 mb-16">
          {policySections.map((section, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-emerald-200/50 hover:border-amber-400/50"
            >
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id={`card-pattern-${index}`}
                      x="0"
                      y="0"
                      width="60"
                      height="60"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M30 0 L45 15 L30 30 L15 15 Z"
                        fill="none"
                        stroke="#059669"
                        strokeWidth="0.5"
                      />
                      <circle
                        cx="30"
                        cy="30"
                        r="10"
                        fill="none"
                        stroke="#059669"
                        strokeWidth="0.3"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill={`url(#card-pattern-${index})`}
                  />
                </svg>
              </div>

              {/* Top Decorative Border */}
              <div className="h-2 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500"></div>

              {/* Content */}
              <div className="relative p-8">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {section.icon}
                    {/* Decorative Corners on Icon */}
                    <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-white/50 rounded-tl"></div>
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white/50 rounded-br"></div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-emerald-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                  {section.title}
                </h3>

                {/* Decorative Line */}
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full mb-4"></div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 min-h-[140px]">
                  {section.content}
                </p>
              </div>

              {/* Card Decorative Corners */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-emerald-300/30 rounded-tl group-hover:border-amber-400/50 transition-colors duration-300"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-emerald-300/30 rounded-tr group-hover:border-amber-400/50 transition-colors duration-300"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-emerald-300/30 rounded-bl group-hover:border-amber-400/50 transition-colors duration-300"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-300/30 rounded-br group-hover:border-amber-400/50 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Contact & Updates Section */}
        <div className="text-center">
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-emerald-300"></div>
            <div className="w-2 h-2 rotate-45 bg-emerald-400"></div>
            <div className="w-3 h-3 rotate-45 bg-amber-500"></div>
            <div className="w-2 h-2 rotate-45 bg-emerald-400"></div>
            <div className="w-24 h-px bg-gradient-to-r from-emerald-300 to-transparent"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Contact Info */}
            <div className="relative bg-white p-6 rounded-xl shadow-lg border-2 border-emerald-200/50">
              <p className="text-gray-700 text-lg">
                <strong className="text-emerald-900">
                  Questions about your privacy?
                </strong>
                <br />
                Contact us at:{" "}
                <a
                  href="mailto:contact@hajjexpressbd.com"
                  className="text-emerald-700 font-semibold hover:text-amber-600 transition-colors duration-300"
                >
                  contact@hajjexpressbd.com
                </a>
              </p>
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-300/40 rounded-tl"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-300/40 rounded-br"></div>
            </div>

            {/* Last Updated */}
            <div className="relative bg-gradient-to-r from-emerald-50 to-amber-50 p-6 rounded-xl border-2 border-amber-400/30">
              <p className="text-gray-700">
                <strong className="text-emerald-900">Last Updated:</strong>{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                We reserve the right to update this Privacy Policy at any time. Please review this page periodically.
              </p>
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-400/40 rounded-tl"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-emerald-400/40 rounded-br"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
    </section>
  );
};

export default PrivacyPolicy;
