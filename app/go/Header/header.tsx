import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/images/go/go-header.webp"
        alt="Community Header"
        fill
        className={styles.bgImage}
        priority
        sizes="100vw"
        unoptimized
      />
      <div className={styles.overlay} />
      
      <div className={styles.logoContainer}>
         <Image
          src="/icons/BLive Logo.svg"
          alt="BLive Logo"
          width={150}
          height={48}
          className={styles.logoImage}
          unoptimized
          priority
        />
      </div>

      <div className={styles.content}>
        <div className={styles.leftSection}>
          <h1 className={styles.heading}>
            A Community Creating<br />
            Meaningful Value, <span className={styles.bold}>Together</span>
          </h1>
        </div>
        <div className={styles.rightSection}>
          <p className={styles.subheadline}>
            At BLive, community is not something that happens by chance. It's something we build, nurture, and experience together.
            <br /><br />
            <span className={styles.boldText}>The Global Organizer Program (G.O)</span> is where that spirit begins.
          </p>
        </div>
      </div>
    </header>
  );
}
