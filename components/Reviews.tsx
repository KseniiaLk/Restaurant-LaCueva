"use client";

import { motion } from "motion/react";
import { ExternalLink, Star } from "lucide-react";

import { useLanguage } from "./LanguageProvider";

type ReviewCard = {
  id: "james" | "guest" | "josiane";
  mapsUrl: string;
};

const REVIEW_CARDS: ReviewCard[] = [
  {
    id: "james",
    mapsUrl: "https://maps.app.goo.gl/8gtgPorBWULCPcs46",
  },
  {
    id: "guest",
    mapsUrl: "https://maps.app.goo.gl/3TQ7FU899MApe3H49",
  },
  {
    id: "josiane",
    mapsUrl: "https://maps.app.goo.gl/cwiAC9GDyEtD3rvB7",
  },
];

export function Reviews() {
  const { t } = useLanguage();

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
          {REVIEW_CARDS.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-card flex flex-col rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-foreground min-w-0 font-medium">
                  {t(`reviews.author.${review.id}`)}
                </h3>
                <div
                  className="flex shrink-0 gap-0.5"
                  role="img"
                  aria-label={t("reviews.starsAria")}
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className="size-[18px] text-[#d4af37]"
                      fill="currentColor"
                      stroke="none"
                      aria-hidden
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 grow whitespace-pre-line text-sm leading-relaxed">
                {t(`reviews.quote.${review.id}`)}
              </p>
              <a
                href={review.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/85 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 transition-colors hover:underline"
              >
                {t("reviews.viewThisReview")}
                <ExternalLink className="size-3.5 shrink-0 opacity-80" aria-hidden />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
