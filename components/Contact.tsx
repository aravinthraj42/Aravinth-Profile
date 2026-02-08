"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { contact, socialLinks, personalInfo } from "@/data/data";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Code } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  github: Github,
  code: Code,
};

export function Contact() {
  const content = (
    <SectionWrapper id="contact" className="section-padding">
      <div className="max-section text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
          {contact.headline}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-xl mx-auto mb-10">
          {contact.subheadline}
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-card hover:shadow-glow transition-all text-slate-700 dark:text-slate-200"
          >
            <Mail className="w-5 h-5 text-primary-500" />
            {contact.email}
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-card hover:shadow-glow transition-all text-slate-700 dark:text-slate-200"
          >
            <Phone className="w-5 h-5 text-primary-500" />
            {contact.phone}
          </a>
        </div>

        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon] || Code;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:shadow-glow hover:scale-110 transition-all text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400"
                aria-label={link.name}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
  return content;
}
