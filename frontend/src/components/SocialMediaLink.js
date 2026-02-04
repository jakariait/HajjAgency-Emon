import React from "react";
import { Facebook, MapPin } from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import {
  getFacebook,
  getLocation,
  getWhatsApp,
  getYoutube,
} from "@/utils/brand";

const SocialMediaLink = () => {
  const whatsapp = getWhatsApp();
  const location = getLocation();
  const facebook = getFacebook();
  const youtube = getYoutube();

  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(location)}`;

  const socialLinks = [
    {
      icon: Facebook,
      href: facebook,
      label: "Facebook",
    },

    {
      icon: FaWhatsapp,
      href: `https://wa.me/${whatsapp}`,
      label: "WhatsApp",
    },
    {
      icon: FaYoutube,
      href: youtube,
      label: "YouTube",
    },
    {
      icon: MapPin,
      href: mapUrl,
      label: "Location",
    },
  ];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent bg-secondary/40 p-2 rounded-md transition-all duration-300 transform hover:scale-110 hover:text-accent/90"
            aria-label={social.label}
          >
            <IconComponent className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaLink;
