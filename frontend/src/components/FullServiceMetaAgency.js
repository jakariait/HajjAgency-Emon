"use client";
import React from "react";
import {
  Users,
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
  Camera,
  Smartphone,
} from "lucide-react";
import { getCalendlyLink } from "@/utils/brand";
import Link from "next/link";
import { gtmPushEvent } from "@/utils/gtm";

export default function FullServiceMetaAgency() {
  const handleClick = (buttonName, destination) => {
    gtmPushEvent("button_click", {
      buttonName,
      category: "Navigation",
      destination,
    });
  };

  const agencyStats = [
    {
      metric: "Campaigns Launched",
      value: "2,500+",
      icon: Target,
      description: "Successful campaigns",
    },
    {
      metric: "Ad Spend Managed",
      value: "$50M+",
      icon: TrendingUp,
      description: "Total ad investment",
    },
    {
      metric: "Years Experience",
      value: "8+",
      icon: Award,
      description: "Meta advertising expertise",
    },
    {
      metric: "ROAS Average",
      value: "4.2x",
      icon: BarChart3,
      description: "Return on ad spend",
    },
  ];

  const fullServices = [
    {
      category: "Campaign Strategy",
      icon: Target,
      services: [
        {
          name: "Meta Ads Strategy",
          description:
            "Comprehensive Facebook & Instagram advertising strategies",
        },
        {
          name: "Audience Research & Targeting",
          description: "Advanced audience segmentation and targeting",
        },
        {
          name: "Competitor Analysis",
          description: "In-depth analysis of competitor ad strategies",
        },
        {
          name: "Campaign Structure & Setup",
          description: "Optimized campaign architecture for maximum ROI",
        },
      ],
    },
    {
      category: "Creative Production",
      icon: Camera,
      services: [
        {
          name: "Video Ad Creation",
          description: "High-converting video ads for Facebook and Instagram",
        },
        {
          name: "Static Image Design",
          description: "Eye-catching static creatives that drive engagement",
        },
        {
          name: "Carousel & Collection Ads",
          description: "Interactive ad formats for product showcases",
        },
        {
          name: "User-Generated Content",
          description: "Authentic UGC campaigns and content curation",
        },
      ],
    },
    {
      category: "Platform Management",
      icon: Smartphone,
      services: [
        {
          name: "Facebook Ads Management",
          description: "Full Facebook advertising campaign management",
        },
        {
          name: "Instagram Ads Optimization",
          description: "Instagram-specific ad strategies and optimization",
        },
        {
          name: "Stories & Reels Advertising",
          description: "Short-form video advertising across all formats",
        },
        {
          name: "Messenger & WhatsApp Ads",
          description: "Direct messaging campaigns for lead generation",
        },
      ],
    },
    {
      category: "Conversion Optimization",
      icon: Zap,
      services: [
        {
          name: "Landing Page Optimization",
          description: "High-converting landing pages for Meta traffic",
        },
        {
          name: "Pixel Setup & Tracking",
          description: "Advanced Facebook Pixel implementation and tracking",
        },
        {
          name: "Conversion API Integration",
          description: "Server-side tracking for improved data accuracy",
        },
        {
          name: "A/B Testing & Analytics",
          description: "Continuous testing and optimization strategies",
        },
      ],
    },
    {
      category: "Analytics & Reporting",
      icon: BarChart3,
      services: [
        {
          name: "Performance Dashboards",
          description: "Real-time campaign performance and ROI tracking",
        },
        {
          name: "Attribution Modeling",
          description: "Advanced attribution analysis across touchpoints",
        },
        {
          name: "Audience Insights",
          description: "Deep audience behavior and demographic analysis",
        },
        {
          name: "Monthly Strategy Reviews",
          description: "Strategic planning and optimization recommendations",
        },
      ],
    },
    {
      category: "Account Management",
      icon: Shield,
      services: [
        {
          name: "Business Manager Setup",
          description: "Complete Meta Business Manager configuration",
        },
        {
          name: "Account Recovery & Security",
          description: "Account protection and recovery services",
        },
        {
          name: "Policy Compliance",
          description:
            "Ensuring all campaigns meet Meta's advertising policies",
        },
        {
          name: "24/7 Campaign Monitoring",
          description: "Round-the-clock campaign oversight and optimization",
        },
      ],
    },
  ];

  const successProcess = [
    {
      phase: "Discovery & Audit",
      duration: "Week 1",
      description:
        "Comprehensive analysis of your current Meta presence and advertising performance",
      deliverables: [
        "Account audit",
        "Competitor analysis",
        "Audience research",
        "Strategy framework",
      ],
    },
    {
      phase: "Strategy & Creative",
      duration: "Week 2-3",
      description:
        "Develop comprehensive strategy and create high-converting ad creatives",
      deliverables: [
        "Campaign strategy",
        "Creative concepts",
        "Targeting plan",
        "Budget allocation",
      ],
    },
    {
      phase: "Launch & Optimize",
      duration: "Week 4-5",
      description:
        "Campaign launch with continuous monitoring and real-time optimization",
      deliverables: [
        "Live campaigns",
        "Performance tracking",
        "Initial optimizations",
        "Weekly reports",
      ],
    },
    {
      phase: "Scale & Expand",
      duration: "Ongoing",
      description:
        "Scale successful campaigns and expand to new audiences and formats",
      deliverables: [
        "Scaling strategies",
        "New audience testing",
        "Creative iterations",
        "Growth reports",
      ],
    },
  ];

  const clientTypes = [
    {
      type: "E-commerce Brands",
      icon: Star,
      description:
        "Drive sales and revenue growth through targeted Meta advertising campaigns",
      services: [
        "Product catalog ads",
        "Dynamic retargeting",
        "Shopping campaigns",
        "Conversion tracking",
      ],
      results: "Average ROAS: 4.5x+",
    },
    {
      type: "Local Businesses",
      icon: Users,
      description:
        "Build local awareness and drive foot traffic through geo-targeted campaigns",
      services: [
        "Local awareness ads",
        "Store visit campaigns",
        "Lead generation",
        "Event promotion",
      ],
      results: "Average lead cost: -60%",
    },
    {
      type: "SaaS Companies",
      icon: TrendingUp,
      description:
        "Generate qualified leads and drive software subscriptions through Meta",
      services: [
        "Lead generation ads",
        "App install campaigns",
        "Webinar promotion",
        "Trial sign-ups",
      ],
      results: "Average CPA reduction: 45%",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 rounded-full text-blue-600 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Full-Service Meta Agency
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
            Your Complete Meta
            <br />
            Advertising Partner
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            From campaign strategy to million-dollar results, w&apos;re the only
            Meta advertising agency you&apos;ll ever need. Our comprehensive
            services handle every aspect of your Facebook and Instagram
            marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getCalendlyLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                onClick={() =>
                  handleClick("Get Your Free Meta Audit", getCalendlyLink())
                }
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Get Your Free Meta Audit
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
              Trusted by Brands Across All Industries
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself. We&apos;ve helped thousands of
              businesses succeed with Meta advertising.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {agencyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-600/10 rounded-full flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
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
              Complete Meta Advertising Solutions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to dominate Facebook and Instagram
              advertising, all under one roof. No need to manage multiple
              vendors or agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullServices.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-black">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="border-l-2 border-blue-600/20 pl-4"
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
              We Serve Every Type of Business
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you&apos;re a startup looking to build awareness or an
              enterprise scaling your advertising efforts, we have the expertise
              to drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => {
              const IconComponent = client.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-600/50 transition-all duration-300 group hover:shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
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
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                        {service}
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-600/10 px-4 py-2 rounded-full text-blue-600 font-semibold text-sm">
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
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A systematic approach that&apos;s helped thousands of businesses
              achieve Meta advertising success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successProcess.map((phase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {phase.phase}
                  </h3>
                  <div className="inline-flex items-center text-blue-600 text-sm font-medium mb-4">
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
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
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
                Why Choose Us as Your Meta Partner?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Certified Meta Experts",
                    description:
                      "Official Meta Blueprint certification and years of hands-on experience managing millions in ad spend.",
                  },
                  {
                    title: "Dedicated Account Teams",
                    description:
                      "Your own dedicated team of strategists, creatives, and analysts who understand your business goals.",
                  },
                  {
                    title: "Data-Driven Optimization",
                    description:
                      "Every campaign decision backed by real data and advanced analytics for maximum ROI.",
                  },
                  {
                    title: "Creative Excellence",
                    description:
                      "Award-winning creative team producing high-converting ads that stop the scroll and drive action.",
                  },
                  {
                    title: "Transparent Reporting",
                    description:
                      "Real-time dashboards and detailed monthly reports showing exactly where your budget goes.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
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

            <div className="bg-gradient-to-br from-blue-600/10 to-blue-600/5 rounded-2xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Ready to Dominate Meta Advertising?
                </h3>
                <p className="text-gray-600">
                  Get a comprehensive analysis of your Meta advertising
                  potential
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Complete account audit & analysis",
                  "Competitor advertising research",
                  "Custom campaign strategy",
                  "ROI projection model",
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
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
                    handleClick("Get Your Free Meta Audit", getCalendlyLink())
                  }
                  className="w-full px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 shadow-lg cursor-pointer"
                >
                  Get Your Free Meta Audit
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Ready to Transform Your Meta Advertising?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful businesses who trust us to handle their
            complete Meta advertising operations. Let&apos;s discuss how we can
            accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact-us">
              <button
                onClick={() =>
                  handleClick(" Start Your Meta Journey", "/contact-us")
                }
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Start Your Meta Journey
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
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 flex items-center justify-center cursor-pointer"
              >
                Schedule Strategy Call <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </a>
          </div>

          <div className="mt-8 text-gray-500 text-sm">
            Free consultation includes: Account audit • Campaign strategy • ROI
            projections • Team introduction
          </div>
        </div>
      </section>
    </div>
  );
}
