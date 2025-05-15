import React from 'react';
import ServicePage from './ServicePage';

const ColorGradingPage = () => {
  return (
    <ServicePage
      title="Color Grading"
      description="Elevate your video content with professional color grading services. We enhance the visual appeal of your footage through expert color correction and creative color grading techniques."
      features={[
        "Color correction and balancing",
        "Creative color grading and stylization",
        "Mood and atmosphere enhancement",
        "Consistent look across multiple shots",
        "HDR and SDR optimization",
        "Skin tone correction and enhancement",
        "Custom LUT creation and application"
      ]}
      imageUrl="/video thumbnail/trading.png"
    />
  );
};

export default ColorGradingPage; 