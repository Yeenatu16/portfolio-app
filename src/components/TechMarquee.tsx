import { FaReact, FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaFigma, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiSpringboot, SiPostgresql } from "react-icons/si";

export default function TechMarquee() {
  const technologies = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
    { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
  ];

  // Duplicate for seamless loop
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <div className="relative w-full overflow-hidden bg-background py-8 border-y border-border mt-16 flex">
      {/* Gradient masks for smooth fading edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="flex animate-marquee whitespace-nowrap min-w-full">
        {duplicatedTech.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-8 text-2xl font-bold text-muted hover:text-foreground transition-colors cursor-default"
          >
            <span className="text-3xl">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
