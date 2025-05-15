import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projects";

type ProjectCategory = "all" | "videoEditing" | "thumbnails";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  
  // Filter projects based on selected category
  const filteredProjects = projectsData.filter(project => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 bg-background dark:bg-dark-950">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <p className="text-lg text-foreground/70 dark:text-foreground/60">
            Explore my portfolio of video editing and thumbnail design projects.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FilterButton 
            active={activeCategory === "all"} 
            onClick={() => setActiveCategory("all")}
          >
            All Projects
          </FilterButton>
          <FilterButton 
            active={activeCategory === "videoEditing"} 
            onClick={() => setActiveCategory("videoEditing")}
          >
            Video Editing
          </FilterButton>
          <FilterButton 
            active={activeCategory === "thumbnails"} 
            onClick={() => setActiveCategory("thumbnails")}
          >
            Thumbnails
          </FilterButton>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <ProjectCard
                title={project.title}
                category={project.categoryName}
                image={project.image}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
                video={project.video}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-foreground/70 dark:text-foreground/60">
              No projects available in this category at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// Helper component for filter buttons
interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      active
        ? "bg-primary-600 text-white"
        : "bg-muted/50 dark:bg-dark-700/50 text-foreground/70 dark:text-foreground/60 hover:bg-muted dark:hover:bg-dark-700"
    }`}
  >
    {children}
  </button>
);