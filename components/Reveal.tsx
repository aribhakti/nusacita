import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'pop';
  delay?: number;
  className?: string;
  fullWidth?: boolean;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  className = "",
  fullWidth = false
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getDirectionClass = () => {
    switch(direction) {
      case 'left': return 'reveal-left';
      case 'right': return 'reveal-right';
      case 'pop': return 'reveal-pop';
      default: return 'reveal';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`${getDirectionClass()} ${isVisible ? 'active' : ''} ${className} ${fullWidth ? 'w-full' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;