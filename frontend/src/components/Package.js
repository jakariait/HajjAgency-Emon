import React from "react";
import Link from "next/link";
import {packages} from "@/utils/package";
import {getEmailAddress, getPhoneNumber} from "@/utils/brand";

const Packages = () => {

  const phone = getPhoneNumber();


  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-white via-emerald-50/30 to-amber-50/30 overflow-hidden">
      {/* Background Islamic Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="packages-pattern"
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
          <rect width="100%" height="100%" fill="url(#packages-pattern)" />
        </svg>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

      <div className="relative xl:container xl:mx-auto">
        {/* Top Call to Action */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-2xl blur-lg"></div>
            <div className="relative bg-white/90 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border-2 border-amber-400/50">
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-900">
                পছন্দের প্যাকেজটি আজই বুকিং দিন
              </h3>
              {/* Decorative corners */}
              <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-emerald-500/40 rounded-tl"></div>
              <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-emerald-500/40 rounded-tr"></div>
              <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-amber-500/40 rounded-bl"></div>
              <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-amber-500/40 rounded-br"></div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
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
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6 relative inline-block">
            আমাদের হজ ও ওমরাহ প্যাকেজ সমূহ
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500 rounded-full"></div>
          </h2>

          {/* Contact Info */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 p-6 rounded-xl shadow-lg border-2 border-emerald-500/50">
              <p className="text-white text-lg leading-relaxed">
                হজ – ২০২৬ ও ২০২৭ সালের প্রাক-নিবন্ধন চলছে এবং প্রতি মাসের ওমরাহ
                সময়সূচী জানতে যোগাযোগ করুন:
                <a
                  href={`tel:${phone}`}
                  className="font-bold ml-2 hover:text-amber-300 transition-colors duration-300"
                >
                  {phone}
                </a>
              </p>
              {/* Decorative corners */}
              <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-white/40 rounded-tl"></div>
              <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-white/40 rounded-tr"></div>
              <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-white/40 rounded-bl"></div>
              <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-white/40 rounded-br"></div>
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

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full ${
                pkg.featured
                  ? "border-4 border-amber-400 ring-4 ring-amber-400/20 "
                  : "border-2 border-emerald-200/50 hover:border-amber-400/50"
              }`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm">
                    জনপ্রিয়
                    {/* Decorative corners */}
                    <div className="absolute top-0.5 left-0.5 w-2 h-2 border-t border-l border-white/50"></div>
                    <div className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b border-r border-white/50"></div>
                  </div>
                </div>
              )}

              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.03] transition-opacity duration-300">
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
              <div
                className={`h-2 ${pkg.type === "hajj" ? "bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-600" : "bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500"}`}
              ></div>

              {/* Content */}
              <div className="relative p-6">
                {/* Package Type Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                      pkg.type === "hajj"
                        ? "bg-emerald-600 text-white"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {pkg.type === "hajj" ? "🕋 হজ" : "🌙 ওমরাহ"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-emerald-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                  {pkg.title}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 rounded-lg blur-sm"></div>
                    <div className="relative text-4xl font-bold text-amber-600 bg-white px-4 py-2 rounded-lg border-2 border-amber-400/30">
                      {pkg.price}
                    </div>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full mb-6"></div>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rotate-45 bg-emerald-500 flex-shrink-0"></span>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <div className="mb-6 p-3 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                  <p className="text-xs text-gray-600 italic">{pkg.note}</p>
                </div>

                {/* Registration Button */}
                <Link href="/registration">
                  <button className="group/btn cursor-pointer relative w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                      <span className="w-2 h-2 rotate-45 bg-white/80"></span>
                      এখনই রেজিস্ট্রেশন করুন
                      <span className="w-2 h-2 rotate-45 bg-white/80"></span>
                    </span>

                    {/* Decorative Corners */}
                    <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-white/40 rounded-tl"></div>
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white/40 rounded-br"></div>
                  </button>
                </Link>
              </div>

              {/* Card Decorative Corners */}
              <div
                className={`absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 rounded-tl transition-colors duration-300 ${
                  pkg.featured
                    ? "border-amber-400"
                    : "border-emerald-300/30 group-hover:border-amber-400/50"
                }`}
              ></div>
              <div
                className={`absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 rounded-tr transition-colors duration-300 ${
                  pkg.featured
                    ? "border-amber-400"
                    : "border-emerald-300/30 group-hover:border-amber-400/50"
                }`}
              ></div>
              <div
                className={`absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 rounded-bl transition-colors duration-300 ${
                  pkg.featured
                    ? "border-amber-400"
                    : "border-emerald-300/30 group-hover:border-amber-400/50"
                }`}
              ></div>
              <div
                className={`absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 rounded-br transition-colors duration-300 ${
                  pkg.featured
                    ? "border-amber-400"
                    : "border-emerald-300/30 group-hover:border-amber-400/50"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* View All Packages Button */}
        <div className="text-center">
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-emerald-300"></div>
            <div className="w-2 h-2 rotate-45 bg-emerald-400"></div>
            <div className="w-3 h-3 rotate-45 bg-amber-500"></div>
            <div className="w-2 h-2 rotate-45 bg-emerald-400"></div>
            <div className="w-24 h-px bg-gradient-to-r from-emerald-300 to-transparent"></div>
          </div>

          <Link href="/packages">
            <button className="group cursor-pointer relative bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white font-bold px-12 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 uppercase overflow-hidden border-2 border-amber-400/50 hover:border-amber-300 hover:scale-105 active:scale-95">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="view-btn-pattern"
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M20 0 L30 10 L20 20 L10 10 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        r="6"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.3"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#view-btn-pattern)"
                  />
                </svg>
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              {/* Button Text */}
              <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                <span className="w-2 h-2 rotate-45 bg-white/80 group-hover:rotate-[225deg] transition-transform duration-500"></span>
                প্যাকেজগুলো দেখুন
                <span className="w-2 h-2 rotate-45 bg-white/80 group-hover:rotate-[225deg] transition-transform duration-500"></span>
              </span>

              {/* Decorative Corners */}
              <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-white/40 rounded-tl transition-all duration-300 group-hover:w-5 group-hover:h-5"></div>
              <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-white/40 rounded-tr transition-all duration-300 group-hover:w-5 group-hover:h-5"></div>
              <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-white/40 rounded-bl transition-all duration-300 group-hover:w-5 group-hover:h-5"></div>
              <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-white/40 rounded-br transition-all duration-300 group-hover:w-5 group-hover:h-5"></div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
    </section>
  );
};

export default Packages;
