import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldCheck, MapPin, Building2, Users } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber: React.FC<CounterProps> = ({ end, suffix = '', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const TrustStrip: React.FC = () => {
  return (
    <section className="relative bg-[#0D1117] border-y border-white/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D9A441]"
          >
            Verified Performance & Scale
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-1 text-2xl sm:text-3xl font-bold text-white tracking-tight"
          >
            Trusted Workforce Support Across Leading Industries
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Stat 1: 25+ Years */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#D9A441]/40 transition-colors group"
          >
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-[#D9A441]/15 border border-[#D9A441]/30 flex items-center justify-center text-[#D9A441] group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              <AnimatedNumber end={25} suffix="+" />
            </div>
            <div className="mt-2 text-xs sm:text-sm font-medium text-slate-300">
              Years of Experience
            </div>
            <div className="mt-1 text-[11px] text-slate-400">
              Founded on industrial discipline
            </div>
          </motion.div>

          {/* Stat 2: 1,000+ Workers Deployed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-sky-400/40 transition-colors group"
          >
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              <AnimatedNumber end={1000} suffix="+" />
            </div>
            <div className="mt-2 text-xs sm:text-sm font-medium text-slate-300">
              Workers Deployed
            </div>
            <div className="mt-1 text-[11px] text-slate-400">
              Skilled, semi-skilled & unskilled
            </div>
          </motion.div>

          {/* Stat 3: 6+ Major Industrial Engagements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#D9A441]/40 transition-colors group"
          >
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-[#D9A441]/15 border border-[#D9A441]/30 flex items-center justify-center text-[#D9A441] group-hover:scale-110 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              <AnimatedNumber end={6} suffix="+" />
            </div>
            <div className="mt-2 text-xs sm:text-sm font-medium text-slate-300">
              Major Industrial Engagements
            </div>
            <div className="mt-1 text-[11px] text-slate-400">
              Fortune, Patanjali, Pepsi brands & more
            </div>
          </motion.div>

          {/* Stat 4: 3 Key States */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-emerald-400/40 transition-colors group"
          >
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              <AnimatedNumber end={3} />
            </div>
            <div className="mt-2 text-xs sm:text-sm font-medium text-slate-300">
              Key Focus States
            </div>
            <div className="mt-1 text-[11px] text-[#D9A441] font-semibold">
              Rajasthan • MP • UP
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
