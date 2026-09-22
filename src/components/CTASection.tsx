import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface CTASectionProps {
  onTalkToUsClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onTalkToUsClick }) => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#0D1117] text-white overflow-hidden">
      {/* Abstract flowing gradient & blurred blue/gold effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#145DA0]/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#D9A441]/15 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-gradient-to-br from-[#071A2B] via-[#071A2B]/90 to-[#0D1117] border border-white/15 p-8 sm:p-14 lg:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle golden top glow line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#D9A441] to-transparent" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D9A441]/30 text-xs font-semibold text-[#D9A441] tracking-wider uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industrial Workforce Deployment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Need a Reliable{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#D9A441]">
              Workforce Partner?
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Let's discuss your manpower and workforce requirements.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-talk-button"
              onClick={onTalkToUsClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D9A441] to-[#ba8729] hover:from-[#e2af49] hover:to-[#c69433] text-[#071A2B] font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-[#D9A441]/25 hover:shadow-2xl hover:shadow-[#D9A441]/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
            >
              <span>Talk to Charvi</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="cta-contact-button"
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold text-sm transition-all duration-300 hover:border-white/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
              <Building2 className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
              <span>Direct Phone: {COMPANY_INFO.phones[0]}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Coverage: RJ • MP • UP • Pan India</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>Full Statutory Compliance Oversight</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
