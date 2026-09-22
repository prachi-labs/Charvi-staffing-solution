import React from 'react';
import { motion } from 'motion/react';
import {
  Users,
  Briefcase,
  Boxes,
  Truck,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  HardHat,
  ArrowRight,
} from 'lucide-react';
import { EXPERTISE_DATA } from '../data/websiteData';

export const ExpertiseSection: React.FC = () => {
  const getExpertiseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-sky-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#D9A441]" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-amber-400" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      default:
        return <Users className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="expertise" className="relative py-24 sm:py-32 bg-[#071A2B] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#145DA0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D9A441]/30 text-xs font-semibold text-[#D9A441] tracking-wider uppercase mb-3"
          >
            Core Competencies
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Workforce Solutions That Keep Operations Moving
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300"
          >
            Comprehensive workforce provisioning, supervision, and end-to-end line operations tailored for manufacturing and processing facilities.
          </motion.p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D9A441]/40 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 transition-transform">
                    {getExpertiseIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10">
                    {item.tag}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#D9A441] font-semibold tracking-wider mb-2">
                  {item.number}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#D9A441] transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-slate-400 group-hover:text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Standardized Compliance & Oversight</span>
              </div>
            </motion.div>
          ))}

          {/* Card 6: Prominent Supervisors & Blue-Collar Callout */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl bg-gradient-to-br from-[#145DA0]/25 via-[#071A2B] to-[#D9A441]/20 border border-[#D9A441]/50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-[#D9A441]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#D9A441]/20 border border-[#D9A441]/40 flex items-center justify-center text-[#D9A441]">
                  <HardHat className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#D9A441]/20 text-[#D9A441] border border-[#D9A441]/30">
                  Specialized
                </span>
              </div>

              <div className="text-xs font-mono text-[#D9A441] font-semibold tracking-wider mb-2">
                06 — LEADERSHIP & TECHNICAL
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3">
                Supervisors & Blue-Collar Workforce
              </h3>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Operators and plant-level personnel can be deployed according to project and operational requirements, equipped with on-site reporting and shift leadership.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#D9A441]">
              <ShieldCheck className="w-4 h-4" />
              <span>Project & Shift-Based Deployment Available</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
