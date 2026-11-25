"use client";

import React, { useState } from "react";
import { Search, Building, Sliders, CheckCircle2, ArrowRight } from "lucide-react";

interface QuickHvacFinderProps {
  onSelectProduct: (productId: string) => void;
  onOpenEnquiry: (customSubject: string) => void;
}

export default function QuickHvacFinder({ onSelectProduct, onOpenEnquiry }: QuickHvacFinderProps) {
  const [sector, setSector] = useState("corporate");
  const [area, setArea] = useState("medium");
  const [priority, setPriority] = useState("efficiency");

  // Recommendation engine based on inputs
  const getRecommendation = () => {
    if (sector === "healthcare") {
      return {
        title: "Airflex HygiPharma Hospital AHU & Sterile VRF System",
        tag: "NABH / cGMP Cleanroom Compliant",
        productId: "cleanroom-ot-ahu",
        estTonnage: area === "small" ? "15 - 35 TR" : area === "medium" ? "40 - 120 TR" : "150 - 450 TR",
        desc: "Designed with 100% fresh air treatment, HEPA H14 filtration, positive pressure cascade, and precision RH control to eliminate surgical infection risks."
      };
    }
    if (sector === "industrial" || sector === "coldchain") {
      return {
        title: "Airflex Helios Air-Cooled Screw Chiller / Cold Storage System",
        tag: "Heavy-Duty High-Ambient 54°C",
        productId: sector === "coldchain" ? "coldchain-modular-room" : "chiller-helios-screw",
        estTonnage: area === "small" ? "30 - 80 TR" : area === "medium" ? "90 - 240 TR" : "250 - 800+ TR",
        desc: "Equipped with stepless slide valve modulation, twin independent refrigeration circuits, and microchannel condensers engineered for heavy industrial process cooling."
      };
    }
    if (priority === "silent" || sector === "hospitality") {
      return {
        title: "Airflex 360° Circular Inverter Cassettes & Ultra-Quiet FCUs",
        tag: "Whisper-Quiet < 28 dB(A)",
        productId: "ducted-cassette-inv",
        estTonnage: area === "small" ? "8 - 25 TR" : area === "medium" ? "30 - 80 TR" : "100 - 300 TR",
        desc: "Circular radial air dispersion eliminating drafts, combined with ultra-slim 220mm brushless DC fan coils for discreet luxury acoustics."
      };
    }
    // Corporate / Default
    return {
      title: "Airflex V7 Pro Modular VRF & EuroSkin Double Skin AHU",
      tag: "Highest EER 4.88 / LEED Green Certified",
      productId: "vrf-v7-pro",
      estTonnage: area === "small" ? "12 - 40 HP" : area === "medium" ? "48 - 120 HP" : "120 - 400+ HP",
      desc: "Full DC Inverter scroll technology with intelligent zone-by-zone BMS automation, reducing commercial energy utility bills by up to 38%."
    };
  };

  const rec = getRecommendation();

  return (
    <section className="bg-slate-100 py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 sm:p-8">
          
          <div className="border-b border-slate-200 pb-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004b87]">
              FAST SYSTEM CONFIGURATOR
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Find the Ideal HVAC System for Your Facility
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Select your facility parameters to get an instant engineering recommendation and sizing estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1: Sector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Facility / Building Type
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004b87] focus:border-transparent transition-all"
              >
                <option value="corporate">Corporate Towers / Commercial Office</option>
                <option value="healthcare">Hospitals, Clinics & Cleanrooms</option>
                <option value="industrial">Factory / Manufacturing Plant</option>
                <option value="hospitality">Hotels, Resorts & Restaurants</option>
                <option value="coldchain">Cold Storage & Perishables Hub</option>
              </select>
            </div>

            {/* Step 2: Area / Footprint */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Approximate Floor Area
              </label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004b87] focus:border-transparent transition-all"
              >
                <option value="small">Up to 8,000 Sq. Ft. (Compact Facility)</option>
                <option value="medium">8,000 – 40,000 Sq. Ft. (Mid Commercial)</option>
                <option value="large">40,000 – 200,000+ Sq. Ft. (Campus / High Rise)</option>
              </select>
            </div>

            {/* Step 3: Priority */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Primary Engineering Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004b87] focus:border-transparent transition-all"
              >
                <option value="efficiency">Maximum Energy Efficiency & Low Opex</option>
                <option value="sterile">Sterile Air Purity & HEPA Filtration</option>
                <option value="silent">Whisper-Quiet Acoustics & Architectural Aesthetics</option>
                <option value="heavy">Extreme 54°C Ambient Heavy Duty Operation</option>
              </select>
            </div>

          </div>

          {/* Dynamic Recommendation Result Card */}
          <div className="mt-6 bg-gradient-to-r from-blue-50/70 to-slate-50 border border-blue-200/80 rounded-lg p-5">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1.5">
                  <span className="bg-[#004b87] text-white text-[11px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
                    Recommended Match
                  </span>
                  <span className="text-xs font-semibold text-cyan-700 bg-cyan-100/70 px-2.5 py-0.5 rounded">
                    Est. Capacity: {rec.estTonnage}
                  </span>
                  <span className="text-xs font-medium text-slate-500 hidden sm:inline-block">
                    • {rec.tag}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  {rec.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
                  {rec.desc}
                </p>
              </div>

              <div className="flex items-center space-x-3 w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
                <button
                  onClick={() => onSelectProduct(rec.productId)}
                  className="flex-1 lg:flex-initial px-4 py-2 border border-[#004b87] text-[#004b87] hover:bg-[#004b87] hover:text-white rounded text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  View Product Specs
                </button>
                <button
                  onClick={() => onOpenEnquiry(`Configuration Proposal for: ${rec.title}`)}
                  className="flex-1 lg:flex-initial bg-[#004b87] hover:bg-[#003867] text-white px-5 py-2 rounded text-xs font-bold uppercase tracking-wider shadow transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
