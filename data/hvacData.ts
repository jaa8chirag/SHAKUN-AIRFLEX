export interface Product {
  id: string;
  name: string;
  series: string;
  category: string;
  tagline: string;
  image: string;
  capacityRange: string;
  refrigerant: string;
  cop: string;
  noiseLevel: string;
  compressorType: string;
  keyFeatures: string[];
  description: string;
  applications: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export interface IndustrySolution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  featuredProducts: string[];
  benefits: string[];
  metrics: { label: string; value: string }[];
}

export const HVAC_CATEGORIES = [
  { id: "vrf", name: "VRF / VRV Systems", icon: "Cpu" },
  { id: "chillers", name: "Central Chillers", icon: "Snowflake" },
  { id: "ahu", name: "Air Handling Units (AHU)", icon: "Wind" },
  { id: "ducted", name: "Ducted & Cassettes", icon: "Grid" },
  { id: "cleanroom", name: "Cleanroom & Pharma", icon: "ShieldCheck" },
  { id: "coldchain", name: "Cold Storage & Refrigeration", icon: "ThermometerSnowflake" },
];

export const PRODUCTS: Product[] = [
  {
    id: "vrf-v7-pro",
    name: "Airflex V7 Pro Modular VRF",
    series: "V7-PRO Inverter Series",
    category: "vrf",
    tagline: "Next-Generation All-DC Inverter VRF System for Large Commercial Facilities",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    capacityRange: "8 HP – 96 HP (Combinable up to 4 modules)",
    refrigerant: "Eco R-410A / R-32 Option",
    cop: "Up to 4.88 EER / 5.45 IEER",
    noiseLevel: "Down to 52 dB(A)",
    compressorType: "All-DC Inverter High-Pressure Chamber Twin-Rotary & Scroll",
    keyFeatures: [
      "Stepless 0–100% capacity modulation with 0.1Hz inverter control",
      "Total piping length up to 1,000 meters & 110m level difference",
      "Continuous cooling in extreme ambient temperatures up to 54°C",
      "Integrated IoT Cloud Gateway with BACnet / Modbus protocol",
      "Patented 360° refrigerant-cooled electrical inverter PCB"
    ],
    description: "The Shakun Airflex V7 Pro Series VRF represents the zenith of energy-efficient commercial air conditioning. Built with heavy-gauge corrosion-resistant galvanized steel and dual inverter compressors, it guarantees unmatched comfort and lifecycle savings for corporate towers, airports, and universities.",
    applications: ["Corporate Headquarters", "IT Parks", "Five Star Hotels", "Educational Institutes"],
    specs: [
      { label: "Cooling Capacity", value: "22.4 kW to 270 kW" },
      { label: "Heating Capacity", value: "25.0 kW to 300 kW" },
      { label: "Power Supply", value: "380-415V / 3Ph / 50Hz" },
      { label: "Max Indoor Units Connectable", value: "Up to 64 Units per system" },
      { label: "Piping - Longest Equivalent Length", value: "190 Meters" },
      { label: "Coil Protection", value: "Gold Fin / Blue Fin Anti-Corrosion Coating" },
      { label: "Warranty", value: "5 Years on Compressor, 1 Year Comprehensive" }
    ]
  },
  {
    id: "chiller-helios-screw",
    name: "Airflex Helios Air-Cooled Screw Chiller",
    series: "Helios-AC Series",
    category: "chillers",
    tagline: "High-Efficiency Stepless Screw Chiller with Microchannel Technology",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    capacityRange: "50 TR – 480 TR (175 kW – 1680 kW)",
    refrigerant: "Low-GWP R-134a / R-513A",
    cop: "COP 3.42 / IPLV up to 5.2",
    noiseLevel: "68 – 74 dB(A) with acoustic shroud",
    compressorType: "Semi-Hermetic Twin-Screw with Slide Valve Modulation",
    keyFeatures: [
      "Dual independent refrigeration circuits for 100% operational redundancy",
      "V-Type all-aluminum microchannel condenser coils reducing refrigerant charge by 35%",
      "Touchscreen PLC controller with automated fault diagnostics and remote telemetry",
      "Low sound aero-acoustic sickle-blade condenser fans with variable speed drives",
      "Electronic expansion valves (EXV) ensuring superheat control under fluctuating loads"
    ],
    description: "Engineered specifically for extreme Indian summer ambients reaching 50°C, the Airflex Helios Series delivers unyielding uptime and rapid payback for factories, process cooling plants, and mega commercial campuses.",
    applications: ["Manufacturing Plants", "Pharma Formulations", "Hospitals", "Shopping Malls"],
    specs: [
      { label: "Chilled Water Leaving Temp", value: "5°C to 12°C (Standard) / -5°C (Brine)" },
      { label: "Evaporator Type", value: "Shell & Tube High Efficiency with Removable Head" },
      { label: "Condenser Type", value: "Microchannel V-Bank with Hydrophilic Coating" },
      { label: "Operating Ambient Range", value: "-5°C to +52°C" },
      { label: "Control Protocol", value: "Modbus RTU / BACnet IP native" },
      { label: "Factory Testing", value: "AHRI Certified Performance Test Protocol" }
    ]
  },
  {
    id: "ahu-euroskin-ds",
    name: "Airflex EuroSkin Double Skin AHU",
    series: "DS-Euro Pro Range",
    category: "ahu",
    tagline: "Eurovent Certified Standard Thermal Break Air Handling Units",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80",
    capacityRange: "1,200 CFM – 70,000 CFM",
    refrigerant: "Chilled Water (CHW) / Direct Expansion (DX)",
    cop: "IE4 Ultra-Efficient EC Plug Fans",
    noiseLevel: "Ultra-low vibration & acoustic transmission",
    compressorType: "External Chiller or VRF Linked DX Coil",
    keyFeatures: [
      "Extruded thermal break aluminum profile with polyamide thermal isolation strips",
      "50mm thick PUF insulation injected at 42 kg/m³ density for zero condensation",
      "Direct driven backward curved EC Plug Fans with zero belt maintenance",
      "Multi-stage filtration: Pre-filter (MERV 8), Fine Bag (MERV 14), and optional HEPA (H13)",
      "SS 304 drain pan with dual-slope design preventing stagnant water and bacterial growth"
    ],
    description: "Shakun Airflex Double Skin Air Handling Units are custom engineered to meet the stringent indoor air quality (IAQ) and hygiene standards required by premium hospitals, pharmaceutical cleanrooms, luxury hospitality, and green certified buildings.",
    applications: ["Cleanrooms & Laboratories", "Operation Theatres", "Corporate Offices", "Convention Centers"],
    specs: [
      { label: "Casing Strength", value: "Class D1 (Eurovent EN 1886)" },
      { label: "Air Leakage Class", value: "Class L1 (Highest tightness rating)" },
      { label: "Thermal Transmittance", value: "Class T2 / Thermal Bridging Class TB2" },
      { label: "Coil Construction", value: "Seamless Copper Tubes with Blue Hydrophilic Al Fins" },
      { label: "Fan Type", value: "Direct Drive Electronically Commutated (EC) Fan" },
      { label: "Certifications", value: "ISO 9001:2015, CE, Eurovent Equivalent Standards" }
    ]
  },
  {
    id: "chiller-maglev-centrifugal",
    name: "Airflex AquaPro Magnetic Bearing Centrifugal Chiller",
    series: "MagLev-CP Series",
    category: "chillers",
    tagline: "Oil-Free Levitating Centrifugal Chiller with Industry-Leading IPLV 0.31 kW/TR",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
    capacityRange: "250 TR – 1,200 TR",
    refrigerant: "Eco Low-Pressure R-1233zd(E) / R-134a",
    cop: "IPLV 0.31 kW/TR (COP 11.3 at part load)",
    noiseLevel: "Whisper quiet 64 dB(A)",
    compressorType: "Two-Stage Oil-Free Magnetic Levitated Centrifugal",
    keyFeatures: [
      "Completely oil-free operation eliminating oil fouling and maintenance cost",
      "Integrated active magnetic bearings with frictionless shaft suspension",
      "Instant restart capability in under 30 seconds after momentary power fluctuations",
      "Soft starter drawing starting current of just 2 Amperes",
      "Over 40% lifecycle power cost savings compared to traditional screw chillers"
    ],
    description: "The apex of central cooling engineering. By eliminating mechanical friction and lubricating oil entirely, the Airflex AquaPro guarantees consistent high heat exchange efficiency over a 30-year operational life.",
    applications: ["Data Centers", "Mega Hospitals", "District Cooling", "Semiconductor Fabs"],
    specs: [
      { label: "Efficiency (Full Load)", value: "0.54 kW / TR" },
      { label: "Efficiency (Integrated Part Load)", value: "0.31 kW / TR" },
      { label: "Bearing Type", value: "Active Magnetic Bearing with Backup Capacitors" },
      { label: "Heat Exchanger", value: "Enhanced Rifled Shell & Tube with Marine Water Boxes" },
      { label: "Starting Current", value: "Less than 5A (Inrush current eliminated)" }
    ]
  },
  {
    id: "ducted-cassette-inv",
    name: "Airflex 360° Circular Inverter Cassette AC",
    series: "AeroCast Inverter",
    category: "ducted",
    tagline: "Architectural 360-Degree Airflow Commercial Cassette with Nano-Purification",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
    capacityRange: "1.5 TR, 2.0 TR, 3.0 TR, 4.0 TR, 4.5 TR",
    refrigerant: "Green R-32 High Efficiency",
    cop: "ISEER 4.75 (5-Star Commercial Equivalent)",
    noiseLevel: "Ultra quiet 33 dB(A) in low mode",
    compressorType: "Twin Rotary High-Efficiency Inverter",
    keyFeatures: [
      "Circular 360-degree radial air pattern eliminating cold drafts and blind spots",
      "Integrated high-lift condensation drain pump with 850mm vertical lift",
      "Built-in Cold Catalyst & PM 2.5 Ionizer filter for active disinfection",
      "Individual 4-vane independent angle adjustment via wireless / wired touch controller",
      "Ultra-slim decorative panel blending seamlessly into contemporary acoustic ceilings"
    ],
    description: "Designed for premium retail showrooms, fine dining restaurants, conference halls, and executive boardrooms where silent operation and architectural aesthetics are paramount.",
    applications: ["Retail Flagships", "Executive Offices", "Restaurants & Cafes", "Boutique Clinics"],
    specs: [
      { label: "Airflow Volume", value: "650 CFM – 1,450 CFM" },
      { label: "Panel Dimensions", value: "950 mm x 950 mm x 55 mm" },
      { label: "Body Height", value: "Ultra compact 245 mm for low false ceilings" },
      { label: "Drain Lift Pump", value: "Included (850 mm Head)" },
      { label: "Smart Connectivity", value: "Wi-Fi Ready & Central Controller Compatible" }
    ]
  },
  {
    id: "cleanroom-ot-ahu",
    name: "Airflex HygiPharma Hospital & OT AHU",
    series: "CleanHygiene 1000",
    category: "cleanroom",
    tagline: "Dedicated Surgical OT & cGMP Sterile Room Environmental Control Unit",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
    capacityRange: "2,000 CFM – 25,000 CFM",
    refrigerant: "Chilled Water / VRF Connected Dual Circuit",
    cop: "Continuous Duty Class 100 Compliant",
    noiseLevel: "Acoustically damped below 48 dBA in zone",
    compressorType: "Precision Microprocessor Inverter Interface",
    keyFeatures: [
      "Seamless inner skin SS 304 / SS 316L finish with rounded corners for easy wipe-down",
      "Dynamic negative/positive room pressure balance control valves",
      "Integrated dehumidification re-heat coil for precise humidity (45%–55% RH)",
      "High-output Germicidal UV-C lamps (254nm) installed upstream of cooling coil",
      "Terminal absolute HEPA H14 filters with DOP testing ports and differential pressure gauges"
    ],
    description: "Compliant with NABH, WHO-GMP, and USFDA Class 10,000 / Class 100 standards, providing uncompromising sterile air distribution for modular operation theatres and aseptic drug formulation lines.",
    applications: ["Modular Operation Theatres", "Aseptic Formulation", "ICUs & Isolation Suites", "IVF Laboratories"],
    specs: [
      { label: "Internal Skin Material", value: "Stainless Steel 304 / 316L Mirror/Brush" },
      { label: "Filter Stages", value: "G4 Pre-Filter + F9 Bag + H14 Terminal HEPA" },
      { label: "Humidity Control", value: "Modulating Steam Humidifier & Reheat Coil" },
      { label: "Compliance", value: "NABH, ISO 14644-1, Schedule M, USFDA" }
    ]
  },
  {
    id: "coldchain-modular-room",
    name: "Airflex PolarShield Industrial Cold Rooms",
    series: "PolarShield Modular",
    category: "coldchain",
    tagline: "Turnkey Pre-fabricated Chiller & Freezer Rooms with IoT Temperature Monitoring",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    capacityRange: "10 MT – 5,000 MT Storage Volume",
    refrigerant: "Eco R-404A / R-448A / Ammonia",
    cop: "Heavy-Duty Low Temp Scroll & Semi-Hermetic",
    noiseLevel: "Low ambient outdoor condensing packages",
    compressorType: "Bitzer / Copeland Semi-Hermetic & Scroll",
    keyFeatures: [
      "120mm / 150mm Cyclopentane-blown PIR/PUF tongue-and-groove cam-lock panels",
      "Heavy-duty insulated flush swing / sliding doors with safety emergency release inside",
      "Dual refrigeration condensing units with automatic 24-hr changeover and redundancy",
      "Cloud telemetry with SMS/Email alerts for temp excursions and door open alarms",
      "Heated threshold gaskets and pressure relief valves preventing vacuum lock"
    ],
    description: "Complete cold storage solutions for vaccine hubs, perishable horticulture, dairy processing, and quick-service restaurant chains across India.",
    applications: ["Pharma Cold Chain", "Food Processing", "Hotels & Meat Processing", "Floriculture & Fruit Ripening"],
    specs: [
      { label: "Operating Temperature", value: "+2°C to +8°C (Chiller) / -18°C to -25°C (Freezer)" },
      { label: "Insulation Density", value: "40 ± 2 kg/m³ with zero ODP & zero GWP propellant" },
      { label: "Flooring", value: "Reinforced Aluminum Chequered Plate / Kota Stone Ready" },
      { label: "Data Logging", value: "21 CFR Part 11 Compliant Cloud Logger" }
    ]
  }
];

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    id: "healthcare",
    title: "Healthcare, Hospitals & Cleanrooms",
    subtitle: "Sterile Air, Zero Infection Risk & Strict Pressure Cascades",
    description: "Critical hospital environments require 100% fresh treated air, microbiological control, and surgical-grade humidity stability. Shakun Airflex designs NABH-compliant HVAC systems for modular OTs, intensive care units, and vaccine repositories.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
    featuredProducts: ["HygiPharma Hospital AHU", "Modular VRF V7", "Precision Cold Rooms"],
    benefits: [
      "Strict compliance with NABH, ASHRAE 170 & WHO-GMP guidelines",
      "Positive pressure gradients to prevent cross-contamination",
      "UVGI sanitization eliminating 99.9% airborne pathogens",
      "24/7 continuous duty cycle with zero failure tolerance"
    ],
    metrics: [
      { label: "Infection Prevention Rate", value: "99.99%" },
      { label: "RH Control Precision", value: "± 2%" },
      { label: "Hospitals Equipped", value: "180+" }
    ]
  },
  {
    id: "corporate",
    title: "Corporate Towers & IT Campuses",
    subtitle: "Maximum EER Efficiency, Zone Comfort & Smart BMS Integration",
    description: "Modern commercial complexes demand intelligent zone-based cooling, ultra-low acoustic footprints, and minimal operational electricity costs to achieve LEED Platinum / GRIHA 5-star green building certifications.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    featuredProducts: ["Modular VRF V7 Pro", "Double Skin AHU", "AquaPro MagLev Chiller"],
    benefits: [
      "Up to 38% energy reduction compared to standard constant-speed systems",
      "Independent temperature control for each meeting room and floor",
      "Centralized cloud BMS dashboard with tenant energy billing",
      "Acoustic ratings under 35 dBA for distraction-free workspaces"
    ],
    metrics: [
      { label: "Power Savings", value: "Up to 38%" },
      { label: "Payback Period", value: "18-24 Mo" },
      { label: "Commercial Sq. Ft. Cooled", value: "14M+" }
    ]
  },
  {
    id: "datacenters",
    title: "Data Centers & Mission Critical",
    subtitle: "High Sensible Heat Ratio, 100% Redundancy & PUE Optimization",
    description: "With high-density server racks generating intense localized heat, Shakun Airflex precision air conditioning (PAC) and magnetic bearing chillers maintain exact microclimates with N+1 and 2N redundancies.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    featuredProducts: ["AquaPro Centrifugal Chiller", "Helios Screw Chiller", "Precision Air Handlers"],
    benefits: [
      "Ultra-high Sensible Heat Ratio (SHR > 0.95) for server efficiency",
      "Dual power feed automatic fast-restart (< 30 seconds)",
      "Optimized for PUE ratings below 1.28 in tropical climates",
      "Integrated hot-aisle / cold-aisle containment interface"
    ],
    metrics: [
      { label: "Continuous Uptime", value: "99.999%" },
      { label: "Sensible Heat Ratio", value: "> 0.95" },
      { label: "Data Racks Protected", value: "25,000+" }
    ]
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Heavy Industrial",
    subtitle: "Heavy-Gauge Durability, Extreme Ambient Tolerance up to 54°C",
    description: "From automotive paint shops to chemical formulation and textile looms, Shakun Airflex heavy industrial chillers and ventilation units operate smoothly in dusty, corrosive, and scorching factory environments.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    featuredProducts: ["Helios Air-Cooled Screw Chiller", "Industrial Ventilation Blowers", "Process Chillers"],
    benefits: [
      "Heavy gauge marine-treated casing resistant to industrial pollutants",
      "Stepless slide valve control responding to sudden batch cooling loads",
      "High static pressure blowers penetrating long industrial duct networks",
      "Designed for 24/7 harsh shop-floor operational conditions"
    ],
    metrics: [
      { label: "Max Ambient Tolerance", value: "54°C" },
      { label: "Industrial Installations", value: "650+" },
      { label: "Compressor MTBF", value: "85,000 Hrs" }
    ]
  },
  {
    id: "hospitality",
    title: "Luxury Hospitality & Fine Dining",
    subtitle: "Whisper-Quiet Ambience, Elegant Concealed Units & Odor Control",
    description: "Guest comfort hinges on imperceptible sound and precise draft-free cooling. Shakun Airflex quiet concealed fan coils and kitchen exhaust scrubbers guarantee 5-star guest satisfaction.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    featuredProducts: ["Airflex 360° Inverter Cassette", "Ultra-Quiet Slim FCUs", "Fresh Air FAHU"],
    benefits: [
      "Ultra-slim 220mm FCU height fitting modern low-drop ceilings",
      "Keycard and occupancy sensor integration saving power in unoccupied rooms",
      "High CFM kitchen pollution control units with electrostatic precipitators",
      "Individual guest room temperature customisation"
    ],
    metrics: [
      { label: "Noise Level", value: "< 28 dB(A)" },
      { label: "Luxury Hotel Rooms", value: "8,500+" },
      { label: "Guest Comfort Index", value: "98.5%" }
    ]
  }
];

