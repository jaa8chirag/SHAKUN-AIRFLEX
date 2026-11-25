"use client";

import React, { useState } from "react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Wind, 
  Calculator, 
  FileText, 
  PhoneCall, 
  Search,
  Snowflake,
  Cpu,
  ShieldCheck,
  Building2,
  Grid,
  ThermometerSnowflake
} from "lucide-react";

interface HeaderProps {
  onOpenEnquiry: () => void;
  onOpenCalculator: () => void;
  onSelectCategory: (catId: string) => void;
}

export default function Header({ onOpenEnquiry, onOpenCalculator, onSelectCategory }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false);

  const productLinks = [
    {
      id: "vrf",
      name: "VRF / VRV Systems",
      desc: "V7 Modular DC Inverter Systems up to 96 HP",
      icon: Cpu
    },
    {
      id: "chillers",
      name: "Commercial Chillers",
      desc: "Screw & Magnetic Bearing MagLev Chillers",
      icon: Snowflake
    },
    {
      id: "ahu",
      name: "Air Handling Units (AHU)",
      desc: "Eurovent Standard Thermal Break DS-AHU & FAHU",
      icon: Wind
    },
    {
      id: "ducted",
      name: "Ducted & Cassette Units",
      desc: "360° Round Flow Cassettes & High Static Ductables",
      icon: Grid
    },
    {
      id: "cleanroom",
      name: "Cleanroom & Pharma HVAC",
      desc: "NABH OT Units, Laminar Flow & cGMP Solutions",
      icon: ShieldCheck
    },
    {
      id: "coldchain",
      name: "Cold Storage & Refrigeration",
      desc: "Modular Cold Rooms, Condensing Units & Chillers",
      icon: ThermometerSnowflake
    }
  ];

  const industryLinks = [
    { title: "Healthcare & Hospitals", desc: "NABH Compliant OT & Isolation Units", href: "#solutions" },
    { title: "Corporate & IT Parks", desc: "High EER Inverter Climate Control", href: "#solutions" },
    { title: "Data Centers & Mission Critical", desc: "High Sensible Heat PAC Systems", href: "#solutions" },
    { title: "Industrial Manufacturing", desc: "Heavy Ambient Tolerant Process Cooling", href: "#solutions" },
    { title: "Hospitality & Hotels", desc: "Whisper-Quiet Concealed FCUs", href: "#solutions" },
    { title: "Cold Chain Logistics", desc: "Temperature Monitored Storage Hubs", href: "#solutions" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Authentic Corporate HVAC Style */}
          <a href="#" className="flex items-center space-x-3 group py-1">
            <div className="w-11 h-11 bg-gradient-to-br from-[#004b87] to-[#0b2545] rounded flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all">
              <Wind className="w-6 h-6 text-cyan-300 transform group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-2xl font-black tracking-tight text-[#004b87] uppercase font-sans">
                  SHAKUN
                </span>
                <span className="text-2xl font-light tracking-wide text-slate-800 uppercase font-sans ml-1.5">
                  AIRFLEX
                </span>
              </div>
              <span className="text-[9.5px] uppercase tracking-widest font-bold text-slate-500 -mt-0.5">
                Engineered Climate & HVAC Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* Products with Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button 
                className="flex items-center space-x-1.5 px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#004b87] transition-colors rounded-md"
              >
                <span>Products & Systems</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-[#004b87]' : ''}`} />
              </button>

              {megaMenuOpen && (
                <div className="absolute left-0 w-[620px] bg-white border border-slate-200 shadow-xl rounded-lg p-5 mt-1 grid grid-cols-2 gap-3 transition-all animate-in fade-in slide-in-from-top-2">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex justify-between items-center">
                    <span className="text-xs font-bold text-[#004b87] uppercase tracking-wider">
                      Commercial & Industrial Product Portfolio
                    </span>
                    <span className="text-[11px] text-slate-500">AHRI / Eurovent Standard</span>
                  </div>

                  {productLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          onSelectCategory(item.id);
                          setMegaMenuOpen(false);
                          const el = document.getElementById("products");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="flex items-start space-x-3 p-2.5 rounded-md hover:bg-slate-50 text-left transition-colors group"
                      >
                        <div className="w-8 h-8 rounded bg-blue-50 text-[#004b87] flex items-center justify-center mt-0.5 group-hover:bg-[#004b87] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800 group-hover:text-[#004b87]">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-500 leading-snug">
                            {item.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}

                  <div className="col-span-2 pt-2 mt-1 border-t border-slate-100 bg-slate-50 -mx-5 -mb-5 p-3 px-5 rounded-b-lg flex justify-between items-center text-xs">
                    <span className="text-slate-600">Need customized OEM engineering or high static pressure?</span>
                    <button 
                      onClick={() => {
                        setMegaMenuOpen(false);
                        onOpenEnquiry();
                      }}
                      className="font-bold text-[#004b87] hover:underline"
                    >
                      Consult Our HVAC Engineers →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsMenuOpen(true)}
              onMouseLeave={() => setSolutionsMenuOpen(false)}
            >
              <button 
                className="flex items-center space-x-1.5 px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#004b87] transition-colors rounded-md"
              >
                <span>Industry Solutions</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${solutionsMenuOpen ? 'rotate-180 text-[#004b87]' : ''}`} />
              </button>

              {solutionsMenuOpen && (
                <div className="absolute left-0 w-[500px] bg-white border border-slate-200 shadow-xl rounded-lg p-4 mt-1 grid grid-cols-2 gap-2 transition-all">
                  <div className="col-span-2 pb-1.5 mb-1 border-b border-slate-100 text-xs font-bold text-[#004b87] uppercase tracking-wider">
                    Sectors We Serve
                  </div>
                  {industryLinks.map((ind, idx) => (
                    <a
                      key={idx}
                      href={ind.href}
                      onClick={() => setSolutionsMenuOpen(false)}
                      className="p-2 rounded hover:bg-slate-50 text-left transition-colors"
                    >
                      <div className="text-sm font-semibold text-slate-800 hover:text-[#004b87]">
                        {ind.title}
                      </div>
                      <div className="text-[11px] text-slate-500">{ind.desc}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="#why-shakun" 
              className="px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#004b87] transition-colors"
            >
              Engineering & R&D
            </a>

            <a 
              href="#projects" 
              className="px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#004b87] transition-colors"
            >
              Projects
            </a>

            <a 
              href="#network" 
              className="px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#004b87] transition-colors"
            >
              Service & AMC
            </a>

            <a 
              href="#about" 
              className="px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#004b87] transition-colors"
            >
              About Shakun
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenCalculator}
              className="flex items-center space-x-1.5 px-3 py-2 border border-slate-300 hover:border-[#004b87] text-slate-700 hover:text-[#004b87] rounded text-xs font-bold transition-colors"
              title="Calculate estimated tonnage & cooling load"
            >
              <Calculator className="w-4 h-4 text-cyan-600" />
              <span>Tonnage Estimator</span>
            </button>

            <button
              onClick={onOpenEnquiry}
              className="bg-[#004b87] hover:bg-[#003867] text-white font-bold px-4 py-2 rounded text-xs uppercase tracking-wider transition-colors shadow flex items-center space-x-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-300" />
              <span>Request Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-2">
            <button
              onClick={onOpenEnquiry}
              className="bg-[#004b87] text-white px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="flex items-center justify-center space-x-1.5 bg-slate-100 py-2.5 rounded text-xs font-bold text-slate-800"
            >
              <Calculator className="w-4 h-4 text-[#004b87]" />
              <span>Tonnage Calc</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="flex items-center justify-center space-x-1.5 bg-[#004b87] text-white py-2.5 rounded text-xs font-bold uppercase"
            >
              <PhoneCall className="w-4 h-4 text-cyan-300" />
              <span>Enquire Now</span>
            </button>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
              Products
            </div>
            {productLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectCategory(item.id);
                  setMobileMenuOpen(false);
                  const el = document.getElementById("products");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
              Navigation
            </div>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded"
            >
              Industry Solutions
            </a>
            <a
              href="#why-shakun"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded"
            >
              Engineering & R&D
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded"
            >
              Landmark Projects
            </a>
            <a
              href="#network"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded"
            >
              Branch & Service Network
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
            <div>24x7 Customer Helpline: <strong className="text-slate-800">1800-209-4455</strong></div>
            <div>Registered Corporate Office: Gurugram, India</div>
          </div>
        </div>
      )}
    </header>
  );
}
