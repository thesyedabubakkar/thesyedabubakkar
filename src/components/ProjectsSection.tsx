
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Alifmall - Ecommerce Website",
    description: "A fully functional ecommerce platform built with React.js and PHP backend.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React.js", "PHP", "API Integration", "Responsive"],
    liveLink: "https://alifmall.com",
    year: "2023",
  },
  {
    id: 2,
    title: "Nexstup - Lead Generation",
    description: "Website with lead generation forms and backend database integration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    liveLink: "https://syed.nexstup.com",
    year: "2025",
  },
  {
    id: 3,
    title: "FileXCoin - Blockchain File Sharing",
    description: "Decentralized blockchain-based platform for secure file sharing and storage.",
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React.js", "Blockchain", "Web3", "Ongoing"],
    year: "2025",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };
  
  return (
    <section id="projects" className="section bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="section-inner" ref={ref}>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className={cn(
            "inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-950/50 dark:text-blue-400 rounded-full mb-4 backdrop-blur-sm",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            My Work
          </span>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-100 dark:to-white",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Recent Projects
          </h2>
          <p className={cn(
            "text-gray-600 dark:text-gray-300 text-lg transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Here are some of the projects I've worked on recently. Each project allowed me to apply my skills in frontend and backend development, as well as UI/UX design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="overflow-hidden glass-card border-0 h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/80 dark:bg-gray-900/50 backdrop-blur-lg">
                <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                    {project.year}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800/80 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    {project.liveLink && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-sm bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-md shadow-blue-500/20"
                        onClick={() => window.open(project.liveLink, "_blank")}
                      >
                        View Live
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => window.open(project.githubLink, "_blank")}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
