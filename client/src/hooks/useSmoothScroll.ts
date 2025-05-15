import { useEffect } from 'react';

interface SmoothScrollOptions {
  // How fast the scrolling animation should be
  speed?: number; 
  // Value between 0-1, higher values make the animation more fluid
  smoothness?: number;
  // Whether to enable the smooth scroll
  enabled?: boolean;
}

/**
 * Custom hook for implementing smooth scrolling with better control than CSS
 */
export function useSmoothScroll({
  speed = 0.08,
  smoothness = 0.8,
  enabled = true
}: SmoothScrollOptions = {}) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;
    
    // Use let for mutable variables that will change during scrolling
    let target = 0;
    let current = 0;
    let animationFrame: number | null = null;
    
    // Function to animate scroll
    const smoothScroll = () => {
      // Get current scroll position
      current = window.scrollY;
      
      // Calculate distance to target
      const diff = target - current;
      
      // Apply easing
      const delta = Math.abs(diff) < 0.1 ? 0 : diff * speed;
      
      // Apply scroll
      if (delta) {
        window.scrollTo(0, current + delta);
        animationFrame = requestAnimationFrame(smoothScroll);
      } else {
        // If we're close enough, set to exact target
        if (Math.abs(target - current) < 1) {
          window.scrollTo(0, target);
        }
        animationFrame = null;
      }
    };
    
    // Handle wheel event to capture scroll direction
    const handleWheel = (e: WheelEvent) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
      
      // Get the delta value to know how far to scroll
      const delta = e.deltaY;
      
      // Apply smoothness for a more gradual acceleration/deceleration
      target += delta * smoothness;
      
      // Clamp target to valid scroll range
      target = Math.max(0, Math.min(target, document.body.scrollHeight - window.innerHeight));
      
      // Prevent default behavior to take control of scrolling
      e.preventDefault();
      
      // Start animation if not already running
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(smoothScroll);
      }
    };
    
    // Handle clicking on anchor links for smooth scrolling to sections
    const handleAnchorClick = (e: MouseEvent) => {
      const clickTarget = e.target as HTMLElement;
      const anchor = clickTarget.closest('a[href^="#"]');
      
      if (anchor) {
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            
            // Get the target scroll position
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            
            // Set target and start animation
            target = targetPosition;
            
            if (!animationFrame) {
              animationFrame = requestAnimationFrame(smoothScroll);
            }
          }
        }
      }
    };
    
    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('click', handleAnchorClick);
    
    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('click', handleAnchorClick);
      
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [speed, smoothness, enabled]);
}

export default useSmoothScroll;