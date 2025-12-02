'use client';

import React from 'react';
import styles from './room-intro.module.css';
import FadeInSection from '@/src/components/FadeInSection/FadeInSection';

const RoomIntroSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <FadeInSection className={styles.contentWrapper}>
        <div className={styles.content}>
          <span className={styles.label}>WHAT ARE WE BUILDING</span>
          
          <h2 className={styles.heading}>
            <span className={styles.highlight}>51 ROOMS</span>
            <span className={styles.headingSuffix}> In The Heart Of Canggu</span>
          </h2>
          
          <p className={styles.description}>
            A modern coliving home surrounded by everything you need.
          </p>
          
          <div className={styles.featuresContainer}>
            <div className={styles.featureItem}>3 minutes to BWork</div>
            <div className={styles.featureItem}>Steps from cafés, gyms, and daily essentials</div>
            <div className={styles.featureItem}>Weekly gatherings and community programs</div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default RoomIntroSection;
