import React from 'react';
import { Metadata } from 'next';
import Header from './Header/header';
import AboutSection from './AboutSection/about-section';
import BenefitSection from './BenefitSection/benefit-section';
import CTASection from './CTASection/cta-section';

export const metadata: Metadata = {
  title: 'Become a G.O | Community Leadership Program',
  description: 'Join the G.O Program at BLive. Become a community leader, connect people, spark conversations, and create experiences in Bali.',
};

export default function GoPage() {
  return (
    <main>
      <Header />
      <AboutSection />
      <BenefitSection />
      <CTASection />
    </main>
  );
}
