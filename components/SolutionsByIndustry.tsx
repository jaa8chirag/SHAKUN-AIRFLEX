"use client";

import React, { useState } from "react";
import { INDUSTRY_SOLUTIONS } from "@/data/hvacData";
import { CheckCircle2, ArrowRight, ShieldCheck, Activity, Award } from "lucide-react";

interface SolutionsByIndustryProps {
  onOpenEnquiry: (solutionName: string) => void;
}

export default function SolutionsByIndustry({ onOpenEnquiry }: SolutionsByIndustryProps) {
  const [activeTab, setActiveTab] = useState(INDUSTRY_SOLUTIONS[0].id);

  const activeSolution = INDUSTRY_SOLUTIONS.find((s) => s.id === activeTab) || INDUSTRY_SOLUTIONS[0];

  return (
    <section id="solutions" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#004b87] mb-2">
            <span className="w-2.5 h-2.5 bg-[#004b87] inline-block rounded-xs"></span>
            <span>INDUSTRY APPLICATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered HVAC Solutions by Industry Sector
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            From sterile hospital operating suites and mission-critical server halls to heavy industrial manufacturing, Shakun Airflex delivers tailored environmental control systems.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 overflow-x-auto mb-8 scrollbar-thin">
          {INDUSTRY_SOLUTIONS.map((sol) => (
            <button
              key={sol.id}
              onClick={() => setActiveTab(sol.id)}
              className={`py-3 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider shrink-0 border-b-2 transition-all ${
                activeTab === sol.id
                  ? "border-[#004b87] text-[#004b87] bg-blue-50/50"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {sol.title.split(",")[0]}
            </button>
          ))}
        </div>

        {/* Active Solution Showcase */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Content Area (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#004b87]">
                  {activeSolution.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-4 font-sans">
                  {activeSolution.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  {activeSolution.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Engineering Specifications & Standards:
                  </span>
                  {activeSolution.benefits.map((b, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3 bg-white p-4 rounded-lg border border-slate-200 mb-6">
                  {activeSolution.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg sm:text-xl font-extrabold text-[#004b87]">
                        {m.value}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-500 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry(`Solution RFP for ${activeSolution.title}`)}
                  className="bg-[#004b87] hover:bg-[#003867] text-white font-bold px-6 py-2.5 rounded text-xs uppercase tracking-wider shadow transition-colors flex items-center space-x-2"
                >
                  <span>Request Solution Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                </button>
                <div className="text-xs text-slate-500">
                  Featured Products: <span className="font-semibold text-slate-700">{activeSolution.featuredProducts.join(", ")}</span>
                </div>
              </div>
            </div>

            {/* Right Image Area (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-slate-800">
              <img
                src={activeSolution.image}
                alt={activeSolution.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center space-x-1.5 bg-[#004b87]/90 px-3 py-1 rounded text-xs font-semibold backdrop-blur-sm mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Turnkey Project Design & Commissioning</span>
                </div>
                <div className="text-sm font-bold">
                  Compliant with ASHRAE, ISHRAE, NABH & Eurovent standards
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
