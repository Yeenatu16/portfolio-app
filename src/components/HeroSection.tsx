"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/portiflio-code.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-10" />
      </div>
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl z-0" />
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center md:text-left">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold tracking-wide uppercase mb-4"
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-display tracking-tight text-foreground mb-6"
          >
            Kibrom Gdey.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-medium text-muted mb-8"
          >
            Web Developer & Java Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            I craft modern, intuitive, and responsive web experiences. Specializing in bridging the gap between elegant design and robust frontend architecture.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="/about"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
            >
              About Me <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="bg-card border border-border text-foreground hover:bg-muted/10 px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
            >
              Contact Me <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
