import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  isLeft?: boolean;
}

const TimelineItem = ({
  date,
  title,
  company,
  location,
  description,
  achievements,
  isLeft = false,
}: TimelineItemProps) => {
  return (
    <div className={`flex items-center relative ${isLeft ? "flex-row-reverse" : ""}`}>
      {/* Line */}
      <div className="absolute inset-0 flex justify-center items-stretch z-0">
        <div className="w-px bg-border dark:bg-dark-700"></div>
      </div>
      
      {/* Dot in the middle */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 z-10">
        <div className="w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-500 shadow-md shadow-primary-600/20"></div>
      </div>
      
      {/* Content */}
      <div className="w-1/2 relative z-10"></div>
      <div className="w-1/2 relative z-10 px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-background dark:bg-dark-800 rounded-lg border border-border dark:border-dark-700 shadow-md hover:shadow-lg transition-shadow p-6"
        >
          {/* Date and location badges */}
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-flex items-center gap-1 text-sm bg-muted/70 dark:bg-dark-700/70 text-foreground/70 dark:text-foreground/60 py-1 px-3 rounded-full">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </span>
            <span className="inline-flex items-center gap-1 text-sm bg-muted/70 dark:bg-dark-700/70 text-foreground/70 dark:text-foreground/60 py-1 px-3 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              {location}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <h4 className="text-primary-600 dark:text-primary-400 font-medium mb-3">{company}</h4>
          
          {/* Description */}
          <p className="text-foreground/70 dark:text-foreground/60 mb-4">
            {description}
          </p>
          
          {/* Achievements */}
          {achievements.length > 0 && (
            <div>
              <h5 className="font-medium mb-2">Key Achievements:</h5>
              <ul className="space-y-1.5">
                {achievements.map((achievement, index) => (
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
    </div>
  );
};

export default TimelineItem;