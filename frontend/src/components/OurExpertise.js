import React from "react";
import Link from "next/link";
import { ShoppingCart, Store, Share2 } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Amazon FBA",
    href: "/amazon",
    description:
      "Complete Amazon optimization support, from product research to PPC campaign management aligned with business goals.",
  },
  // {
  //   icon: Store,
  //   title: "Shopify Development",
  //   href: "/shopify",
  //   description:
  //     "Custom Shopify stores designed for conversion with seamless user experiences and mobile optimization.",
  // },
  // {
  //   icon: Share2,
  //   title: "Meta Ads",
  //   href: "/meta",
  //   description:
  //     "Data-driven Facebook and Instagram advertising campaigns that maximize your ad spend ROI.",
  // },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50 border-b border-t border-gray-200">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
          Our Services
        </h2>
        <div
          className="flex max-w-md mx-auto items-center justify-center
        "
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                href={service.href}
                key={index}
                className="h-full block"
                passHref
              >
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-500/50 transition-all duration-300 group shadow-sm hover:shadow-lg cursor-pointer h-full flex flex-col">
                  <div className="w-16 h-16 mb-6 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
