"use client";

import { motion } from "motion/react";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageProvider";

const galleryImages = [
  "/Rest1.JPG",
  "/Rest4.JPG",
  "/Rest3.JPG",
  "/Rest5.JPG",
];

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-6 inline-block rounded-full border border-primary/30 px-4 py-2">
            <span className="text-primary text-sm tracking-widest uppercase">
              {t("gallery.badge")}
            </span>
          </div>
          <h2 className="text-foreground mb-4 font-serif text-4xl md:text-5xl">
            {t("gallery.title.line1")}{" "}
            <span className="text-primary">{t("gallery.title.line2")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <motion.div
              key={src}
              className="overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ImageWithFallback
                src={src}
                alt={`Restaurant ${index + 1}`}
                className="h-64 w-full object-cover transition-transform hover:scale-105 md:h-80"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
