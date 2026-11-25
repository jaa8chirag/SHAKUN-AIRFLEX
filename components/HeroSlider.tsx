"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShieldCheck, ArrowRight, Award, Zap, CheckCircle2 } from "lucide-react";
import { CORPORATE_STATS } from "@/data/hvacData";

interface HeroSliderProps {
  onOpenEnquiry: (prefilledProduct?: string) => void;
  onOpenCalculator: () => void;
}

export default function HeroSlider({ onOpenEnquiry, onOpenCalculator }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "Commercial Climate Engineering",
      headline: "Advanced Inverter VRF & Water-Cooled Chillers",
      subheadline: "Engineered for harsh tropical ambients up to 54°C with unmatched IPLV energy efficiency ratings. Built to power India's leading corporate towers, mega-hospitals, and manufacturing plants.",
      primaryCta: "Explore VRF Systems",
      secondaryCta: "Calculate Tonnage",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1920&q=80",
      stats: "Up to 38% Energy Savings | Stepless 0-100% Inverter",
      highlights: ["Modular up to 96 HP", "Zero Oil Centrifugal", "AHRI Certified Performance"]
    },
    {
      badge: "Sterile Cleanroom & Hospital HVAC",
      headline: "Eurovent Standard Double Skin AHU & FAHU Units",
      subheadline: "NABH, cGMP & USFDA Class 100 sterile air control systems with multi-stage HEPA filtration, dynamic pressure balancing, and germicidal UVGI disinfection for surgical theatres and pharma plants.",
      primaryCta: "View Cleanroom Units",
      secondaryCta: "Request Technical RFP",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80",
      stats: "Class L1 Air Leakage | Class T2/TB2 Thermal Transmittance",
      highlights: ["Extruded Thermal Break", "Direct Drive EC Plug Fans", "SS 304 Hygiene Finish"]
    },
    {
      badge: "Heavy Industrial Central Cooling",
      headline: "High-Efficiency Stepless Screw & Magnetic Centrifugal Chillers",
      subheadline: "Oil-free magnetic levitation bearing chillers offering IPLV as low as 0.31 kW/TR. Seamless Modbus/BACnet IoT connectivity with remote diagnostics and 24x7 pan-India breakdown response.",
      primaryCta: "Explore Central Chillers",
      secondaryCta: "Download Engineering Specs",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
      stats: "50 TR to 1,500 TR Single Modular Capacity",
      highlights: ["Frictionless MagLev", "Microchannel Condenser", "Dual Power Auto-Restart"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative bg-[#07162c] text-white overflow-hidden">
      {/* Background Image Carousel with Overlay */}
      <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with High Contrast Engineering Gradient */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-7000 ease-out"
              style={{
                backgroundImage: `url('${slide.image}')`,
                transform: idx === currentSlide ? "scale(1.04)" : "scale(1.0)"
              }}
            />
            {/* Blue Star Signature Deep Navy Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071933]/95 via-[#0c2e5b]/85 to-[#0b2545]/60" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#071933]/40 to-[#071933]/90" />
          </div>
        ))}

        {/* Content Area */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 px-3.5 py-1.5 rounded-full mb-5 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              <span className="text-xs font-semibold text-cyan-200 uppercase tracking-wider">
                {slides[currentSlide].badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white mb-5 font-sans">
              {slides[currentSlide].headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-normal">
              {slides[currentSlide].subheadline}
            </p>

            {/* Highlight Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {slides[currentSlide].highlights.map((h, i) => (
                <div 
                  key={i} 
                  className="flex items-center space-x-1.5 bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1.5 rounded text-xs font-medium text-slate-100"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenEnquiry(slides[currentSlide].headline)}
                className="bg-[#005ba3] hover:bg-[#004882] text-white font-bold px-6 py-3.5 rounded shadow-lg transition-all flex items-center space-x-2 text-sm uppercase tracking-wider group"
              >
                <span>{slides[currentSlide].primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-5 py-3.5 rounded backdrop-blur-sm transition-all text-sm flex items-center space-x-2"
              >
                <span>{slides[currentSlide].secondaryCta}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="absolute z-20 bottom-6 right-8 hidden sm:flex items-center space-x-2">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="w-10 h-10 rounded bg-black/40 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-xs font-mono font-medium px-2 text-slate-300">
            0{currentSlide + 1} / 0{slides.length}
          </div>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="w-10 h-10 rounded bg-black/40 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute z-20 bottom-6 left-8 flex space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-8 bg-cyan-400" : "w-2 bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Corporate Engineering Stats Ribbon */}
      <div className="bg-[#0b2545] border-t border-[#183963] py-6 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700/60">
            {CORPORATE_STATS.map((stat, i) => (
              <div key={i} className={`pt-4 md:pt-0 ${i > 0 ? "md:pl-6" : ""}`}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-sans tracking-tight">
                  <span className="text-cyan-400">{stat.value}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
