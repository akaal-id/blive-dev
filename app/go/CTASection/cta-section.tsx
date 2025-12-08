import React from 'react';
import Image from 'next/image';
import styles from './cta-section.module.css';
import Button from '@/src/components/Button/Button';
import FadeInSection from '@/src/components/FadeInSection/FadeInSection';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <Image
        src="/images/go/go-header.webp"
        alt="Background"
        fill
        className={styles.bgImage}
        sizes="100vw"
        unoptimized
      />
      <div className={styles.overlay} />
      
      <FadeInSection className={styles.content}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Apply to Become a G.O</h2>
          
          <div className={styles.subheading}>
            <p className={styles.subheadingText}>
              <strong>The Global Organizer Program is now open for applications.</strong>
            </p>
            <p className={styles.subheadingText}>
              If you're interested in contributing to the community and being part of our resident leadership initiative, please submit your application through the form below.
            </p>
          </div>
          
          <div className={styles.actions}>
            <Button 
              variant="primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfQuv7zUdefc8coSsl_z-kvWD6sCMp0yD0md1uaL7CoNVXYBQ/viewform"
              className={styles.ctaButton}
            >
              Join the G.O Program
            </Button>
            
            <Button 
              variant="secondary" 
              href="/" 
              className={styles.homeButton}
              showArrow={false}
            >
              HOME
            </Button>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
