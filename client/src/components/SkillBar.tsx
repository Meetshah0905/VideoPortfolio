import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Info, 
  ExternalLink, 
  Film, 
  PlaySquare, 
  Layers, 
  Palette, 
  Code, 
  PenTool, 
  BarChart3, 
  Lightbulb, 
  Box, 
  Mic, 
  FileType, 
  Users, 
  Youtube, 
  Figma,
  Columns
} from "lucide-react";

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  description?: string;
  projectLinks?: Array<{ name: string; url: string }>;
}

const SkillBar = ({
  name,
  percentage,
  color = "bg-primary-600 dark:bg-primary-500",
  description,
  projectLinks,
}: SkillBarProps) => {
  const [showInfo, setShowInfo] = useState(false);

  // Get appropriate icon for each skill
  const getSkillIcon = () => {
    const iconMap: Record<string, JSX.Element> = {
      // Video Editing
      "Adobe Premiere Pro": <Film className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      "Final Cut Pro": <PlaySquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      "DaVinci Resolve": <Palette className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      "Video Storytelling": <Youtube className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      
      // Motion Graphics
      "After Effects": <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
      "Cinema 4D": <Box className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
      "Element 3D": <Columns className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
      "Motion Design": <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
      
      // Design
      "Photoshop": <Palette className="w-4 h-4 text-pink-600 dark:text-pink-400" />,
      "Illustrator": <PenTool className="w-4 h-4 text-pink-600 dark:text-pink-400" />,
      "Color Theory": <Palette className="w-4 h-4 text-pink-600 dark:text-pink-400" />,
      "Typography": <FileType className="w-4 h-4 text-pink-600 dark:text-pink-400" />,
      
      // Other Skills
      "Storyboarding": <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      "Audio Editing": <Mic className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      "Project Management": <BarChart3 className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      "Client Communication": <Users className="w-4 h-4 text-amber-600 dark:text-amber-400" />
    };
    
    return iconMap[name] || <Code className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
  };

  return (
    <div className="mb-6 relative hover:shadow-sm p-2 rounded-md transition-all">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-muted/50 dark:bg-dark-800/50 p-1.5 rounded">
            {getSkillIcon()}
          </div>
          <h3 className="text-base font-medium">{name}</h3>
          
          {(description || projectLinks) && (
            <button
              type="button"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setShowInfo(!showInfo)}
              aria-label={`Toggle information about ${name}`}
            >
              <Info className="h-4 w-4" />
            </button>
          )}
        </div>
        <span className="text-sm font-medium text-foreground/70 dark:text-foreground/60">
          {percentage}%
        </span>
      </div>

      {/* Info panel with description and links */}
      {showInfo && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mb-3 bg-muted/50 dark:bg-dark-800/50 p-3 rounded-md text-sm border border-border dark:border-dark-700"
        >
          {description && <p className="text-foreground/70 dark:text-foreground/60 mb-2">{description}</p>}
          
          {projectLinks && projectLinks.length > 0 && (
            <div>
              <p className="font-medium mb-1">Related Projects:</p>
              <ul className="space-y-1">
                {projectLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center gap-1"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      )}

      {/* Skill bar with animation */}
      <div className="w-full h-2 bg-muted dark:bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;