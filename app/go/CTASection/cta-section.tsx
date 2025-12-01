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
      />
      <div className={styles.overlay} />
      
      <FadeInSection className={styles.content}>
        <h2 className={styles.heading}>BECOME A G.O</h2>
        
        <div className={styles.actions}>
          <Button 
            variant="primary"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfQuv7zUdefc8coSsl_z-kvWD6sCMp0yD0md1uaL7CoNVXYBQ/viewform"
          >
            REGISTER HERE
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
      </FadeInSection>
    </section>
  );
}
