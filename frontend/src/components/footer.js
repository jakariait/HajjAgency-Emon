import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { getBrandLogo, getBrandName, getSlogan } from "@/utils/brand";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/tess.agency",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/tess_core_llc",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tess-agency/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-orange-100 px-4 py-3 ">
      {/* Bottom Section */}
      <div className="xl:container xl:mx-auto  flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo/Brand */}
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex-col items-center justify-center gap-4">
              <img
                src={getBrandLogo()}
                alt={getBrandName()}
                className="w-40  cursor-pointer hover:opacity-90 transition-opacity duration-200"
              />
            </div>
          </Link>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            <span className="text-black text-sm mr-2">Follow us:</span>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black hover:text-orange-500 p-3 rounded-xl transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-black text-sm">
              © {currentYear} {getBrandName()}. All rights reserved.
            </p>
            <p className="text-black text-xs mt-1">
              Trusted by 500+ e-commerce brands worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
