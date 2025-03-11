
import { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleHashLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isHashLink = target.tagName === "A" && target.getAttribute("href")?.startsWith("#");
      
      if (isHashLink) {
        event.preventDefault();
        const hash = target.getAttribute("href") as string;
        const element = document.querySelector(hash);
        
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.pageYOffset - 100,
            behavior: "smooth"
          });
        }
      }
    };
    
    document.addEventListener("click", handleHashLinkClick);
    
    return () => {
      document.removeEventListener("click", handleHashLinkClick);
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950 transition-colors duration-500">
      <Header />
      
      <AnimatePresence mode="wait">
        <motion.button
          key={theme}
          onClick={toggleTheme}
          className="fixed bottom-5 right-5 z-50 p-3 rounded-full backdrop-blur-md shadow-lg border border-white/20 dark:border-gray-800/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? (
            <div className="p-1 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
              <Moon size={22} className="text-white" />
            </div>
          ) : (
            <div className="p-1 bg-gradient-to-br from-amber-300 to-orange-500 rounded-full">
              <Sun size={22} className="text-white" />
            </div>
          )}
        </motion.button>
      </AnimatePresence>
      
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
