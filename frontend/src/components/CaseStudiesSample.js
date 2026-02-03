"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { caseStudies } from "@/utils/caseStudies";
import SecuritySection from "@/components/SecuritySection";

const CaseStudiesSample = () => {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <div>
      {/* Case Study Navigation */}
      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
          Structured Strategies, Measurable Insights
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`flex items-center px-6 py-4 rounded-lg font-medium transition-all ${
                    activeCase === index
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-bold">{study.service}</div>
                    <div className="text-sm opacity-75">{study.industry}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {caseStudies.map((study, index) => {
            if (index !== activeCase) return null;
            const IconComponent = study.icon;

            return (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {study.client}
                      </h2>
                      <p className="text-orange-500 font-medium">
                        {study.industry} • {study.service}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mb-8">
                    <Calendar className="w-4 h-4 mr-2" />
                    Project Timeline: {study.timeline}
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        The Challenge
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        Our Solution
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Key Results Grid */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">
                        Key Results
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(study.results).map(
                          ([key, value], idx) => (
                            <div
                              key={idx}
                              className="bg-orange-500/5 p-4 rounded-lg text-center"
                            >
                              <div className="text-2xl font-bold text-orange-500 mb-1">
                                {value}
                              </div>
                              <div className="text-sm text-gray-600 capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual/Image */}
                <div>
                  <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-2xl p-8 border border-gray-200">
                    {/*<div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-8">*/}
                    {/*  <BarChart3 className="w-16 h-16 text-gray-400" />*/}
                    {/*</div>*/}

                    {/* Detailed Metrics */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900 mb-4">
                        Performance Snapshot (Case Study)
                      </h4>
                      {study.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                        >
                          <span className="text-gray-600 text-sm">
                            {metric.label}
                          </span>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">
                              {metric.before} → {metric.after}
                            </div>
                            <div className="text-orange-500 font-bold text-sm">
                              {metric.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className={"max-w-5xl pt-10 mx-auto text-md text-gray-900"}>
          This case study reflects historical results from a specific client
          engagement. Performance metrics vary based on product category,
          pricing, competition, and market conditions. No outcomes are
          guaranteed.
        </p>
        <div className={"mt-10"}>
          <SecuritySection />

        </div>
      </section>
    </div>
  );
};

export default CaseStudiesSample;
