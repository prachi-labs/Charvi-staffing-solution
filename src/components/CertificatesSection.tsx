import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ZoomIn,
  X,
  ShieldCheck,
  Maximize2,
  Award,
} from 'lucide-react';
import { INITIAL_CERTIFICATES } from '../data/websiteData';
import { CertificateItem } from '../types';
import { CertificateDocumentView } from './CertificateDocumentView';

export const CertificatesSection: React.FC = () => {
const [certificates] = useState<CertificateItem[]>(INITIAL_CERTIFICATES);
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);


  // Keyboard shortcut for lightbox close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certificates" className="relative py-24 sm:py-32 bg-[#0D1117] text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#145DA0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D9A441]/30 text-xs font-semibold text-[#D9A441] tracking-wider uppercase mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Statutory Compliance & Registrations</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Certifications & Credentials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300"
          >
            Recognizing our commitment to professional workforce operations and business practices.
          </motion.p>

          {/* Compliance Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300">
            <Award className="w-4 h-4 text-[#D9A441] shrink-0" />
            <span>
              Official Government Registrations: MSME (Udyam) • GST • EPFO • ESIC
            </span>
          </div>
        </div>

        {/* 2x2 Grid on Desktop, 1 Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#D9A441]/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 relative"
            >
           
            
              {/* Certificate Image Frame */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#071A2B] border border-white/10 flex flex-col items-center justify-center cursor-pointer group-hover:border-[#D9A441]/40 transition-colors"
              >
                {cert.imageUrl ? (
                  <>
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 right-3 bg-[#071A2B]/90 backdrop-blur-sm border border-white/10 p-2 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs">
                      <ZoomIn className="w-4 h-4 text-[#D9A441]" />
                      <span>Full Preview</span>
                    </div>
                  </>
                ) : (
                  /* Official Digitized Document Card View */
                  <div className="w-full h-full flex flex-col">
                    <CertificateDocumentView cert={cert} isCompact={true} />
                    <div className="absolute bottom-3 right-3 bg-[#071A2B]/90 backdrop-blur-sm border border-white/10 p-2 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs">
                      <ZoomIn className="w-4 h-4 text-[#D9A441]" />
                      <span>Inspect Document</span>
                    </div>
                  </div>
                )}

                {/* Top Corner Slot Tag */}
                <div className="absolute top-3 left-3 bg-[#071A2B]/85 backdrop-blur-md border border-white/10 rounded-lg px-2.5 py-1 text-[10px] font-mono text-[#D9A441] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{cert.placeholderId}</span>
                </div>
              </div>

              {/* Title & Statutory Number */}
              <div className="mt-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#D9A441] transition-colors">
                    {cert.title}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    {cert.date}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs">
                  <span className="text-slate-400 font-mono">Reg / Code:</span>
                  <span className="font-mono font-bold text-[#D9A441] bg-[#D9A441]/10 px-2 py-0.5 rounded border border-[#D9A441]/20">
                    {cert.regNumber}
                  </span>
                </div>
              </div>

              {/* Certificate Actions  */}
              <div className="mt-4 flex items-center justify-between gap-2 pt-3 border-t border-white/10">
               
                 

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>View Certificate</span>
                  </button>
                   
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-[#071A2B]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#0D1117] border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 flex flex-col my-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                id="lightbox-close-button"
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="text-center mb-5 pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9A441]/10 border border-[#D9A441]/30 text-xs font-mono text-[#D9A441] font-semibold mb-2">
                  {selectedCert.placeholderId.toUpperCase()} • {selectedCert.regNumber}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {selectedCert.caption}
                </p>
              </div>

              {/* Certificate Document Content in Lightbox */}
              <div className="w-full overflow-y-auto pr-1">
                {selectedCert.imageUrl ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={selectedCert.imageUrl}
                      alt={selectedCert.title}
                      className="max-h-[60vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <CertificateDocumentView cert={selectedCert} isCompact={false} />
                  </div>
                )}
                 </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-slate-400 text-center">
                Press <span className="font-mono text-slate-200">ESC</span> or click outside to return
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
