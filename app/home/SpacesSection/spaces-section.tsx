'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './spaces-section.module.css';
import Eyebrow from '@/src/components/Eyebrow/Eyebrow';
import FadeInSection from '@/src/components/FadeInSection/FadeInSection';
import { spacesData } from '@/src/lib/spacesdata';

export default function SpacesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current || !rightPanelRef.current) return;

      const section = sectionRef.current;
      const track = trackRef.current;
      const rightPanel = rightPanelRef.current;
      
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Start scrolling when the section hits the top of the viewport
      // End scrolling when the bottom of the section hits the bottom of the viewport
      const scrollDistance = -sectionTop;
      const maxScroll = sectionHeight - windowHeight;
      
      let progress = scrollDistance / maxScroll;
      progress = Math.max(0, Math.min(1, progress));
      
      const trackWidth = track.scrollWidth;
      const rightPanelWidth = rightPanel.offsetWidth;
      const maxTranslate = trackWidth - rightPanelWidth;
      
      if (maxTranslate > 0) {
        const translateX = -progress * maxTranslate;
        track.style.transform = `translateX(${translateX}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stickyWrapper}>
        
        {/* Left Panel - Text */}
        <div className={styles.leftPanel}>
          <div className={styles.textContent}>
             <div className={styles.topContent}>
                <div className={styles.eyebrowWrapper}>
                    <Eyebrow className={styles.eyebrow}>LIFE AT BLIVE</Eyebrow>
                </div>
                <h2 className={styles.heading}>
                    FEEL <br />
                    BELONG <br />
                    THRIVE
                </h2>
             </div>
             <div className={styles.description}>
                <p>
                  Shared spaces, warm people, and routines that keep your days steady.
                  A home that helps you feel grounded while staying connected.
                </p>
             </div>
          </div>
        </div>

        {/* Right Panel - Image Slider */}
        <div className={styles.rightPanel} ref={rightPanelRef}>
          <div ref={trackRef} className={styles.sliderTrack}>
            {spacesData.map((space) => (
              <div key={space.id} className={styles.imageBlock}>
                <div className={styles.imageContainer}>
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className={styles.image}
                  />
                </div>
                <p className={styles.imageLabel}>{space.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
