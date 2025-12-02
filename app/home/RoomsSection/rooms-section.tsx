'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { roomData } from '@/src/lib/roomdata';
import styles from './rooms-section.module.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const RoomsSection = () => {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  
  const activeRoom = roomData[currentRoomIndex];
  const [size, description] = activeRoom.details.split('|');

  const handleNext = () => {
    setDirection('right');
    setCurrentRoomIndex((prev) => (prev + 1) % roomData.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentRoomIndex((prev) => (prev - 1 + roomData.length) % roomData.length);
  };

    // Ensure we have at least 2 images to show side-by-side
  const leftImage = activeRoom.images[0];
  const rightImage = activeRoom.images[1] || activeRoom.images[0];

  // Variants for image sliding
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

  // Variants for text sliding (with fade)
  const textSlideVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const transitionSettings: any = {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1], // Ease-out expo-ish
  };

  const textTransitionSettings: any = {
    duration: 0.4, // Slightly faster for text
    ease: "easeInOut",
  };

  return (
    <section className={styles.section}>
        {/* Room Card Container */}
        <div className={styles.roomCardContainer}>
            {/* Top: Images (Split) - Animated as a whole container */}
            <div className={styles.cardImagesWrapper}>
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={activeRoom.id}
                        custom={direction}
                        variants={imageSlideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={transitionSettings}
                        className={styles.imageMotionWrapper}
                    >
                        <div className={styles.leftImageArea}>
                            <Image
                                src={leftImage}
                                alt={`${activeRoom.roomName} View 1`}
                                fill
                                className={styles.roomImage}
                                priority
                                unoptimized
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div className={styles.rightImageArea}>
                            <Image
                                src={rightImage}
                                alt={`${activeRoom.roomName} View 2`}
                                fill
                                className={styles.roomImage}
                                priority
                                unoptimized
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Floating Spinner in Center - Static overlay */}
                <div className={styles.spinnerContainer}>
                    <svg viewBox="0 0 100 100" width="120" height="120" className={styles.rotatingText}>
                        <defs>
                            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                        </defs>
                        <text fill="#fff" fontSize="14" fontWeight="bold" letterSpacing="2">
                            <textPath xlinkHref="#circle">
                                ROOMS - ROOMS - ROOMS -
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>

            {/* Bottom: Details Bar */}
            <div className={styles.cardDetailsBar}>
                <div className={styles.detailsLeft}>
                    <span className={styles.eyebrowLine1}>SIMPLE FUNCTIONAL AND</span>
                    <span className={styles.eyebrowLine2}>READY FOR EVERYDAY LIVING</span>
                </div>

                <div className={styles.detailsMiddle}>
                    <div style={{ overflow: 'hidden', position: 'relative' }}>
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.h3 
                                key={activeRoom.roomName}
                                className={styles.roomName}
                                custom={direction}
                                variants={textSlideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={textTransitionSettings}
                            >
                                {activeRoom.roomName}
                            </motion.h3>
                        </AnimatePresence>
                    </div>
                </div>

                <div className={styles.detailsRight}>
                    <div className={styles.roomSpecs} style={{ overflow: 'hidden', position: 'relative' }}>
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={activeRoom.id}
                                custom={direction}
                                variants={textSlideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={textTransitionSettings}
                                style={{ display: 'flex', alignItems: 'center' }}
                            >
                                <span>{size ? size.trim() : ''}</span>
                                
                                <span>{description ? description.trim() : ''}</span>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    
                    <div className={styles.navigationControls}>
                        <button onClick={handlePrev} className={styles.navButton} aria-label="Previous Room">
                            <ArrowLeft size={20} />
                        </button>
                        <button onClick={handleNext} className={styles.navButton} aria-label="Next Room">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default RoomsSection;
