import React from 'react';
import { motion } from 'framer-motion';

interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  description,
  features,
  imageUrl,
}) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-foreground dark:text-foreground/90">
          {title}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-foreground/80 dark:text-foreground/70 mb-6">
              {description}
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-foreground/90">
              Key Features
            </h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2 text-foreground/70 dark:text-foreground/60"
                >
                  <span className="text-primary-600 dark:text-primary-400">•</span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        
        <div className="bg-muted/30 dark:bg-dark-800/30 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-foreground/90">
            Get Started
          </h2>
          <p className="text-foreground/70 dark:text-foreground/60 mb-6">
            Ready to elevate your content with our {title.toLowerCase()} services? Contact us today to discuss your project and get a free consultation.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-primary-600 dark:bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicePage; 