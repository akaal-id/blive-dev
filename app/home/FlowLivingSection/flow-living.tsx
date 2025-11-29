import React from 'react';
import Image from 'next/image';
import styles from './flow-living.module.css';

export default function FlowLivingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.labelColumn}>
          <span className={styles.label}>Flow<br />Living</span>
        </div>

        <div className={styles.contentColumn}>
          <h2 className={styles.heading}>
            Made for People Who Work, Move, and Grow
          </h2>

          <div className={styles.imageGrid}>
            {/* Using placeholders from public/images based on file listing */}
            <div className={styles.imageContainer}>
              <Image 
                src="/images/image (2) 1.png" 
                alt="Interior stairs" 
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/image (3) 1.png" 
                alt="Kitchen area" 
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/image (4) 1.png" 
                alt="Lounge area" 
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/image (5) 1.png" 
                alt="Community space" 
                fill
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.descriptionSection}>
            <div className={styles.mainDescription}>
              <p>Digital nomads want a room that helps them stay in flow.</p>
              <p>BLive rooms are designed to keep your day smooth, bright, and focused.</p>
            </div>
          </div>

          <div className={styles.featuresList}>
            <div className={styles.featureRow}>
              <div className={styles.featureItem}>
                <span className={styles.featureNumber}>01.</span>
                Work and rest zones that feel natural
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureNumber}>02.</span>
                Storage that keeps your space clean
              </div>
            </div>
            <div className={styles.featureRow}>
              <div className={styles.featureItem}>
                <span className={styles.featureNumber}>03.</span>
                Sunlight that boosts energy
              </div>
              <div className={styles.featureItem}>
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
      </div>
    </section>
  );
}

