import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import VideoLightbox from "./VideoLightbox";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
  video?: {
    url: string;
    type: 'vimeo' | 'local' | 'youtube';
  };
}

const ProjectCard = ({
  title,
  category,
  image,
  description,
  technologies,
  link,
  video,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={cardRef}
        className="group bg-card dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image container */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Play button overlay */}
          {video && (
            <button
              onClick={() => setIsVideoOpen(true)}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            >
              <div className="bg-white/90 dark:bg-dark-800/90 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                <Play className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
            </button>
          )}

          {/* Category badge */}
          <div className="absolute top-4 left-4 bg-primary-600/90 dark:bg-primary-500/90 text-white text-xs font-medium py-1 px-2.5 rounded">
            {category}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-foreground/70 dark:text-foreground/60 mb-4 line-clamp-3 flex-1">{description}</p>
          
          {/* Technology tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-muted/50 dark:bg-dark-700/50 text-foreground/70 dark:text-foreground/60 py-1 px-2 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* View project link */}
          {link && (
            <a
              href={link}
              className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 font-medium hover:underline mt-auto"
            >
              View Project
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </motion.div>

      {/* Video Lightbox */}
      {video && (
        <VideoLightbox
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoUrl={video.url}
          videoType={video.type}
          title={title}
        />
      )}
    </>
  );
};

export default ProjectCard;