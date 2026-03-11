import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import TickerSection from './components/TickerSection';
import ProblemsSection from './components/ProblemsSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import DeepServiceSections from './components/DeepServiceSections';
import HowWeWorkSection from './components/HowWeWorkSection';
import FinalCTASection from './components/FinalCTASection';
import ContactSection from './components/ContactSection';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* S1+S2: Hero */}
        <HeroSection />

        {/* Ticker */}
        <TickerSection />

        {/* S3: Problems (empathy) */}
        <ProblemsSection />

        {/* S4: Practice areas bento */}
        <ServicesSection />

        {/* S5: About / authority */}
        <AboutSection />

        {/* S6–S9: Deep service sections */}
        <DeepServiceSections />

        {/* S11: How we work */}
        <HowWeWorkSection />

        {/* S13: Final CTA */}
        <FinalCTASection />

        {/* S14: Contact */}
        <ContactSection />
      </main>

      {/* S15: Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppFloat />
    </>
  );
}