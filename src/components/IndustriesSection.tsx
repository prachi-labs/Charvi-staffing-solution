import React from 'react';
import { motion } from 'motion/react';
import { Droplets, PackageCheck, Factory, Sprout, ArrowUpRight } from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/websiteData';

export const IndustriesSection: React.FC = () => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-[#D9A441]" />;
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6 text-sky-400" />;
      case 'Factory':
        return <Factory className="w-6 h-6 text-amber-400" />;
      case 'Sprout':
        return <Sprout className="w-6 h-6 text-emerald-400" />;
      default:
        return <Factory className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-[#0D1117] text-white">
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#145DA0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#D9A441] tracking-wider uppercase mb-3"
            >
              Sector Specialization
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            >
              Industries We Serve
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-md"
          >
            Workforce solutions designed around real operational requirements, high throughput standards, and safety compliances.
          </motion.p>
        </div>

        {/* 4 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D9A441]/50 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle hover gradient bloom */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#145DA0]/20 via-transparent to-[#D9A441]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header with Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#D9A441]/40 transition-all duration-300">
                    {getIndustryIcon(industry.iconName)}
                  </div>
                  <span className="text-3xl font-black text-white/20 group-hover:text-[#D9A441]/40 transition-colors font-mono">
                    {industry.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#D9A441] transition-colors mb-3">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {industry.description}
                </p>
              </div>

              {/* Bottom Operational Highlight */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                  {industry.highlight}
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#D9A441] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
