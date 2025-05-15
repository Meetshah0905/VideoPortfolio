import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "@fontsource/inter";
import { ThemeProvider } from "./components/ThemeProvider";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useSmoothScroll from "./hooks/useSmoothScroll";
import NotFound from "./pages/not-found";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [smoothScrollEnabled, setSmoothScrollEnabled] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);
  
  // Disable custom JS smooth scrolling and rely on CSS only
  // This will be much more native and perform better
  useSmoothScroll({
    enabled: false // Disable JS scrolling
  });
  
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false,
      mirror: true,
      offset: 100
    });
    
    // Simulate loading time (can be removed in production)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Refresh AOS when loading is complete
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    }
  }, [isLoading]);
  
  // Configure ScrollTrigger when loading is complete
  useEffect(() => {
    if (!isLoading && mainRef.current) {
      const sections = mainRef.current.querySelectorAll('section');
      
      // Clear any existing scroll triggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Setup section animations
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            }
          }
        );
      });
    }
  }, [isLoading]);
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background dark:bg-dark-900 z-50">
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 w-full h-full border-4 border-primary-200 dark:border-dark-700 rounded-full"></div>
            <div className="absolute inset-0 w-full h-full border-4 border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin"></div>
          </div>
          <p className="mt-6 text-foreground dark:text-foreground/90 text-lg font-medium">
            Loading Portfolio...
          </p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="bg-background dark:bg-dark-900 text-foreground dark:text-foreground/90 min-h-screen">
        <Navbar />
        
        <main ref={mainRef} className="custom-scrollbar">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        <Footer />
        
        {/* Back to top button */}
        <BackToTop threshold={400} />
        
        {/* Scroll progress indicator */}
        <ScrollProgressBar />
      </div>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;