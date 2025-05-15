import React from 'react';
import ServicePage from './ServicePage';

const MotionGraphicsPage = () => {
  return (
    <ServicePage
      title="Motion Graphics"
      description="Bring your ideas to life with our dynamic motion graphics services. We create engaging animated visuals that enhance your message and captivate your audience."
      features={[
        "Custom animated logos and brand elements",
        "Infographic animations and data visualization",
        "Title sequences and lower thirds",
        "Animated social media content",
        "2D and 3D motion graphics",
        "Character animation and rigging",
        "Seamless integration with video content"
      ]}
      imageUrl="/video thumbnail/eccomerce.png"
    />
  );
};

export default MotionGraphicsPage; 