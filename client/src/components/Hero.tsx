import { useState, useEffect, useRef } from "react";
import { ChevronDown, Play } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import TypewriterEffect from "./TypewriterEffect";
import Model3D from "./Model3D";

const Hero = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef);
  const controls = useAnimation();
  
  // Animate elements when hero section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Update opacity of scroll indicator based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 300);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Restart animations when window is resized
      controls.start("visible");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [controls]);

  // Floating icons animation variants
  const floatingIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8 }
    }
  };

  // Determine which floating icons to show based on screen size
  const showFloatingIcons = {
    video: windowWidth >= 768, // Show on md screens and up
    clock: windowWidth >= 768,
    cloud: windowWidth >= 768,
    settings: windowWidth >= 1024, // Show on lg screens and up
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-muted/30 dark:from-dark-800 dark:to-dark-950 overflow-hidden"
    >
      {/* Enhanced 3D Background Element */}
      <div className="absolute inset-0 z-0">
        <Model3D />
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 dark:from-dark-900/80 to-transparent z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-1/4 hero-glow opacity-70 z-0"></div>
      <div className="absolute bottom-40 right-1/4 hero-glow opacity-50 z-0"></div>
      
      {/* Floating decorative elements - conditionally rendered based on screen size */}
      {showFloatingIcons.video && (
        <motion.div
          className="absolute top-1/4 right-[15%] z-30"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 0.95, 
              y: 0,
              transition: { delay: 0.6, duration: 0.8 }
            }
          }}
        >
          <motion.div 
            className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500/30 to-primary-600/30 rounded-lg backdrop-blur-md border border-primary-500/40 flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-lg"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
          </motion.div>
        </motion.div>
      )}
      
      {showFloatingIcons.clock && (
        <motion.div
          className="absolute bottom-[35%] left-[25%] z-30"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 0.95, 
              y: 0,
              transition: { delay: 1, duration: 0.8 }
            }
          }}
        >
          <motion.div 
            className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-full backdrop-blur-md border border-purple-500/40 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-lg"
            animate={{ 
              y: [0, 15, 0],
              x: [0, 10, 0],
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
              <path d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5 6 6 0 1 1 0-12 6 6 0 0 1 6 6v.5a1.5 1.5 0 0 1-3 0V9a3 3 0 1 0-6 0"></path>
              <path d="M12 11v5"></path>
              <path d="M9 9h6"></path>
            </svg>
          </motion.div>
        </motion.div>
      )}
      
      {showFloatingIcons.cloud && (
        <motion.div
          className="absolute top-1/4 left-[25%] z-30"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 0.95, 
              y: 0,
              transition: { delay: 1.2, duration: 0.8 }
            }
          }}
        >
          <motion.div 
            className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500/30 to-cyan-600/30 rounded-md backdrop-blur-md border border-cyan-500/40 flex items-center justify-center text-cyan-600 dark:text-cyan-400 rotate-12 shadow-lg"
            animate={{ 
              rotate: [12, -5, 12],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(14, 165, 233, 0.5)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
              <path d="M12 12v9"></path>
              <path d="m8 17 4 4 4-4"></path>
            </svg>
          </motion.div>
        </motion.div>
      )}
      
      {showFloatingIcons.settings && (
        <motion.div
          className="absolute bottom-1/4 right-[25%] z-30"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 0.95, 
              y: 0,
              transition: { delay: 1.5, duration: 0.8 }
            }
          }}
        >
          <motion.div 
            className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500/30 to-pink-600/30 rounded-md backdrop-blur-md border border-pink-500/40 flex items-center justify-center text-pink-600 dark:text-pink-400 rotate-45 shadow-lg"
            animate={{ 
              rotate: [45, 55, 35, 45],
              scale: [1, 1.05, 0.95, 1]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45 w-5 h-5 sm:w-6 sm:h-6">
              <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
              <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
              <path d="M12 2v2"></path>
              <path d="M12 22v-2"></path>
              <path d="m17 20.66-1-1.73"></path>
              <path d="M11 10.27 7 3.34"></path>
              <path d="m20.66 17-1.73-1"></path>
              <path d="m3.34 7 1.73 1"></path>
              <path d="M14 12h8"></path>
              <path d="M2 12h2"></path>
              <path d="m20.66 7-1.73 1"></path>
              <path d="m3.34 17 1.73-1"></path>
              <path d="m17 3.34-1 1.73"></path>
              <path d="m11 13.73-4 6.93"></path>
            </svg>
          </motion.div>
        </motion.div>
      )}
      
      {/* Main content with enhanced animations */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto md:mx-0">
          <motion.div 
            className="flex flex-col gap-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-lg md:text-xl font-medium text-primary-600 dark:text-primary-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hello, I'm
            </motion.h2>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
               <span className="block">Meet Shah</span>
              <span className="text-primary-600 dark:text-primary-400 mt-2 block">
                <TypewriterEffect
                  text="Digital Editor & Video Specialist"
                  delay={80}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 dark:text-foreground/70 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              I help creators, brands, and businesses stand out with scroll stopping video content that doesn't just look good it performs. From cinematic edits to dynamic reels, I bring energy, precision, and strategy to every frame.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a
                href="#projects"
                className="btn btn-primary py-2.5 sm:py-3 px-6 sm:px-8 rounded-md text-sm sm:text-base font-medium shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={16} className="sm:w-5 sm:h-5" />
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-outline py-2.5 sm:py-3 px-6 sm:px-8 rounded-md text-sm sm:text-base font-medium hover:shadow-lg transition-all border-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator with animation */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-500"
        style={{ opacity: scrollOpacity }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: scrollOpacity, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.a 
          href="#about" 
          className="flex flex-col items-center text-foreground/70 dark:text-foreground/50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;