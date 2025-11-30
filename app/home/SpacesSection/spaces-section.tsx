'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './spaces-section.module.css';
import Eyebrow from '@/src/components/Eyebrow/Eyebrow';
import FadeInSection from '@/src/components/FadeInSection/FadeInSection';

export default function SpacesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const section = sectionRef.current;
      const track = trackRef.current;
      
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      const scrollDistance = -sectionTop;
      const maxScroll = sectionHeight - windowHeight;
      
      let newProgress = scrollDistance / maxScroll;
      
      // Clamp between 0 and 1
      newProgress = Math.max(0, Math.min(1, newProgress));
      
      // Apply transform
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      // Adjust max translate to account for fixed content spacing if needed
      // Here we just want the track to scroll fully
      const maxTranslate = trackWidth - (viewportWidth - 600); // 600 is approx width of fixed content + gap
      
      if (maxTranslate > 0) {
        const translateX = -newProgress * maxTranslate;
        track.style.transform = `translateX(${translateX}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <FadeInSection className={styles.stickyContainer}>
        
        {/* Fixed Text Content */}
        <div className={styles.fixedContent}>
             <div className={styles.label}>LIFE AT BLIVE</div>
             <h2 className={styles.heading}>
                FEEL <br />
                BELONG <br />
                THRIVE
             </h2>
             <div className={styles.description}>
                <p>
                  Shared spaces, warm people, and routines that keep your days steady.
                  A home that helps you feel grounded while staying connected.
                </p>
             </div>
        </div>

        {/* Scrolling Track */}
        <div className={styles.trackWrapper}>
          <div ref={trackRef} className={styles.horizontalTrack}>
            
            <div className={styles.imageBlock}>
              <div className={styles.imageContainer}>
                <Image
                  src="/images/image (2) 1.jpg"
                  alt="Swimming Pool"
                  fill
                  className={styles.image}
                />
              </div>
              <Eyebrow className={styles.imageLabel}>SWIMMING POOL</Eyebrow>
            </div>

            <div className={styles.imageBlock}>
              <div className={styles.imageContainer}>
                <Image
                  src="/images/image (7) 1.jpg"
                  alt="Outdoor Bar"
                  fill
                  className={styles.image}
                />
              </div>
              <Eyebrow className={styles.imageLabel}>OUTDOOR BAR</Eyebrow>
            </div>

            <div className={styles.imageBlock}>
              <div className={styles.imageContainer}>
                <Image
                  src="/images/image (4) 1.jpg"
                  alt="Community Pantry"
                  fill
                  className={styles.image}
                />
              </div>
              <Eyebrow className={styles.imageLabel}>COMMUNITY PANTRY</Eyebrow>
            </div>

            <div className={styles.imageBlock}>
              <div className={styles.imageContainer}>
                <Image
                  src="/images/image (6) 1.jpg"
                  alt="Yoga Shala"
                  fill
                  className={styles.image}
                />
              </div>
              <Eyebrow className={styles.imageLabel}>YOGA SHALA</Eyebrow>
            </div>

          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
