'use client';

import React, { useState, useRef, useMemo } from 'react';
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
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const listWrapperRef = useRef<HTMLDivElement>(null);

  // Flatten all images to create a sequence of slides
  const slides = useMemo(() => {
    return roomData.flatMap((room, roomIndex) => 
      room.images.map((image, imageIndex) => ({
        ...room,
        image,
        roomIndex,
        imageIndex,
        totalImagesInRoom: room.images.length
      }))
    );
  }, []);

  const activeRoomIndex = slides[currentSlideIndex]?.roomIndex ?? 0;

  useGSAP(() => {
    if (!listRef.current || !listWrapperRef.current || listRef.current.children.length === 0) return;

    const list = listRef.current;
    const wrapper = listWrapperRef.current;
    
    // Get the height of a single item
    const itemHeight = (list.children[0] as HTMLElement).offsetHeight;
    
    // Set wrapper height to match exactly one item
    gsap.set(wrapper, { height: itemHeight });

    // Create a timeline for the scrolling
    gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${slides.length * 1000}`, // Adjust scroll length based on number of slides
            pin: true,
            scrub: 0.5,
            onUpdate: (self) => {
                // Update active index for images
                const index = Math.min(
                    Math.round(self.progress * (slides.length - 1)),
                    slides.length - 1
                );
                setCurrentSlideIndex(index);
            }
        }
    });

  }, { scope: containerRef, dependencies: [slides] });

  // Effect to animate the list position when the active room changes
  useGSAP(() => {
    if (!listRef.current) return;
    const list = listRef.current;
    const itemHeight = (list.children[0] as HTMLElement)?.offsetHeight || 0;
    
    gsap.to(list, {
      y: -(activeRoomIndex * itemHeight),
      duration: 0.5,
      ease: "power2.out"
    });
  }, { dependencies: [activeRoomIndex] });

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.listColumn}>
          <div className={styles.headerContent}>
            <Eyebrow className={styles.eyebrow}>SIMPLE, FUNCTIONAL, AND READY</Eyebrow>
            <div className={styles.mainTitle}>
              <span>For Everyday</span>
              <div className={styles.titleRow}>
                <span><strong>LIVING</strong></span>
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
                        isActive={index === activeRoomIndex}
                        onClick={() => {
                           // Optional: Scroll to start of this room?
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
                {slides.map((slide, index) => (
                    <div 
                        key={`${slide.id}-${index}`} 
                        className={`${styles.imageSlide} ${index <= currentSlideIndex ? styles.visibleImage : ''}`}
                        style={{ zIndex: index }}
                    >
                        <Image
                        src={slide.image}
                        alt={slide.roomName}
                        fill
                        className={styles.roomImage}
                        priority={index === 0}
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
