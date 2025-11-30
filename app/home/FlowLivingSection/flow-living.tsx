'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './flow-living.module.css';
import FadeInSection from '@/src/components/FadeInSection/FadeInSection';

export default function FlowLivingSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className={styles.section}>
      <FadeInSection className={styles.container}>
        <div className={styles.labelColumn}>
          <span className={styles.label}>Flow Living</span>
        </div>

        <div className={styles.contentColumn}>
          <h2 className={styles.heading}>
            Made for People Who <br/> <strong>Work, Move, and Grow</strong>
          </h2>

          <div className={styles.descriptionSection}>
            <div className={styles.mainDescription}>
              <p>Digital nomads want a room that helps them stay in flow.</p>
              <p>BLive rooms are designed to keep your day smooth, bright, and focused.</p>
            </div>
          </div>

          <div className={styles.imageGrid}>
            {/* Using placeholders from public/images based on file listing */}
            <div 
              className={`${styles.imageContainer} ${activeIndex === 0 ? styles.imageActive : ''}`}
              onClick={() => setActiveIndex(0)}
            >
              <Image 
                src="/images/flow1.jpg" 
                alt="Interior stairs" 
                fill
                className={styles.image}
              />
            </div>
            <div 
              className={`${styles.imageContainer} ${activeIndex === 1 ? styles.imageActive : ''}`}
              onClick={() => setActiveIndex(1)}
            >
              <Image 
                src="/images/flow2.jpg" 
                alt="Kitchen area" 
                fill
                className={styles.image}
              />
            </div>
            <div 
              className={`${styles.imageContainer} ${activeIndex === 2 ? styles.imageActive : ''}`}
              onClick={() => setActiveIndex(2)}
            >
              <Image 
                src="/images/flow3.jpg" 
                alt="Lounge area" 
                fill
                className={styles.image}
              />
            </div>
            <div 
              className={`${styles.imageContainer} ${activeIndex === 3 ? styles.imageActive : ''}`}
              onClick={() => setActiveIndex(3)}
            >
              <Image 
                src="/images/flow4.jpg" 
                alt="Community space" 
                fill
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.featuresList}>
            <div className={styles.featureColumn}>
                <div 
                  className={`${styles.featureItem} ${activeIndex === 0 ? styles.featureActive : ''}`}
                  onClick={() => setActiveIndex(0)}
                >
                  <span className={styles.featureNumber}>01.</span>
                  Work and rest zones that feel natural
                </div>
                <div 
                  className={`${styles.featureItem} ${activeIndex === 1 ? styles.featureActive : ''}`}
                  onClick={() => setActiveIndex(1)}
                >
                  <span className={styles.featureNumber}>02.</span>
                  Storage that keeps your space clean
                </div>
            </div>
            <div className={styles.featureColumn}>
                <div 
                  className={`${styles.featureItem} ${activeIndex === 2 ? styles.featureActive : ''}`}
                  onClick={() => setActiveIndex(2)}
                >
                  <span className={styles.featureNumber}>03.</span>
                  Sunlight that boosts energy
                </div>
                <div 
                  className={`${styles.featureItem} ${activeIndex === 3 ? styles.featureActive : ''}`}
                  onClick={() => setActiveIndex(3)}
                >
                  <span className={styles.featureNumber}>04.</span>
                  Bathroom setups that fit fast, flexible days
                </div>
            </div>
          </div>

          <div className={styles.bottomContent}>
            <div className={styles.bottomDescription}>
              <p>Flow Living gives you a room that feels light and easy.</p>
              <p>A space that keeps up with your ideas, your work, and your rhythm.</p>
            </div>
            
            <div className={styles.tagline}>
              Work well. Recharge fast. Live freely.
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
