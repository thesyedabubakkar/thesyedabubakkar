import { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { Moon, Sun } from "lucide-react";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
      <Header />
      <button
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors shadow-lg"
        aria-label="Toggle dark mode"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
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
