"use client";
import React, { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);
  const testimonials = [
    {
      name: "মোঃ রেজাউল করিম",
      location: "কুমিল্লা",
      category: "প্রশিক্ষণ ও গাইডেন্সে সন্তুষ্ট",
      review:
        "হজের আগে তাদের দেওয়া ট্রেনিং সেশনগুলো আমাকে অনেক আত্মবিশ্বাস দিয়েছে। কোন জায়গায় কী করতে হবে—সব বিস্তারিতভাবে বুঝিয়ে দিয়েছে। সৌদি আরবে যাত্রার সময় গাইডরাও খুবই আন্তরিক ছিলেন। আমি সত্যিই কৃতজ্ঞ।",
    },
    {
      name: "মুন্নি আক্তার",
      location: "রাজশাহী",
      category: "সময়মতো সার্ভিস, সুন্দর ব্যবস্থাপনা",
      review:
        "Hajj Express BD - এর সময়ানুবর্তিতা ও মানসম্মত সেবায় আমি মুগ্ধ। মিনায় তাঁবু, মক্কা-মদিনায় হোটেল—সব জায়গায় ভালো ব্যবস্থা পেয়েছি। তাদের মাধ্যমে হজ করা ছিল সত্যিই প্রশান্তির।",
    },
    {
      name: "জান্নাতুল ফেরদৌস",
      location: "চট্টগ্রাম",
      category: "আল্লাহর ঘরে পৌঁছাতে সেরা সাথী",
      review:
        "আমি বহু এজেন্সির খোঁজ করেছি, কিন্তু Hajj Express BD সবচেয়ে স্বচ্ছ ও বিশ্বস্ত মনে হয়েছে। তারা কথা রাখে। আমার জীবনের সবচেয়ে গুরুত্বপূর্ণ সফরকে এত সহজ ও স্মরণীয় করে তোলার জন্য ধন্যবাদ।",
    },
    {
      name: "মোঃ শরীফুল ইসলাম",
      location: "নারায়ণগঞ্জ",
      category: "সফল হজ যাত্রা",
      review:
        "আমি ২০২৪ সালে Hajj Express BD এর মাধ্যমে হজ করেছি। শুরু থেকে শেষ পর্যন্ত তারা অসাধারণ সহযোগিতা করেছে। গাইড, হোটেল, খাবার—সবকিছু খুবই মানসম্মত ছিল। আলহামদুলিল্লাহ, শান্তিপূর্ণ হজ করতে পেরেছি। আল্লাহ তাদের উত্তম প্রতিদান দিন।",
    },
    {
      name: "সাবিহা আফরিন",
      location: "ঢাকা",
      category: "পেশাদার ও বিশ্বস্ত এজেন্সি",
      review:
        "আমি ও আমার পরিবার ওমরাহ করেছি এই এজেন্সির মাধ্যমে। ভিসা প্রসেস থেকে শুরু করে প্রতিটি ধাপ খুবই দ্রুত ও পেশাদারভাবে সম্পন্ন হয়েছে। তারা সবকিছু খুব পরিষ্কারভাবে বুঝিয়ে দেয়, কোন লুকানো খরচ নেই। পুরো যাত্রা ছিল নির্ভরতার।",
    },
    {
      name: "আব্দুল্লাহ আল মামুন",
      location: "সিলেট",
      category: "আস্থা ও নির্ভরতার প্রতীক",
      review:
        "এত সুন্দর ও সুশৃঙ্খলভাবে হজ করতে পেরেছি যে ভাষায় প্রকাশ করা কঠিন। প্রতিটি পদক্ষেপে তাদের সহায়তা ছিল অসাধারণ। আল্লাহ তাদের জাজাকাল্লাহ খাইর দান করুন।",
    },
  ];

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);
            if (!visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden">
      {/* Background Islamic Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="testimonial-pattern"
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
          <rect width="100%" height="100%" fill="url(#testimonial-pattern)" />
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

          {/* Emoji & Title */}
          <div className="mb-4">
            <span className="text-5xl">🕌</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 relative inline-block">
            আস্থার সঙ্গে,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
              স্বীকৃত হজ সেবা
            </span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500 rounded-full"></div>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-amber-700 font-semibold mt-8 mb-4">
            আমাদের সম্মানিত হজ ও ওমরাহ যাত্রীদের অভিমত
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
                আমরা বিশ্বাস করি, একটি সফল হজ বা ওমরাহ শুধু গন্তব্যে পৌঁছানো
                নয়, বরং প্রতিটি পদক্ষেপে শান্তি, সহায়তা এবং আস্থা অর্জনের
                যাত্রা। আমাদের প্রতিটি হাজী ও ওমরাহ যাত্রীগণ এই পবিত্র সফরে
                একেকজন আলাদা গল্পের বাহক। তারা শুধুই আমাদের যাত্রী নন, বরং
                আল্লাহর ঘরে যাত্রার এক বিশুদ্ধ ও সম্মানিত অতিথি। নিচে দেওয়া
                রিভিউগুলো আমাদের প্রতি তাদের সন্তুষ্টি, ভালোবাসা ও আস্থার
                নিদর্শন—যা আমাদের আরও আন্তরিকভাবে সেবা দিতে অনুপ্রাণিত করে।
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-emerald-200/50 hover:border-amber-400/50 transform ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
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

              {/* Top Decorative Border - Animated Shimmer */}
              <div className="relative h-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                {/* Quote Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 animate-pulse-slow"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-float">
                    <svg
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    {/* Decorative Corners on Icon */}
                    <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-white/50 rounded-tl group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white/50 rounded-br group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-emerald-100 to-amber-100 text-emerald-800 text-sm font-semibold rounded-full border border-emerald-300/30 hover:scale-105 transition-transform duration-300 animate-badge-slide">
                    {testimonial.category}
                  </span>
                </div>

                {/* Decorative Line */}
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full mb-6"></div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6 min-h-[160px]">
                  "{testimonial.review}"
                </p>

                {/* Customer Info */}
                <div className="border-t-2 border-emerald-200/50 pt-6">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 animate-pulse-slow">
                      {testimonial.name.charAt(0)}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/40 rounded-tl group-hover:border-white/60 transition-colors duration-300"></div>
                    </div>

                    {/* Name & Location */}
                    <div>
                      <h4 className="font-bold text-emerald-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-amber-600 text-sm flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Decorative Corners */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-emerald-300/30 rounded-tl group-hover:border-amber-400/50 transition-colors duration-300"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-emerald-300/30 rounded-tr group-hover:border-amber-400/50 transition-colors duration-300"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-emerald-300/30 rounded-bl group-hover:border-amber-400/50 transition-colors duration-300"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-300/30 rounded-br group-hover:border-amber-400/50 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes star-pop {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
          }
          100% {
            transform: scale(1) rotate(360deg);
            opacity: 1;
          }
        }

        @keyframes badge-slide {
          0% {
            transform: translateX(-20px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-star-pop {
          animation: star-pop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)
            forwards;
          transform-origin: center;
        }

        .animate-badge-slide {
          animation: badge-slide 0.5s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        /* Hover effect for cards */
        .group:hover {
          transform: translateY(-8px);
        }

        /* Smooth scale on entire card content */
        .group:hover > div {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
