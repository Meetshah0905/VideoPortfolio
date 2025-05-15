import { motion } from "framer-motion";
import { ArrowUpRight, Award, Clock, Briefcase, User, Users } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  text: string;
}

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-muted/20 dark:bg-dark-900/30 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-primary-500/5 dark:bg-primary-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-primary-500/5 dark:bg-primary-600/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6" 
            data-aos="fade-up"
          >
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <p 
            className="text-lg text-foreground/70 dark:text-foreground/60"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            I'm a creative digital editor with a passion for creating captivating visual stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* 3D Editor avatar with animated effects - height now matches text content */}
          <div 
            className="relative md:sticky md:top-24"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="relative rounded-lg overflow-hidden border-2 border-primary-600/20 dark:border-primary-400/20 shadow-xl shadow-primary-500/10 md:h-[400px] aspect-[4/5] md:aspect-auto">
              {/* Animated background */}
              <div className="absolute inset-0 pattern-dots opacity-5"></div>
              
              {/* Animated gradient border */}
              <motion.div
                className="absolute -inset-[2px] rounded-lg bg-gradient-to-tr from-primary-600 via-primary-400 to-primary-600 opacity-30 dark:opacity-40"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
              
              {/* 3D Effect Editor Avatar */}
              <div className="w-full h-full flex items-center justify-center p-2 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="relative w-full h-full perspective">
                  {/* Editing console */}
                  <motion.div 
                    className="absolute inset-4 bg-gray-800 rounded-md border border-gray-700 opacity-90 overflow-hidden shadow-2xl"
                    animate={{ 
                      rotateY: [0, 5, 0, -5, 0],
                      rotateX: [0, -5, 0, 5, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: 'easeInOut'
                    }}
                  >
                    {/* Screen content - editing timeline */}
                    <div className="h-1/2 w-full bg-gray-900 p-2 border-b border-primary-500/30">
                      {/* Toolbar */}
                      <div className="flex gap-1 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      
                      {/* Video timeline */}
                      <motion.div 
                        className="h-4 w-full bg-gray-800 rounded-sm mb-2 overflow-hidden"
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 0%'],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: 'loop',
                        }}
                        style={{
                          backgroundImage: 'linear-gradient(90deg, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.1) 20%, rgba(59,130,246,0.2) 40%)',
                          backgroundSize: '200% 100%',
                        }}
                      >
                        <div className="h-full w-1 bg-primary-500 absolute left-1/4"></div>
                      </motion.div>
                      
                      {/* Media clips */}
                      <div className="flex gap-1 h-8">
                        <motion.div 
                          className="h-full w-24 bg-primary-600/30 rounded-sm"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        ></motion.div>
                        <div className="h-full w-16 bg-purple-600/30 rounded-sm"></div>
                        <div className="h-full w-20 bg-cyan-600/30 rounded-sm"></div>
                      </div>
                      
                      {/* Second row of clips */}
                      <div className="flex gap-1 h-8 mt-1">
                        <div className="h-full w-12 bg-green-600/30 rounded-sm"></div>
                        <motion.div 
                          className="h-full w-28 bg-orange-600/30 rounded-sm"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        ></motion.div>
                      </div>
                    </div>
                    
                    {/* Preview screen */}
                    <div className="h-1/2 w-full flex flex-col p-2">
                      {/* Video preview */}
                      <div className="relative h-24 flex-grow bg-black rounded-sm overflow-hidden">
                        {/* Animated preview content */}
                        <motion.div
                          className="absolute inset-0 opacity-80"
                          animate={{ 
                            background: [
                              'radial-gradient(circle at 30% 50%, rgba(59,130,246,0.4) 0%, rgba(0,0,0,0) 50%)',
                              'radial-gradient(circle at 70% 50%, rgba(139,92,246,0.4) 0%, rgba(0,0,0,0) 50%)',
                              'radial-gradient(circle at 30% 50%, rgba(59,130,246,0.4) 0%, rgba(0,0,0,0) 50%)'
                            ]
                          }}
                          transition={{ duration: 8, repeat: Infinity }}
                        />
                        
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div 
                            className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <div className="w-0 h-0 border-y-4 border-y-transparent border-l-8 border-l-primary-500 ml-1"></div>
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Controls */}
                      <div className="flex justify-between mt-2">
                        <div className="w-32 h-3 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-primary-500"
                            animate={{ width: ['10%', '40%', '70%', '30%', '10%'] }}
                            transition={{ duration: 10, repeat: Infinity }}
                          ></motion.div>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                          <div className="w-3 h-3 rounded-full bg-primary-600"></div>
                          <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Floating elements */}
                  <motion.div 
                    className="absolute top-6 -right-5 w-12 h-12 bg-primary-500/30 rounded-lg"
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div 
                    className="absolute -bottom-2 left-10 w-8 h-8 bg-purple-500/30 rounded-full"
                    animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div 
                    className="absolute top-1/3 -left-4 w-10 h-10 bg-cyan-500/30 rounded-lg rotate-12"
                    animate={{ rotate: [12, -12, 12] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-background dark:bg-dark-800 p-4 rounded-lg shadow-lg border border-border dark:border-dark-700">
              <div className="flex items-center gap-3">
                <div className="bg-primary-500/10 dark:bg-primary-400/10 rounded-full p-3">
                  <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4+</p>
                  <p className="text-sm text-foreground/70 dark:text-foreground/60">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <div 
              className="mb-6"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">
              Video Editor & Motion Design Artist
              </h3>
              <p className="text-foreground/70 dark:text-foreground/60 mb-6">
                With over 4 years of experience in the digital media industry, I specialize in creating stunning visual content that captivates audiences and conveys compelling stories. My expertise spans video editing, motion graphics, and digital marketing.
              </p>
              <p className="text-foreground/70 dark:text-foreground/60">
                I've worked with brands across various industries, from tech startups to established corporations, helping them elevate their visual communication and engage their target audiences through creative storytelling.
              </p>
            </div>

            {/* List of skills/services */}
            <div 
              className="space-y-4 mb-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <SkillItem title="Video Editing">
                Expert in Adobe Premiere Pro, Adobe After Effects and Capcut for creating compelling narrative-driven videos.
              </SkillItem>
              
              <SkillItem title="Thumbnail Design">
                Proficient in Photoshop and Illustrator for creating stunning visual images.
              </SkillItem>
              
              <SkillItem title="Motion Graphics">
              Proficient in After Effects and Cinema 4D / Blender for creating stunning animations and visual effects
              </SkillItem>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary-600 dark:bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-md transition-all shadow-lg shadow-primary-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Let's Work Together
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <StatCard 
            icon={<Award className="w-10 h-10 text-primary-600 dark:text-primary-400" />}
            number="15+"
            text="Recognitions"
          />
          <StatCard 
            icon={<Briefcase className="w-10 h-10 text-primary-600 dark:text-primary-400" />}
            number="80+"
            text="Projects Delivered"
          />
          <StatCard 
            icon={<Users className="w-10 h-10 text-primary-600 dark:text-primary-400" />}
            number="40+"
            text="Returning Clients"
          />
          <StatCard 
            icon={<User className="w-10 h-10 text-primary-600 dark:text-primary-400" />}
            number="24/7"
            text=" Always On.Always Ready."
          />
        </div>
      </div>
    </section>
  );
}

// Helper component for skill items
function SkillItem({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 text-primary-600 dark:text-primary-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div>
        <h4 className="font-medium text-foreground dark:text-foreground/90">{title}</h4>
        <p className="text-sm text-foreground/70 dark:text-foreground/60 mt-1">{children}</p>
      </div>
    </div>
  );
}

// Stat card component with counter animation
const StatCard = ({ icon, number, text }: StatCardProps) => (
  <motion.div 
    className="bg-background dark:bg-dark-800 p-6 rounded-lg border border-border dark:border-dark-700 shadow-sm hover:shadow-md transition-all"
    whileHover={{ y: -5 }}
    data-aos="fade-up"
    data-aos-delay="600"
  >
    <div className="bg-primary-500/10 dark:bg-primary-400/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-2xl md:text-3xl font-bold mb-1">{number}</h3>
    <p className="text-foreground/60 dark:text-foreground/50 text-sm">{text}</p>
  </motion.div>
);