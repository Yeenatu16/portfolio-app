"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import TechMarquee from "./TechMarquee";
import { User, MapPin, Mail, Phone, Calendar, Award } from "lucide-react";

export default function AboutSection() {
  const details = [
    { icon: <Calendar size={20} />, label: "Birthday", value: "23 March 2000" },
    { icon: <MapPin size={20} />, label: "City", value: "May_kinetal, Tigray, Ethiopia" },
    { icon: <User size={20} />, label: "Age", value: "26" },
    { icon: <Award size={20} />, label: "Degree", value: "Software Engineering" },
    { icon: <Phone size={20} />, label: "Phone", value: "+251946902518" },
    { icon: <Mail size={20} />, label: "Email", value: "kibromgidey017@gmail.com" },
  ];

  const skills = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript / TypeScript", level: 85 },
    { name: "React & Next.js", level: 75 },
    { name: "Java Programming", level: 90 },
    { name: "Nodejs/Nestjs", level: 90 },
    { name: "Spring Boot", level: 75 },
    { name: "MySQL / Postgres", level: 85 },
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="About Me"
          subtitle="I am an enthusiastic and motivated aspiring Java and Web Site Developer with a
            strong passion for technology and problem-solving. I build Java
            applications and responsive websites and continuously improve my
            skills through projects and study."
        />
        <div className="grid lg:grid-cols-12 gap-12 items-start mt-12">

          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative flex flex-col items-center gap-6"
          >
            {/* Minimized profile image */}
            <div className="relative w-52 h-60 sm:w-60 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 mx-auto">
              <Image
                src="/profile-square-3.jpg"
                alt="Kibrom Profile"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 208px, 240px"
                priority
              />
            </div>

            {/* Decorative blobs */}
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl -z-10" />
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl -z-10" />

            {/* Download CV Button */}
            <motion.a
              href="/kibrom-cv.pdf"
              download="Kibrom_CV.pdf"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm shadow-lg hover:bg-primary/90 transition-colors duration-200 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </motion.a>
          </motion.div>

          {/* Details Column */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Transforming Ideas into Digital Reality
              </h3>
              <p className="text-muted leading-relaxed text-lg">
                I focus on delivering clean, maintainable code and user-friendly interfaces. My goal
                is to take ideas from concept to production — building applications that are robust
                and delightful to use. I&apos;m always learning — currently strengthening full-stack
                skills and Java so I can contribute effectively to real projects and teams.
              </p>
            </motion.div>

            {/* Personal Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-6 bg-card p-6 rounded-2xl shadow-sm border border-border"
            >
              {details.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted mb-0.5">{item.label}</p>
                    <p className="font-medium text-foreground truncate" title={item.value}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card p-6 rounded-2xl shadow-sm border border-border"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">Technical Skills</h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground text-sm">{skill.name}</span>
                      <span className="text-muted text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <TechMarquee />
    </section>
  );
}
