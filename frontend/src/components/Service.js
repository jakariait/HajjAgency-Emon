"use client"
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "ভিসা প্রসেসিং",
      description:
        "ভিসা আবেদন প্রক্রিয়া দ্রুত সম্পন্ন করি এবং ভিসা প্রসেসিং, যাত্রীর পাসপোর্ট ও প্রয়োজনীয় কাগজ নিরাপদে যাচাই করে আমরা নির্ভরযোগ্য ভিসা ডেলিভারি নিশ্চিত করি।",
      buttonText: "ভিসা প্রসেসিং করতে যোগাযোগ করুন",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "এয়ার টিকিট বুকিং",
      description:
        "আমরা বিভিন্ন বিশ্বস্ত এয়ারলাইনের সঙ্গে সমন্বয় করে যাত্রীদের সুবিধাজনক সময় অনুযায়ী টিকিট বুক করি। সাশ্রয়ী ভাড়ায় সেরা ফ্লাইট অপশন বেছে নিতে আমরা সাহায্য করি।",
      buttonText: "এয়ার টিকিট করতে যোগাযোগ করুন",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
    },
    {
      title: "মানসম্মত হোটেল",
      description:
        "কাবা শরীফ ও মসজিদে নববীর নিকটে পরিচ্ছন্ন, আরামদায়ক ও আধুনিক সুযোগ-সুবিধাসম্পন্ন হোটেলে থাকার ব্যবস্থা করা হয়, পাশাপাশি আপনি যেন মনোযোগ দিয়ে ইবাদত করতে পারেন—সেই পরিবেশ বিশ্বস্ততার সাথে আমরা নিশ্চিত করি।",
      buttonText: "হোটেল পেতে যোগাযোগ করুন",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden"
    >
      {/* Background Islamic Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="services-pattern"
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
          <rect width="100%" height="100%" fill="url(#services-pattern)" />
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
            আমাদের সেবা সমূহ
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500 rounded-full"></div>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-amber-700 font-semibold mt-8 mb-4">
            বিশ্বাসের সঙ্গে সেবা, আন্তরিকতার সঙ্গে প্রস্তুতি
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
                Hajj Express BD হজ ও ওমরাহ যাত্রাকে সহজ, নিরাপদ ও সুশৃঙ্খল করতে
                প্রতিশ্রুতিবদ্ধ। আমরা প্রি-রেজিস্ট্রেশন, ভিসা, এয়ার টিকেট,
                মানসম্পন্ন হোটেল, আরামদায়ক ট্রান্সপোর্ট, প্রতিদিন ৩ বেলা দেশীয়
                খাবার, জিয়ারাহ এবং অভিজ্ঞ গাইডসহ সম্পূর্ণ প্যাকেজ সেবা দিয়ে
                থাকি। আল্লাহ ঘরকে কেন্দ্র করে আপনার ইবাদতের পূণ্যময় সময়টুকু
                হোক প্রশান্তিময়। সব আয়োজনের দায়িত্ব আমাদের। ইন-শা-আল্লাহ।
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

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-emerald-200/50 hover:border-amber-400/50"
              variants={itemVariants}
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
                    {service.icon}
                    {/* Decorative Corners on Icon */}
                    <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-white/50 rounded-tl"></div>
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white/50 rounded-br"></div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-emerald-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Decorative Line */}
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full mb-4"></div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 min-h-[120px]">
                  {service.description}
                </p>

                {/* Button */}
                <Link href="/contact-us">
                  <button className="group/btn relative w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 rotate-45 bg-white/80"></span>
                      {service.buttonText}
                      <span className="w-1.5 h-1.5 rotate-45 bg-white/80"></span>
                    </span>

                    {/* Decorative Corners */}
                    <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white/30"></div>
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white/30"></div>
                  </button>
                </Link>
              </div>

              {/* Card Decorative Corners */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-emerald-300/30 rounded-tl group-hover:border-amber-400/50 transition-colors duration-300"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-emerald-300/30 rounded-tr group-hover:border-amber-400/50 transition-colors duration-300"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-emerald-300/30 rounded-bl group-hover:border-amber-400/50 transition-colors duration-300"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-300/30 rounded-br group-hover:border-amber-400/50 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Services Button */}
        <div className="text-center">
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-emerald-300"></div>
            <div className="w-2 h-2 rotate-45 bg-emerald-400"></div>
            <div className="w-3 h-3 rotate-45 bg-amber-500"></div>
            <div className="w-2 h-2 rotate-45 bg-emerald-400"></div>
            <div className="w-24 h-px bg-gradient-to-r from-emerald-300 to-transparent"></div>
          </div>

          <Link href="/services">
            <button className="group relative bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white font-bold px-12 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 uppercase overflow-hidden border-2 border-amber-400/50 hover:border-amber-300 hover:scale-105 active:scale-95">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="more-btn-pattern"
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
                    fill="url(#more-btn-pattern)"
                  />
                </svg>
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              {/* Button Text */}
              <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                <span className="w-2 h-2 rotate-45 bg-white/80 group-hover:rotate-[225deg] transition-transform duration-500"></span>
                আমাদের আরো সেবাসমূহ দেখুন
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
    </motion.section>
  );
};

export default Services;
