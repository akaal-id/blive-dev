import React from 'react';
import Image from 'next/image';
import styles from './intro.module.css';
import FadeInSection from '@/src/components/FadeInSection/FadeInSection';

export default function IntroSection() {
  return (
    <section className={styles.section}>
      <FadeInSection className={styles.container}>
        {/* Centered Floating Image */}
        <div className={styles.floatingImageWrapper}>
             <Image 
              src="/images/image (6) 1.jpg" 
              alt="Yoga flow" 
              fill
              className={styles.image}
              quality={90}
            />
        </div>

        <div className={styles.leftContent}>
          <div className={styles.headerGroup}>
            <span className={styles.eyebrow}>HI, WELCOME TO BLIVE</span>
            <h2 className={styles.heading}>
              <span>Home Of</span>
              <strong>
                FLOW 
                <div className={styles.waveIconWrapper}>
                  <Image 
                    src="/icons/wave.png" 
                    alt="Wave icon" 
                    width={64}
                    height={24}
                    className={styles.waveIcon}
                    quality={90}
                  />
                </div>
              </strong>
            </h2>
          </div>

          <div className={styles.textContent}>
            <h3 className={styles.subheading}>
              BLive brings together personal rhythm and community energy.
            </h3>
            <div className={styles.detailColumns}>
              <p className={styles.detailText}>
                A place to live lightly, meet people who inspire you, and feel supported in your daily routine
              </p>
              <p className={styles.detailText}>
                Live freely at your own pace, connect naturally with others, and balance focus and rest through simple routines.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.imageArea}>
          {/* Main Background Image (Courtyard) */}
          <div className={styles.largeImageWrapper}>
            <Image 
              src="/images/intro1.jpg" 
              alt="BLive Courtyard" 
              fill
              className={styles.image}
              priority
              quality={90}
            />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
