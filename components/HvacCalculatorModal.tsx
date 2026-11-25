"use client";

import React, { useState } from "react";
import { X, Calculator, Info, CheckCircle2, ArrowRight, ShieldAlert } from "lucide-react";

interface HvacCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (calculatedDetails: string) => void;
}

export default function HvacCalculatorModal({ isOpen, onClose, onOpenEnquiry }: HvacCalculatorModalProps) {
  const [areaSqFt, setAreaSqFt] = useState(2500);
  const [ceilingHeight, setCeilingHeight] = useState(10);
  const [occupancy, setOccupancy] = useState(25);
  const [roomType, setRoomType] = useState("office");
  const [glassExposure, setGlassExposure] = useState("moderate");

  if (!isOpen) return null;

  // Calculation formula
  // Base cooling: ~ 1 TR per 150 - 200 sq ft depending on room type and height
  const getCalculation = () => {
    let sqFtPerTon = 175;
    if (roomType === "server") sqFtPerTon = 70; // Heavy heat load
    else if (roomType === "ot") sqFtPerTon = 110; // High fresh air & ACH
    else if (roomType === "restaurant") sqFtPerTon = 120; // High people & kitchen heat
    else if (roomType === "retail") sqFtPerTon = 150;
    else sqFtPerTon = 180; // standard commercial office

    // Height multiplier (normal is 10ft)
    const heightFactor = ceilingHeight > 10 ? 1 + (ceilingHeight - 10) * 0.04 : 1;

    // Glass exposure multiplier
    const glassFactor = glassExposure === "heavy" ? 1.15 : glassExposure === "moderate" ? 1.05 : 1.0;

    // People heat: ~ 400 BTU/hr per person (1 TR = 12,000 BTU/hr) -> ~ 0.033 TR per person
    const peopleLoadTR = occupancy * 0.035;

    // Base area load
    const baseAreaTR = (areaSqFt / sqFtPerTon) * heightFactor * glassFactor;
    const totalEstimatedTR = Math.round((baseAreaTR + peopleLoadTR) * 10) / 10;
    const airflowCFM = Math.round(totalEstimatedTR * 400);

    let recommendedSystem = "Airflex V7 Pro Inverter VRF System";
    if (totalEstimatedTR > 50) {
      recommendedSystem = "Airflex Helios Air-Cooled Screw Chiller + Double Skin AHU";
    } else if (roomType === "ot") {
      recommendedSystem = "Airflex HygiPharma Hospital AHU + Sterile Condensing Unit";
    } else if (totalEstimatedTR <= 15) {
      recommendedSystem = "Airflex 360° Circular Inverter Cassette / Ductable Split Units";
    }

    return { totalEstimatedTR, airflowCFM, recommendedSystem };
  };

  const { totalEstimatedTR, airflowCFM, recommendedSystem } = getCalculation();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#0b2545] text-white p-5 flex justify-between items-center">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold">MEP Tonnage & Cooling Load Estimator</h3>
              <p className="text-xs text-slate-300">Preliminary HVAC sizing for architects, MEP consultants & facility directors</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-5 sm:p-6 space-y-5 text-slate-800">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Area */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Total Carpet Area: <span className="text-[#004b87]">{areaSqFt} Sq. Ft.</span>
              </label>
              <input
                type="range"
                min="300"
                max="30000"
                step="100"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full accent-[#004b87] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>300 sq.ft</span>
                <span>15,000 sq.ft</span>
                <span>30,000 sq.ft</span>
              </div>
            </div>

            {/* Ceiling Height */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Ceiling Height: <span className="text-[#004b87]">{ceilingHeight} Feet</span>
              </label>
              <input
                type="range"
                min="8"
                max="24"
                step="1"
                value={ceilingHeight}
                onChange={(e) => setCeilingHeight(Number(e.target.value))}
                className="w-full accent-[#004b87] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>8 ft (Standard)</span>
                <span>14 ft</span>
                <span>24 ft (Industrial)</span>
              </div>
            </div>

            {/* Application Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Facility / Space Application
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-xs sm:text-sm font-medium text-slate-800 focus:ring-2 focus:ring-[#004b87] focus:outline-none"
              >
                <option value="office">Corporate Commercial Office</option>
                <option value="server">Data Center / Server Room (High Heat)</option>
                <option value="ot">Hospital Operation Theatre / Cleanroom</option>
                <option value="restaurant">Restaurant / Commercial Kitchen</option>
                <option value="retail">Retail Showroom / Mall</option>
              </select>
            </div>

            {/* Occupancy */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Expected Peak Occupancy: <span className="text-[#004b87]">{occupancy} People</span>
              </label>
              <input
                type="number"
                min="1"
                max="500"
                value={occupancy}
                onChange={(e) => setOccupancy(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-800 focus:ring-2 focus:ring-[#004b87] focus:outline-none"
              />
            </div>

            {/* Glass Exposure */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Glass Glazing / Direct Sun Exposure
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "low", label: "Low (Insulated / Shaded)" },
                  { id: "moderate", label: "Moderate (Standard Double Glass)" },
                  { id: "heavy", label: "Heavy (Full Western Facade)" }
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGlassExposure(g.id)}
                    className={`py-2 px-2 text-xs font-medium rounded border transition-colors ${
                      glassExposure === g.id
                        ? "bg-[#004b87] text-white border-[#004b87]"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Output Box */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50/50 border border-blue-200 rounded-lg p-5">
            <div className="text-xs font-bold uppercase tracking-wider text-[#004b87] mb-2">
              Estimated Engineering Output
            </div>
            <div className="grid grid-cols-2 gap-4 pb-3 border-b border-blue-200/60">
              <div>
                <span className="text-xs text-slate-500">Estimated Total Tonnage:</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#004b87]">
                  {totalEstimatedTR} <span className="text-base font-normal">TR</span>
                </div>
              </div>
              <div>
                <span className="text-xs text-slate-500">Required Airflow:</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                  {airflowCFM.toLocaleString()} <span className="text-base font-normal">CFM</span>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <span className="text-xs text-slate-500 block mb-0.5">Recommended Shakun Airflex Configuration:</span>
              <div className="text-sm font-bold text-slate-900">
                {recommendedSystem}
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-200">
            <Info className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
            <span>
              Disclaimer: This estimate provides a preliminary rule-of-thumb sizing based on standard ASHRAE guidelines. Final heat load calculation (HAP) factoring exact U-values, solar radiation & fresh air ACH should be vetted by our project engineering team.
            </span>
          </div>

        </div>

        {/* Actions */}
        <div className="bg-slate-100 border-t border-slate-200 p-4 px-6 flex justify-between items-center">
          <button
            onClick={onClose}
            className="text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenEnquiry(
                `Calculated Load: ${totalEstimatedTR} TR (${airflowCFM} CFM) for ${areaSqFt} sq.ft ${roomType} space. System: ${recommendedSystem}`
              );
            }}
            className="bg-[#004b87] hover:bg-[#003867] text-white px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider shadow transition-colors flex items-center space-x-2"
          >
            <span>Proceed with this Sizing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
