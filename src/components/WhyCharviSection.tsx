import React from 'react';
import { motion } from 'motion/react';
import {
  Award,
  Users,
  Layers,
  Factory,
  MapPin,
  TrendingUp,
  Quote,
} from 'lucide-react';
import { WHY_CHARVI_DATA } from '../data/websiteData';

export const WhyCharviSection: React.FC = () => {
  const getBenefitIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Award className="w-5 h-5 text-[#D9A441]" />;
      case 1:
        return <Users className="w-5 h-5 text-sky-400" />;
      case 2:
        return <Layers className="w-5 h-5 text-amber-400" />;
      case 3:
        return <Factory className="w-5 h-5 text-emerald-400" />;
      case 4:
        return <MapPin className="w-5 h-5 text-purple-400" />;
      case 5:
        return <TrendingUp className="w-5 h-5 text-[#D9A441]" />;
      default:
        return <Award className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-[#0D1117] text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#145DA0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#D9A441] tracking-wider uppercase mb-3"
          >
            Strategic Advantage
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            More Than Manpower.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#D9A441]">
              A Workforce Partner.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300"
          >
            Delivering disciplined, reliable workforce operations that strengthen production lines, streamline logistics, and protect operational continuity.
          </motion.p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {WHY_CHARVI_DATA.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D9A441]/50 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getBenefitIcon(index)}
                </div>
                <span className="text-sm font-mono text-[#D9A441] font-bold">
                  {benefit.number}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#D9A441] transition-colors mb-2">
                {benefit.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Supporting Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#071A2B] via-[#0D1117] to-[#071A2B] border border-[#D9A441]/40 p-8 sm:p-10 shadow-2xl text-center"
        >
          <Quote className="w-8 h-8 text-[#D9A441] mx-auto mb-4 opacity-70" />
          <blockquote className="text-base sm:text-xl font-medium text-slate-100 italic leading-relaxed">
            "At Charvi Enterprises, we believe effective workforce management is more than simply providing manpower. It is about providing the right people, at the right place, with the right support."
          </blockquote>
          <div className="mt-4 text-xs font-semibold text-[#D9A441] uppercase tracking-widest">
            Leadership Philosophy • Charvi Enterprises
          </div>
        </motion.div>
      </div>
    </section>
  );
};
