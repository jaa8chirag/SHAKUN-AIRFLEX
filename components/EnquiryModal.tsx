"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, ShieldCheck, PhoneCall, Building2 } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export default function EnquiryModal({ isOpen, onClose, defaultSubject = "" }: EnquiryModalProps) {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [projectType, setProjectType] = useState("Commercial Office");
  const [tonnageRequirement, setTonnageRequirement] = useState("20 - 50 TR");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultSubject) {
      setMessage(`Interested in: ${defaultSubject}`);
    }
  }, [defaultSubject]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#0b2545] text-white p-5 sm:p-6 flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-1.5 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-1">
              <PhoneCall className="w-4 h-4" />
              <span>COMMERCIAL & INDUSTRIAL HVAC INQUIRY</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-sans">
              Request Project Proposal & Quotation
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Connect directly with our senior application engineers for technical submittals, heat-load vetting & pricing.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form or Confirmation */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Inquiry Successfully Logged!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{fullName}</strong>. Your requirement for <strong>{company || "your facility"}</strong> has been routed to our regional HVAC engineering desk. A dedicated project consultant will reach out via <strong>{phone}</strong> within 2 business hours.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded p-3 text-xs text-slate-500 max-w-sm mx-auto font-mono">
                Reference ID: #SKN-{Math.floor(100000 + Math.random() * 900000)}
              </div>
              <button
                onClick={handleReset}
                className="mt-4 bg-[#004b87] hover:bg-[#003867] text-white font-bold px-6 py-2.5 rounded text-xs uppercase tracking-wider transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-slate-800 focus:ring-2 focus:ring-[#004b87] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Apex Infrastructure Ltd."
                    className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-slate-800 focus:ring-2 focus:ring-[#004b87] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-slate-800 focus:ring-2 focus:ring-[#004b87] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-slate-800 focus:ring-2 focus:ring-[#004b87] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Project City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Delhi NCR, Mumbai, Ahmedabad"
                    className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-slate-800 focus:ring-2 focus:ring-[#004b87] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Estimated Cooling Tonnage
                  </label>
                  <select
                    value={tonnageRequirement}
                    onChange={(e) => setTonnageRequirement(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-slate-800 focus:ring-2 focus:ring-[#004b87] focus:outline-none"
                  >
                    <option value="Under 20 TR">Under 20 TR (Small Facility)</option>
                    <option value="20 - 50 TR">20 – 50 TR (Mid Office / Clinic)</option>
                    <option value="50 - 150 TR">50 – 150 TR (Commercial Building)</option>
                    <option value="150 - 500 TR">150 – 500 TR (Campus / Hospital)</option>
                    <option value="500+ TR">500+ TR (Central Plant / Industrial)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Specific Project Requirements / Product Notes
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Mention equipment type (VRF, Chiller, AHU, Cassette), building stage, or timeline..."
                  className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-slate-800 focus:ring-2 focus:ring-[#004b87] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Confidential NDA Assured</span>
                </div>

                <button
                  type="submit"
                  className="bg-[#004b87] hover:bg-[#003867] text-white font-bold px-6 py-2.5 rounded text-xs uppercase tracking-wider shadow transition-colors flex items-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit RFQ</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
