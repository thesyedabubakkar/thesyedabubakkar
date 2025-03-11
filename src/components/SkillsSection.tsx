
import { useRef } from "react";
import { useInView } from "framer-motion";
import { 
  Code, 
  Database, 
  Layers, 
  Palette, 
  GitBranch, 
  Server
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <Code className="h-6 w-6 text-blue-600" />,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design"],
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <Server className="h-6 w-6 text-green-600" />,
    skills: ["PHP", "MySQL", "Firebase", "MongoDB", "REST APIs"],
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: <Palette className="h-6 w-6 text-purple-600" />,
    skills: ["Figma", "Canva", "Adobe XD", "Wireframing", "Prototyping"],
  },
  {
    id: 4,
    title: "Database Management",
    icon: <Database className="h-6 w-6 text-orange-600" />,
    skills: ["MySQL", "MongoDB", "Firebase", "Data Modeling", "Query Optimization"],
  },
  {
    id: 5,
    title: "Version Control",
    icon: <GitBranch className="h-6 w-6 text-gray-600" />,
    skills: ["Git", "Github", "Collaborative Development", "CI/CD"],
  },
  {
    id: 6,
    title: "Development Tools",
    icon: <Layers className="h-6 w-6 text-red-600" />,
    skills: ["VS Code", "Netlify", "Serverbyt Hosting", "API Integration"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="skills" className="section">
      <div className="section-inner" ref={ref}>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className={cn(
            "inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-400 rounded-full mb-4 transition-all duration-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            What I Do
          </span>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            My Expertise & Skills
          </h2>
          <p className={cn(
            "text-gray-600 dark:text-gray-300 text-lg transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            I specialize in building modern, responsive web applications with a focus on both frontend and backend development, as well as creating intuitive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillsData.map((category, index) => (
            <div 
              key={category.id}
              className={cn(
                "p-6 rounded-xl glass-card transition-all duration-700 hover:shadow-lg",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                `delay-[${(index + 1) * 150}ms]`
              )}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
