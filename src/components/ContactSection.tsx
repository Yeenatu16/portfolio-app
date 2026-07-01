"use client";

import { useActionState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { sendEmail, type SendEmailState } from "@/app/actions/sendEmail";

const initialState: SendEmailState = {
  status: "idle",
  message: "",
};

export default function ContactSection() {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <section id="contact" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Contact Me"
          subtitle="Have a project in mind? Let's discuss how we can work together."
        />
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1">Location</h4>
                <p className="text-muted">May_kinetal, Tigray, Ethiopia</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1">Email</h4>
                <p className="text-muted">kibromgidey017@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1">Call Me</h4>
                <p className="text-muted">+251 946 902 518</p>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-background p-8 rounded-2xl border border-border shadow-sm"
          >
            {/* Success Banner */}
            {state.status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-center gap-3 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-600 dark:text-green-400"
              >
                <CheckCircle2 size={20} className="shrink-0" />
                <p className="text-sm font-medium">{state.message}</p>
              </motion.div>
            )}

            {/* Error Banner */}
            {state.status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-600 dark:text-red-400"
              >
                <AlertCircle size={20} className="shrink-0" />
                <p className="text-sm font-medium">{state.message}</p>
              </motion.div>
            )}

            <form ref={formRef} action={formAction} className="space-y-6">
              {/* Honeypot — hidden from real users, bots fill it */}
              <input
                type="text"
                name="_honeypot"
                aria-hidden="true"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isPending}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-background text-foreground disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="Enter your name here..."
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isPending}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-background text-foreground disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="Enter your email here..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  disabled={isPending}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-background text-foreground disabled:opacity-60 disabled:cursor-not-allowed"
                  placeholder="Your subject here..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={isPending}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-background text-foreground resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                  placeholder="Tell me your message here..."
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                disabled={isPending}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    Sending...
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
