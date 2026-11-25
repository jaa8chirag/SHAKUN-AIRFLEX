"use client";

import React from "react";
import { 
  Wind, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ArrowRight,
  ExternalLink
} from "lucide-react";

interface FooterProps {
  onOpenEnquiry: () => void;
  onOpenCalculator: () => void;
  onSelectCategory: (catId: string) => void;
}

export default function Footer({ onOpenEnquiry, onOpenCalculator, onSelectCategory }: FooterProps) {
  return (
    <footer id="about" className="bg-[#07162c] text-slate-300 text-xs border-t border-slate-800">
      
      {/* Top Pre-Footer CTA Bar */}
      <div className="bg-[#004b87] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                COLLABORATE WITH OUR HVAC ENGINEERS
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-0.5">
                Planning a New Commercial Building, Hospital OT or Industrial Expansion?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-1">
                Receive comprehensive heat-load calculations, equipment sizing, and budget estimates.
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={onOpenCalculator}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-4 py-2.5 rounded text-xs uppercase tracking-wider transition-colors"
              >
                Estimate Tonnage
              </button>
              <button
                onClick={onOpenEnquiry}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-extrabold px-5 py-2.5 rounded text-xs uppercase tracking-wider shadow transition-colors"
              >
                Request Quotation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand & Corporate Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 bg-gradient-to-br from-[#004b87] to-cyan-600 rounded flex items-center justify-center text-white shadow">
                <Wind className="w-5 h-5 text-cyan-200" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white uppercase font-sans">
                  SHAKUN
                </span>
                <span className="text-xl font-light tracking-wide text-slate-300 uppercase font-sans ml-1">
                  AIRFLEX
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Shakun Airflex Technologies Ltd. is a premier Indian manufacturer and turnkey engineering provider of central commercial air conditioning, VRF inverter systems, Eurovent standard air handling units, and industrial refrigeration solutions.
            </p>

            <div className="pt-2 text-slate-300 space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Toll-Free Customer Care: <strong className="text-white">1800-209-4455</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Direct Desk: <strong className="text-white">corporate@shakunairflex.com</strong></span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Corporate HQ: Shakun Towers, Sector 44, Institutional Area, Gurugram - 122003, India</span>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Certified under ISO 9001:2015, ISO 14001:2015, CE & Eurovent</span>
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-700/80 pb-2">
              HVAC Equipment
            </h4>
            <ul className="space-y-2">
              {[
                { label: "V7 Pro Modular VRF", cat: "vrf" },
                { label: "Air-Cooled Screw Chillers", cat: "chillers" },
                { label: "MagLev Centrifugal Chillers", cat: "chillers" },
                { label: "EuroSkin Double Skin AHU", cat: "ahu" },
                { label: "Fresh Air FAHU & TFA", cat: "ahu" },
                { label: "360° Circular Cassette AC", cat: "ducted" },
                { label: "HygiPharma Hospital OT AHU", cat: "cleanroom" },
                { label: "Modular Cold Storage Rooms", cat: "coldchain" }
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onSelectCategory(item.cat);
                      const el = document.getElementById("products");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industry Solutions */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-700/80 pb-2">
              Industry Solutions
            </h4>
            <ul className="space-y-2">
              {[
                "Healthcare & Hospital OTs",
                "Corporate IT Campuses",
                "Data Centers & Mission Critical",
                "Pharma Cleanrooms (Class 100)",
                "Industrial Manufacturing Plants",
                "Luxury Hotels & Resorts",
                "Retail Flagships & Malls",
                "Perishable Cold Chains"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#solutions" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate & Service */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-700/80 pb-2">
              Customer Support & AMC
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenEnquiry} className="hover:text-white transition-colors text-left">
                  Annual Maintenance (CAMC)
                </button>
              </li>
              <li>
                <a href="#network" className="hover:text-white transition-colors">
                  Branch Service Hubs
                </a>
              </li>
              <li>
                <a href="#why-shakun" className="hover:text-white transition-colors">
                  AHRI Psychrometric Testing
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Landmark Installations
                </a>
              </li>
              <li>
                <button onClick={onOpenCalculator} className="hover:text-white transition-colors text-left">
                  MEP Tonnage Calculator
                </button>
              </li>
              <li>
                <button onClick={onOpenEnquiry} className="hover:text-white transition-colors text-left">
                  Architect & Consultant Portal
                </button>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Manufacturing Works:
              </span>
              <p className="text-[11px] text-slate-400 leading-snug">
                Plant 1: SIDCUL Industrial Area, Haridwar, Uttarakhand<br />
                Plant 2: Logistics Park, Bhiwandi, Maharashtra
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="bg-[#040e1c] py-5 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
            <div>
              © 2026 Shakun Airflex Technologies Limited. All Rights Reserved. Blue Star India inspired industrial aesthetic.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Terms of Supply & Warranty</a>
              <a href="#" className="hover:text-slate-300">Energy Standards Compliance</a>
              <a href="#" className="hover:text-slate-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
