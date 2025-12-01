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
  const slideVariants = {
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

  // Variants for text fading
  const fadeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <section className={styles.section}>
        {/* Room Card Container */}
        <div className={styles.roomCardContainer}>
            {/* Top: Images (Split) */}
            <div className={styles.cardImagesWrapper}>
                <div className={styles.leftImageArea}>
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={`left-${activeRoom.id}`}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Ease-out expo-ish
                            className={styles.imageMotionWrapper}
                        >
                            <Image
                                src={leftImage}
                                alt={`${activeRoom.roomName} View 1`}
                                fill
                                className={styles.roomImage}
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className={styles.rightImageArea}>
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={`right-${activeRoom.id}`}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className={styles.imageMotionWrapper}
                        >
                            <Image
                                src={rightImage}
                                alt={`${activeRoom.roomName} View 2`}
                                fill
                                className={styles.roomImage}
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Floating Spinner in Center */}
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
                    <AnimatePresence mode="wait">
                        <motion.h3 
                            key={activeRoom.roomName}
                            className={styles.roomName}
                            variants={fadeVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {activeRoom.roomName}
                        </motion.h3>
                    </AnimatePresence>
                </div>

                <div className={styles.detailsRight}>
                    <div className={styles.roomSpecs}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeRoom.id}
                                variants={fadeVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{ display: 'flex', alignItems: 'center' }}
                            >
                                <span>{size ? size.trim() : ''}</span>
                                <span className={styles.separator}>|</span>
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
