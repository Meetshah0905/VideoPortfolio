import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/20 dark:bg-dark-900/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-primary-500/5 dark:bg-primary-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-primary-500/5 dark:bg-primary-600/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Get In <span className="text-primary-600 dark:text-primary-400">Touch</span>
          </h2>
          <p 
            className="text-lg text-foreground/70 dark:text-foreground/60"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact information */}
          <div 
            className="lg:col-span-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="bg-background dark:bg-dark-800 p-8 rounded-lg border border-border dark:border-dark-700 shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <ContactInfoItem
                  icon={<Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />}
                  title="Email"
                  content="editsbymks@gmail.com"
                  link="mailto:editsbymks@gmail.com"
                />
                
                <ContactInfoItem
                  icon={<Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />}
                  title="Phone"
                  content="+91 8200469348"
                  link="tel:+91 8200469348"
                />
                
                <ContactInfoItem
                  icon={<MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />}
                  title="Location"
                  content="Ahmedabad, Gujarat, India"
                />
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <SocialIcon platform="instagram" url="https://www.instagram.com/meetsofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" />
                  <SocialIcon platform="linkedin" url="https://www.linkedin.com/in/meet-shah-msofficial09/" />
                  <SocialIcon platform="twitter" url="https://x.com/Meetshah_09" />
                  
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div 
            className="lg:col-span-2"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact info item component
interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

const ContactInfoItem = ({ icon, title, content, link }: ContactInfoItemProps) => {
  const contentElement = link ? (
    <a 
      href={link}
      className="text-foreground/70 dark:text-foreground/60 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
    >
      {content}
    </a>
  ) : (
    <span className="text-foreground/70 dark:text-foreground/60">{content}</span>
  );

  return (
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-lg bg-primary-500/10 dark:bg-primary-400/10">
        {icon}
      </div>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        {contentElement}
      </div>
    </div>
  );
};

// Social icon component
interface SocialIconProps {
  platform: string;
  url: string;
}

const SocialIcon = ({ platform, url }: SocialIconProps) => {
  const getIcon = () => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-lg bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400 hover:bg-primary-500/20 dark:hover:bg-primary-400/20 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {getIcon()}
    </motion.a>
  );
};