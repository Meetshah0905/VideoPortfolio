import React from 'react';
import ServicePage from './ServicePage';

const VideoEditingPage = () => {
  return (
    <ServicePage
      title="Video Editing"
      description="Transform your raw footage into compelling visual stories with our professional video editing services. We specialize in creating engaging content that captures attention and delivers your message effectively."
      features={[
        "Professional editing for all types of content (commercials, social media, corporate videos)",
        "Seamless transitions and dynamic pacing",
        "Color grading and visual enhancement",
        "Audio synchronization and sound design",
        "Custom motion graphics and text animations",
        "Multiple format delivery for different platforms",
        "Quick turnaround times without compromising quality"
      ]}
      imageUrl="/video thumbnail/storytelling.png"
    />
  );
};

export default VideoEditingPage; 