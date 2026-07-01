import ExperienceSection from "@/components/ExperienceSection";

export const metadata = {
  title: "Experience | Kibrom Portfolio",
  description: "Kibrom's professional work experience and journey.",
};

export default function ExperiencePage() {
  return (
    <main className="pt-24 pb-12 min-h-screen">
      <ExperienceSection />
    </main>
  );
}
