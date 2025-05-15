import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "../data/skills";
import { 
  Film, 
  PlaySquare, 
  Layers, 
  Palette, 
  Code, 
  PenTool, 
  BarChart3, 
  Lightbulb, 
  Briefcase,
  Users,
  FileType,
  Mic,
  Box,
  Youtube,
  Camera,
  Compass,
  Cpu,
  CheckCircle2,
  CheckCheck,
  Star
} from "lucide-react";

// Define colors for different skill types
const COLORS = {
  videoEditing: {
    primary: "#3b82f6",
    secondary: "#2563eb",
    bg: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/30",
    text: "text-blue-600 dark:text-blue-400",
    shadow: "shadow-blue-500/20",
    hover: "hover:shadow-blue-500/30"
  },
  motionGraphics: {
    primary: "#8b5cf6",
    secondary: "#7c3aed",
    bg: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/30",
    text: "text-purple-600 dark:text-purple-400",
    shadow: "shadow-purple-500/20",
    hover: "hover:shadow-purple-500/30"
  },
  software: {
    primary: "#ec4899",
    secondary: "#db2777",
    bg: "from-pink-500/20 to-pink-600/5",
    border: "border-pink-500/30",
    text: "text-pink-600 dark:text-pink-400",
    shadow: "shadow-pink-500/20",
    hover: "hover:shadow-pink-500/30"
  },
  other: {
    primary: "#f59e0b",
    secondary: "#d97706",
    bg: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/30",
    text: "text-amber-600 dark:text-amber-400",
    shadow: "shadow-amber-500/20",
    hover: "hover:shadow-amber-500/30"
  }
};

