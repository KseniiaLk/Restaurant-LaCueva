"use client";

import { motion } from "motion/react";

import { ImageWithFallback } from "./figma/ImageWithFallback";
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
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-8 inline-block rounded-full border border-primary/30 px-4 py-2">
            <span className="text-primary text-sm tracking-widest uppercase">
              {t("story.title")}
            </span>
          </div>
          <div className="mx-auto flex max-w-4xl flex-col items-stretch gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ImageWithFallback
                src="/story.jpg"
                alt="Our Story"
                className="max-h-[min(420px,55vh)] w-full rounded-2xl object-cover"
              />
            </motion.div>
            <motion.div
              className="text-foreground/90 space-y-6 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="whitespace-pre-line">{t("story.subtitle.part1")}</p>
              {t("story.subtitle.part2") ? (
                <p className="whitespace-pre-line">{t("story.subtitle.part2")}</p>
              ) : null}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
