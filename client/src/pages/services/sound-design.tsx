import React from 'react';
import ServicePage from './ServicePage';

const SoundDesignPage = () => {
  return (
    <ServicePage
      title="Sound Design"
      description="Create immersive audio experiences with our professional sound design services. We craft high-quality soundscapes that enhance your video content and engage your audience."
      features={[
        "Custom sound effects and foley",
        "Audio mixing and mastering",
        "Voice-over recording and editing",
        "Background music composition",
        "Sound synchronization",
        "Audio restoration and cleanup",
        "Multi-channel audio mixing"
      ]}
      imageUrl="/video thumbnail/iphonevssamsung.png"
    />
  );
};

export default SoundDesignPage; 