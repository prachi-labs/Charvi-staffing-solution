import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Menu, X, ArrowUpRight, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface NavbarProps {
  onTalkToUsClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onTalkToUsClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Workforce', href: '#workforce' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#071A2B]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3'
            : 'bg-gradient-to-b from-[#071A2B]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Slot */}
            <a
              href="#home"
              id="navbar-logo-link"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D9A441] rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#145DA0] via-[#071A2B] to-[#D9A441] p-[1.5px] shadow-lg shadow-black/40">
                <div className="w-full h-full bg-[#071A2B] rounded-[10px] flex items-center justify-center border border-white/10 group-hover:border-[#D9A441]/50 transition-colors">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#D9A441] text-lg tracking-wider">
                    C
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5">
                  CHARVI
                  <span className="text-[#D9A441] font-semibold text-xs tracking-widest uppercase bg-[#D9A441]/10 border border-[#D9A441]/30 px-1.5 py-0.5 rounded">
                    Staffing
                  </span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                  Solutions • Estd. 25+ Yrs
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full transition-colors hover:bg-white/10"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Header Right CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="hidden xl:flex items-center gap-2 text-xs text-slate-300 hover:text-[#D9A441] transition-colors"
                title="Direct Phone Line"
              >
                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D9A441]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_INFO.phones[0]}</span>
              </a>

              <button
                id="navbar-cta-button"
                onClick={onTalkToUsClick}
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#D9A441] to-[#b88628] hover:from-[#e5b24f] hover:to-[#c49231] text-[#071A2B] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-md shadow-[#D9A441]/20 hover:shadow-lg hover:shadow-[#D9A441]/30 active:scale-95"
              >
                <span>Talk to Us</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                id="navbar-mobile-talk-button"
                onClick={onTalkToUsClick}
                className="bg-[#D9A441] text-[#071A2B] font-semibold text-xs px-3 py-1.5 rounded-full"
              >
                Talk
              </button>
              <button
                id="navbar-mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#D9A441]" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-[#071A2B] border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
            >
              <nav className="flex flex-col gap-1.5 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-[#D9A441] hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                ))}
              </nav>

              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phones[0]}`}
                  className="flex items-center gap-3 text-xs text-slate-300 hover:text-white px-2"
                >
                  <Phone className="w-4 h-4 text-[#D9A441]" />
                  <span>Call: {COMPANY_INFO.phones[0]}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 text-xs text-slate-300 hover:text-white px-2"
                >
                  <Mail className="w-4 h-4 text-[#D9A441]" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onTalkToUsClick();
                  }}
                  className="w-full mt-2 bg-[#D9A441] text-[#071A2B] font-semibold text-sm py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#D9A441]/20"
                >
                  <span>Talk to Us Directly</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
