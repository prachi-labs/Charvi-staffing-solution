import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, ShieldCheck, Award, Factory } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';
import aboutImage from '../assets/images/about_workforce_1790072843546.jpg';

export const AboutSection: React.FC = () => {
  const scrollToExpertise = () => {
    const el = document.getElementById('expertise');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#071A2B] overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#145DA0]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D9A441]/30 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D9A441]" />
              <span className="text-xs font-semibold tracking-wider text-[#D9A441] uppercase">
                About Charvi Enterprises
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              25+ Years of Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#D9A441]">
                Reliable Workforces
              </span>
            </h2>

            {/* Visual with overlapping card */}
            <div className="relative pt-4">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0D1117]">
                <img
                  src={aboutImage}
                  alt="Charvi Enterprises workforce supervisors and industrial team"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent opacity-80" />
              </div>

              {/* Overlapping statistic card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-2 sm:right-6 bg-[#0D1117]/95 backdrop-blur-md border border-[#D9A441]/40 rounded-2xl p-5 shadow-2xl max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#D9A441]/20 border border-[#D9A441]/40 flex items-center justify-center text-[#D9A441] shrink-0">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">25+ Yrs</div>
                    <div className="text-xs text-slate-300 font-medium">
                      Operational Heritage across Heavy Industry & FMCG
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Content & Value Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 space-y-6 pt-6 lg:pt-0"
          >
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
              <span className="font-semibold text-white">Charvi Enterprises</span> is an established manpower and workforce solutions company with over 25 years of industry experience, delivering reliable and professionally managed workforce solutions to businesses across India.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              With extensive expertise in manpower supply, off-roll workforce management and operational support, we help organizations build dependable teams and manage their workforce efficiently. Over the years, we have developed strong capabilities in understanding diverse industrial manpower requirements and delivering solutions tailored to our clients’ operational needs.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We provide <span className="text-white font-medium">Skilled, Semi-Skilled and Unskilled manpower</span>, along with <span className="text-white font-medium">Supervisors and Blue-Collar workforce</span>, including operators and other plant-level personnel. Our workforce solutions are designed to support organizations in maintaining smooth and efficient day-to-day operations.
            </p>

            {/* Highlighted Statement Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#D9A441]/15 via-[#D9A441]/5 to-transparent border-l-4 border-[#D9A441] bg-white/[0.02]">
              <div className="text-xs font-bold tracking-widest text-[#D9A441] uppercase mb-1">
                OUR CORE PRINCIPLE
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                "{COMPANY_INFO.highlightStatement}"
              </div>
            </div>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>On-Site Plant Supervisors</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Line Packaging Operators</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Loading & Dock Turnaround</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Multi-Shift Deployment</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                id="about-discover-expertise-button"
                onClick={scrollToExpertise}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-[#D9A441] hover:text-[#071A2B] text-white font-semibold text-sm transition-all duration-300 border border-white/15 hover:border-[#D9A441] group"
              >
                <span>Discover Our Expertise</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
