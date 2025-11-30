'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { createTimeline } from 'animejs';
import styles from './hero.module.css';
import Button from '@/src/components/Button/Button';
import Form from '@/src/components/Form/Form';
import Eyebrow from '@/src/components/Eyebrow/Eyebrow';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const emphasisRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current || !emphasisRef.current || !eyebrowRef.current || !logoRef.current || !bottomRef.current) return;

    // Wrap letters in spans for animation
    const wrapLetters = (element: HTMLElement) => {
      element.innerHTML = element.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';
    };

    wrapLetters(headingRef.current);
    wrapLetters(emphasisRef.current);
    
    const eyebrowEl = eyebrowRef.current.querySelector('div'); // Eyebrow renders a div
    if (eyebrowEl) {
       wrapLetters(eyebrowEl);
    }

    const tl = createTimeline({ loop: false });

    const allLetters = [
      ...Array.from(headingRef.current.querySelectorAll('.letter')),
      ...Array.from(emphasisRef.current.querySelectorAll('.letter')),
      ...(eyebrowEl ? Array.from(eyebrowEl.querySelectorAll('.letter')) : [])
    ];
    
    // Non-text elements to fade in
    const otherElements = [logoRef.current, bottomRef.current];
    
    // Start both animations
    
    // 1. Text animation (TranslateY + Stagger)
    tl.add(allLetters, {
      translateY: [-100, 0],
      easing: 'easeOutExpo',
      duration: 1400,
      delay: (el: any, i: number) => 30 * i,
    }, 0); // Start at 0
    
    // 2. Basic Fade In for other elements
    tl.add(otherElements, {
      opacity: [0, 1],
      easing: 'linear',
      duration: 3000, 
    }, 0); // Start at 0 alongside text

    return () => {
      tl.pause();
    };
  }, []);

  return (
    <section className={`${styles.heroRoot}`}>
      {/* Gradient overlay to subtly balance warmth without darkening overall image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5 pointer-events-none" />

      {/* Logo Section */}
      <div 
        ref={logoRef} 
        className={styles.logoContainer}
        style={{ opacity: 0 }} // Start hidden for fade in
      >
        <Image
          src="/icons/BLive Logo.svg"
          alt="BLive Logo"
          width={120} /* Adjust width as needed based on the actual image aspect ratio */
          height={40} /* Adjust height as needed */
          className="object-contain"
        />
      </div>

      <div className={styles.overlay}>
        <div className={styles.contentColumn}>
          <h1
            ref={headingRef}
            className={`${styles.headingPrimary} text-white drop-shadow-sm`}
          >
            Neighbors
          </h1>
          <h1
            ref={emphasisRef}
            className={`${styles.headingEmphasis} text-white drop-shadow-sm`}
          >
            Wanted
          </h1>
          <div
            ref={eyebrowRef}
            className={styles.subcopy}
          >
            <Eyebrow variant="hero">Opening January 2026</Eyebrow>
          </div>
        </div>
      </div>

      <div 
        ref={bottomRef} 
        className={styles.bottomContainer}
        style={{ opacity: 0 }} // Start hidden for fade in
      >
        <div className={styles.tagline}>
          A community coliving home for creators, nomads, and slow travellers in
          Bali.
        </div>

        <div className={styles.actionTray}>
          <Form placeholder="JOIN NEWSLETTER FOR BLIVE" />
          <Button variant="secondary" showArrow={false} href="/go">
            Explore Go
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
