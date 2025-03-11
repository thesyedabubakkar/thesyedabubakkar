
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface Experience {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: "work" | "education" | "certification";
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Frontend Developer",
    organization: "Freelance",
    date: "2023 - Present",
    description: "Developed 12+ personal portfolios for influencers, built business websites and forms with API integration, and created SaaS projects with frontend technologies.",
    type: "work",
  },
  {
    id: 2,
    title: "Bachelor of Computer Application",
    organization: "Sir MV Government Science College - Kuvempu University",
    date: "Pursuing Final Year (2025)",
    description: "Studying computer applications with a focus on programming, web development, and database management.",
    type: "education",
  },
  {
    id: 3,
    title: "PUC - 12th",
    organization: "PAPERTOWN INDP PU College",
    date: "2022",
    description: "Completed pre-university education with a focus on computer science.",
    type: "education",
  },
  {
    id: 4,
    title: "SSLC",
    organization: "USMA Urdu High School",
    date: "2020",
    description: "Completed secondary school education.",
    type: "education",
  },
  {
    id: 5,
    title: "Responsive Web Design Course",
    organization: "FreeCodeCamp Learning",
    date: "NOV 2024 - FEB 2025",
    description: "Learned responsive web design principles, CSS flexbox, grid, and media queries.",
    type: "certification",
  },
  {
    id: 6,
    title: "UI/UX Designer Beginner Course",
    organization: "Great Learning",
    date: "FEB 2025",
    description: "Learned UI/UX design fundamentals, wireframing, prototyping, and user research.",
    type: "certification",
  },
];

const getIconForType = (type: string) => {
  switch (type) {
    case "work":
      return <Briefcase className="h-5 w-5 text-blue-600" />;
    case "education":
      return <GraduationCap className="h-5 w-5 text-green-600" />;
    case "certification":
      return <Award className="h-5 w-5 text-purple-600" />;
    default:
      return <Briefcase className="h-5 w-5 text-blue-600" />;
  }
};

const getColorForType = (type: string) => {
  switch (type) {
    case "work":
      return "border-blue-200 dark:border-blue-900";
    case "education":
      return "border-green-200 dark:border-green-900";
    case "certification":
      return "border-purple-200 dark:border-purple-900";
    default:
      return "border-gray-200 dark:border-gray-800";
  }
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-900">
      <div className="section-inner" ref={ref}>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className={cn(
            "inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-400 rounded-full mb-4 transition-all duration-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            My Journey
          </span>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Experience & Education
          </h2>
          <p className={cn(
            "text-gray-600 dark:text-gray-300 text-lg transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            My professional journey, educational background, and certifications that have shaped my skills and expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 space-y-10">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={cn(
                  "relative transition-all duration-700",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                  `delay-[${index * 150}ms]`
                )}
              >
                <div className="absolute -left-[34px] p-2 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                  {getIconForType(exp.type)}
                </div>
                
                <div className={cn(
                  "p-5 rounded-lg glass-card border-l-4",
                  getColorForType(exp.type)
                )}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {exp.organization}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
