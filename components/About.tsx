"use client";

import { motion } from "motion/react";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageProvider";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="rounded-full border border-primary/30 px-4 py-2">
            <span className="text-primary text-sm tracking-widest uppercase">
              {t("about.badge")}
            </span>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <ImageWithFallback
                src="/RobEsp.jpg"
                alt="RobEsp"
                className="h-[500px] w-full object-cover object-[50%_30%]"
              />
            </div>
            <div className="bg-secondary/20 absolute -bottom-6 -right-6 h-44 w-72 rounded-2xl -z-10 md:h-48 md:w-96" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6"
          >
            <p className="text-foreground/90 mb-6 text-base md:text-lg leading-relaxed">
              {t("about.paragraph1")}
            </p>

            {t("about.paragraph2") ? (
              <p className="text-foreground/90 mb-8 text-base md:text-lg leading-relaxed">
                {t("about.paragraph2")}
              </p>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
