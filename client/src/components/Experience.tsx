import React from "react";
import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { experiencesData } from "../data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50 dark:bg-dark-900/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/5 dark:bg-primary-600/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/5 dark:bg-primary-600/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Work <span className="text-primary-600 dark:text-primary-400">Experience</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/70 dark:text-foreground/60"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            My professional journey in the digital media and video editing industry.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line connector for mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border dark:bg-dark-700 md:hidden"></div>
          
          {/* Responsive Timeline Layout */}
          <div className="space-y-12 md:space-y-0 relative">
            {/* Mobile Timeline Layout (Vertical) */}
            <div className="md:hidden space-y-12">
              {experiencesData.map((experience, index) => (
                <div key={index} className="relative pl-12">
                  {/* Dot marker */}
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary-600/10 dark:bg-primary-400/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary-600 dark:bg-primary-500"></div>
                  </div>
                  
                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="bg-background dark:bg-dark-800 rounded-lg border border-border dark:border-dark-700 shadow-md hover:shadow-lg transition-shadow p-6"
                  >
                    {/* Date and location badges */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 text-xs md:text-sm bg-muted/70 dark:bg-dark-700/70 text-foreground/70 dark:text-foreground/60 py-1 px-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        {experience.date}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs md:text-sm bg-muted/70 dark:bg-dark-700/70 text-foreground/70 dark:text-foreground/60 py-1 px-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        {experience.location}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-1">{experience.title}</h3>
                    <h4 className="text-primary-600 dark:text-primary-400 font-medium mb-3">{experience.company}</h4>
                    
                    {/* Description */}
                    <p className="text-foreground/70 dark:text-foreground/60 mb-4">
                      {experience.description}
                    </p>
                    
                    {/* Achievements */}
                    {experience.achievements.length > 0 && (
                      <div>
                        <h5 className="font-medium mb-2">Key Achievements:</h5>
                        <ul className="space-y-1.5">
                          {experience.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="mt-1.5 text-primary-600 dark:text-primary-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              </div>
                              <span className="text-sm text-foreground/80 dark:text-foreground/70">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
            
            {/* Desktop Timeline Layout (Horizontal with alternating sides) */}
            <div className="hidden md:block">
              {experiencesData.map((experience, index) => (
                <TimelineItem
                  key={index}
                  date={experience.date}
                  title={experience.title}
                  company={experience.company}
                  location={experience.location}
                  description={experience.description}
                  achievements={experience.achievements}
                  isLeft={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}