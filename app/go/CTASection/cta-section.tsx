import React from 'react';
import Image from 'next/image';
import styles from './cta-section.module.css';
import Form from '@/src/components/Form/Form';
import Button from '@/src/components/Button/Button';
import FadeInSection from '@/src/components/FadeInSection/FadeInSection';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <Image
        src="/images/go/GO-header.jpg"
        alt="Background"
        fill
        className={styles.bgImage}
      />
      <div className={styles.overlay} />
      
      <FadeInSection className={styles.content}>
        <h2 className={styles.heading}>BECOME A G.O</h2>
        
        <div className={styles.actions}>
          <div className={styles.formWrapper}>
            <Form placeholder="REGISTER HERE" variant="default" />
          </div>
          
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
