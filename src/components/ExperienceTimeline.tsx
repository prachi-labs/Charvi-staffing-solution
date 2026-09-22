import React from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  MapPin,
  CheckCircle,
  Sparkles,
  Building,
  Factory,
  PackageCheck,
  Shield,
  Tag,
} from 'lucide-react';
import { TIMELINE_DATA } from '../data/websiteData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#0D1117] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#145DA0]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D9A441]/30 text-xs font-semibold text-[#D9A441] tracking-wider uppercase mb-3"
          >
            Track Record & Historical Engagements
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            25+ Years of Industry Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300"
          >
            Supporting leading organizations across industrial, edible oil, beverage and manufacturing operations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-3 text-xs text-slate-400 italic"
          >
            * Presented as historical Experience & Project Engagements
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line for Desktop, Left Line for Mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D9A441] via-[#145DA0] to-white/20 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 md:gap-12 pl-10 md:pl-0`}
                >
                  {/* Center Node / Year Badge */}
                  <div className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 ${
                        item.isLatest
                          ? 'bg-[#D9A441] border-white text-[#071A2B] animate-pulse'
                          : 'bg-[#071A2B] border-[#D9A441] text-[#D9A441]'
                      }`}
                    >
                      {item.isLatest ? (
                        <Sparkles className="w-5 h-5" />
                      ) : (
                        <Calendar className="w-4 h-4" />
                      )}
                    </motion.div>
                  </div>

                  {/* Content Card (Half width on desktop) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    className="w-full md:w-1/2"
                  >
                    <div
                      className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden ${
                        item.isLatest
                          ? 'bg-gradient-to-br from-[#145DA0]/20 via-[#071A2B] to-[#D9A441]/20 border-[#D9A441]/60 shadow-xl shadow-[#D9A441]/10'
                          : 'bg-white/[0.03] border-white/10 hover:border-white/25'
                      }`}
                    >
                      {item.isLatest && (
                        <div className="absolute top-0 right-0 bg-[#D9A441] text-[#071A2B] text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Latest Engagement</span>
                        </div>
                      )}

                      {/* Year & Location Header */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xl sm:text-2xl font-black text-[#D9A441] font-mono">
                          {item.year}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                          <MapPin className="w-3.5 h-3.5 text-rose-400" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Company Name */}
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                        <Building className="w-5 h-5 text-sky-400 shrink-0" />
                        <span>{item.company}</span>
                      </h3>

                      {item.unit && (
                        <p className="text-xs text-slate-400 font-medium mt-1">
                          {item.unit}
                        </p>
                      )}

                      {/* Brand pills if any */}
                      {item.brands && item.brands.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5 items-center">
                          <span className="text-[11px] text-slate-400 font-medium mr-1 flex items-center gap-1">
                            <Tag className="w-3 h-3 text-[#D9A441]" />
                            Brands Handled:
                          </span>
                          {item.brands.map((brand) => (
                            <span
                              key={brand}
                              className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#D9A441]/15 text-[#D9A441] border border-[#D9A441]/30"
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Services List */}
                      <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Scope of Workforce Services:
                        </div>
                        <ul className="space-y-1.5">
                          {item.services.map((service, sIndex) => (
                            <li
                              key={sIndex}
                              className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                            >
                              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Empty spacer for the other half on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
