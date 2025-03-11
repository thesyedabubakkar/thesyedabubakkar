
import { useState, useEffect } from "react";
import { ArrowDown, Mail, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background gradient with animated noise texture */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10 transition-opacity duration-1000",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 -right-20 w-80 h-80 bg-purple-400/20 dark:bg-purple-600/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-teal-400/20 dark:bg-teal-600/5 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 pt-24 md:pt-32 pb-20 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text content */}
          <div className="flex flex-col text-center md:text-left md:w-3/5">
            <span className={cn(
              "px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-400 rounded-full mb-6 inline-block md:self-start transition-all duration-500",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Full Stack Developer & UI/UX Designer
            </span>
            
            <h1 className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight md:leading-tight tracking-tight text-balance mb-6 transition-all duration-700 delay-100",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Hi, I'm <span className="text-blue-600 dark:text-blue-500">Syed Abubakkar</span>
            </h1>
            
            <p className={cn(
              "text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8 text-balance transition-all duration-700 delay-200",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              I'm a passionate Full Stack Developer with expertise in building beautiful, interactive and responsive web applications with modern UI/UX design principles.
            </p>
            
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 md:self-start transition-all duration-700 delay-300",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white"
                onClick={() => window.location.href = "mailto:thesyedabubakkar@gmail.com"}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={scrollToProjects}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className={cn(
              "flex items-center gap-4 md:self-start transition-all duration-700 delay-400",
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
          
          {/* Profile image */}
          <div className={cn(
            "md:w-2/5 transition-all duration-1000 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="relative mx-auto md:ml-auto md:mr-0 w-60 h-60 md:w-80 md:h-80">
              {/* Glowing blob background for image */}
              <div className="absolute inset-0 bg-blue-400/30 dark:bg-blue-600/20 rounded-full filter blur-xl animate-pulse"></div>
              
              {/* Circular frame with border */}
              <div className="relative h-full w-full rounded-full border-2 border-white dark:border-gray-800 p-2 bg-white/90 dark:bg-gray-900/90 shadow-xl overflow-hidden">
                {/* Profile image */}
                <div className="h-full w-full rounded-full overflow-hidden">
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
                </div>
              </div>
            </div>
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
