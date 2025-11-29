'use client';

import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';
import { ArrowUpRight, CircleCheckBig } from 'lucide-react';

interface FormProps {
  placeholder?: string;
  onSubmit?: (e: React.FormEvent) => void;
  className?: string;
}

const Form: React.FC<FormProps> = ({
  placeholder = 'Join Newsletter',
  onSubmit,
  className = '',
}) => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
    setStatus('success');
    setInputValue(''); // Clear input on success
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (status === 'success') {
      timer = setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <form
      className={`${styles.formContainer} ${className}`}
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
            className={`${styles.input} ${styles.fadeIn}`}
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className={styles.submitButton}>
            <ArrowUpRight size={20} strokeWidth={2} />
          </button>
        </>
      )}
    </form>
  );
};

export default Form;
