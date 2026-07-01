"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Layout, Smartphone, Globe, Code, PenTool, Search } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Layout size={32} />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually stunning user interfaces with a focus on user experience and accessibility."
    },
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Building fast, responsive, and robust web applications using React, Next.js, and modern CSS frameworks."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App Design",
      description: "Designing seamless mobile experiences tailored for iOS and Android platforms."
    },
    {
      icon: <Globe size={32} />,
      title: "SEO Optimization",
      description: "Implementing best practices to improve website visibility and search engine rankings."
    },
    {
      icon: <PenTool size={32} />,
      title: "Brand Identity",
      description: "Crafting unique brand identities, including logos, typography, and cohesive visual systems."
    },
    {
      icon: <Search size={32} />,
      title: "UX Research",
      description: "Conducting user research and usability testing to inform design decisions and improve product quality."
    }
  ];

  return (
    <section id="services" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Services"
          subtitle="Discover how I can help bring your digital ideas to life with my expertise."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-background border border-border hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
