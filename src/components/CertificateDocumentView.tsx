import React from 'react';
import { CertificateItem } from '../types';
import { ShieldCheck, CheckCircle2, QrCode, FileText } from 'lucide-react';

interface CertificateDocumentViewProps {
  cert: CertificateItem;
  isCompact?: boolean;
}

export const CertificateDocumentView: React.FC<CertificateDocumentViewProps> = ({
  cert,
  isCompact = false,
}) => {
  // Color accents per certificate type
  const getTheme = () => {
    switch (cert.docType) {
      case 'udyam':
        return {
          primary: '#15803d', // Green / MSME
          secondary: '#166534',
          accent: '#22c55e',
          bgBanner: 'bg-emerald-900/30 text-emerald-300 border-emerald-500/30',
          sealColor: 'border-emerald-600 text-emerald-500',
          badgeText: 'MSME • UDYAM',
        };
      case 'gst':
        return {
          primary: '#1d4ed8', // Blue / GST
          secondary: '#1e40af',
          accent: '#3b82f6',
          bgBanner: 'bg-blue-900/30 text-blue-300 border-blue-500/30',
          sealColor: 'border-blue-600 text-blue-500',
          badgeText: 'FORM GST REG-06',
        };
      case 'epfo':
        return {
          primary: '#b45309', // Amber / EPFO
          secondary: '#92400e',
          accent: '#f59e0b',
          bgBanner: 'bg-amber-900/30 text-amber-300 border-amber-500/30',
          sealColor: 'border-amber-600 text-amber-500',
          badgeText: 'EPFO • LABOUR & EMPLOYMENT',
        };
      case 'esic':
        return {
          primary: '#be123c', // Crimson / ESIC
          secondary: '#9f1239',
          accent: '#f43f5e',
          bgBanner: 'bg-rose-900/30 text-rose-300 border-rose-500/30',
          sealColor: 'border-rose-600 text-rose-500',
          badgeText: 'ESIC • SOCIAL SECURITY',
        };
      default:
        return {
          primary: '#D9A441',
          secondary: '#b45309',
          accent: '#D9A441',
          bgBanner: 'bg-amber-900/30 text-amber-300 border-amber-500/30',
          sealColor: 'border-[#D9A441] text-[#D9A441]',
          badgeText: 'STATUTORY REGISTRATION',
        };
    }
  };

  const theme = getTheme();

  if (isCompact) {
    return (
      <div className="w-full h-full bg-[#0a121c] p-4 flex flex-col justify-between relative overflow-hidden select-none border border-white/5">
        {/* Subtle Watermark seal */}
        <div className="absolute right-2 bottom-2 opacity-10 pointer-events-none">
          <ShieldCheck className="w-32 h-32 text-white" />
        </div>

        {/* Top Header */}
        <div className="flex items-start justify-between gap-2 border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 text-[#D9A441]" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase block leading-tight">
                Government of India
              </span>
              <span className="text-[9px] text-slate-400 block truncate max-w-[180px]">
                {cert.authority}
              </span>
            </div>
          </div>
          <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${theme.bgBanner}`}>
            {theme.badgeText}
          </span>
        </div>

        {/* Certificate Title & Reg Number */}
        <div className="my-auto py-2">
          <h4 className="text-xs sm:text-sm font-extrabold text-white tracking-wide uppercase line-clamp-1">
            {cert.title}
          </h4>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="text-[10px] text-slate-400 font-mono">REG NO:</span>
            <span className="text-xs font-mono font-bold text-[#D9A441] bg-[#D9A441]/10 px-2 py-0.5 rounded border border-[#D9A441]/30">
              {cert.regNumber}
            </span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] bg-white/[0.03] p-2 rounded-lg border border-white/5">
            <div>
              <span className="text-slate-400 block text-[9px]">Enterprise</span>
              <span className="font-semibold text-slate-200">CHARVI ENTERPRISES</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px]">Proprietor</span>
              <span className="font-semibold text-slate-200">DEEPAK NAGAR</span>
            </div>
          </div>
        </div>

        {/* Bottom Verification Strip */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] text-slate-400">
          <div className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="w-3 h-3" />
            <span className="font-medium">Digitally Verified</span>
          </div>
          <span className="font-mono text-slate-400">Date: {cert.date}</span>
        </div>
      </div>
    );
  }

  // Full High-Fidelity Official Document Preview (for Lightbox / Detailed View)
  return (
    <div className="w-full max-w-2xl mx-auto bg-[#08101a] border-2 border-white/15 rounded-2xl p-6 sm:p-8 text-white relative shadow-2xl overflow-hidden font-sans">
      {/* Decorative official border frame */}
      <div className="absolute inset-2 border border-white/10 rounded-xl pointer-events-none" />
      <div className="absolute inset-3 border border-white/5 rounded-lg pointer-events-none" />

      {/* Official Government Header Banner */}
      <div className="text-center pb-5 border-b border-white/15 relative">
        <div className="flex items-center justify-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-[#D9A441]" />
          </div>
          <span className="text-xs sm:text-sm font-black tracking-widest text-slate-200 uppercase">
            GOVERNMENT OF INDIA
          </span>
        </div>
        <h3 className="text-xs text-slate-300 font-medium">
          {cert.authority}
        </h3>

        <div className="mt-4 inline-block px-4 py-1.5 rounded-lg bg-white/5 border border-white/15">
          <h2 className="text-base sm:text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#D9A441] uppercase">
            {cert.title}
          </h2>
        </div>
        <p className="text-[11px] text-slate-400 mt-1">{cert.subtitle}</p>
      </div>

      {/* Reg Number Highlight */}
      <div className="my-5 flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
        <div>
          <span className="text-[11px] text-slate-400 uppercase font-semibold block">
            Official Registration / Identification Number
          </span>
          <span className="text-sm sm:text-base font-mono font-extrabold text-[#D9A441] tracking-wider">
            {cert.regNumber}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-mono bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3 h-3" />
            Statutory Active
          </span>
          <span className="text-[10px] font-mono bg-white/5 text-slate-300 px-2.5 py-1 rounded-full border border-white/10">
            {cert.date}
          </span>
        </div>
      </div>

      {/* Structured Particulars Table */}
      <div className="space-y-2 mb-6 text-xs">
        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
          Registration Particulars & Statutory Information
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {cert.details.map((detail, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="text-[10px] text-slate-400 font-medium">
                {detail.label}
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-0.5 break-words">
                {detail.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Notice & Digital Seal */}
      <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2 text-left">
          <QrCode className="w-8 h-8 text-slate-400 shrink-0" />
          <div className="text-[10px] leading-tight">
            <span className="text-slate-300 font-semibold block">
              Official Statutory Record
            </span>
            <span>Issued by the Competent Jurisdictional Authority of India</span>
          </div>
        </div>

        <div className="text-right text-[10px] font-mono text-slate-400">
          <div>Entity: <strong className="text-slate-200">CHARVI ENTERPRISES</strong></div>
          <div>Bundi, Rajasthan - 323001</div>
        </div>
      </div>
    </div>
  );
};