export const CORPORATE_STATS = [
  { value: "28+", label: "Years of Engineering Excellence", sub: "Since 1998" },
  { value: "1,450+", label: "Large Projects Commissioned", sub: "Pan India" },
  { value: "65,000+", label: "Tonnage (TR) Installed", sub: "Across All Sectors" },
  { value: "48+", label: "Direct Service Hubs", sub: "24x7 Breakdown Response" },
];

export const CLIENT_REFERENCES = [
  { name: "Tata Steel Logistics Park", location: "Jamshedpur", type: "Heavy Industrial Chillers (1,200 TR)" },
  { name: "Apollo Multispecialty Hospital", location: "New Delhi", type: "NABH OT AHU & Sterile Cleanrooms" },
  { name: "DLF CyberCity Tech Tower", location: "Gurugram", type: "V7 Modular VRF Systems (2,400 HP)" },
  { name: "Sun Pharma Formulations", location: "Vadodara", type: "cGMP Cleanroom HVAC & Chiller" },
  { name: "Radisson Blu Grand Resort", location: "Udaipur", type: "Concealed FCUs & Chiller Network" },
  { name: "Adani Logistics Cold Hub", location: "Nhava Sheva", type: "Modular Cold Storage (15,000 MT)" },
];

export const BRANCH_OFFICES = [
  {
    city: "New Delhi / NCR (Corporate HQ)",
    address: "Shakun Airflex Towers, Sector 44, Institutional Area, Gurugram - 122003",
    phone: "+91 124 489 9000 / 1800-209-4455",
    email: "corporate@shakunairflex.com",
    head: "Mr. Rajeev Malhotra (VP - Projects)"
  },
  {
    city: "Mumbai & Western Hub",
    address: "Commerce Centre, Bandra-Kurla Complex (BKC), Mumbai - 400051",
    phone: "+91 22 6780 1200",
    email: "west.sales@shakunairflex.com",
    head: "Mr. K. S. Deshmukh (Regional Director)"
  },
  {
    city: "Bengaluru & South Hub",
    address: "Prestige Cyber Tech Hub, Outer Ring Road, Bengaluru - 560103",
    phone: "+91 80 4450 8800",
    email: "south.sales@shakunairflex.com",
    head: "Mr. Anand Ranganathan (Head of Engineering)"
  },
  {
    city: "Ahmedabad & Gujarat Region",
    address: "Titanium Square, S.G. Highway, Thaltej, Ahmedabad - 380054",
    phone: "+91 79 2680 7700",
    email: "gujarat@shakunairflex.com",
    head: "Mr. Bhavin Patel (Project Consultant)"
  },
  {
    city: "Kolkata & Eastern Region",
    address: "Godrej Genesis, Salt Lake Sector V, Kolkata - 700091",
    phone: "+91 33 4005 3300",
    email: "east.sales@shakunairflex.com",
    head: "Mr. Subhashish Roy (Service Operations)"
  }
];
