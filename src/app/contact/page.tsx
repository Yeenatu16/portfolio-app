import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact | Kibrom Portfolio",
  description: "Get in touch with Kibrom for your next project.",
};

export default function ContactPage() {
  return (
    <main className="pt-24 pb-12 min-h-screen">
      <ContactSection />
    </main>
  );
}
