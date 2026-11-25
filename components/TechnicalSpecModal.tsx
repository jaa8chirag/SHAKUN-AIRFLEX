"use client";

import React from "react";
import { X, Download, ShieldCheck, PhoneCall, Check, CheckCircle2 } from "lucide-react";
import { Product } from "@/data/hvacData";

interface TechnicalSpecModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenEnquiry: (productName: string) => void;
}

export default function TechnicalSpecModal({ product, onClose, onOpenEnquiry }: TechnicalSpecModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#0b2545] text-white p-5 sm:p-6 flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="bg-cyan-500/20 text-cyan-300 text-[11px] font-bold px-2.5 py-0.5 rounded border border-cyan-400/30 uppercase tracking-wider">
                {product.series}
              </span>
              <span className="text-xs text-slate-300">
                AHRI & Eurovent Rated
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {product.tagline}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6 text-slate-800">
          
          {/* Top Quick Overview Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                Capacity Range
              </div>
              <div className="text-sm font-bold text-[#004b87] mt-0.5">
                {product.capacityRange}
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                COP / Efficiency
              </div>
              <div className="text-sm font-bold text-emerald-600 mt-0.5">
                {product.cop}
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                Refrigerant
              </div>
              <div className="text-sm font-bold text-slate-800 mt-0.5">
                {product.refrigerant}
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                Noise Rating
              </div>
              <div className="text-sm font-bold text-slate-800 mt-0.5">
                {product.noiseLevel}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Engineering Architecture & Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Detailed Engineering Specifications Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Technical Data & Parameter Specifications
            </h4>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-700 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-2.5 px-4 font-bold border-b border-slate-200 w-1/2">Technical Parameter</th>
                    <th className="py-2.5 px-4 font-bold border-b border-slate-200 w-1/2">Certified Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white hover:bg-slate-50">
                    <td className="py-2.5 px-4 font-semibold text-slate-700">Compressor / Prime Mover</td>
                    <td className="py-2.5 px-4 text-slate-900">{product.compressorType}</td>
                  </tr>
                  {product.specs.map((spec, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="py-2.5 px-4 font-semibold text-slate-700">{spec.label}</td>
                      <td className="py-2.5 px-4 text-slate-900 font-medium">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Key Engineering Advantages & Innovations
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#004b87] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Sectors */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Suitable Facility Deployments
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, idx) => (
                <span
                  key={idx}
                  className="bg-blue-50 text-[#004b87] border border-blue-200/60 text-xs font-semibold px-3 py-1 rounded"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 border-t border-slate-200 p-4 px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Factory Tested & Certified under AHRI / Eurovent Protocol</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={() => {
                alert(`Technical Submittal Datasheet for "${product.name}" has been prepared for download.`);
              }}
              className="flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 px-4 py-2 border border-slate-300 hover:border-slate-400 bg-white text-slate-700 text-xs font-bold rounded transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Submittal (PDF)</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenEnquiry(product.name);
              }}
              className="flex-1 sm:flex-initial bg-[#004b87] hover:bg-[#003867] text-white px-5 py-2 rounded text-xs font-bold uppercase tracking-wider shadow transition-colors flex items-center justify-center space-x-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Request Quotation</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
