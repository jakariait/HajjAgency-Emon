"use client"
import React from "react";
import {
  ShoppingBag,
  Store,
  TrendingUp,
  Target,
  Star,
  Shield,
  Zap,
  BarChart3,
  Award,
  CheckCircle,
  Calendar,
  ExternalLink,
  Palette,
  Code,
} from "lucide-react";
import { getCalendlyLink } from "@/utils/brand";
import Link from "next/link";
import {gtmPushEvent} from "@/utils/gtm";


export default function FullServiceShopifyAgency() {

  const handleClick = (buttonName, destination) => {
    gtmPushEvent("button_click", {
      buttonName,
      category: "Navigation",
      destination,
    });
  };


  const agencyStats = [
    {
      metric: "Stores Built",
      value: "750+",
      icon: Store,
      description: "Successful launches",
    },
    {
      metric: "Revenue Generated",
      value: "$85M+",
      icon: TrendingUp,
      description: "Total client revenue",
    },
    {
      metric: "Years Experience",
      value: "9+",
      icon: Award,
      description: "Shopify expertise",
    },
    {
      metric: "Success Rate",
      value: "98%",
      icon: Target,
      description: "Client satisfaction",
    },
  ];

  const fullServices = [
    {
      category: "Store Development",
      icon: Code,
      services: [
        {
          name: "Custom Shopify Development",
          description:
            "Bespoke themes and functionality tailored to your brand",
        },
        {
          name: "Theme Customization",
          description: "Professional modifications to existing themes",
        },
        {
          name: "App Integration & Development",
          description: "Custom apps and third-party integrations",
        },
        {
          name: "Performance Optimization",
          description: "Speed optimization and technical SEO",
        },
      ],
    },
    {
      category: "Design & UX",
      icon: Palette,
      services: [
        {
          name: "Custom Store Design",
          description:
            "Unique, conversion-focused designs that reflect your brand",
        },
        {
          name: "Mobile Optimization",
          description: "Responsive design for all devices and screen sizes",
        },
        {
          name: "User Experience Audit",
          description:
            "Comprehensive UX analysis and improvement recommendations",
        },
        {
          name: "Brand Identity Integration",
          description: "Seamless brand consistency across all touchpoints",
        },
      ],
    },
    {
      category: "Marketing & Growth",
      icon: Target,
      services: [
        {
          name: "Digital Marketing Strategy",
          description: "Multi-channel marketing campaigns for growth",
        },
        {
          name: "Email Marketing Automation",
          description: "Advanced email sequences and customer journeys",
        },
        {
          name: "Social Media Marketing",
          description: "Instagram, Facebook, and TikTok marketing strategies",
        },
        {
          name: "Content Marketing",
          description:
            "Blog content, product descriptions, and SEO copywriting",
        },
      ],
    },
    {
      category: "Conversion Optimization",
      icon: Zap,
      services: [
        {
          name: "A/B Testing & Analytics",
          description: "Data-driven optimization for higher conversions",
        },
        {
          name: "Checkout Optimization",
          description:
            "Streamlined checkout process to reduce cart abandonment",
        },
        {
          name: "Product Page Optimization",
          description: "High-converting product pages that drive sales",
        },
        {
          name: "Customer Journey Mapping",
          description: "Optimize every step of the customer experience",
        },
      ],
    },
    {
      category: "Analytics & Reporting",
      icon: BarChart3,
      services: [
        {
          name: "Advanced Analytics Setup",
          description:
            "Google Analytics 4, Facebook Pixel, and conversion tracking",
        },
        {
          name: "Performance Dashboards",
          description: "Real-time insights and KPI monitoring",
        },
        {
          name: "Competitive Analysis",
          description: "Market research and competitor benchmarking",
        },
        {
          name: "Monthly Performance Reviews",
          description: "Strategic planning and optimization recommendations",
        },
      ],
    },
    {
      category: "Support & Maintenance",
      icon: Shield,
      services: [
        {
          name: "24/7 Technical Support",
          description: "Round-the-clock monitoring and issue resolution",
        },
        {
          name: "Security & Backup Management",
          description: "Store security, updates, and data protection",
        },
        {
          name: "Inventory Management",
          description: "Stock optimization and automated reorder systems",
        },
        {
          name: "Platform Migration",
          description: "Seamless migration from other platforms to Shopify",
        },
      ],
    },
  ];

  const successProcess = [
    {
      phase: "Discovery & Strategy",
      duration: "Week 1-2",
      description:
        "Deep dive into your business, goals, and market to create a comprehensive strategy",
      deliverables: [
        "Business analysis",
        "Competitor research",
        "Strategy roadmap",
        "Technical requirements",
      ],
    },
    {
      phase: "Design & Development",
      duration: "Week 3-6",
      description:
        "Custom design creation and store development with regular feedback and iterations",
      deliverables: [
        "Custom design mockups",
        "Developed store",
        "Mobile optimization",
        "Testing & QA",
      ],
    },
    {
      phase: "Launch & Optimization",
      duration: "Week 7-8",
      description:
        "Store launch with comprehensive testing, training, and initial optimization",
      deliverables: [
        "Live store launch",
        "Team training",
        "Analytics setup",
        "Initial optimizations",
      ],
    },
    {
      phase: "Growth & Scale",
      duration: "Ongoing",
      description:
        "Continuous optimization, marketing campaigns, and scaling strategies",
      deliverables: [
        "Performance reports",
        "Marketing campaigns",
        "Feature updates",
        "Growth initiatives",
      ],
    },
  ];

  const clientTypes = [
    {
      type: "Startup Businesses",
      icon: Star,
      description:
        "Complete store setup and launch support for new e-commerce businesses",
      services: [
        "Store development",
        "Brand design",
        "Product setup",
        "Marketing launch",
      ],
      results: "Average 3-month revenue: $15K+",
    },
    {
      type: "Growing Brands",
      icon: TrendingUp,
      description:
        "Scaling strategies and optimization for established e-commerce brands",
      services: [
        "Store redesign",
        "Conversion optimization",
        "Advanced marketing",
        "Automation setup",
      ],
      results: "Average growth: +250% revenue",
    },
    {
      type: "Enterprise Companies",
      icon: Award,
      description:
        "Enterprise-level Shopify Plus solutions for large-scale operations",
      services: [
        "Shopify Plus setup",
        "Custom integrations",
        "Multi-store management",
        "Enterprise support",
      ],
      results: "Average portfolio: $2M+ revenue",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 rounded-full text-green-600 text-sm font-medium mb-6">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Full-Service Shopify Agency
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-green-600 bg-clip-text text-transparent">
            Your Complete Shopify
            <br />
            Success Partner
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            From store design to million-dollar sales, we&apos;re the only
            Shopify agency you&apos;ll ever need. Our comprehensive services
            handle every aspect of your e-commerce business so you can focus on
            what you do best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getCalendlyLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                onClick={() =>
                  handleClick("Get Your Free Store Audit", getCalendlyLink())
                }
                className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors transform hover:scale-105 shadow-lg cursor-pointer">
                Get Your Free Store Audit
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Agency Stats */}
      <section className="py-16 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Trusted by E-commerce Brands Worldwide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself. We&apos;ve helped hundreds of
              businesses succeed with Shopify.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {agencyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-black font-medium mb-1">
                    {stat.metric}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">
              Complete Shopify Solutions
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to succeed with Shopify, all under one roof.
              No need to manage multiple vendors or agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullServices.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-black">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="border-l-2 border-green-500/20 pl-4"
                      >
                        <h4 className="font-semibold text-black mb-1">
                          {service.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">
              We Serve Every Type of E-commerce Business
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you&apos;re launching your first store or managing a
              multi-million dollar e-commerce empire, we have the expertise to
              help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => {
              const IconComponent = client.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-green-500/50 transition-all duration-300 group hover:shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {client.type}
                  </h3>
                  <p className="text-gray-600 mb-6">{client.description}</p>

                  <div className="space-y-2 mb-6">
                    {client.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        {service}
                      </div>
                    ))}
                  </div>

                  <div className="bg-green-500/10 px-4 py-2 rounded-full text-green-600 font-semibold text-sm">
                    {client.results}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">
              Our Proven Success Process
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A systematic approach that&apos;s helped hundreds of businesses
              achieve e-commerce success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successProcess.map((phase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-green-600 text-white font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {phase.phase}
                  </h3>
                  <div className="inline-flex items-center text-green-600 text-sm font-medium mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {phase.duration}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  {phase.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-black text-sm">
                    Deliverables:
                  </h4>
                  {phase.deliverables.map((deliverable, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-gray-600 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">
                Why Choose Us as Your Shopify Partner?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Complete Shopify Expertise",
                    description:
                      "Deep knowledge of Shopify, Shopify Plus, and the entire e-commerce ecosystem gained from years of hands-on experience.",
                  },
                  {
                    title: "Dedicated Project Teams",
                    description:
                      "Your own dedicated team of designers, developers, and marketing specialists who understand your business.",
                  },
                  {
                    title: "Data-Driven Approach",
                    description:
                      "Every decision backed by data and analytics to ensure maximum ROI and sustainable growth.",
                  },
                  {
                    title: "Proven Track Record",
                    description:
                      "Hundreds of successful store launches and millions in revenue generated across all industries.",
                  },
                  {
                    title: "Future-Proof Solutions",
                    description:
                      "We build scalable solutions that grow with your business and adapt to market changes.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-2xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Ready to Build Your Dream Store?
                </h3>
                <p className="text-gray-600">
                  Get a comprehensive analysis of your e-commerce potential
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Complete store audit & analysis",
                  "Competitor research report",
                  "Custom growth strategy",
                  "Revenue projection model",
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={getCalendlyLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  onClick={() =>
                    handleClick("Get Your Free Store Audit", getCalendlyLink())
                  }
                  className="w-full px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors transform hover:scale-105 shadow-lg cursor-pointer">
                  Get Your Free Store Audit
                </button>
              </a>
              <div className="text-center text-gray-500 text-sm mt-4">
                No commitment required • 100% confidential
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-500/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Ready to Transform Your E-commerce Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful e-commerce brands who trust us to handle
            their complete Shopify operations. Let&apos;s discuss how we can
            accelerate your online success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">

            <button

              onClick={() =>
                handleClick("Start Your Shopify Journey", "/contact-us")
              }

              className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors transform hover:scale-105 shadow-lg cursor-pointer">
              Start Your Shopify Journey
            </button>
              </Link>
            <a
              href={getCalendlyLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                onClick={() =>
                  handleClick("Schedule Strategy Call", getCalendlyLink())
                }
                className="px-8 py-4 border-2 border-green-600 text-green-600 font-bold rounded-lg hover:bg-green-600 hover:text-white transition-all transform hover:scale-105 flex items-center justify-center cursor-pointer">
                Schedule Strategy Call <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </a>
          </div>

          <div className="mt-8 text-gray-500 text-sm">
            Free consultation includes: Store audit • Growth strategy • Success
            roadmap • Team introduction
          </div>
        </div>
      </section>
    </div>
  );
}
