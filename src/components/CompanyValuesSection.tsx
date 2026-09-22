import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Handshake, CheckCircle2 } from 'lucide-react';
import { COMPANY_VALUES } from '../data/websiteData';

export const CompanyValuesSection: React.FC = () => {
  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#D9A441]" />;
      case 'Award':
        return <Award className="w-8 h-8 text-sky-400" />;
      case 'Handshake':
        return <Handshake className="w-8 h-8 text-emerald-400" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-[#D9A441]" />;
    }
  };

  return (
    <section id="values" className="relative py-24 sm:py-32 bg-[#071A2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D9A441]/30 text-xs font-semibold text-[#D9A441] tracking-wider uppercase mb-3"
          >
            Guiding Ethos
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Built on Reliability.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#D9A441]">
              Driven by People.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300"
          >
            Three non-negotiable principles that guide every workforce placement, supervisory team, and client agreement.
          </motion.p>
        </div>

        {/* 3 Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPANY_VALUES.map((val, index) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#D9A441]/50 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden"
            >
              {/* Subtle top bar accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D9A441]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#D9A441]/40 transition-all duration-300">
                  {getValueIcon(val.iconName)}
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#D9A441] mb-1">
                  {val.tagline}
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3">
                  {val.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-slate-400 group-hover:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Practiced across 25+ years of operations</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
