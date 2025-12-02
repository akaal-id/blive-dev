'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './flow-living.module.css';
import FadeInSection from '@/src/components/FadeInSection/FadeInSection';

export default function FlowLivingSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Handler for mouse enter (hover) on desktop
  const handleMouseEnter = (index: number) => {
    if (window.innerWidth >= 1024) { // Check if desktop
      setActiveIndex(index);
    }
  };

  // Handler for click (mobile/tablet)
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.section}>
      <FadeInSection className={styles.container}>
        <div className={styles.labelColumn}>
          <span className={styles.label}>Flow Living</span>
        </div>

        <div className={styles.contentColumn}>
          <h2 className={styles.heading}>
            Made for People Who <strong>Work, Move, and Grow</strong>
          </h2>

          <div className={styles.descriptionSection}>
            <div className={styles.mainDescription}>
              <p>Digital nomads want a room that helps them stay in flow, and BLive rooms are designed to keep your day smooth, bright, and focused.</p>
            </div>
          </div>

          <div className={styles.imageGrid}>
            <div 
              className={`${styles.imageContainer} ${activeIndex === 0 ? styles.imageActive : ''}`}
              onMouseEnter={() => handleMouseEnter(0)}
              onClick={() => handleClick(0)}
            >
              <Image 
                src="/images/flow1.jpg" 
                alt="Interior stairs" 
                fill
                className={styles.image}
                quality={90}
              />
            </div>
            <div 
              className={`${styles.imageContainer} ${activeIndex === 1 ? styles.imageActive : ''}`}
              onMouseEnter={() => handleMouseEnter(1)}
              onClick={() => handleClick(1)}
            >
              <Image 
                src="/images/flow2.jpg" 
                alt="Kitchen area" 
                fill
                className={styles.image}
                quality={90}
              />
            </div>
            <div 
              className={`${styles.imageContainer} ${activeIndex === 2 ? styles.imageActive : ''}`}
              onMouseEnter={() => handleMouseEnter(2)}
              onClick={() => handleClick(2)}
            >
              <Image 
                src="/images/flow3.webp" 
                alt="Lounge area" 
                fill
                className={styles.image}
                quality={90}
              />
            </div>
          </div>

          <div className={styles.featuresList}>
            <div 
              className={`${styles.featureItem} ${activeIndex === 0 ? styles.featureActive : ''}`}
              onMouseEnter={() => handleMouseEnter(0)}
              onClick={() => handleClick(0)}
            >
              <span className={styles.featureNumber}>01.</span>
              Work and rest zones that feel natural
            </div>
            <div 
              className={`${styles.featureItem} ${activeIndex === 1 ? styles.featureActive : ''}`}
              onMouseEnter={() => handleMouseEnter(1)}
              onClick={() => handleClick(1)}
            >
              <span className={styles.featureNumber}>02.</span>
              Storage that keeps your space clean
            </div>
            <div 
              className={`${styles.featureItem} ${activeIndex === 2 ? styles.featureActive : ''}`}
              onMouseEnter={() => handleMouseEnter(2)}
              onClick={() => handleClick(2)}
            >
              <span className={styles.featureNumber}>03.</span>
              Sunlight that boosts energy
            </div>
          </div>

          <div className={styles.bottomContent}>
            <div className={styles.bottomDescription}>
              <p>Flow Living gives you a room that feels light and easy. A space that keeps up with your ideas, your work, and your rhythm.</p>
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