export default function Skills() {
  const categories = [
    { id: "all", label: "All Skills" },
    { id: "videoEditing", label: "Video Editing" },
    { id: "motionGraphics", label: "Motion Graphics" },
    { id: "software", label: "Design" },
    { id: "other", label: "Other" }
  ];
  
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  
  // Filter skills based on selected category
  const filteredSkills = skillsData.filter(skill => {
    if (activeCategory === "all") return true;
    return skill.category === activeCategory;
  });

  // Group skills by mastery level
  const masterSkills = filteredSkills.filter(s => s.percentage >= 90);
  const advancedSkills = filteredSkills.filter(s => s.percentage >= 75 && s.percentage < 90);
  const intermediateSkills = filteredSkills.filter(s => s.percentage < 75);
  
  // Refresh AOS animations when category changes and reset expanded skill state
  useEffect(() => {
    // Reset expanded skill when category changes
    setExpandedSkill(null);
    
    // Reset AOS animations when category filter changes
    if (typeof window !== 'undefined' && window.AOS) {
      setTimeout(() => {
        window.AOS?.refresh();
      }, 100);
    }
  }, [activeCategory]);

  // Get appropriate icon for each skill
  const getSkillIcon = (skillName: string, size = 5) => {
    const iconMap: Record<string, JSX.Element> = {
      // Video Editing
      "Adobe Premiere Pro": <Film className={`w-${size} h-${size}`} />,
      "Final Cut Pro": <PlaySquare className={`w-${size} h-${size}`} />,
      "DaVinci Resolve": <Palette className={`w-${size} h-${size}`} />,
      "Video Storytelling": <Youtube className={`w-${size} h-${size}`} />,
      
      // Motion Graphics
      "After Effects": <Layers className={`w-${size} h-${size}`} />,
      "Cinema 4D": <Box className={`w-${size} h-${size}`} />,
      "Element 3D": <Compass className={`w-${size} h-${size}`} />,
      "Motion Design": <Layers className={`w-${size} h-${size}`} />,
      
      // Design
      "Photoshop": <Camera className={`w-${size} h-${size}`} />,
      "Illustrator": <PenTool className={`w-${size} h-${size}`} />,
      "Color Theory": <Palette className={`w-${size} h-${size}`} />,
      "Typography": <FileType className={`w-${size} h-${size}`} />,
      
      // Other Skills
      "Storyboarding": <Lightbulb className={`w-${size} h-${size}`} />,
      "Audio Editing": <Mic className={`w-${size} h-${size}`} />,
      "Project Management": <BarChart3 className={`w-${size} h-${size}`} />,
      "Client Communication": <Users className={`w-${size} h-${size}`} />
    };
    
    return iconMap[skillName] || <Cpu className={`w-${size} h-${size}`} />;
  };
  
  // Get category color
  const getCategoryColor = (category: string) => {
    if (category === "videoEditing") return COLORS.videoEditing;
    if (category === "motionGraphics") return COLORS.motionGraphics;
    if (category === "software") return COLORS.software;
    return COLORS.other;
  };
  
  // Get category icon
  const getCategoryIcon = (id: string) => {
    const iconMap: Record<string, JSX.Element> = {
      "all": <Briefcase className="w-6 h-6" />,
      "videoEditing": <Film className="w-6 h-6" />,
      "motionGraphics": <Layers className="w-6 h-6" />,
      "software": <PenTool className="w-6 h-6" />,
      "other": <Lightbulb className="w-6 h-6" />
    };
    
    return iconMap[id] || <Code className="w-6 h-6" />;
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/5 dark:bg-primary-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-blue-500 to-primary-600 dark:from-primary-400 dark:via-blue-400 dark:to-primary-400">
              Creative Expertise
            </h2>
            <p className="text-lg text-foreground/70 dark:text-foreground/60 max-w-2xl mx-auto">
              My technical toolkit includes the industry's leading software and creative techniques
              that bring stories to life across digital media.
            </p>
          </motion.div>
        </div>
        
        {/* 3D-like skill wheel */}
        <div className="mb-20">
          <motion.div 
            className="flex justify-center mb-16 overflow-x-auto scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent py-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-2 sm:gap-3 p-2 bg-muted/20 dark:bg-dark-800/20 rounded-full backdrop-blur-sm min-w-[280px] max-w-full">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-500/20"
                      : "bg-muted/40 dark:bg-dark-800/40 text-foreground/70 dark:text-foreground/60 hover:bg-muted dark:hover:bg-dark-800 hover:text-foreground border border-muted-foreground/10"
                  }`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2, 
                    boxShadow: activeCategory === category.id 
                      ? "0 15px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
                      : "0 10px 20px -5px rgba(0, 0, 0, 0.08), 0 8px 8px -4px rgba(0, 0, 0, 0.05)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                    {getCategoryIcon(category.id)}
                  </span>
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">
                    {category.id === "all" ? "All" :
                     category.id === "videoEditing" ? "Video" :
                     category.id === "motionGraphics" ? "Motion" :
                     category.id === "software" ? "Design" : "Other"}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Mastery levels display */}
          <div className="space-y-16 min-h-[800px]">
            {/* Master level skills */}
            {masterSkills.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 shadow-sm">
                    <Star className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Mastery Level</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {masterSkills.map((skill, index) => {
                    const colors = getCategoryColor(skill.category);
                    return (
                      <SkillCard 
                        key={skill.name}
                        skill={skill}
                        colors={colors}
                        icon={getSkillIcon(skill.name)}
                        index={index}
                        expanded={expandedSkill === skill.name}
                        onToggle={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                      />
                    );
                  })}
                </div>
              </div>
            )}
            
            {/* Advanced level skills */}
            {advancedSkills.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/30 shadow-sm">
                    <CheckCheck className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Advanced Skills</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {advancedSkills.map((skill, index) => {
                    const colors = getCategoryColor(skill.category);
                    return (
                      <SkillCard 
                        key={skill.name}
                        skill={skill}
                        colors={colors}
                        icon={getSkillIcon(skill.name)}
                        index={index}
                        expanded={expandedSkill === skill.name}
                        onToggle={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                      />
                    );
                  })}
                </div>
              </div>
            )}
            
            {/* Intermediate level skills */}
            {intermediateSkills.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Additional Expertise</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {intermediateSkills.map((skill, index) => {
                    const colors = getCategoryColor(skill.category);
                    return (
                      <SkillCard 
                        key={skill.name}
                        skill={skill}
                        colors={colors}
                        icon={getSkillIcon(skill.name)}
                        index={index}
                        expanded={expandedSkill === skill.name}
                        onToggle={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                      />
                    );
                  })}
                </div>
              </div>
            )}
            
            {/* Placeholder for when no skills match the selected category */}
            {filteredSkills.length === 0 && (
              <div className="flex flex-col items-center justify-center p-12 bg-muted/30 dark:bg-dark-800/30 rounded-xl border border-border dark:border-dark-700">
                <div className="p-4 rounded-full bg-muted/50 dark:bg-dark-700/50 mb-4">
                  <Briefcase className="w-10 h-10 text-foreground/40 dark:text-foreground/30" />
                </div>
                <h3 className="text-xl font-bold mb-2">No skills in this category</h3>
                <p className="text-foreground/60 dark:text-foreground/50 text-center max-w-md">
                  Try selecting a different category from the options above to explore my other skills.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Individual skill card component with expanded view
interface SkillCardProps {
  skill: any;
  colors: any;
  icon: JSX.Element;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}

const SkillCard = ({ skill, colors, icon, index, expanded, onToggle }: SkillCardProps) => {
  return (
    <motion.div
      className={`relative rounded-xl border ${colors.border} bg-gradient-to-br ${colors.bg} backdrop-blur-sm shadow-lg ${colors.hover} overflow-hidden cursor-pointer`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -5,
        transition: {
          duration: 0.2,
          ease: "easeOut"
        }
      }}
      layout="position"
    >
      <div className="pt-6 px-6 pb-3">
        <div className="flex justify-between items-start mb-4">
          <motion.div 
            className={`p-3 rounded-lg bg-gradient-to-br ${colors.bg} ${colors.text}`}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            {icon}
          </motion.div>
          <motion.div 
            className="relative w-16 h-16"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 120 120">
              <circle 
                className="text-gray-200 dark:text-gray-800" 
                strokeWidth="8" 
                stroke="currentColor" 
                fill="transparent" 
                r="50" 
                cx="60" 
                cy="60" 
              />
              <motion.circle 
                className={`${colors.text}`} 
                strokeWidth="8" 
                stroke="currentColor" 
                fill="transparent" 
                r="50" 
                cx="60" 
                cy="60" 
                strokeDasharray={`${skill.percentage * 3.14}, 1000`}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: skill.percentage / 100 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-sm font-bold ${colors.text}`}>{skill.percentage}%</span>
            </div>
          </motion.div>
        </div>
        
        <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>{skill.name}</h3>
        
        <div className="flex items-center text-sm text-foreground/60 dark:text-foreground/50 mb-3">
          <span className="capitalize">
            {skill.category === "videoEditing" ? "Video Editing" :
             skill.category === "motionGraphics" ? "Motion Graphics" :
             skill.category === "software" ? "Design" : "Other"}
          </span>
        </div>
        
        <motion.button
          onClick={onToggle}
          className={`text-sm ${colors.text} flex items-center gap-1.5 transition-colors duration-200`}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {expanded ? "Show less" : "Learn more"}
          <motion.svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>
      </div>
      
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: "auto",
              transition: {
                height: { duration: 0.3, ease: "easeOut" },
                opacity: { duration: 0.2, ease: "easeOut" }
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: {
                height: { duration: 0.3, ease: "easeIn" },
                opacity: { duration: 0.2, ease: "easeIn" }
              }
            }}
            className="px-6 py-4 bg-background/80 dark:bg-dark-800/80 backdrop-blur-sm border-t border-muted"
          >
            {skill.description && (
              <p className="text-foreground/70 dark:text-foreground/60 text-sm mb-3">
                {skill.description}
              </p>
            )}
            
            {skill.projectLinks && skill.projectLinks.length > 0 && (
              <div>
                <h4 className="font-semibold text-sm mb-2">Related Projects:</h4>
                <ul className="space-y-1">
                  {skill.projectLinks.map((link: any, i: number) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: {
                          delay: i * 0.1,
                          duration: 0.2,
                          ease: "easeOut"
                        }
                      }}
                    >
                      <a 
                        href={link.url} 
                        className={`text-sm ${colors.text} flex items-center gap-1.5 hover:underline transition-all duration-200`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        → {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};