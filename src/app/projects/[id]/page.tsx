import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

// Next.js App Router expects `params` to be a Promise in Next.js 15
export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }
  return (
    <main className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link href="/projects" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8 font-medium">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
        <div className="mb-12">
          <p className="text-primary font-bold tracking-wider uppercase mb-2">{project.category}</p>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-foreground mb-6">{project.title}</h1>
          <p className="text-xl text-muted leading-relaxed">{project.description}</p>
        </div>
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-16 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 font-display text-foreground">Overview</h2>
            <p className="text-lg text-muted leading-relaxed mb-8">{project.fullDescription}</p>
            <div className="flex gap-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-medium">
                Live Demo <ExternalLink size={18} />
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground border border-border rounded-lg hover:bg-muted/10 transition-colors font-medium">
                Source Code <FaGithub size={18} />
              </a>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 h-fit">
            <h3 className="font-bold mb-4 text-foreground">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
