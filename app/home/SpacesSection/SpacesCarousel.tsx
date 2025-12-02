'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { spacesData } from '@/src/lib/spacesdata';
import styles from './SpacesCarousel.module.css';

export default function SpacesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setDirection('right');
        setCurrentIndex((prev) => (prev + 1) % spacesData.length);
      }, 5000);
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % spacesData.length);
    // Reset timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prev) => (prev + 1) % spacesData.length);
    }, 5000);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + spacesData.length) % spacesData.length);
    // Reset timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prev) => (prev + 1) % spacesData.length);
    }, 5000);
  };

  // Calculate indices for infinite scroll
  const getSpaceAtIndex = (offset: number) => {
    const index = (currentIndex + offset + spacesData.length) % spacesData.length;
    return spacesData[index];
  };

  const leftSpace = getSpaceAtIndex(-1);
  const middleSpace = getSpaceAtIndex(0);
  const rightSpace = getSpaceAtIndex(1);

  // Same animation as room card
  const imageSlideVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '100%' : '-100%',
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '-100%' : '100%',
      opacity: 1,
    }),
  };

  const transitionSettings: any = {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1], // Ease-out expo-ish
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Left Frame - Hidden on mobile */}
      <div className={styles.carouselFrame}>
        <div className={`${styles.imageWrapper} ${styles.leftImage}`}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={`left-${leftSpace.id}-${currentIndex}`}
              custom={direction}
              variants={imageSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitionSettings}
              className={styles.imageContainer}
            >
              <Image
                src={leftSpace.image}
                alt={leftSpace.name}
                fill
                className={styles.image}
                quality={90}
              />
              <div className={styles.overlay}></div>
            </motion.div>
          </AnimatePresence>
          {/* Space name hidden for left frame */}
        </div>
      </div>

      {/* Middle Frame - Highlighted */}
      <div className={styles.carouselFrame}>
        <div className={`${styles.imageWrapper} ${styles.middleImage}`}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={`middle-${middleSpace.id}-${currentIndex}`}
              custom={direction}
              variants={imageSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitionSettings}
              className={styles.imageContainer}
            >
              <Image
                src={middleSpace.image}
                alt={middleSpace.name}
                fill
                className={styles.image}
                quality={90}
              />
              {/* No overlay for middle */}
            </motion.div>
          </AnimatePresence>
          <p className={styles.imageLabel}>{middleSpace.name}</p>
          
          {/* Navigation Controls */}
          <div className={styles.navigationControls}>
            <button onClick={handlePrev} className={styles.navButton} aria-label="Previous">
              <ArrowLeft size={20} />
            </button>
            <button onClick={handleNext} className={styles.navButton} aria-label="Next">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Frame - Hidden on mobile */}
      <div className={styles.carouselFrame}>
        <div className={`${styles.imageWrapper} ${styles.rightImage}`}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={`right-${rightSpace.id}-${currentIndex}`}
              custom={direction}
              variants={imageSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitionSettings}
              className={styles.imageContainer}
            >
              <Image
                src={rightSpace.image}
                alt={rightSpace.name}
                fill
                className={styles.image}
                quality={90}
              />
              <div className={styles.overlay}></div>
            </motion.div>
          </AnimatePresence>
          {/* Space name hidden for right frame */}
        </div>
      </div>
    </div>
  );
}

