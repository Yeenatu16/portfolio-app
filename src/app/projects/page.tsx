import ProjectsSection from "@/components/ProjectsSection";

export const metadata = {
  title: "Projects | Kibrom Portfolio",
  description: "Kibrom's latest development projects.",
};

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-12 min-h-screen">
      <ProjectsSection />
    </main>
  );
}
