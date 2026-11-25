"use client";

import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Clock, 
  Cpu, 
  Layers, 
  Settings, 
  Award, 
  Wrench,
  CheckCircle2
} from "lucide-react";

export default function WhyShakun() {
  const pillars = [
    {
      icon: Zap,
      title: "Up to 38% Energy Savings",
      desc: "Full DC inverter modulation, brushless EC plug fans, and magnetic levitation oil-free compressors ensure the highest IPLV efficiency under variable Indian climate conditions."
    },
    {
      icon: ShieldCheck,
      title: "AHRI & Eurovent Certified Testing",
      desc: "All chillers and AHUs undergo rigorous psychrometric test-bed validation at our state-of-the-art Haridwar manufacturing center prior to dispatch."
    },
    {
      icon: Clock,
      title: "24x7 Pan-India Service Response",
      desc: "With 48 direct branch service hubs and over 350 certified engineers, our guaranteed MTTR (Mean Time to Resolution) is under 4 hours for mission-critical facilities."
    },
    {
      icon: Cpu,
      title: "Native IoT & BMS Integration",
      desc: "Built-in Modbus RTU and BACnet IP protocols facilitate plug-and-play central SCADA supervisory control, predictive vibration analysis, and automated fault alerts."
    },
    {
      icon: Layers,
      title: "Thermal Break EuroSkin Casing",
      desc: "Patented polyamide insulation profiles prevent thermal bridging, condensation, and microbial accumulation in tropical and coastal environments."
    },
    {
      icon: Wrench,
      title: "Complete Life-Cycle AMC & Spares",
      desc: "Genuine OEM parts inventory maintained across all regional warehouses, backed by customized Comprehensive Annual Maintenance Contracts (CAMC)."
    }
  ];

  return (
    <section id="why-shakun" className="py-16 sm:py-20 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-blue-500/10 border border-blue-400/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>ENGINEERING EXCELLENCE & ASSURANCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Why Leading Enterprises Choose Shakun Airflex
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Delivering robust, heavy-duty climate control infrastructure with measurable operational energy savings and guaranteed 99.4% uptime.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#0b2545]/70 border border-slate-700/80 rounded-xl p-6 sm:p-7 hover:border-cyan-500/50 hover:bg-[#0b2545] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-500/30 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 font-sans">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Certifications Ribbon */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-center text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-slate-200">ISO 9001:2015 Quality Management</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-slate-200">ISO 14001:2015 Environmental Systems</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-slate-200">Eurovent Certified Performance (EN 1886)</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-slate-200">CE European Compliance</span>
          </div>
        </div>

      </div>
    </section>
  );
}
