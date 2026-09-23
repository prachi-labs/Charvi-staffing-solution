import React from 'react';
import { motion } from 'motion/react';
import { Search, UserCheck, Settings, TrendingUp, ArrowRight } from 'lucide-react';
import { APPROACH_STEPS } from '../data/websiteData';

export const ApproachSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-6 h-6 text-[#D9A441]" />;
      case 1:
        return <UserCheck className="w-6 h-6 text-sky-400" />;
      case 2:
        return <Settings className="w-6 h-6 text-emerald-400" />;
      case 3:
        return <TrendingUp className="w-6 h-6 text-amber-400" />;
      default:
        return <Search className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="approach" className="relative py-24 sm:py-32 bg-[#071A2B] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#145DA0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D9A441]/30 text-xs font-semibold text-[#D9A441] tracking-wider uppercase mb-3"
          >
            Deployment Lifecycle
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            How We Support Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#D9A441]">
              Workforce Requirements
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300"
          >
            A four-stage operational framework ensuring seamless integration, day-to-day compliance, and flexible capacity scaling.
          </motion.p>
        </div>

        {/* Desktop Horizontal Process Line & Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {APPROACH_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D9A441]/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#D9A441]/40 transition-all duration-300">
                      {getStepIcon(index)}
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#D9A441]/15 text-[#D9A441] border border-[#D9A441]/30">
                      STAGE {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#D9A441] transition-colors mb-3 flex items-center gap-2">
                    <span>{step.title}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center text-xs font-semibold text-slate-400 group-hover:text-[#D9A441] transition-colors">
                  <span>Phase {index + 1} Execution</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
