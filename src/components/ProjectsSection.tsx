"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import { projects } from "@/data/projects";

const categories = ["All", "Web", "App"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );
  return (
    <section id="projects" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="My Portfolio"
          subtitle="A selection of my recent works and digital experiences."
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                ? "bg-primary text-white"
                : "bg-card border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                    <Link href={`/projects/${project.id}`} className="px-6 py-2 rounded-full bg-primary text-white font-medium hover:scale-105 transition-transform">
                      View Case Study
                    </Link>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted text-sm line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
