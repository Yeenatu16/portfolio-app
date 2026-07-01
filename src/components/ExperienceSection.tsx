"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Full-Stack Web & Mobile Developer",
      company: "Academic & Independent Projects",
      period: "2023 - Present",
      description: [
        "Architected and developed diverse software applications across multiple domains, expanding beyond healthcare into various industries.",
        "Built responsive, interactive web applications and cross-platform mobile apps using modern tech stacks.",
        "Focused on creating intuitive user interfaces while maintaining robust and scalable backend systems.",
      ],
    },
    {
      title: "Software Engineering Student",
      company: "Adigrat University",
      period: "2019 - Present (Expected 2027)",
      description: [
        "Maintained an exceptional academic record with a CGPA of 3.80/4.00.",
        "Gained deep theoretical and practical knowledge in software engineering, algorithms, and full-stack development.",
        "Collaborated on numerous team projects, applying agile methodologies to solve real-world problems.",
      ],
    },
  ];
  const education = [
    // {
    //   title: "Master of Human-Computer Interaction & Design",
    //   company: "Rochester Institute of Technology",
    //   period: "2015 - 2016",
    //   description: "Focused on advanced interaction design, usability testing, and modern frontend technologies."
    // },
    {
      title: "Bachelor of Science in Software Engineering",
      company: "Adigrat University, Ethiopia",
      period: "2019 - 2027",
      description:
        "Underrgaduated with honors. Coursework included software engineering, algorithms, and graphic design.",
    },
  ];
  type TimelineItemProps = {
    title: string;
    company: string;
    period: string;
    description: string | string[];
  };
  const TimelineItem = ({
    item,
    index,
  }: {
    item: TimelineItemProps;
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 border-l border-primary/30 last:pb-0"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full ring-4 ring-white" />
      <h4 className="text-xl font-bold text-foreground mb-1">{item.title}</h4>
      <div className="flex flex-wrap gap-3 items-center mb-3 text-sm">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
          {item.period}
        </span>
        <span className="text-muted font-medium italic">{item.company}</span>
      </div>
      {Array.isArray(item.description) ? (
        <ul className="list-disc list-inside text-muted space-y-1">
          {item.description.map((desc: string, i: number) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">{item.description}</p>
      )}
    </motion.div>
  );

  return (
    <section id="experience" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Resume"
          subtitle="My professional journey, work experience, and educational background."
        />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              Professional Experience
            </h3>
            <div className="ml-3 mt-4">
              {experiences.map((exp, index) => (
                <TimelineItem key={index} item={exp} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              Education
            </h3>
            <div className="ml-3 mt-4">
              {education.map((edu, index) => (
                <TimelineItem key={index} item={edu} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
