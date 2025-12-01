'use client';

import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';
import { ArrowUpRight, CircleCheckBig } from 'lucide-react';

interface FormProps {
  placeholder?: string;
  onSubmit?: (e: React.FormEvent) => void;
  className?: string;
  variant?: 'default' | 'footer' | 'hero';
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
  const isHero = variant === 'hero';
  
  let containerClass = styles.formContainer;
  if (isFooter) containerClass = styles.formContainerFooter;
  if (isHero) containerClass = styles.formContainerHero;

  const buttonContent = <ArrowUpRight size={20} strokeWidth={2} />;
  
  let buttonClass = styles.submitButton;
  if (isFooter) buttonClass = styles.submitButtonFooter;
  if (isHero) buttonClass = styles.submitButtonHero;

  let inputClass = styles.input;
  if (isFooter) inputClass = styles.inputFooter;
  if (isHero) inputClass = styles.inputHero;

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
            className={`${inputClass} ${styles.fadeIn}`}
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
