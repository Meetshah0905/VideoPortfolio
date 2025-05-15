import React from "react";
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-muted/30 dark:bg-dark-900 border-t border-border dark:border-dark-700">
      {/* Back to top button */}
      {/* <div className="container mx-auto px-4 relative">
        <motion.button
          onClick={scrollToTop}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 dark:bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600 text-white p-3 rounded-full shadow-lg"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div> */}
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Logo and about */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-bold flex items-center">
                <span>Meet</span><span className="text-primary-600 dark:text-primary-400">Shah</span>
              </Link>
            </div>
            <p className="text-foreground/70 dark:text-foreground/60 max-w-md">
              I'm a professional video editor and motion graphics designer passionate about crafting compelling visual stories.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-3 pt-2">
              {/* <FooterSocialLink href="#" icon={<Github className="w-4 h-4" />} label="GitHub" /> */}
              <FooterSocialLink href="https://www.linkedin.com/in/meet-shah-msofficial09/" icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
              <FooterSocialLink href="https://x.com/Meetshah_09" icon={<Twitter className="w-4 h-4" />} label="Twitter" />
              <FooterSocialLink href="https://www.instagram.com/meetsofficial/" icon={<Instagram className="w-4 h-4" />} label="Instagram" />
              <FooterSocialLink href="mailto:editsbymks@gmail.com" icon={<Mail className="w-4 h-4" />} label="Email" />
            </div>
          </div>
          
          {/* Quick links */}
          <div className="md:ml-24">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/#about">About Me</FooterLink>
              <FooterLink href="/#skills">My Skills</FooterLink>
              <FooterLink href="/#experience">Experience</FooterLink>
              <FooterLink href="/#projects">Projects</FooterLink>
              <FooterLink href="/#contact">Contact</FooterLink>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/services/video-editing">Video Editing</FooterLink>
              <FooterLink href="/services/motion-graphics">Motion Graphics</FooterLink>
              <FooterLink href="/services/color-grading">Color Grading</FooterLink>
              <FooterLink href="/services/sound-design">Sound Design</FooterLink>
              <FooterLink href="/services/video-marketing">Video Marketing</FooterLink>
            </ul> */}
          </div>
        </div>
        
        {/* Copyright and credits */}
        <div className="border-t border-border dark:border-dark-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60 dark:text-foreground/50">
          <p>© {new Date().getFullYear()} Meet Shah. All rights reserved.</p>
          {/* <p className="mt-2 md:mt-0">
            Designed & Developed with <span className="text-red-500">❤</span>
          </p> */}
        </div>
      </div>
    </footer>
  );
}

// Helper component for footer links
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="text-foreground/70 dark:text-foreground/60 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
    >
      {children}
    </a>
  </li>
);

// Helper component for social links
const FooterSocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    className="text-foreground/60 dark:text-foreground/50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);