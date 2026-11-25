"use client";

import React from "react";
import { CLIENT_REFERENCES } from "@/data/hvacData";
import { Building2, MapPin, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react";

export default function ProjectsShowcase() {
  const projectCards = [
    {
      title: "Tata Steel Mega Logistics Hub",
      location: "Jamshedpur, Jharkhand",
      system: "Heavy Industrial Chillers (1,200 TR) & Process Ventilation",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      highlight: "Ambient 52°C continuous duty operation"
    },
    {
      title: "Apollo Multispecialty Super-Care",
      location: "New Delhi NCR",
      system: "NABH Surgical OT Double Skin AHUs with HEPA H14",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      highlight: "Zero cross-contamination & precision RH balance"
    },
    {
      title: "DLF CyberCity Tech Park - Tower 9",
      location: "Gurugram, Haryana",
      system: "V7 Modular All-DC Inverter VRF System (2,400 HP)",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      highlight: "34% energy bill reduction verified by LEED audit"
    },
    {
      title: "Sun Pharmaceutical Formulations",
      location: "Vadodara, Gujarat",
      system: "cGMP Cleanroom Grade AHUs & Water-Cooled Chillers",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      highlight: "USFDA Class 10,000 validation compliance"
    },
    {
      title: "Radisson Blu Palace & Luxury Suites",
      location: "Udaipur, Rajasthan",
      system: "Ultra-Quiet Concealed FCUs (28 dBA) & Chiller Network",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      highlight: "Individual guest room BMS keycard automation"
    },
    {
      title: "Adani Integrated Port Cold Storage",
      location: "Nhava Sheva, Maharashtra",
      system: "Modular Controlled Atmosphere Cold Rooms (15,000 MT)",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      highlight: "-25°C blast freezing with cloud telemetry"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#004b87] mb-2">
              <span className="w-2.5 h-2.5 bg-[#004b87] inline-block rounded-xs"></span>
              <span>LANDMARK INSTALLATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Proven Project Reference Portfolio
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Over 1,450 commercial and industrial projects successfully engineered, commissioned, and supported across India.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3.5 py-2 rounded shadow-sm inline-block">
              Total Commissioned Tonnage: <strong className="text-[#004b87]">65,000+ TR</strong>
            </span>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectCards.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center space-x-1 text-xs text-cyan-300 font-semibold mb-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{proj.location}</span>
                    </div>
                    <h3 className="text-base font-bold text-white drop-shadow-sm leading-snug">
                      {proj.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
                    System Deployed
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 mb-3 leading-snug">
                    {proj.system}
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-100 rounded p-2.5 text-xs text-slate-700 flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#004b87] shrink-0 mt-0.5" />
                    <span>{proj.highlight}</span>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-4 pt-2 border-t border-slate-100 flex justify-between items-center text-xs">
                <span className="text-emerald-700 font-semibold flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Fully Operational</span>
                </span>
                <span className="text-slate-400 font-mono text-[11px]">Ref #{1024 + idx}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
