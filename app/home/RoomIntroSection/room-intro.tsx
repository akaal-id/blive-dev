'use client';

import React from 'react';
import Image from 'next/image';
import styles from './room-intro.module.css';

const RoomIntroSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <span className={styles.label}>WHAT<br />ARE WE<br />BUILDING</span>
        </div>
        
        <div className={styles.mainContent}>
          <div className={styles.imageContainer}>
            {/* Single Image as per design */}
            <Image 
              src="/images/image (4) 1.png" 
              alt="Room Interior View" 
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.contentGrid}>
            <h2 className={styles.heading}>
              <strong>51 ROOMS</strong> In The Heart Of Canggu
            </h2>
            
            <div className={styles.infoColumn}>
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
        </div>
      </div>
    </section>
  );
};

export default RoomIntroSection;
