import React from 'react';
import Image from 'next/image';
import styles from './benefit-section.module.css';
import Eyebrow from '@/src/components/Eyebrow/Eyebrow';
import FadeInSection from '@/src/components/FadeInSection/FadeInSection';

export default function BenefitSection() {
  return (
    <section className={styles.section}>
      <FadeInSection className={styles.content}>
        <Eyebrow className={styles.eyebrow}>
          WHAT COULD<br />YOU GET
        </Eyebrow>

        <h2 className={styles.heading}>G.O Benefits</h2>
        <div className={styles.divider} />

        <div className={styles.intro}>
          <p className={styles.bold}>
            G.Os enjoy numerous benefits that enhance their experience within our community.
          </p>
          <p>
            Joining G.O unlocks a range of benefits that can greatly enhance your experience. 
            Enjoy exclusive room rates, complimentary laundry, coffee, and sign-up fee. 
            Embrace this journey and see the opportunities that await you!
          </p>
        </div>

        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}>
            <span className={styles.benefitTitle}>Exclusive Room Rates</span>
            <span className={styles.benefitDesc}>
              Exclusive room rate for G.O.s with special discount (and more discounts if you stay longer than 6 months)
            </span>
          </div>

          <div className={styles.benefitItem}>
            <span className={styles.benefitTitle}>Free Laundry</span>
            <span className={styles.benefitDesc}>Free laundry 5 pieces a day</span>
          </div>

          <div className={styles.benefitItem}>
            <span className={styles.benefitTitle}>Free Coffee</span>
            <span className={styles.benefitDesc}>1 Free coffee every day at our rooftop cafe during the whole stay</span>
          </div>

          <div className={styles.benefitItem}>
            <span className={styles.benefitTitle}>Complimentary Fee</span>
            <span className={styles.benefitDesc}>Complimentary sign-up fee for community event/tour</span>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/go/GO-benefit.jpg"
            alt="G.O Benefits Environment"
            fill
            className={styles.image}
          />
        </div>
      </FadeInSection>
    </section>
  );
}
