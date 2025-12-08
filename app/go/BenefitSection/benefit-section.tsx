import React from 'react';
import Image from 'next/image';
import styles from './benefit-section.module.css';
import FadeInSection from '@/src/components/FadeInSection/FadeInSection';

export default function BenefitSection() {
  return (
    <section className={styles.section}>
      {/* Left Top - Room Benefits */}
      <FadeInSection className={styles.leftTop}>
        <div className={styles.leftTopContent}>
          <h2 className={styles.leftTitle}>G.O Room Benefits</h2>
          <p className={styles.leftDescription}>
            As a BLive G.O, you receive special room rates designed to make your stay more flexible and rewarding
          </p>

          <div className={styles.discountItem}>
            <h3 className={styles.discountTitle}>35% Discount</h3>
            <p className={styles.discountDesc}>
              35% discount starting from your second month (minimum stay: 3 months)
            </p>
          </div>

          <div className={styles.discountItem}>
            <h3 className={styles.discountTitle}>40% Discount</h3>
            <p className={styles.discountDesc}>
              40% discount for stays longer than 6 months
            </p>
          </div>

          <p className={styles.leftFooter}>
            These rates are exclusive to active G.Os who contribute to the community throughout their stay.
          </p>
        </div>
      </FadeInSection>

      {/* Right Top - What You'll Enjoy */}
      <FadeInSection className={styles.rightTop}>
        <h2 className={styles.enjoyTitle}>
          What You'll{' '}
          <span className={styles.highlightWrapper}>
            <span className={styles.highlight}>Enjoy</span>
            <Image
              src="/icons/underline2.png"
              alt=""
              width={50}
              height={10}
              className={styles.underline}
              unoptimized
            />
          </span>{' '}
          as a G.O
        </h2>
      </FadeInSection>

      {/* Left Bottom - Image */}
      <FadeInSection className={styles.leftBottom}>
        <Image
          src="/images/go/go-benefit.webp"
          alt="BLive Community Building"
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />
      </FadeInSection>

      {/* Right Bottom - Additional Perks */}
      <FadeInSection className={styles.rightBottom}>
        <div className={styles.perksContent}>
          <p className={styles.perksEyebrow}>Additional G.O Perks</p>
          <p className={styles.perksDescription}>
            G.Os also receive a range of perks that support daily comfort and enhance the coliving experience
          </p>

          <div className={styles.perksGrid}>
            <div className={styles.discountItem}>
              <p className={styles.discountDesc}>Free daily laundry (5 pieces/day)</p>
            </div>
            <div className={styles.discountItem}>
              <p className={styles.discountDesc}>
                One free coffee per day at our rooftop café (non-alcohol beverages)
              </p>
            </div>
            <div className={styles.discountItem}>
              <p className={styles.discountDesc}>
                Complimentary access to free community events with priority booking
              </p>
            </div>
            <div className={styles.discountItem}>
              <p className={styles.discountDesc}>
                Free entry to premium paid events, including day trips and JOIIN island experiences
              </p>
            </div>
          </div>

          <p className={styles.perksFooter}>
            These benefits are designed to support G.Os in staying engaged, energized, and connected.
          </p>
        </div>
      </FadeInSection>
    </section>
  );
}
