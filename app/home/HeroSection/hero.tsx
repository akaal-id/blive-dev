'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './hero.module.css';
import Button from '@/src/components/Button/Button';
import Form from '@/src/components/Form/Form';

const Hero: React.FC = () => {
  const wantedRef = useRef<HTMLHeadingElement>(null);
  const underlineWrapperRef = useRef<HTMLDivElement>(null);
  const [underlineWidth, setUnderlineWidth] = useState(200);

  useEffect(() => {
    const updateUnderlineWidth = () => {
      if (wantedRef.current && underlineWrapperRef.current) {
        setUnderlineWidth(wantedRef.current.offsetWidth);
      }
    };

    updateUnderlineWidth();
    window.addEventListener('resize', updateUnderlineWidth);
    return () => window.removeEventListener('resize', updateUnderlineWidth);
  }, []);

  return (
    <section className={`${styles.heroRoot}`}>
      {/* Logo Section */}
      <div className={styles.logoContainer}>
        <Image
          src="/icons/wlogo.png"
          alt="BLive Logo"
          width={200}
          height={64}
          className={styles.logoImage}
          
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
                ref={wantedRef}
                className={`${styles.headingEmphasis} text-white drop-shadow-sm`}
              >
                WANTED
              </h1>
              <div 
                ref={underlineWrapperRef}
                className={styles.underlineWrapper}
                style={{ width: `${underlineWidth}px` }}
              >
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
          <div className={styles.tagline}>
            A community coliving home for creators, nomads, and slow travelers in Bali.
          </div>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.formContainer}>
          <Form placeholder="JOIN NEWSLETTER FOR BLIVE" variant="footer" />
        </div>
        <div className={styles.goContainer}>
          <div className={styles.footerDescription}>
            DISCOVER WHAT IT MEANS TO BE A G.O.
          </div>
          <Button variant="primary" showArrow={false} href="/go" className={styles.findYourSpace}>
            EXPLORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
