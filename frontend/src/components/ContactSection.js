"use client";
import React from "react";
import { Mail, Phone, CheckCircle, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { getCalendlyLink, getWhatsApp } from "@/utils/brand";
import { gtmPushEvent } from "@/utils/gtm";

const ContactSection = () => {
  const handleClick = (buttonName, destination) => {
    gtmPushEvent("button_click", {
      buttonName,
      category: "Navigation",
      destination,
    });
  };

  const phone = getWhatsApp();
  const link = `https://wa.me/${phone}`;

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to scale your e-commerce business? Let&apos;s discuss how we
            can help you achieve breakthrough growth with our proven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}

          <ContactForm />
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <p className="text-orange-100">
                      <a href="mailto:support@tesscore.com">
                        support@tesscore.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center  space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <p className="text-orange-100">
                      <a href="tel:+12175955859">+1 (217) 595-5859</a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Our Address</h4>
                    <p className="text-orange-100">
                      1012 Marquez Place Ste 106-B Santa Fe, NM 87505
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-black rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Choose Us?
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-white">
                    500+ Successful Projects Delivered
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-white">
                    $50M+ Revenue Generated for Clients
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-white">
                    24/7 Dedicated Support Team
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-white">
                    Free Strategy Session Included
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-white">
                    ROI-Focused Growth Strategies
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-white">Money Back Guarantee</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-orange-500 bg-opacity-10 rounded-lg border border-orange-500">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <p className="text-black font-semibold text-center cursor-pointer ">
                    🚀 Ready to 10x your revenue? Let&apos;s talk!
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Scale Your Business?
            </h3>
            <p className="text-orange-100 mb-6">
              Book a free 30-minute strategy call and discover how we can help
              you achieve breakthrough growth.
            </p>
            <a
              href={getCalendlyLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                onClick={() =>
                  handleClick("Schedule Free Consultation", getCalendlyLink())
                }
                className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Schedule Free Consultation
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
