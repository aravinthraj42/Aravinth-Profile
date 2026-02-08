"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { projects } from "@/data/data";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";

export function Projects() {
  const content = (
    <SectionWrapper id="projects" className="section-padding bg-slate-50/50 dark:bg-gray-600/30">
      <div className="max-section">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 },
                },
              }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 sm:p-8 flex flex-col hover:shadow-glow transition-shadow group"
            >
              <div className="flex items-start justify-between mb-4">
                <FolderGit2 className="w-10 h-10 text-primary-500 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                {project.link && project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-slate-500 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                    aria-label={project.linkLabel}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                ) : null}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-200/80 dark:bg-gray-600/80 text-slate-700 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-1 text-slate-600 dark:text-slate-400 text-sm">
                {project.highlights.slice(0, 2).map((h, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary-500 shrink-0">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 space-y-2">
                {project.demos ? (
                  project.demos.map((demo: { label: string; url: string }, i: number) => (
                    <a
                      key={i}
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {demo.label}
                      {demo.url !== "#" ? <ExternalLink className="inline w-4 h-4 ml-1" /> : null}
                    </a>
                  ))
                ) : project.link && project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {project.linkLabel}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : project.demoPlaceholder ? (
                  <span className="text-sm text-slate-500 dark:text-slate-400 italic">
                    {project.demoPlaceholder}
                  </span>
                ) : (
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {project.linkLabel}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
  return content;
}
