'use client';

import React from 'react';
import Image from 'next/image';
import styles from './hero.module.css';
import Button from '@/src/components/Button/Button';
import Form from '@/src/components/Form/Form';

const Hero: React.FC = () => {
  return (
    <section className={`${styles.heroRoot}`}>
      {/* Logo Section */}
      <div className={styles.logoContainer}>
        <Image
          src="/icons/BLive Logo.svg"
          alt="BLive Logo"
          width={200}
          height={64}
          className={styles.logoImage}
          unoptimized
          priority
        />
      </div>

      <div className={styles.overlay}>
        <div className={styles.contentColumn}>
          <div className={styles.headingGroup}>
            <div className={styles.headingLeft}>
          <h1
            className={`${styles.headingPrimary} text-white drop-shadow-sm`}
          >
                NEIGHBORS
          </h1>
            </div>
            <div className={styles.headingRight}>
          <h1
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
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.tagline}>
          A community coliving home for creators, nomads, and slow travelers in Bali.
        </div>

        <div className={styles.actionTray}>
          <Form placeholder="JOIN NEWSLETTER FOR BLIVE" variant="hero" />
          <Button variant="primary" showArrow={false} href="/go" className={styles.goButtonDarkBlue}>
            Explore Go
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
