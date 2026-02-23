"use client";

import { motion } from "motion/react";

import { useLanguage } from "./LanguageProvider";

export function OurStory() {
  const { t } = useLanguage();

  return (
    <section id="story" className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 inline-block rounded-full border border-primary/30 px-4 py-2">
            <span className="text-primary text-sm tracking-widest uppercase">
              {t("story.title")}
            </span>
          </div>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            {t("story.subtitle")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
