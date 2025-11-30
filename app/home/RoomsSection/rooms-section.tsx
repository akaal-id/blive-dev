'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import RoomCard from '@/src/components/RoomCard/RoomCard';
import { roomData } from '@/src/lib/roomdata';
import styles from './rooms-section.module.css';
import Eyebrow from '@/src/components/Eyebrow/Eyebrow';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const RoomsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const listWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!listRef.current || !listWrapperRef.current || listRef.current.children.length === 0) return;

    const list = listRef.current;
    const wrapper = listWrapperRef.current;
    
    // Get the height of a single item
    const itemHeight = (list.children[0] as HTMLElement).offsetHeight;
    const totalHeight = list.offsetHeight;
    
    // Set wrapper height to match exactly one item
    gsap.set(wrapper, { height: itemHeight });

    // Create a timeline for the list movement
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=2000",
            pin: true,
            scrub: 0.5,
            onUpdate: (self) => {
                // Update active index for images
                const index = Math.min(
                    Math.round(self.progress * (roomData.length - 1)),
                    roomData.length - 1
                );
                setCurrentIndex(index);
            }
        }
    });

    // Move the list up by (totalHeight - itemHeight)
    // This ensures the last item ends up in view at the end of scroll
    tl.to(list, {
        y: -(totalHeight - itemHeight),
        ease: "none" // Linear movement mapped to scroll
    });

  }, { scope: containerRef, dependencies: [roomData] });

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.listColumn}>
          <div className={styles.headerContent}>
            <Eyebrow className={styles.eyebrow}>SIMPLE, FUNCTIONAL, AND READY</Eyebrow>
            <div className={styles.mainTitle}>
              <span>For Everyday</span>
              <div className={styles.titleRow}>
                <span>LIVING</span>
                <Image 
                  src="/icons/sunset.png" 
                  alt="Sunset Icon" 
                  width={64} 
                  height={64} 
                  className={styles.sunsetIcon}
                />
              </div>
            </div>
          </div>

          <div className={styles.listWrapper} ref={listWrapperRef}>
            <div className={styles.list} ref={listRef}>
                {roomData.map((room, index) => (
                <div key={room.id}>
                    <RoomCard 
                        room={room} 
                        isActive={index === currentIndex}
                        onClick={() => {
                            // Optional: You might want to scroll to the correct position if clicked
                            // But since we are scrubbing, it's harder to jump scroll position from here
                        }}
                    />
                </div>
                ))}
            </div>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
             <div className={styles.spinnerContainer}>
                 <svg viewBox="0 0 100 100" width="150" height="150" className={styles.rotatingText}>
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
            <div className={styles.imageContainer}>
                {roomData.map((room, index) => (
                    <div 
                        key={room.id} 
                        className={`${styles.imageSlide} ${index === currentIndex ? styles.activeImage : ''}`}
                    >
                        <Image
                        src={room.image}
                        alt={room.roomName}
                        fill
                        className={styles.roomImage}
                        priority={index === 0} // Priority for the first one
                        />
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;