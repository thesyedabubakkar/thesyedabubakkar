
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

  return (
    <section id="home" className="min-h-screen relative flex items-center">
      <div 
        className={cn(
          "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10 transition-opacity duration-1000",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      />
      
      <div className="container max-w-7xl mx-auto px-4 pt-24 md:pt-40 pb-20 md:px-6">
        <div className="flex flex-col items-center text-center">
          <span className={cn(
            "px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-400 rounded-full mb-6 transition-all duration-500",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Full Stack Developer & UI/UX Designer
          </span>
          
          <h1 className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight md:leading-tight tracking-tight text-balance mb-6 max-w-4xl transition-all duration-700 delay-100",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Hi, I'm <span className="text-blue-600">Syed Abubakkar</span>
          </h1>
          
          <p className={cn(
            "text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8 text-balance transition-all duration-700 delay-200",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            I'm a passionate Full Stack Developer with expertise in building beautiful, interactive and responsive web applications with modern UI/UX design principles.
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.location.href = "mailto:thesyedabubakkar@gmail.com"}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 hover:border-blue-600"
              onClick={scrollToProjects}
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className={cn(
            "flex items-center gap-4 transition-all duration-700 delay-400",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <a 
              href="https://linkedin.com/in/thesyedabubakkar" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a 
              href="mailto:thesyedabubakkar@gmail.com" 
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
        <ArrowDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;
