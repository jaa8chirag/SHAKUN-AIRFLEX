"use client";

import React, { useState } from "react";
import { 
  PRODUCTS, 
  HVAC_CATEGORIES, 
  Product 
} from "@/data/hvacData";
import { 
  Cpu, 
  Snowflake, 
  Wind, 
  Grid, 
  ShieldCheck, 
  ThermometerSnowflake, 
  ArrowRight, 
  Download, 
  FileText, 
  Check, 
  Layers,
  Sparkles
} from "lucide-react";

interface ProductShowcaseProps {
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  onOpenSpecs: (product: Product) => void;
  onOpenEnquiry: (productName: string) => void;
}

export default function ProductShowcase({
  selectedCategory,
  onSelectCategory,
  onOpenSpecs,
  onOpenEnquiry
}: ProductShowcaseProps) {
  
  const filteredProducts = selectedCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Blue Star Corporate Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#004b87] mb-2">
              <span className="w-2.5 h-2.5 bg-[#004b87] inline-block rounded-xs"></span>
              <span>COMMERCIAL & INDUSTRIAL HVAC RANGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered Product Systems
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              High-efficiency VRF systems, central water and air-cooled chillers, Eurovent certified air handling units, and cleanroom air systems.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span className="text-xs font-semibold text-slate-500">
              Showing {filteredProducts.length} Systems
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          <button
            onClick={() => onSelectCategory("all")}
            className={`px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider shrink-0 transition-all ${
              selectedCategory === "all"
                ? "bg-[#004b87] text-white shadow"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Products
          </button>

          {HVAC_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider shrink-0 transition-all flex items-center space-x-2 ${
                selectedCategory === cat.id
                  ? "bg-[#004b87] text-white shadow"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Product Image Header with Real Realistic HVAC Photo */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Series Badge */}
                <div className="absolute top-3 left-3 bg-[#0b2545]/90 backdrop-blur-sm text-cyan-300 text-[11px] font-bold px-2.5 py-1 rounded border border-cyan-400/30 uppercase tracking-wider">
                  {product.series}
                </div>

                {/* Rating / EER Badge */}
                <div className="absolute top-3 right-3 bg-white/95 text-slate-800 text-[11px] font-bold px-2 py-0.5 rounded shadow">
                  {product.cop}
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider">
                    {product.capacityRange}
                  </div>
                  <h3 className="text-lg font-bold leading-snug drop-shadow-sm">
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* Quick Specs List */}
                  <div className="space-y-2 py-3 border-y border-slate-100 text-xs mb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Compressor / Tech:</span>
                      <span className="font-semibold text-slate-800 text-right truncate max-w-[180px]">
                        {product.compressorType}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Refrigerant:</span>
                      <span className="font-semibold text-slate-800">{product.refrigerant}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Acoustic Rating:</span>
                      <span className="font-semibold text-slate-800">{product.noiseLevel}</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 mb-5">
                    {product.keyFeatures.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start space-x-1.5 text-[11.5px] text-slate-600">
                        <span className="text-cyan-600 font-bold mt-0.5">•</span>
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 border-t border-slate-100 flex items-center space-x-2">
                  <button
                    onClick={() => onOpenSpecs(product)}
                    className="flex-1 px-3 py-2 border border-slate-300 hover:border-[#004b87] hover:text-[#004b87] rounded text-xs font-bold uppercase tracking-wider text-slate-700 transition-colors"
                  >
                    Tech Specs
                  </button>
                  <button
                    onClick={() => onOpenEnquiry(product.name)}
                    className="flex-1 bg-[#004b87] hover:bg-[#003867] text-white px-3 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center space-x-1"
                  >
                    <span>Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner - Custom Engineering Solutions */}
        <div className="mt-12 bg-[#0b2545] rounded-xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              CUSTOM OEM & INDUSTRIAL FABRICATION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-1">
              Need custom static pressure, explosion-proof, or marine grade chillers?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Our in-house R&D and manufacturing facility in Haridwar fabricates bespoke AHUs, brine chillers down to -35°C, and specialized ventilation systems for chemical and pharma complexes.
            </p>
          </div>

          <div className="shrink-0 flex items-center space-x-3 w-full md:w-auto">
            <button
              onClick={() => onOpenEnquiry("Custom OEM HVAC Engineering Inquiry")}
              className="w-full md:w-auto bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-6 py-3 rounded text-xs uppercase tracking-wider shadow transition-colors"
            >
              Speak to Application Engineer
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
