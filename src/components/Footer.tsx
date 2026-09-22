import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Workforce', href: '#workforce' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#071A2B] text-slate-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo Slot */}
            <a href="#home" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#145DA0] via-[#071A2B] to-[#D9A441] p-[1.5px]">
                <div className="w-full h-full bg-[#071A2B] rounded-[10px] flex items-center justify-center border border-white/10">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#D9A441] text-lg">
                    C
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight">
                  CHARVI STAFFING SOLUTIONS
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                  Estd. 25+ Years • {COMPANY_INFO.entityName}
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-300 font-medium">
              "{COMPANY_INFO.headline}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Delivering skilled, semi-skilled, and unskilled manpower with supervisory excellence across heavy manufacturing, edible oils, packaging, and logistics.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D9A441]">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Coverage Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D9A441]">
              Coverage
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
                <span>Rajasthan</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Madhya Pradesh</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Pan India</span>
              </li>
            </ul>
          </div>

          {/* Direct Contacts Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D9A441]">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D9A441] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {COMPANY_INFO.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="hover:text-white transition-colors"
                    >
                      +91 {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9A441] shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Charvi Staffing Solutions. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Manpower Supply</span>
            <span>•</span>
            <span>Off-Roll Management</span>
            <span>•</span>
            <span>Plant Operations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
