"use client";

import React from "react";
import { Phone, Mail, Clock, Award, ShieldCheck, MapPin } from "lucide-react";

interface TopUtilityBarProps {
  onOpenEnquiry: () => void;
  onOpenDealer: () => void;
}

export default function TopUtilityBar({ onOpenEnquiry, onOpenDealer }: TopUtilityBarProps) {
  return (
    <div className="bg-[#0b2545] text-slate-200 text-xs border-b border-[#163a66] hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-9">
          {/* Left Side: Support & Certifications */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300 font-medium">Toll Free 24x7 Customer Care:</span>
              <a 
                href="tel:18002094455" 
                className="font-bold text-white hover:text-cyan-400 tracking-wide transition-colors"
              >
                1800-209-4455
              </a>
            </div>

            <div className="hidden lg:flex items-center space-x-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <a href="mailto:corporate@shakunairflex.com" className="hover:text-white transition-colors">
                corporate@shakunairflex.com
              </a>
            </div>

            <div className="hidden xl:flex items-center space-x-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ISO 9001:2015 & CE Certified Plants</span>
            </div>
          </div>

          {/* Right Side: Quick Portal Links */}
          <div className="flex items-center space-x-5">
            <button 
              onClick={onOpenDealer}
              className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Branch & Dealer Network</span>
            </button>

            <a 
              href="#projects" 
              className="text-slate-300 hover:text-white transition-colors hidden sm:inline-block"
            >
              Project References
            </a>

            <a 
              href="#calculator" 
              className="text-slate-300 hover:text-white transition-colors"
            >
              MEP Tonnage Calculator
            </a>

            <div className="border-l border-slate-700 pl-4">
              <button
                onClick={onOpenEnquiry}
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-2.5 py-1 rounded text-[11px] uppercase tracking-wider transition-colors shadow-sm"
              >
                Quick RFQ / Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
