// Project types
export interface Project {
  id: string;
  title: string;
  category: "videoEditing" | "thumbnails";
  categoryName: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
  video?: {
    url: string;
    type: 'vimeo' | 'local' | 'youtube';
  };
}

// Skill types
export interface Skill {
  name: string;
  percentage: number;
  category: "videoEditing" | "motionGraphics" | "software" | "other";
  description?: string;
  projectLinks?: Array<{ name: string; url: string }>;
}

// Experience types
export interface Experience {
  date: string;
  title: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
}
