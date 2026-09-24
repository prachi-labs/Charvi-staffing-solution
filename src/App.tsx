import React, { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';

// Lazy load sections that are below the first screen
const AboutSection = lazy(() =>
  import('./components/AboutSection').then((module) => ({
    default: module.AboutSection,
  }))
);

const IndustriesSection = lazy(() =>
  import('./components/IndustriesSection').then((module) => ({
    default: module.IndustriesSection,
  }))
);

const ExpertiseSection = lazy(() =>
  import('./components/ExpertiseSection').then((module) => ({
    default: module.ExpertiseSection,
  }))
);

const ExperienceTimeline = lazy(() =>
  import('./components/ExperienceTimeline').then((module) => ({
    default: module.ExperienceTimeline,
  }))
);

const WorkforceStrengthSection = lazy(() =>
  import('./components/WorkforceStrengthSection').then((module) => ({
    default: module.WorkforceStrengthSection,
  }))
);

const WhyCharviSection = lazy(() =>
  import('./components/WhyCharviSection').then((module) => ({
    default: module.WhyCharviSection,
  }))
);

const ApproachSection = lazy(() =>
  import('./components/ApproachSection').then((module) => ({
    default: module.ApproachSection,
  }))
);

const CertificatesSection = lazy(() =>
  import('./components/CertificatesSection').then((module) => ({
    default: module.CertificatesSection,
  }))
);

const CompanyValuesSection = lazy(() =>
  import('./components/CompanyValuesSection').then((module) => ({
    default: module.CompanyValuesSection,
  }))
);

const CTASection = lazy(() =>
  import('./components/CTASection').then((module) => ({
    default: module.CTASection,
  }))
);

const ContactSection = lazy(() =>
  import('./components/ContactSection').then((module) => ({
    default: module.ContactSection,
  }))
);

const Footer = lazy(() =>
  import('./components/Footer').then((module) => ({
    default: module.Footer,
  }))
);

export default function App() {
  const handleTalkToUs = () => {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#071A2B] text-slate-100 selection:bg-[#D9A441] selection:text-[#071A2B]">

      {/* Sticky Navigation */}
      <Navbar onTalkToUsClick={handleTalkToUs} />

      {/* Main Sections */}
      <main>

        {/* Hero Section - loads immediately */}
        <Hero />

        {/* Trust & Experience Strip - loads immediately */}
        <TrustStrip />

        {/* Below-the-fold sections */}
        <Suspense
          fallback={
            <div className="min-h-[300px] bg-[#071A2B]" />
          }
        >

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

          {/* Certifications & Credentials */}
          <CertificatesSection />

          {/* Company Core Values */}
          <CompanyValuesSection />

          {/* Direct Action CTA Strip */}
          <CTASection onTalkToUsClick={handleTalkToUs} />

          {/* Contact Coordinates & Deployment Form */}
          <ContactSection />

          {/* Corporate Footer */}
          <Footer />

        </Suspense>

      </main>
    </div>
  );
}
