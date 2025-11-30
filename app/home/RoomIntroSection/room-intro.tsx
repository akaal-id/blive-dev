'use client';

import React from 'react';
import Image from 'next/image';
import styles from './room-intro.module.css';
import FadeInSection from '@/src/components/FadeInSection/FadeInSection';

const RoomIntroSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <FadeInSection className={styles.splitLayout}>
        {/* Left Column: Text */}
        <div className={styles.textContent}>
          <div className={styles.headerGroup}>
            <span className={styles.label}>WHAT ARE WE <br />BUILDING</span>
            <h2 className={styles.heading}>
              <span className={styles.highlight}>51 ROOMS</span> In The <br />Heart Of Canggu
            </h2>
          </div>
          
          <div className={styles.details}>
            <p className={styles.description}>
              A modern coliving home surrounded by everything you need.
            </p>
            
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>3 minutes to BWork</li>
              <li className={styles.featureItem}>Steps from cafés, gyms, and daily essentials</li>
              <li className={styles.featureItem}>Weekly gatherings and community programs</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/rooms/intro.jpeg"
              alt="Room Interior Staircase" 
              fill
              className={styles.image}
            />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default RoomIntroSection;