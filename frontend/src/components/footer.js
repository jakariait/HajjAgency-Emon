import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import SocialMediaLink from "@/components/SocialMediaLink";
import Link from "next/link";
import { getBrandLogo, getBrandName } from "@/utils/brand";

const Footer = () => {
  const year = new Date().getFullYear();
  const mainMenus = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/packages" },
    { label: "About Us", href: "/about" },
    { label: "Registration", href: "/registration" },
  ];

  const usefulLinks = [
    { label: "FAQs", href: "/faqs" },
    { label: "Guideline", href: "/guideline" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms" },
  ];

  return (
    <footer className="bg-primary text-white px-4 ">
      <div className="xl:container xl:mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
        {/* Social Media */}
        <div className="flex flex-col gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex-col bg-accent p-2 rounded-xl items-center justify-center gap-4">
              <img
                src={getBrandLogo()}
                alt={getBrandName()}
                className=" w-60  cursor-pointer hover:opacity-90 transition-opacity duration-200"
              />
            </div>
          </Link>
          <SocialMediaLink />
        </div>

        {/* Main Menus */}
        <div>
          <h3 className="font-bold text-xl mb-3 text-secondary">Main Menus</h3>
          <ul className="flex flex-col gap-2">
            {mainMenus.map((menu, i) => (
              <li key={i}>
                <a
                  href={menu.href}
                  className="hover:text-accent transition-colors duration-300"
                >
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold text-xl mb-3 text-secondary">
            Useful Links
          </h3>
          <ul className="flex flex-col gap-2">
            {usefulLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl mb-3 text-secondary">Contact Us</h3>
          <a
            href="tel:+8801713261112"
            className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
          >
            <Phone className="w-5 h-5" /> +880 1713 261112
          </a>

          <a
            href="mailto:contact@hajjexpressbd.com"
            className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
          >
            <Mail className="w-5 h-5" /> contact@hajjexpressbd.com
          </a>
          <a
            href="https://maps.google.com/?q=Champak+Nagar,+Cumilla"
            className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
          >
            <MapPin className="w-5 h-5" /> Champak Nagar, Cumilla Sadar - 3500,
            Cumilla
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t py-5 text-center flex items-center justify-center gap-3 text-white/70">
        <div>
          © {year} {getBrandName()}
        </div>
        <div>|</div>
        <div>
          Created by <a href="https://www.digiweb.digital/">DigiWeb</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
