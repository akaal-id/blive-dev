'use client';

import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';
import { ArrowUpRight, CircleCheckBig } from 'lucide-react';

interface FormProps {
  placeholder?: string;
  onSubmit?: (e: React.FormEvent) => void;
  className?: string;
  variant?: 'default' | 'footer';
}

const Form: React.FC<FormProps> = ({
  placeholder = 'Join Newsletter',
  onSubmit,
  className = '',
  variant = 'default',
}) => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
    setStatus('success');
    setInputValue(''); // Clear input on success
  };

  // ... useEffect ...

  const isFooter = variant === 'footer';
  const containerClass = isFooter ? styles.formContainerFooter : styles.formContainer;
  const buttonContent = isFooter ? 'Subscribe' : <ArrowUpRight size={20} strokeWidth={2} />;
  const buttonClass = isFooter ? styles.submitButtonFooter : styles.submitButton;

  return (
    <form
      className={`${containerClass} ${className}`}
      onSubmit={status === 'idle' ? handleSubmit : (e) => e.preventDefault()}
    >
      {status === 'success' ? (
        <div className={styles.successMessage}>
          <CircleCheckBig size={20} strokeWidth={2} />
          <span>Email successfully sent!</span>
        </div>
      ) : (
        <>
          <input
            type="email"
            placeholder={placeholder}
            className={`${styles.input} ${styles.fadeIn} ${isFooter ? styles.inputFooter : ''}`}
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className={buttonClass}>
            {buttonContent}
          </button>
        </>
      )}
    </form>
  );
};

export default Form;
