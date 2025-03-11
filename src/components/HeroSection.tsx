
import { useState, useEffect } from "react";
import { ArrowDown, Mail, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import profileImage from "../assets/profile.jpg";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const headerOffset = 80;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }
    })
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden pt-20">
      {/* Background gradient with animated noise texture */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-950 -z-10 transition-opacity duration-1000",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        <motion.div 
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 -right-20 w-80 h-80 bg-purple-400/20 dark:bg-purple-600/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-80 h-80 bg-teal-400/20 dark:bg-teal-600/5 rounded-full filter blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 pt-24 md:pt-32 pb-20 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text content */}
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="flex flex-col text-center md:text-left md:w-3/5"
          >
            <motion.span
              custom={0}
              variants={childVariants}
              className="px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-950/70 dark:text-blue-400 rounded-full mb-6 inline-block md:self-start backdrop-blur-sm"
            >
              Full Stack Developer & UI/UX Designer
            </motion.span>
            
            <motion.h1
              variants={titleVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight md:leading-tight tracking-tight text-balance mb-6"
            >
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-blue-600">Syed Abubakkar</span>
            </motion.h1>
            
            <motion.p
              custom={1}
              variants={childVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8 text-balance"
            >
              I'm a passionate Full Stack Developer with expertise in building beautiful, interactive and responsive web applications with modern UI/UX design principles.
            </motion.p>
            
            <motion.div
              custom={2}
              variants={childVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 md:self-start"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white shadow-lg shadow-blue-600/20"
                onClick={() => window.location.href = "mailto:thesyedabubakkar@gmail.com"}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm"
                onClick={scrollToProjects}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div
              custom={3}
              variants={childVariants}
              className="flex items-center gap-4 md:self-start"
            >
              {[
                { href: "https://linkedin.com/in/thesyedabubakkar", icon: <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />, label: "LinkedIn" },
                { href: "https://github.com/", icon: <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />, label: "GitHub" },
                { href: "mailto:thesyedabubakkar@gmail.com", icon: <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300" />, label: "Email" }
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="p-3 rounded-full bg-white/70 dark:bg-gray-800/70 hover:bg-blue-100 dark:hover:bg-blue-900/70 transition-colors shadow-sm backdrop-blur-sm"
                  aria-label={item.label}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-2/5"
          >
            <div className="relative mx-auto md:ml-auto md:mr-0 w-64 h-64 md:w-[22rem] md:h-[22rem]">
              {/* Animated glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 dark:from-blue-600/30 dark:to-purple-700/20 filter blur-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Circular frame with border */}
              <div className="relative h-full w-full rounded-full border-2 border-white/70 dark:border-gray-700/70 p-2 bg-white/90 dark:bg-gray-900/80 shadow-2xl backdrop-blur-sm overflow-hidden">
                {/* Profile image */}
                <motion.div 
                  className="h-full w-full rounded-full overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={profileImage} 
                    alt="Syed Abubakkar" 
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://github.com/shadcn.png'; // Placeholder image
                    }}
                  />
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute w-12 h-12 bg-blue-500 rounded-full -top-2 right-10 z-10 opacity-70 dark:opacity-50"
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                className="absolute w-8 h-8 bg-purple-500 rounded-full bottom-3 left-3 z-10 opacity-70 dark:opacity-50"
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, -10, 0],
                  scale: [1, 1.15, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ 
          y: [0, 8, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
        <ArrowDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
