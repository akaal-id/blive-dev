import React from 'react';
import styles from './Eyebrow.module.css';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hero';
}

const Eyebrow: React.FC<EyebrowProps> = ({ children, className = '', variant = 'default' }) => {
  const variantClass = variant === 'hero' ? styles.hero : '';
  return <div className={`${styles.eyebrow} ${variantClass} ${className}`}>{children}</div>;
};

export default Eyebrow;
