import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHAKUN AIRFLEX | Commercial HVAC, VRF Systems & Central Chillers",
  description: "Shakun Airflex Technologies - Leading Indian manufacturer of advanced VRF systems, central water and air-cooled chillers, Eurovent double skin air handling units, and cleanroom HVAC solutions.",
  keywords: "Shakun Airflex, Blue Star, commercial AC, VRF system, chillers, air handling units, AHU, HVAC India, cleanroom HVAC, industrial refrigeration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
