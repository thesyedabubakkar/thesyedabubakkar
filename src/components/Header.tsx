
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "py-3 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm dark:shadow-gray-900/30"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-sora font-medium text-gray-900 dark:text-white">
            Syed<span className="text-blue-600 dark:text-blue-500">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="px-4 font-medium transition-all hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </Button>
          ))}
          <Button 
            className="ml-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[60px] bg-white/95 dark:bg-gray-950/95 backdrop-blur-md z-50 animate-fade-in md:hidden">
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={cn(
                    "text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300 animate-fade-up",
                    `animation-delay-${index * 100}`
                  )}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
              <Button 
                className="mt-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white animate-fade-up animation-delay-500"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
