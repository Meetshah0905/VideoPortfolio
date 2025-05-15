import { useState, useEffect, useCallback } from "react";

interface UseTypewriterOptions {
  text: string;
  delay?: number;
  onComplete?: () => void;
  startDelay?: number;
}

export function useTypewriter({
  text,
  delay = 100,
  onComplete,
  startDelay = 0
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  
  // Start typing after initial delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true);
    }, startDelay);
    
    return () => clearTimeout(timer);
  }, [startDelay]);
  
  // Calculate typing delay based on character
  const getDelay = useCallback((char: string) => {
    // Longer pauses for punctuation
    if (['.', ',', '!', '?', ';', ':'].includes(char)) {
      return delay * 3;
    }
    // Short pause for spaces
    if (char === ' ') {
      return delay * 1.5;
    }
    return delay;
  }, [delay]);
  
  // Handle the typing effect
  useEffect(() => {
    if (!isStarted || currentIndex >= text.length) return;
    
    const currentChar = text[currentIndex];
    const typingDelay = getDelay(currentChar);
    
    const timer = setTimeout(() => {
      setDisplayText(prev => prev + currentChar);
      setCurrentIndex(prev => prev + 1);
      
      // Check if typing is complete
      if (currentIndex === text.length - 1) {
        setIsComplete(true);
        if (onComplete) onComplete();
      }
    }, typingDelay);
    
    return () => clearTimeout(timer);
  }, [currentIndex, getDelay, isStarted, onComplete, text]);
  
  // Reset function for external control
  const reset = useCallback(() => {
    setDisplayText("");
    setCurrentIndex(0);
    setIsComplete(false);
    setIsStarted(false);
    
    setTimeout(() => {
      setIsStarted(true);
    }, startDelay);
  }, [startDelay]);
  
  return { displayText, isComplete, reset };
}
