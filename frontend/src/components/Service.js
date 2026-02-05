"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/utils/services";
import { getBrandName } from "@/utils/brand";

const Services = ({ selectedServices, isHomePage = false }) => {
  const displayedServices = selectedServices
    ? services.filter((service) => selectedServices.includes(service.title))
    : services;

  // Container variant for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Refined fade-up animation with smoother easing
  const fadeUpItemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth motion
      }
    },
  };

  // Enhanced card animation with scale and rotation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: 10,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.19, 1.0, 0.22, 1.0], // Exponential easing out
      }
    },
  };

  // Decorative line animation
  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    show: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.65, 0, 0.35, 1],
        delay: 0.3
      }
    },
  };

  // Diamond decoration animation
  const diamondVariants = {
    hidden: { scale: 0, rotate: 0, opacity: 0 },
    show: (custom) => ({
      scale: 1,
      rotate: 45,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.4 + (custom * 0.1),
        ease: "backOut",
      }
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px", amount: 0.1 }}
      className="relative py-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden"
    >
      {/* Background Islamic Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
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
              <circle cx="50" cy="50" r="15" fill="none" stroke="#059669" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="#059669" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-pattern)" />
        </svg>
      </div>

      {/* Decorative Top Border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
        variants={lineVariants}
      ></motion.div>

      <div className="relative xl:container xl:mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
        >
          {/* Decorative Top Line */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            variants={fadeUpItemVariants}
          >
            <motion.div
              className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-400"
              variants={lineVariants}
            ></motion.div>
            <motion.div
              className="w-2 h-2 rotate-45 bg-amber-500"
              variants={diamondVariants}
              custom={0}
            ></motion.div>
            <motion.div
              className="w-16 h-px bg-gradient-to-r from-emerald-400 to-amber-400"
              variants={lineVariants}
            ></motion.div>
            <motion.div
              className="w-3 h-3 rotate-45 bg-emerald-500"
              variants={diamondVariants}
              custom={1}
            ></motion.div>
            <motion.div
              className="w-16 h-px bg-gradient-to-r from-amber-400 to-emerald-400"
              variants={lineVariants}
            ></motion.div>
            <motion.div
              className="w-2 h-2 rotate-45 bg-amber-500"
              variants={diamondVariants}
              custom={2}
            ></motion.div>
            <motion.div
              className="w-12 h-px bg-gradient-to-r from-emerald-400 to-transparent"
              variants={lineVariants}
            ></motion.div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 relative inline-block"
            variants={fadeUpItemVariants}
          >
            আমাদের সেবা সমূহ
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            ></motion.div>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-amber-700 font-semibold mt-8 mb-4"
            variants={fadeUpItemVariants}
          >
            বিশ্বাসের সঙ্গে সেবা, আন্তরিকতার সঙ্গে প্রস্তুতি
          </motion.p>

          <motion.div
            className="max-w-4xl mx-auto mt-8"
            variants={fadeUpItemVariants}
          >
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border-2 border-emerald-200/50">
              <motion.div
                className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-emerald-500/40 rounded-tl"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              ></motion.div>
              <motion.div
                className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-500/40 rounded-br"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              ></motion.div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {getBrandName()} হজ ও ওমরাহ যাত্রাকে সহজ, নিরাপদ ও সুশৃঙ্খল করতে
                প্রতিশ্রুতিবদ্ধ। আমাদের সাথে আপনার ইবাদতের পূণ্যময় সময়টুকু হোক প্রশান্তিময়।
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Grid with Stagger Effect */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {displayedServices.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden border-2 border-emerald-200/50 hover:border-amber-400/50"
              style={{ perspective: "1000px" }}
            >
              {/* Card Pattern */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`card-pattern-${index}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M30 0 L45 15 L30 30 L15 15 Z" fill="none" stroke="#059669" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#card-pattern-${index})`} />
                </svg>
              </div>

              <motion.div
                className="h-2 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              ></motion.div>

              <div className="relative p-8">
                <motion.div
                  className="relative mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <motion.div
                    className="relative w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      rotate: 6,
                      transition: { duration: 0.3, ease: "backOut" }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold text-emerald-900 mb-4 group-hover:text-amber-700 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {service.title}
                </motion.h3>

                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full mb-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                ></motion.div>

                <motion.p
                  className="text-gray-600 leading-relaxed mb-6 min-h-[120px]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                >
                  {service.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                >
                  <Link href="/contact-us">
                    <motion.button
                      className="group/btn cursor-pointer relative w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      ></motion.div>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {service.buttonText}
                      </span>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        {isHomePage && (
          <motion.div
            className="text-center"
            variants={containerVariants}
          >
            <motion.div
              variants={fadeUpItemVariants}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <motion.div
                className="w-24 h-px bg-gradient-to-r from-transparent to-emerald-300"
                variants={lineVariants}
              ></motion.div>
              <motion.div
                className="w-3 h-3 rotate-45 bg-amber-500"
                variants={diamondVariants}
                custom={0}
              ></motion.div>
              <motion.div
                className="w-24 h-px bg-gradient-to-r from-emerald-300 to-transparent"
                variants={lineVariants}
              ></motion.div>
            </motion.div>

            <motion.div variants={fadeUpItemVariants}>
              <Link href="/services">
                <motion.button
                  className="group relative bg-gradient-to-br from-amber-500 to-amber-700 text-white font-bold px-12 py-4 rounded-2xl shadow-xl overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  ></motion.div>
                  <span className="relative z-10">আমাদের আরো সেবাসমূহ দেখুন</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
        variants={lineVariants}
      ></motion.div>
    </motion.section>
  );
};

export default Services;