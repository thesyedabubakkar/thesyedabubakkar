
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile & Bio */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-sora font-medium">
                Syed<span className="text-blue-600 dark:text-blue-500">.</span>
              </span>
            </div>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 max-w-md">
              Full Stack Developer & UI/UX Designer specializing in modern web applications
              and user-centric design solutions.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Syed Abubakkar. All rights reserved.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-lg font-medium mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-500" />
                <span>thesyedabubakkar@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4 text-blue-600 dark:text-blue-500" />
                <span>+91 6360603020</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-500 mt-0.5" />
                <span>
                  Chamegowda Line, Near Khudadad Masjid,<br />
                  Bhadravathi, Shimoga District,<br />
                  Karnataka – 577301
                </span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Home</a>
              <a href="#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Projects</a>
              <a href="#skills" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Skills</a>
              <a href="#experience" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Experience</a>
              <a href="#contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Contact</a>
              <a href="/resume.pdf" target="_blank" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Resume</a>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://linkedin.com/in/thesyedabubakkar" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              </a>
              <a 
                href="mailto:thesyedabubakkar@gmail.com" 
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
