'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  className?: string;
}

export function ProgressBar({ className }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsVisible(true);
      setProgress(0);
    };

    const handleProgress = () => {
      setProgress(prev => Math.min(prev + Math.random() * 30, 90));
    };

    const handleComplete = () => {
      setProgress(100);
      setTimeout(() => setIsVisible(false), 500);
    };

    // Simuler les événements de navigation
    const originalPushState = history.pushState;
    history.pushState = function(...args) {
      handleStart();
      setTimeout(handleProgress, 100);
      setTimeout(handleComplete, 800);
      return originalPushState.apply(history, args);
    };

    return () => {
      history.pushState = originalPushState;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200", className)}>
      <div 
        className="h-full bg-primary transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}