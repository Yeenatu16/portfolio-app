import ServicesSection from "@/components/ServicesSection";

export const metadata = {
  title: "Services | Kibrom Portfolio",
  description: "Professional web development and design services offered by Kibrom.",
};

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-12 min-h-screen">
      <ServicesSection />
    </main>
  );
}
