"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { achievements } from "@/data/data";
import { motion } from "framer-motion";
import { Award, Trophy, ExternalLink } from "lucide-react";

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Achievements() {
  return (
    <SectionWrapper id="achievements" className="section-padding">
      <div className="max-section">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white mb-10">
          {achievements.headline}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            variants={fadeVariants}
            className="glass-card p-6 sm:col-span-2 lg:col-span-1"
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">
              <Award className="w-5 h-5 text-primary-500" />
              Certifications
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm">
              {achievements.certifications.map((cert, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary-500 shrink-0 mt-1">•</span>
                  <div className="flex-1">
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <span>{cert.name} – {cert.issuer}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <span>{cert.name} – {cert.issuer}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            variants={fadeVariants}
            className="glass-card p-6"
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">
              <Trophy className="w-5 h-5 text-accent-amber" />
              Awards
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
              {achievements.awards.map((a, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent-amber shrink-0">•</span>
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            variants={fadeVariants}
            className="glass-card p-6 sm:col-span-2"
          >
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">
              Additional Activities
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
              {achievements.additional.map((a, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent-emerald shrink-0">•</span>
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}