"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { skills } from "@/data/data";
import { motion } from "framer-motion";

export function Skills() {
  const content = (
    <SectionWrapper id="skills" className="section-padding bg-slate-50/50 dark:bg-gray-600/30">
      <div className="max-section">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white mb-10">
          {skills.headline}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: catIndex * 0.1 },
                },
              }}
              className="glass-card p-6 hover:shadow-glow transition-shadow"
            >
              <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + i * 0.02 }}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-slate-200/80 dark:bg-gray-600/80 text-slate-700 dark:text-gray-200 border border-slate-200 dark:border-gray-500 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
  return content;
}
