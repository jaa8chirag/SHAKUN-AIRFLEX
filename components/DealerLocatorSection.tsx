"use client";

import React, { useState } from "react";
import { BRANCH_OFFICES } from "@/data/hvacData";
import { MapPin, Phone, Mail, UserCheck, ShieldCheck, Clock } from "lucide-react";

export default function DealerLocatorSection() {
  const [selectedCity, setSelectedCity] = useState(0);

  return (
    <section id="network" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#004b87] mb-2">
            <span className="w-2.5 h-2.5 bg-[#004b87] inline-block rounded-xs"></span>
            <span>PAN-INDIA REACH & REGIONAL PRESENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Branch Offices & Authorized Service Hubs
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Equipped with round-the-clock emergency support, direct application engineering teams, and regional central spare parts depots across India.
          </p>
        </div>

        {/* Layout: Left City Tabs, Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Branch Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            {BRANCH_OFFICES.map((branch, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCity(idx)}
                className={`w-full text-left p-4 rounded-lg border transition-all flex items-start space-x-3.5 ${
                  selectedCity === idx
                    ? "bg-blue-50/80 border-[#004b87] shadow-sm"
                    : "bg-white border-slate-200 hover:bg-slate-50"
                }`}
              >
                <div className={`p-2 rounded-md shrink-0 mt-0.5 ${
                  selectedCity === idx ? "bg-[#004b87] text-white" : "bg-slate-100 text-slate-600"
                }`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${
                    selectedCity === idx ? "text-[#004b87]" : "text-slate-900"
                  }`}>
                    {branch.city}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                    {branch.address}
                  </p>
                </div>
              </button>
            ))}

            {/* Quick 24/7 Helpline Card */}
            <div className="bg-[#0b2545] text-white p-5 rounded-lg mt-6 shadow">
              <div className="flex items-center space-x-2 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4" />
                <span>Central 24x7 Breakdown Helpdesk</span>
              </div>
              <div className="text-xl font-black text-white mt-1">
                1800-209-4455
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Direct technician dispatch for hospital OTs, data centers, and cold chain emergencies.
              </p>
            </div>
          </div>

          {/* Right: Selected Office Full Profile (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#004b87]">
                  REGIONAL HEADQUARTERS
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                  {BRANCH_OFFICES[selectedCity].city}
                </h3>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Active Branch</span>
              </span>
            </div>

            <div className="space-y-5 text-sm">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#004b87] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Office & Technical Center
                  </span>
                  <p className="font-semibold text-slate-800 mt-0.5 leading-snug">
                    {BRANCH_OFFICES[selectedCity].address}
                  </p>
                </div>
              </div>

              {/* Phone & Direct Lines */}
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#004b87] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Direct Contact Lines
                  </span>
                  <p className="font-semibold text-slate-800 mt-0.5">
                    {BRANCH_OFFICES[selectedCity].phone}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#004b87] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${BRANCH_OFFICES[selectedCity].email}`}
                    className="font-semibold text-[#004b87] hover:underline mt-0.5 block"
                  >
                    {BRANCH_OFFICES[selectedCity].email}
                  </a>
                </div>
              </div>

              {/* Regional Lead */}
              <div className="flex items-start space-x-3 pt-3 border-t border-slate-200">
                <UserCheck className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Regional Project & Technical Lead
                  </span>
                  <p className="font-bold text-slate-900 mt-0.5">
                    {BRANCH_OFFICES[selectedCity].head}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-3">
              <a
                href={`tel:${BRANCH_OFFICES[selectedCity].phone.split("/")[0].trim()}`}
                className="bg-[#004b87] hover:bg-[#003867] text-white px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider shadow transition-colors flex items-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Branch Office</span>
              </a>

              <a
                href={`mailto:${BRANCH_OFFICES[selectedCity].email}?subject=Project Enquiry for Shakun Airflex`}
                className="border border-slate-300 hover:border-slate-400 bg-white text-slate-800 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center space-x-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Direct Email</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
