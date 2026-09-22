import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { WorkforceStrengthSection } from './components/WorkforceStrengthSection';
import { WhyCharviSection } from './components/WhyCharviSection';
import { ApproachSection } from './components/ApproachSection';
import { CertificatesSection } from './components/CertificatesSection';
import { CompanyValuesSection } from './components/CompanyValuesSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleTalkToUs = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#071A2B] text-slate-100 selection:bg-[#D9A441] selection:text-[#071A2B]">
      {/* Sticky Navigation */}
      <Navbar onTalkToUsClick={handleTalkToUs} />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Trust & Experience Strip */}
        <TrustStrip />

        {/* About Section */}
        <AboutSection />

        {/* Industries We Serve */}
        <IndustriesSection />

        {/* Our Workforce Expertise */}
        <ExpertiseSection />

        {/* 25+ Years Experience & Client History Timeline */}
        <ExperienceTimeline />

        {/* Workforce Strength & India Map Coverage */}
        <WorkforceStrengthSection />

        {/* Why Charvi Partner Section */}
        <WhyCharviSection />

        {/* Our 4-Stage Deployment Approach */}
        <ApproachSection />

        {/* Certifications & Credentials Slot Gallery with Lightbox */}
        <CertificatesSection />

        {/* Company Core Values */}
        <CompanyValuesSection />

        {/* Direct Action CTA Strip */}
        <CTASection onTalkToUsClick={handleTalkToUs} />

        {/* Contact Coordinates & Deployment Form */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
