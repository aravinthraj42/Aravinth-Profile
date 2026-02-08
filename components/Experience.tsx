"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { experience } from "@/data/data";
import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";

export function Experience() {
  const content = (
    <SectionWrapper id="experience" className="section-padding">
      <div className="max-section">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white mb-12">
          Work Experience
        </h2>

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-slate-300 dark:via-slate-600 to-transparent" />
          <div className="space-y-10">
            {experience.map((job, jobIndex) => (
              <motion.div
                key={job.id}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: jobIndex * 0.1 },
                  },
                }}
                className="relative pl-12 sm:pl-14"
              >
                <div className="absolute left-2 sm:left-4 top-2 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400 ring-4 ring-white dark:ring-slate-900" />
                <div className="glass-card p-6 sm:p-8 hover:shadow-glow transition-shadow">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-primary-500 dark:text-primary-400" />
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {job.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {job.role} · {job.company}
                  </h3>
                  {job.projects.map((project, projIndex) => (
                    <div key={projIndex} className="mt-6 pt-6 border-t border-slate-200 dark:border-gray-500/50 first:mt-4 first:pt-4 first:border-t-0">
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-primary-500" />
                        {project.name}
                      </h4>
                      {project.duration && (
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          {project.duration}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-gray-600 text-slate-600 dark:text-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-300 text-sm">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-primary-500 mt-1.5 shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
  return content;
}
