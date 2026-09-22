import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Users, Award, Shield, Globe2, Radio, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export const WorkforceStrengthSection: React.FC = () => {
  const [activeState, setActiveState] = useState<string>('Rajasthan');

  const locations = [
    {
      id: 'rj',
      state: 'Rajasthan',
      cities: 'Bundi • Kota • Baran',
      hub: 'Primary Industrial Operational Base',
      clients: 'AWL Agribusiness, Varun Beverages, Patanjali, Soyug Ltd, K.S. Oils',
      coordinates: { x: '35%', y: '42%' },
      activeCount: '500+ Personnel',
      color: '#D9A441',
    },
    {
      id: 'mp',
      state: 'Madhya Pradesh',
      cities: 'Guna • Central Industrial Belt',
      hub: 'Continuous FMCG & Oil Packaging Deployment',
      clients: 'Patanjali Food, K.S. Oils',
      coordinates: { x: '46%', y: '50%' },
      activeCount: '350+ Personnel',
      color: '#38BDF8',
    },
    {
      id: 'up',
      state: 'Uttar Pradesh',
      cities: 'Industrial Nodes & Allied Corridors',
      hub: 'Agro-processing & Manufacturing Support',
      clients: 'Sona Nutrients / Shalimar Group & Industrial Hubs',
      coordinates: { x: '54%', y: '38%' },
      activeCount: '150+ Personnel',
      color: '#34D399',
    },
    {
      id: 'pan',
      state: 'Pan India',
      cities: 'Nationwide Ready',
      hub: 'Rapid deployment capacity across interstate industrial clusters',
      clients: 'Multi-location client facilities and turnkey plant shutdowns',
      coordinates: { x: '50%', y: '65%' },
      activeCount: 'Deployable on-demand',
      color: '#A78BFA',
    },
  ];

  return (
    <section id="workforce" className="relative py-24 sm:py-32 bg-[#071A2B] text-white overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#145DA0]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D9A441]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D9A441]/30 text-xs font-semibold text-[#D9A441] tracking-wider uppercase mb-3"
          >
            Scale & Regional Footprint
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            Built to Deploy.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#D9A441]">
              Ready to Scale.
            </span>
          </motion.h2>

          {/* Main Hero Stat Display */}
          <div className="mt-8 flex flex-col items-center justify-center">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-[#D9A441] tracking-tighter">
              1,000+
            </div>
            <div className="mt-2 text-base sm:text-xl font-bold text-white">
              Skilled, Semi-Skilled & Unskilled Workers Deployed
            </div>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Our workforce operates across Rajasthan, Madhya Pradesh and Uttar Pradesh, with the capability to support workforce requirements across locations and operational environments.
            </p>
          </div>
        </div>

        {/* 4 Animated Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">1,000+</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Workforce Deployed</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Active & mobilized</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#D9A441]">25+</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Years Experience</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Uninterrupted operations</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-sky-400">3</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Core States</div>
            <div className="text-[11px] text-slate-400 mt-0.5">RJ • MP • UP hubs</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">Pan India</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Operational Capability</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Turnkey project readiness</div>
          </div>
        </div>

        {/* Interactive Subtle Map & Regional Coverage Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10">
          
          {/* Left: Map Graphic */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[460px] bg-[#0D1117] rounded-2xl p-6 border border-white/10 overflow-hidden">
            {/* Ambient map grid */}
            <div
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                backgroundSize: '24px 24px',
              }}
            />

            {/* Subtle stylized India Vector Silhouette */}
            <svg
              viewBox="0 0 400 480"
              className="w-full max-w-[340px] sm:max-w-[400px] h-auto drop-shadow-2xl opacity-90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Subtle India boundary approximation */}
              <path
                d="M175,30 C190,40 210,50 205,75 C200,90 225,95 240,110 C255,120 280,125 300,135 C320,145 315,165 295,175 C285,180 270,185 260,195 C250,205 240,210 230,220 C235,240 240,260 235,280 C230,300 220,330 205,370 C195,400 180,440 175,450 C170,440 155,400 145,360 C135,320 120,290 110,260 C100,230 95,210 90,190 C85,170 100,150 115,140 C125,130 140,120 145,100 C150,80 155,50 175,30 Z"
                fill="#145DA0"
                fillOpacity="0.12"
                stroke="#145DA0"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Connecting operational network lines */}
              <motion.path
                d="M140,180 L185,215 L220,170 L195,300 L140,180"
                stroke="#D9A441"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              />

              {/* Rajasthan Marker (Bundi, Kota, Baran) */}
              <g className="cursor-pointer" onClick={() => setActiveState('Rajasthan')}>
                <circle cx="140" cy="180" r="16" fill="#D9A441" fillOpacity="0.2" className="animate-ping" />
                <circle cx="140" cy="180" r="7" fill="#D9A441" />
                <circle cx="140" cy="180" r="3" fill="#071A2B" />
                <text x="75" y="170" fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="sans-serif">
                  RAJASTHAN
                </text>
                <text x="65" y="184" fill="#D9A441" fontSize="9" fontWeight="600" fontFamily="sans-serif">
                  Bundi • Kota • Baran
                </text>
              </g>

              {/* Madhya Pradesh Marker (Guna) */}
              <g className="cursor-pointer" onClick={() => setActiveState('Madhya Pradesh')}>
                <circle cx="185" cy="215" r="14" fill="#38BDF8" fillOpacity="0.2" className="animate-ping" />
                <circle cx="185" cy="215" r="7" fill="#38BDF8" />
                <circle cx="185" cy="215" r="3" fill="#071A2B" />
                <text x="195" y="222" fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="sans-serif">
                  MADHYA PRADESH
                </text>
                <text x="195" y="235" fill="#38BDF8" fontSize="9" fontWeight="600" fontFamily="sans-serif">
                  Guna Industrial Belt
                </text>
              </g>

              {/* Uttar Pradesh Marker */}
              <g className="cursor-pointer" onClick={() => setActiveState('Uttar Pradesh')}>
                <circle cx="220" cy="170" r="14" fill="#34D399" fillOpacity="0.2" className="animate-ping" />
                <circle cx="220" cy="170" r="7" fill="#34D399" />
                <circle cx="220" cy="170" r="3" fill="#071A2B" />
                <text x="232" y="165" fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="sans-serif">
                  UTTAR PRADESH
                </text>
                <text x="232" y="177" fill="#34D399" fontSize="9" fontWeight="600" fontFamily="sans-serif">
                  Allied Corridors
                </text>
              </g>

              {/* Pan India Connectivity Node */}
              <g className="cursor-pointer" onClick={() => setActiveState('Pan India')}>
                <circle cx="195" cy="300" r="18" fill="#A78BFA" fillOpacity="0.15" className="animate-pulse" />
                <circle cx="195" cy="300" r="8" fill="#A78BFA" />
                <circle cx="195" cy="300" r="3" fill="#ffffff" />
                <text x="150" y="325" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="sans-serif">
                  PAN INDIA DEPLOYMENT
                </text>
                <text x="160" y="338" fill="#A78BFA" fontSize="9" fontWeight="600" fontFamily="sans-serif">
                  Interstate Capabilities
                </text>
              </g>
            </svg>

            {/* Map Legend */}
            <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-[11px] bg-[#071A2B]/85 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg">
              <span className="text-slate-400">Click states on the map or buttons to inspect</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Industrial Deployment Nodes
              </span>
            </div>
          </div>

          {/* Right: Interactive State Selector & Details */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              State-Wise Deployment Strength
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Select an operational territory to view regional focus, deployed personnel strength, and key client history.
            </p>

            {/* State Selection Tabs */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              {locations.map((loc) => {
                const isSelected = activeState === loc.state;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveState(loc.state)}
                    className={`px-3 py-2.5 rounded-xl text-left border transition-all text-xs font-semibold flex items-center justify-between ${
                      isSelected
                        ? 'bg-white/15 border-[#D9A441] text-white shadow-lg'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span>{loc.state}</span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: loc.color }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active State Card Detail */}
            {locations
              .filter((loc) => loc.state === activeState)
              .map((loc) => (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-white/[0.04] border border-white/15 p-6 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                      {loc.state} Region
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/10">
                      {loc.activeCount}
                    </span>
                  </div>

                  <div className="text-lg font-bold text-white">
                    {loc.cities}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {loc.hub}
                  </p>

                  <div className="pt-3 border-t border-white/10">
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                      Historical Engagements in Region:
                    </div>
                    <div className="text-xs text-slate-200 font-medium">
                      {loc.clients}
                    </div>
                  </div>
                </motion.div>
              ))}

            <div className="p-4 rounded-xl bg-[#D9A441]/10 border border-[#D9A441]/30 flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#D9A441] shrink-0" />
              <div className="text-xs text-slate-200 font-medium">
                Compliant workforce deployed in accordance with the Factory Act, EPF, ESIC, and local state labour regulations.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
