import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  href?: string;
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  type = 'button',
  className = '',
  href,
  showArrow = true,
}) => {
  const variantClass =
    variant === 'primary' ? styles.variantPrimary : styles.variantSecondary;
  const iconClass = !showArrow ? styles.noIcon : '';

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span className={styles.iconContainer}>
          <ArrowUpRight size={20} strokeWidth={2} />
        </span>
      )}
    </>
  );

  const buttonClass = `${styles.baseButton} ${variantClass} ${iconClass} ${className}`;

  if (href) {
    const isInternal = href.startsWith('/');
    if (isInternal) {
      return (
        <Link href={href} className={buttonClass}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={buttonClass}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
