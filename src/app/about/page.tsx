import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About | Kibrom Portfolio",
  description: "Kibrom's background and technical skills.",
};

export default function AboutPage() {
  return (
    <main className="pt-24 pb-12 min-h-screen">
      <AboutSection />
    </main>
  );
}
