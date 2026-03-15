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
          <div className="mb-6 inline-block rounded-full border border-primary/30 px-4 py-2">
            <span className="text-primary text-sm tracking-widest uppercase">
              {t("story.title")}
            </span>
          </div>
          <h2 className="text-foreground mb-8 font-cormorant text-4xl font-semibold leading-tight md:text-5xl">
            {t("story.heading.line1")}
            <span className="text-primary"> {t("story.heading.line2")}</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 items-start gap-8 text-left md:grid-cols-2">
            <motion.div
              className="text-foreground/90 space-y-6 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="whitespace-pre-line">{t("story.subtitle.part1")}</p>
              {t("story.subtitle.part2") ? (
                <p className="whitespace-pre-line">{t("story.subtitle.part2")}</p>
              ) : null}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ImageWithFallback
                src="/story.jpg"
                alt="Our Story"
                className="h-full max-h-[420px] w-full rounded-2xl object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
