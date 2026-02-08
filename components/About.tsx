"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { about } from "@/data/data";

export function About() {
  const content = (
    <SectionWrapper id="about" className="section-padding">
      <div className="max-section">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white mb-6">
          {about.headline}
        </h2>
        <div className="glass-card p-6 sm:p-8 lg:p-10 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          {about.summary}
        </div>
      </div>
    </SectionWrapper>
  );
  return content;
}
