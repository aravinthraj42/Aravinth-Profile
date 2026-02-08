"use client";

import { personalInfo, education, profileLinks } from "@/data/data";
import { motion } from "framer-motion";
import { GraduationCap, Link2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-gray-500/50 bg-slate-100/50 dark:bg-gray-600/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {personalInfo.role}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
              {personalInfo.location}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary-500" />
              Education
            </h3>
            <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
              {education.map((e, i) => (
                <li key={i}>
                  {e.degree} — {e.institution} ({e.duration})
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Link2 className="w-4 h-4 text-primary-500" />
              Demos & Certificates
            </h3>
            <ul className="space-y-1.5 text-sm">
              {profileLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1 flex flex-col justify-end"
          >
            <p className="text-sm text-slate-500 dark:text-slate-500">
              © {currentYear} {personalInfo.name}. Built with Next.js & Tailwind.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
