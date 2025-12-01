'use client';

import React, { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ 
  children, 
  className = '',
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we don't need to observe anymore for a simple fade in
          // If you want it to fade out when scrolling away, remove the unobserve
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      });
    }, { threshold });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionProperty: 'opacity, transform' }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;





