import React from 'react';
import Image from 'next/image';
import styles from './about-section.module.css';
import Eyebrow from '@/src/components/Eyebrow/Eyebrow';
import FadeInSection from '@/src/components/FadeInSection/FadeInSection';

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <FadeInSection>
        <div>
          <Eyebrow className={styles.eyebrow}>ABOUT GO</Eyebrow>
          
          <div className={styles.contentGrid}>
            <div className={styles.column}>
              <h2 className={styles.heading}>
                What is <span className={styles.highlight}>G.O?</span>
              </h2>
              <div className={styles.divider} />
              <div className={styles.description}>
                <p className="font-semibold">
                  The G.O Program is BLive's initiative for Community Leadership.
                </p>
                <p>
                  G.Os are our residents who take an active, voluntary role in shaping the spirit of
                  our community — connecting people, sparking conversations, and creating
                  experiences that bring everyone closer as a facilitator.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <h2 className={styles.heading}>
                Who is <span className={styles.highlight}>G.O?</span>
              </h2>
              <div className={styles.divider} />
              <div className={styles.description}>
                <p className="font-semibold">
                  A G.O is a friend, a connector, and a culture-maker.
                </p>
                <p>
                  With their unique strengths and passions, G.Os bring energy to the space,
                  support fellow members, and help build a community where people feel
                  welcomed, inspired, and at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className={styles.imageContainer}>
        <Image
          src="/images/go/go-about.webp"
          alt="Community Common Space"
          fill
          className={styles.image}
        />
      </FadeInSection>
    </section>
  );
}
