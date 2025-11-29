import React from 'react';
import Hero from './home/HeroSection/hero';
import IntroSection from './home/IntroSection/intro';
import FlowLivingSection from './home/FlowLivingSection/flow-living';
import RoomIntroSection from './home/RoomIntroSection/room-intro';

export default function HomePage() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <IntroSection />
      <FlowLivingSection />
      <RoomIntroSection />
    </main>
  );
}
