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
          width={120}
          height={40}
          className="object-contain"
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.heading}>
          A Community Creating<br />
          Meaningful Value, <span className={styles.bold}>Together</span>
        </h1>
      </div>
    </header>
  );
}
