"use client";

import { motion } from "motion/react";

import { useLanguage } from "./LanguageProvider";

export function Reviews() {
  const { t } = useLanguage();

  const reviews = [
    {
      name: "Sofia R.",
      rating: "5/5",
      text: "Excellent food and a calm, cozy atmosphere. We felt very welcome.",
    },
    {
      name: "Daniel M.",
      rating: "5/5",
      text: "Beautiful presentation and rich flavors. A perfect evening.",
    },
    {
      name: "Elena P.",
      rating: "5/5",
      text: "Great service and truly memorable dishes. We will be back.",
    },
  ];

  return (
    <section id="reviews" className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-foreground mb-4 font-serif text-4xl md:text-5xl">
            {t("reviews.title")}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            {t("reviews.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              className="bg-card rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-foreground font-medium">{review.name}</h3>
                <span className="text-primary text-sm font-medium">
                  {review.rating}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
