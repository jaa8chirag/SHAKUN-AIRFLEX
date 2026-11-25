"use client";

import React, { useState } from "react";
import TopUtilityBar from "@/components/TopUtilityBar";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import QuickHvacFinder from "@/components/QuickHvacFinder";
import ProductShowcase from "@/components/ProductShowcase";
import SolutionsByIndustry from "@/components/SolutionsByIndustry";
import WhyShakun from "@/components/WhyShakun";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import DealerLocatorSection from "@/components/DealerLocatorSection";
import Footer from "@/components/Footer";
import TechnicalSpecModal from "@/components/TechnicalSpecModal";
import HvacCalculatorModal from "@/components/HvacCalculatorModal";
import EnquiryModal from "@/components/EnquiryModal";
import { PRODUCTS, Product } from "@/data/hvacData";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeSpecProduct, setActiveSpecProduct] = useState<Product | null>(null);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState("");

  const handleOpenEnquiry = (subject: string = "") => {
    setEnquirySubject(subject);
    setEnquiryOpen(true);
  };

  const handleOpenSpecsByProductId = (productId: string) => {
    const found = PRODUCTS.find((p) => p.id === productId);
    if (found) {
      setActiveSpecProduct(found);
    }
  };

  const scrollToDealer = () => {
    const el = document.getElementById("network");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      
      {/* 1. Top Utility Contact & Certification Bar */}
      <TopUtilityBar 
        onOpenEnquiry={() => handleOpenEnquiry("General Corporate RFQ")} 
        onOpenDealer={scrollToDealer}
      />

      {/* 2. Main Navigation Header with Mega Menu */}
      <Header 
        onOpenEnquiry={() => handleOpenEnquiry("Direct Commercial Quote")}
        onOpenCalculator={() => setCalculatorOpen(true)}
        onSelectCategory={(catId) => setSelectedCategory(catId)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        
        {/* 3. Hero Carousel Banner & Stats Ribbon */}
        <HeroSlider 
          onOpenEnquiry={handleOpenEnquiry}
          onOpenCalculator={() => setCalculatorOpen(true)}
        />

        {/* 4. Quick HVAC System Configurator (Blue Star style) */}
        <QuickHvacFinder 
          onSelectProduct={handleOpenSpecsByProductId}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 5. Core Product Showcase with Filters & Specs */}
        <ProductShowcase 
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
          onOpenSpecs={(product) => setActiveSpecProduct(product)}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 6. Sector Solutions (Healthcare, Corporate, Data Center, Industrial, Hospitality) */}
        <SolutionsByIndustry 
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 7. Why Shakun Airflex (Engineering, AHRI/Eurovent, IoT, Service) */}
        <WhyShakun />

        {/* 8. Landmark Projects & Client References */}
        <ProjectsShowcase />

        {/* 9. Pan-India Branch Offices & 24x7 Service Hubs */}
        <DealerLocatorSection />

      </main>

      {/* 10. Corporate Footer with Full Technical Links & Works */}
      <Footer 
        onOpenEnquiry={() => handleOpenEnquiry("Footer General Inquiry")}
        onOpenCalculator={() => setCalculatorOpen(true)}
        onSelectCategory={(catId) => setSelectedCategory(catId)}
      />

      {/* Modals & Engineering Tools */}
      
      {/* Technical Spec Sheet Modal */}
      <TechnicalSpecModal 
        product={activeSpecProduct}
        onClose={() => setActiveSpecProduct(null)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* MEP Cooling Load & Tonnage Estimator Modal */}
      <HvacCalculatorModal 
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onOpenEnquiry={(calcNotes) => handleOpenEnquiry(calcNotes)}
      />

      {/* Corporate Enquiry / RFQ Modal */}
      <EnquiryModal 
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultSubject={enquirySubject}
      />

    </div>
  );
}
