import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Globe,
  Clock,
  Briefcase,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface FormState {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  location: string;
  requirement: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  companyName: '',
  phone: '',
  email: '',
  location: '',
  requirement: 'Skilled & Semi-Skilled Manpower',
  message: '',
};

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Plant or facility location is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please specify your operational requirements or message';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable enquiry receipt
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData(initialForm);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#071A2B] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#145DA0]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D9A441]/30 text-xs font-semibold text-[#D9A441] tracking-wider uppercase mb-3"
          >
            Workforce Inquiries
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Let's Build a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#D9A441]">
              Stronger Workforce Together
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300"
          >
            Connect with our operations desk to evaluate manpower requirements, shift patterns, and custom staffing arrangements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Official Contact Coordinates */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                  Corporate Office
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  (Entity: {COMPANY_INFO.entityName})
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Phone lines */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D9A441]/15 border border-[#D9A441]/30 flex items-center justify-center text-[#D9A441] shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Phone Lines</div>
                    <div className="flex flex-col gap-1 mt-1">
                      {COMPANY_INFO.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="text-base font-bold text-white hover:text-[#D9A441] transition-colors"
                        >
                          +91 {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Official Email</div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-base font-bold text-white hover:text-sky-400 transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Base Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Headquarter & Registered Office</div>
                    <div className="text-sm font-semibold text-white mt-0.5 leading-snug">
                      {COMPANY_INFO.location}
                    </div>
                  </div>
                </div>

                {/* Statutory Registration Summary */}
                <div className="pt-3 border-t border-white/10">
                  <div className="text-xs text-slate-400 font-medium mb-2">
                    Verified Statutory Registrations
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                    <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                      <span className="text-slate-400 block text-[10px]">GSTIN</span>
                      <span className="text-[#D9A441] font-bold">{COMPANY_INFO.gstin}</span>
                    </div>
                    <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                      <span className="text-slate-400 block text-[10px]">MSME UDYAM</span>
                      <span className="text-emerald-400 font-bold">{COMPANY_INFO.udyam}</span>
                    </div>
                    <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                      <span className="text-slate-400 block text-[10px]">EPFO CODE</span>
                      <span className="text-amber-400 font-bold">{COMPANY_INFO.epfoCode}</span>
                    </div>
                    <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                      <span className="text-slate-400 block text-[10px]">ESIC CODE</span>
                      <span className="text-rose-400 font-bold">{COMPANY_INFO.esicCode}</span>
                    </div>
                  </div>
                </div>

                {/* Service Coverage */}
                <div className="flex items-start gap-4 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-400 shrink-0 mt-1">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Service Coverage</div>
                    <div className="text-sm font-semibold text-slate-200 mt-0.5">
                      Rajasthan • Madhya Pradesh • Uttar Pradesh • Pan India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Commitment Box */}
            <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#D9A441] shrink-0" />
              <p className="text-xs text-slate-300">
                Turnaround: All deployment enquiries are responded to within 24 business hours by our operations managers.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-[#0D1117] border border-white/15 p-6 sm:p-10 shadow-2xl relative">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Workforce Deployment Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in your company and workforce requirement details below:
              </p>

              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-200 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong className="block text-white font-semibold">
                        Thank you. Your enquiry has been received.
                      </strong>
                      Our team will get in touch with you shortly to discuss your workforce deployment requirements.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Rajesh Sharma"
                      className={`w-full bg-[#071A2B] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-white/15 focus:border-[#D9A441]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyName: e.target.value })
                      }
                      placeholder="e.g. Apex Edible Oils Pvt. Ltd."
                      className={`w-full bg-[#071A2B] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors ${
                        errors.companyName
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-white/15 focus:border-[#D9A441]'
                      }`}
                    />
                    {errors.companyName && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.companyName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full bg-[#071A2B] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-white/15 focus:border-[#D9A441]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@company.com"
                      className={`w-full bg-[#071A2B] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-white/15 focus:border-[#D9A441]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Location */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Plant / Operational Location *
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="e.g. Kota, Rajasthan"
                      className={`w-full bg-[#071A2B] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors ${
                        errors.location
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-white/15 focus:border-[#D9A441]'
                      }`}
                    />
                    {errors.location && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.location}
                      </p>
                    )}
                  </div>

                  {/* Workforce Requirement */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Workforce Category
                    </label>
                    <select
                      value={formData.requirement}
                      onChange={(e) =>
                        setFormData({ ...formData, requirement: e.target.value })
                      }
                      className="w-full bg-[#071A2B] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D9A441]"
                    >
                      <option value="Skilled & Semi-Skilled Manpower">
                        Skilled & Semi-Skilled Manpower
                      </option>
                      <option value="Unskilled Frontline Workers">
                        Unskilled Frontline Workers
                      </option>
                      <option value="Packaging Line Operations">
                        Packaging Line Operations
                      </option>
                      <option value="Loading & Unloading Teams">
                        Loading & Unloading Teams
                      </option>
                      <option value="Supervisors & Blue-Collar Staff">
                        Supervisors & Blue-Collar Staff
                      </option>
                      <option value="Plant Maintenance & Housekeeping">
                        Plant Maintenance & Housekeeping
                      </option>
                      <option value="Comprehensive Off-Roll Management">
                        Comprehensive Off-Roll Management
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Requirement Details / Number of Personnel *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe shift timings, required headcounts, skill profiles, and operational environment..."
                    className={`w-full bg-[#071A2B] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-white/15 focus:border-[#D9A441]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  id="contact-send-enquiry-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D9A441] to-[#ba8729] hover:from-[#e2af49] hover:to-[#c69433] text-[#071A2B] font-bold text-sm tracking-wide transition-all shadow-xl shadow-[#D9A441]/25 hover:shadow-2xl flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Enquiry...</span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
