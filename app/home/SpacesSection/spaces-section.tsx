'use client';

import React from 'react';
import styles from './spaces-section.module.css';
import Eyebrow from '@/src/components/Eyebrow/Eyebrow';
import FadeInSection from '@/src/components/FadeInSection/FadeInSection';
import SpacesCarousel from './SpacesCarousel';

export default function SpacesSection() {
  return (
    <section className={styles.section}>
      <FadeInSection className={styles.container}>
        {/* Text Content - Centered at Top */}
        <div className={styles.textContent}>
          <div className={styles.eyebrowWrapper}>
            <Eyebrow className={styles.eyebrow}>LIFE AT BLIVE</Eyebrow>
          </div>
          
          <h2 className={styles.heading}>
            FEEL - 
            BELONG -
            THRIVE
          </h2>
          
          <div className={styles.verticalLine}></div>
          
          <div className={styles.description}>
            <p>
              Shared spaces, warm people, and routines that keep your days steady.
              A home that helps you feel grounded while staying connected.
            </p>
          </div>
        </div>
      </FadeInSection>
      
      {/* Spaces Carousel - Outside container for full width */}
      <SpacesCarousel />
    </section>
  );
}
