import React, { useRef, useEffect } from 'react';
import styles from './RoomCard.module.css';
import { Room } from '@/src/lib/roomdata';
import { gsap } from 'gsap';

interface RoomCardProps {
  room: Room;
  isActive: boolean;
  onClick?: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, isActive, onClick }) => {
  const [size, description] = room.details.split('|');
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
        gsap.to(detailsRef.current, {
            height: 'auto',
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
        });
    } else {
        gsap.to(detailsRef.current, {
            height: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    }
  }, [isActive]);

  return (
    <div 
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      <div className={styles.header}>
        <h3 className={styles.roomName}>{room.roomName}</h3>
        <div ref={detailsRef} className={styles.detailsContainer}>
           <div className={styles.roomDetails}>
             <span>{size ? size.trim() : ''}</span>
             <span className={styles.separator}>|</span>
             <span>{description ? description.trim() : ''}</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

