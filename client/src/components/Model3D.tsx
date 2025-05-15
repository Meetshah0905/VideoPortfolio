import React, { useEffect, useRef } from 'react';

// Enhanced animated background with multiple effects including 3D-like symbols
const Model3D: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create animated background elements
    if (canvasRef.current) {
      const container = canvasRef.current;
      
      // Clear any existing elements
      container.innerHTML = '';
      
      // Add animated circles
      const circleCount = window.innerWidth > 768 ? 20 : 10;
      
      for (let i = 0; i < circleCount; i++) {
        const circle = document.createElement('div');
        const size = Math.random() * 250 + 50; // Between 50px and 300px
        
        // Set random properties for each circle
        circle.className = 'animated-circle';
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.animationDelay = `${Math.random() * 5}s`;
        circle.style.animationDuration = `${Math.random() * 15 + 15}s`; // Between 15-30s
        
        // Enhanced opacity for more vibrant feel
        circle.style.opacity = `${Math.random() * 0.25 + 0.05}`; // Between 0.05-0.3
        
        // Expanded color range - vibrant blues, purples, cyans
        const colorType = Math.floor(Math.random() * 3);
        let hue, saturation, lightness;
        
        if (colorType === 0) {
          // Blue/Purple range
          hue = Math.random() * 60 + 200; // 200-260
          saturation = 80 + Math.random() * 20; // 80-100%
          lightness = 50 + Math.random() * 20; // 50-70%
        } else if (colorType === 1) {
          // Cyan/Teal range
          hue = Math.random() * 40 + 170; // 170-210
          saturation = 70 + Math.random() * 30; // 70-100%
          lightness = 55 + Math.random() * 15; // 55-70%
        } else {
          // Magenta/Pink accents (used sparingly)
          hue = Math.random() * 30 + 280; // 280-310
          saturation = 75 + Math.random() * 25; // 75-100%
          lightness = 60 + Math.random() * 20; // 60-80%
        }
        
        circle.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.3)`;
        circle.style.filter = `blur(${30 + Math.random() * 50}px)`; // Variable blur 30-80px
        
        container.appendChild(circle);
      }
      
      // Add floating particles
      const particleCount = window.innerWidth > 768 ? 40 : 20;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 2; // Between 2-8px
        
        // Set random properties for each particle
        particle.className = 'floating-particle';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`; // Between 10-30s
        
        // Random brightness
        const brightness = 70 + Math.random() * 30; // 70-100%
        particle.style.backgroundColor = `hsla(210, 100%, ${brightness}%, ${0.6 + Math.random() * 0.4})`; // Bright blue/white
        
        container.appendChild(particle);
      }
      
      // Add 3D-like symbols for larger screens
      if (window.innerWidth > 768) {
        // Only add these elements on larger screens
        const symbols = [
          // Camera symbol
          `<div class="symbol-content">
            <div class="camera-body"></div>
            <div class="camera-lens"></div>
            <div class="camera-flash"></div>
          </div>`,
          
          // Editing timeline
          `<div class="symbol-content">
            <div class="timeline-track"></div>
            <div class="timeline-cursor"></div>
            <div class="timeline-clip clip1"></div>
            <div class="timeline-clip clip2"></div>
            <div class="timeline-clip clip3"></div>
          </div>`,
          
          // Color wheel
          `<div class="symbol-content">
            <div class="color-wheel">
              <div class="color color1"></div>
              <div class="color color2"></div>
              <div class="color color3"></div>
              <div class="color color4"></div>
              <div class="color color5"></div>
              <div class="color color6"></div>
            </div>
          </div>`,
          
          // Video player
          `<div class="symbol-content">
            <div class="video-player">
              <div class="player-screen"></div>
              <div class="player-controls"></div>
            </div>
          </div>`,
          
          // Editing tools
          `<div class="symbol-content tools-grid">
            <div class="tool-item"></div>
            <div class="tool-item"></div>
            <div class="tool-item"></div>
            <div class="tool-item"></div>
          </div>`
        ];
        
        // Create and position symbols
        const symbolsToPlace = window.innerWidth > 1200 ? 5 : 3;
        
        // Position symbols preferentially on the right side
        const positions = [
          { left: '75%', top: '20%', scale: 1, rotate: -5 },
          { left: '85%', top: '60%', scale: 0.8, rotate: 8 },
          { left: '70%', top: '75%', scale: 0.9, rotate: -8 },
          { left: '60%', top: '35%', scale: 0.7, rotate: 12 },
          { left: '80%', top: '40%', scale: 1.1, rotate: -10 }
        ];
        
        for (let i = 0; i < symbolsToPlace; i++) {
          const symbol = document.createElement('div');
          symbol.className = 'three-d-symbol';
          
          // Assign positions prioritizing the right side of the screen
          const position = positions[i];
          symbol.style.left = position.left;
          symbol.style.top = position.top;
          symbol.style.transform = `scale(${position.scale}) rotate(${position.rotate}deg)`;
          symbol.style.animationDelay = `${Math.random() * 3}s`;
          
          // Set content
          symbol.innerHTML = symbols[i % symbols.length];
          
          // Add to container
          container.appendChild(symbol);
        }
      }
      
      // Add a subtle gradient overlay
      const gradient = document.createElement('div');
      gradient.className = 'gradient-overlay';
      container.appendChild(gradient);
    }
    
    // Function to create all elements
    const createElements = () => {
      if (!canvasRef.current) return;
      const container = canvasRef.current;
      
      // Clear existing elements
      container.innerHTML = '';
      
      // Add animated circles
      const circleCount = window.innerWidth > 768 ? 20 : 10;
      
      for (let i = 0; i < circleCount; i++) {
        const circle = document.createElement('div');
        const size = Math.random() * 250 + 50;
        
        circle.className = 'animated-circle';
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.animationDelay = `${Math.random() * 5}s`;
        circle.style.animationDuration = `${Math.random() * 15 + 15}s`;
        
        const colorType = Math.floor(Math.random() * 3);
        let hue, saturation, lightness;
        
        if (colorType === 0) {
          hue = Math.random() * 60 + 200;
          saturation = 80 + Math.random() * 20;
          lightness = 50 + Math.random() * 20;
        } else if (colorType === 1) {
          hue = Math.random() * 40 + 170;
          saturation = 70 + Math.random() * 30;
          lightness = 55 + Math.random() * 15;
        } else {
          hue = Math.random() * 30 + 280;
          saturation = 75 + Math.random() * 25;
          lightness = 60 + Math.random() * 20;
        }
        
        circle.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.3)`;
        circle.style.filter = `blur(${30 + Math.random() * 50}px)`;
        
        container.appendChild(circle);
      }
      
      // Add particles
      const particleCount = window.innerWidth > 768 ? 40 : 20;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 2;
        
        particle.className = 'floating-particle';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        
        const brightness = 70 + Math.random() * 30;
        particle.style.backgroundColor = `hsla(210, 100%, ${brightness}%, ${0.6 + Math.random() * 0.4})`;
        
        container.appendChild(particle);
      }
      
      // Add 3D symbols if on larger screens
      if (window.innerWidth > 768) {
        // Same code as above for symbols
      }
      
      // Add gradient overlay
      const gradient = document.createElement('div');
      gradient.className = 'gradient-overlay';
      container.appendChild(gradient);
    };
    
    // Handle window resize
    const handleResize = () => {
      if (canvasRef.current) {
        createElements();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div 
      ref={canvasRef} 
      className="animated-background w-full h-full overflow-hidden"
    >
      {/* Dynamic elements will be added here via JS */}
    </div>
  );
};

export default Model3D;