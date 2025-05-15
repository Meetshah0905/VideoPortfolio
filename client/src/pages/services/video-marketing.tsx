import React from 'react';
import ServicePage from './ServicePage';

const VideoMarketingPage = () => {
  return (
    <ServicePage
      title="Video Marketing"
      description="Maximize your brand's impact with our comprehensive video marketing services. We help you create and distribute compelling video content that drives engagement and achieves your marketing goals."
      features={[
        "Social media video content strategy",
        "YouTube channel optimization",
        "Video SEO and metadata optimization",
        "Content calendar planning",
        "Performance analytics and reporting",
        "Cross-platform content adaptation",
        "Engagement and growth strategies"
      ]}
      imageUrl="/video thumbnail/cookingStyle.png"
    />
  );
};

export default VideoMarketingPage; 