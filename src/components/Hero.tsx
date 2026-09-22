import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Award,
  ChevronDown,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';
import heroImage from '../assets/images/hero_workforce_1790072823030.jpg';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 bg-[#071A2B] overflow-hidden flex flex-col justify-center"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#145DA0]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#D9A441]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Badges & Company Label */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D9A441]/30 backdrop-blur-sm shadow-sm"
          >
            <Award className="w-3.5 h-3.5 text-[#D9A441]" />
            <span className="text-xs font-semibold tracking-wide text-slate-200">
              25+ Years of Industry Experience
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm"
          >
            <Users className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-xs font-semibold tracking-wide text-slate-300">
              1,000+ Workforce Deployed
            </span>
          </motion.div>
        </div>

        {/* Brand Tagline Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center mb-3"
        >
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#D9A441] uppercase">
            {COMPANY_INFO.name}
          </span>
        </motion.div>

        {/* Primary Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Reliable Workforce.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#D9A441]">
              Stronger Operations.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-slate-300 max-w-2xl mx-auto">
            {COMPANY_INFO.tagline}
          </p>

          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {COMPANY_INFO.description}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-partner-cta"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D9A441] to-[#ba8729] hover:from-[#e2af49] hover:to-[#c69433] text-[#071A2B] font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-[#D9A441]/25 hover:shadow-2xl hover:shadow-[#D9A441]/35 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-explore-cta"
              onClick={() => scrollToSection('experience')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm transition-all duration-300 hover:border-white/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <span>Explore Our Experience</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </motion.div>

        {/* Hero Visual Card with Floating Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="mt-14 relative max-w-5xl mx-auto"
        >
          {/* Outer glow frame */}
          <div className="relative rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-[#D9A441]/20 shadow-2xl shadow-black/80">
            <div className="relative rounded-[22px] sm:rounded-[30px] overflow-hidden bg-[#0D1117]">
              {/* Image */}
              <div className="relative aspect-[16/9] w-full max-h-[520px]">
                <img
                  src={heroImage}
                  alt="Charvi Staffing Solutions - Industrial workforce and plant operations"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient overlays for readability and corporate mood */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B]/60 via-transparent to-[#071A2B]/40" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6 flex flex-wrap items-end justify-between gap-4 pointer-events-none">
                  <div className="max-w-md bg-[#071A2B]/85 backdrop-blur-md border border-white/15 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center gap-2 text-[#D9A441] text-xs font-semibold mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>ON-SITE OPERATIONAL EXCELLENCE</span>
                    </div>
                    <p className="text-white text-xs sm:text-sm font-medium">
                      Industrial production, edible oil packaging & FMCG dispatch operations managed with precision.
                    </p>
                  </div>

                  <div className="hidden md:flex items-center gap-2 bg-[#071A2B]/80 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1.5 text-xs text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Active Deployments in RJ • MP • UP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Statistic Card 1: Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -top-5 -left-2 sm:-top-6 sm:-left-6 bg-[#071A2B]/90 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl shadow-black/50 z-20 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#D9A441]/15 border border-[#D9A441]/30 flex items-center justify-center text-[#D9A441]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-extrabold text-white leading-none">25+ Years</div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-medium">Industry Legacy</div>
            </div>
          </motion.div>

          {/* Floating Statistic Card 2: Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -top-5 -right-2 sm:-top-6 sm:-right-6 bg-[#071A2B]/90 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl shadow-black/50 z-20 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-extrabold text-white leading-none">1,000+</div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-medium">Workforce Deployed</div>
            </div>
          </motion.div>

          {/* Floating Statistic Card 3: Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden sm:flex absolute -bottom-5 left-8 bg-[#071A2B]/90 backdrop-blur-md border border-white/15 rounded-xl p-3 shadow-xl z-20 items-center gap-2.5"
          >
            <MapPin className="w-4 h-4 text-[#D9A441]" />
            <div className="text-xs font-semibold text-slate-200">
              3 States & Pan India Network
            </div>
          </motion.div>

          {/* Floating Statistic Card 4: Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="hidden sm:flex absolute -bottom-5 right-8 bg-[#071A2B]/90 backdrop-blur-md border border-white/15 rounded-xl p-3 shadow-xl z-20 items-center gap-2.5"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <div className="text-xs font-semibold text-slate-200">
              Skilled • Semi-Skilled • Unskilled
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
