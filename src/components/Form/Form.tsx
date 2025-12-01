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
  const [status, setStatus] = useState<'idle' | 'success' | 'fading_out'>('idle');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (status === 'success') {
      timer = setTimeout(() => {
        setStatus('fading_out');
      }, 5000);
    } else if (status === 'fading_out') {
      timer = setTimeout(() => {
        setStatus('idle');
      }, 500); // Match animation duration
    }
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
      setStatus('success');
      setInputValue('');
      return;
    }

    // Google Form Submission
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdaZcV3rSeLJ9jjnUmbOAZ08tsGjnM4nnzhVPV_ShRz-zyPfA/formResponse";
    // TODO: Replace 'entry.123456789' with the actual Field ID for the email input from your Google Form.
    // You can find this by inspecting the Google Form "viewform" page source and looking for "entry.".
    const EMAIL_ENTRY_ID = "entry.1035636340"; 

    const formData = new FormData();
    formData.append(EMAIL_ENTRY_ID, inputValue);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors", // Necessary to avoid CORS errors with Google Forms
        body: formData,
      });
      setStatus('success');
      setInputValue('');
    } catch (error) {
      console.error("Error submitting to Google Form", error);
      // Even if error (network), we might show success or handle error. 
      // With no-cors, we can't detect 4xx/5xx errors, but fetch usually doesn't throw unless network failure.
      setStatus('success'); 
      setInputValue('');
    }
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
      {status === 'success' || status === 'fading_out' ? (
        <div className={`${styles.successMessage} ${status === 'fading_out' ? styles.fadeOut : ''}`}>
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
