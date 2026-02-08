"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/data/data";

export function Hero() {
  const [avatarError, setAvatarError] = useState(false);
  const initials = personalInfo.name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  const bgImage = personalInfo.heroBackgroundImage?.trim() || "";
  const bgImageDark = (personalInfo.heroBackgroundImageDark ?? personalInfo.heroBackgroundImage)?.trim() || "";
  const hasBgImage = Boolean(bgImage || bgImageDark);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Same background as rest of site for consistency */}
      {/* Background image - only when URL is set in data.js */}
      {hasBgImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden dark:block"
            style={{ backgroundImage: bgImageDark ? `url(${bgImageDark})` : undefined }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat dark:hidden"
            style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-900/50 to-emerald-950/90 dark:from-emerald-950/85 dark:via-emerald-900/60 dark:to-emerald-950/95" />
        </>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
          className={`flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 flex-1 ${hasBgImage ? "text-white" : ""}`}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={hasBgImage ? "text-emerald-200 font-mono text-sm uppercase tracking-widest mb-2" : "text-primary-600 dark:text-primary-400 font-mono text-sm uppercase tracking-widest mb-2"}
          >
            {personalInfo.role}
          </motion.p>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-4 ${hasBgImage ? "drop-shadow-sm" : "text-slate-800 dark:text-gray-100"}`}
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={hasBgImage ? "text-lg sm:text-xl text-emerald-100 max-w-xl mb-6" : "text-lg sm:text-xl text-slate-600 dark:text-gray-300 max-w-xl mb-6 leading-relaxed"}
          >
            {personalInfo.tagline}
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className={hasBgImage ? "px-6 py-3 rounded-full bg-white text-emerald-800 font-medium hover:bg-emerald-50 shadow-glow transition-all hover:scale-105" : "px-6 py-3 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 shadow-glow transition-all hover:scale-105"}
            >
              Get in Touch
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className={hasBgImage ? "px-6 py-3 rounded-full border-2 border-white/80 text-white font-medium hover:bg-white/10 hover:border-white transition-all" : "px-6 py-3 rounded-full border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-medium hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all"}
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-4 ring-primary-500/30 dark:ring-primary-400/35 shadow-xl dark:shadow-lg">
            {!avatarError ? (
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 224px, 256px"
                priority
                onError={() => setAvatarError(true)}
              />
            ) : null}
            {avatarError && (
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-emerald-400 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold">
                {initials}
              </div>
            )}
          </div>
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-500/20 to-emerald-400/20 blur-2xl -z-10" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div
          className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${hasBgImage ? "border-white/60" : "border-slate-500 dark:border-gray-400"}`}
        >
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className={`w-1.5 h-1.5 rounded-full ${hasBgImage ? "bg-white/80" : "bg-slate-500 dark:bg-gray-400"}`}
          />
        </div>
      </motion.div>
    </section>
  );
}
