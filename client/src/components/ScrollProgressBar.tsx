import { useEffect, useState, useRef } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Update progress when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (!isDragging) { // Only update if not currently being dragged
        // Calculate scroll percentage
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    
    // Set initial scroll position
    handleScroll();
    
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDragging]);
  
  // Drag functionality
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
      
      // Calculate position and scroll immediately
      updateScrollFromMousePosition(e);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateScrollFromMousePosition(e);
      }
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    
    const updateScrollFromMousePosition = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      // Get container dimensions
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate percentage based on mouse position
      const clickPositionY = e.clientY - rect.top;
      const containerHeight = rect.height;
      const percentage = (clickPositionY / containerHeight) * 100;
      
      // Clamp percentage between 0 and 100
      const clampedPercentage = Math.max(0, Math.min(100, percentage));
      
      // Update scroll position
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollTarget = (clampedPercentage / 100) * totalHeight;
      
      // Scroll to position
      window.scrollTo({
        top: scrollTarget,
        behavior: 'auto' // Using 'auto' for immediate scroll vs. 'smooth'
      });
      
      // Update scroll progress state
      setScrollProgress(clampedPercentage);
    };
    
    // Add event listeners
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setIsDragging(true);
        updateScrollFromTouchPosition(e);
      }
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        updateScrollFromTouchPosition(e);
      }
    };
    
    const handleTouchEnd = () => {
      setIsDragging(false);
    };
    
    const updateScrollFromTouchPosition = (e: TouchEvent) => {
      if (!containerRef.current || e.touches.length === 0) return;
      
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate percentage based on touch position
      const touchPositionY = touch.clientY - rect.top;
      const containerHeight = rect.height;
      const percentage = (touchPositionY / containerHeight) * 100;
      
      // Clamp percentage between 0 and 100
      const clampedPercentage = Math.max(0, Math.min(100, percentage));
      
      // Update scroll position
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollTarget = (clampedPercentage / 100) * totalHeight;
      
      // Scroll to position
      window.scrollTo({
        top: scrollTarget,
        behavior: 'auto' // Using 'auto' for immediate scroll
      });
      
      // Update scroll progress state
      setScrollProgress(clampedPercentage);
    };
    
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      // Remove event listeners
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);
  
  return (
    <div 
      ref={containerRef}
      className={`scroll-progress-container ${isDragging ? 'dragging' : ''}`}
    >
      <div 
        className="scroll-progress-bar" 
        style={{ height: `${scrollProgress}%` }}
      />
      <div className="scroll-progress-handle" style={{ top: `${scrollProgress}%` }} />
    </div>
  );
}