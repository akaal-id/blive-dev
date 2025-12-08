import React from 'react';
import Image from 'next/image';
import styles from './about-section.module.css';
import FadeInSection from '@/src/components/FadeInSection/FadeInSection';

export default function AboutSection() {
  return (
    <>
      <section className={styles.section}>
        <FadeInSection className={styles.leftColumn}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>
              Understanding The{' '}
              <span className={styles.highlightWrapper}>
                <span className={styles.highlight}>G.O</span>
                <Image
                  src="/icons/underline2.png"
                  alt=""
                  width={50}
                  height={10}
                  className={styles.underline}
                  unoptimized
                />
              </span>{' '}
              Program
            </h2>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/images/go/go-about.webp"
              alt="BLive Community Space"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>
        </FadeInSection>

        <FadeInSection className={styles.rightColumn}>
          <div className={styles.rightContent}>
            <p className={styles.eyebrow}>WHAT IS G.O</p>
            <p className={styles.description}>
              The Global Organizer (G.O) Program is BLive's community leadership initiative. It invites selected residents to take an active, voluntary role in shaping our coliving environment — helping people connect, encouraging interaction, and contributing to shared experiences that enrich the way we live together.
            </p>
            <p className={styles.boldDescription}>
              G.Os act as facilitators of community life, ensuring that BLive remains a warm, supportive, and engaging place to call home.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Who Container 1 */}
      <section className={styles.whoContainer1}>
        <FadeInSection className={styles.whoLeftColumn}>
          <div className={styles.whoLeftContent}>
            <p className={styles.whoEyebrow}>WHO IS G.O</p>
            <p className={styles.whoDescription}>
              A Global Organizer is a resident who actively contributes to strengthening BLive's community culture. G.Os help create an environment that feels connected, and engaged not through formal leadership, but through consistent, everyday actions.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection className={styles.whoRightColumn}>
          <div className={styles.whoImageContainer}>
            <Image
              src="/images/go/go-header.webp"
              alt="BLive Community Building"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>
        </FadeInSection>
      </section>

      {/* Characteristics Container */}
      <section className={styles.characteristicsContainer}>
        <FadeInSection>
          <h3 className={styles.characteristicsTitle}>A G.O TYPICALLY IS SOMEONE WHO</h3>
        </FadeInSection>

        <div className={styles.cardsGrid}>
          <FadeInSection className={`${styles.card} ${styles.cardDeepBlue}`}>
            <p className={styles.cardText}>
              Enjoys connecting with people in a natural, approachable way.
            </p>
          </FadeInSection>

          <FadeInSection className={`${styles.card} ${styles.cardTerracotta}`}>
            <p className={styles.cardText}>
              Takes initiative in creating moments of interaction within the coliving space.
            </p>
          </FadeInSection>

          <FadeInSection className={`${styles.card} ${styles.cardTeal}`}>
            <p className={styles.cardText}>
              Contributes their strengths to support daily community life.
            </p>
          </FadeInSection>

          <FadeInSection className={`${styles.card} ${styles.cardCream}`}>
            <p className={styles.cardText}>
              Helps maintain a welcoming and collaborative atmosphere for all residents.
            </p>
          </FadeInSection>
        </div>

        <FadeInSection>
          <p className={styles.characteristicsFooter}>
            If you're committed to community, collaboration, and creating shared experiences, we invite you to take part!
          </p>
        </FadeInSection>
      </section>
    </>
  );
}
