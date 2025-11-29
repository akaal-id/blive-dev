import React from 'react';
import styles from './Eyebrow.module.css';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

const Eyebrow: React.FC<EyebrowProps> = ({ children, className = '' }) => {
  return <div className={`${styles.eyebrow} ${className}`}>{children}</div>;
};

export default Eyebrow;

