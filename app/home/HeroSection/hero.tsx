'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { createTimeline } from 'animejs';
import styles from './hero.module.css';
import Button from '@/src/components/Button/Button';
import Form from '@/src/components/Form/Form';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const emphasisRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const transitionOverlayRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!headingRef.current || !emphasisRef.current || !logoRef.current || !bottomRef.current) return;

    // Wrap letters in spans for animation
    const wrapLetters = (element: HTMLElement) => {
      element.innerHTML = element.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';
    };

    wrapLetters(headingRef.current);
    wrapLetters(emphasisRef.current);
    
    const tl = createTimeline({ loop: false });

    const allLetters = [
      ...Array.from(headingRef.current.querySelectorAll('.letter')),
      ...Array.from(emphasisRef.current.querySelectorAll('.letter')),
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

    // Scroll Transition Logic
    const handleScroll = () => {
      if (!transitionOverlayRef.current || !heroRef.current) return;
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate opacity based on scroll position
      // Start fading in at 20% scroll, fully opaque at 90% scroll
      const startFade = windowHeight * 0.2;
      const endFade = windowHeight * 0.9;
      
      if (scrollY < startFade) {
        transitionOverlayRef.current.style.opacity = '0';
      } else if (scrollY > endFade) {
         // Fade out logic will be handled by the next section coming into view
         // But for the overlay itself, it stays opaque to cover the hero as it scrolls up
         // The "fade out to intro section" effect is achieved because this overlay covers the hero,
         // and then the next section (Intro) scrolls into view or is revealed.
         // If we want a "fade to cream, then fade out to reveal intro", 
         // we might need the intro section to be underneath or to fade this overlay out.
         
         // Given: hero -> fade in to cream -> cream -> fade out to introsection
         // Since Hero is sticky, as we scroll down:
         // 1. Overlay fades in to 1 (Cream)
         // 2. Then as we continue scrolling, we enter the next section.
         
         // To achieve "fade out to intro section", the overlay should probably stay at opacity 1
         // until the Hero is fully out of view or handled by the Intro section's entrance.
         // However, if "fade out to intro section" means the cream overlay fades away to reveal intro,
         // that usually happens if Intro is Fixed/Sticky behind? 
         // OR if Intro simply scrolls up over the Cream.
         
         // Standard behavior for sticky hero + cream transition:
         // Hero stays sticky. Overlay fades to cream.
         // Then Intro section (which has white/cream bg) scrolls up normally.
         // Effectively: Image -> Fade to Cream -> Cream Background of Intro Section.
         
         transitionOverlayRef.current.style.opacity = '1';
      } else {
        const progress = (scrollY - startFade) / (endFade - startFade);
        transitionOverlayRef.current.style.opacity = progress.toFixed(2);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      tl.pause();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className={`${styles.heroRoot}`}>
      {/* Gradient overlay to subtly balance warmth without darkening overall image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5 pointer-events-none" />

      {/* Transition Overlay */}
      <div ref={transitionOverlayRef} className={styles.transitionOverlay} />

      {/* Logo Section */}
      <div 
        ref={logoRef} 
        className={styles.logoContainer}
        style={{ opacity: 0 }} // Start hidden for fade in
      >
        <Image
          src="/icons/BLive Logo.svg"
          alt="BLive Logo"
          width={200}
          height={64}
          className="object-contain"
        />
      </div>

      <div className={styles.overlay}>
        <div className={styles.contentColumn}>
          <div className={styles.headingGroup}>
            <div className={styles.headingLeft}>
              <h1
                ref={headingRef}
                className={`${styles.headingPrimary} text-white drop-shadow-sm`}
              >
                NEIGHBORS
              </h1>
            </div>
            <div className={styles.headingRight}>
              <h1
                ref={emphasisRef}
                className={`${styles.headingEmphasis} text-white drop-shadow-sm`}
              >
                WANTED
              </h1>
              <div className={styles.underlineWrapper}>
                <Image 
                  src="/icons/underline.png" 
                  alt="underline" 
                  width={200} 
                  height={20} 
                  className={styles.underline}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        ref={bottomRef} 
        className={styles.bottomContainer}
        style={{ opacity: 0 }} // Start hidden for fade in
      >
        <div className={styles.tagline}>
          A community coliving home for creators, nomads, and slow travelers in Bali.
        </div>

        <div className={styles.actionTray}>
          <Form placeholder="JOIN NEWSLETTER FOR BLIVE" variant="hero" />
          <Button variant="secondary" showArrow={false} href="/go">
            Explore Go
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
